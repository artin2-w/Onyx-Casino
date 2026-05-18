import { emitSoundHook, formatCredits, getGameSession, placeBet, recordGameHistory, settleBet } from '../state.js';
import { disableDuring, openModal, renderAll, selectedBet, toast, wireBetButtons } from '../ui.js';

const symbols = ['7', 'BAR', 'Diamond', 'Crown', 'Cherry', 'Bell', 'Onyx', 'Scatter'];
const weights = { Cherry: 20, Bell: 18, Crown: 15, Diamond: 13, BAR: 11, '7': 8, Onyx: 5, Scatter: 4 };
const paytable = { Onyx: 60, '7': 45, BAR: 28, Diamond: 22, Crown: 18, Bell: 12, Cherry: 8 };
const paylines = [
  [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2],
  [0, 1, 2, 1, 0], [2, 1, 0, 1, 2], [0, 0, 1, 2, 2],
  [2, 2, 1, 0, 0], [1, 0, 0, 0, 1], [1, 2, 2, 2, 1], [0, 1, 1, 1, 0]
];
let freeSpins = 0;
let freeSpinBet = 0;

export function initSlots() {
  renderInitialReels();
  wireBetButtons('slots');
  document.querySelector('#spinSlotsBtn').addEventListener('click', spinSlots);
  document.querySelector('#slotsPaytableBtn').addEventListener('click', () => openModal('paytable'));
  renderSlotsHistory();
}

function renderInitialReels() {
  document.querySelector('#slotReels').innerHTML = Array.from({ length: 5 }, (_, reel) => `
    <div class="reel" data-reel="${reel}">
      <span>${symbols[reel]}</span><span>${symbols[(reel + 1) % symbols.length]}</span><span>${symbols[(reel + 2) % symbols.length]}</span>
    </div>
  `).join('');
  updateFreeSpinsText();
}

function spinSlots() {
  const paidSpin = freeSpins <= 0;
  const bet = paidSpin ? selectedBet('slots') : freeSpinBet;
  const button = document.querySelector('#spinSlotsBtn');
  const message = document.querySelector('#slotMessage');
  const reels = [...document.querySelectorAll('.reel')];
  const delay = document.querySelector('#slotsTurboToggle').checked ? 20 : 55;
  const ticksToRun = document.querySelector('#slotsTurboToggle').checked ? 8 : 18;

  try {
    if (paidSpin) placeBet('slots', bet);
    else freeSpins -= 1;
    emitSoundHook('spin', { game: 'slots' });
    disableDuring(button, true);
    message.textContent = paidSpin ? 'Reels spinning...' : `Free spin running. ${freeSpins} remain after this spin.`;
    clearHighlights();

    let ticks = 0;
    const timer = setInterval(() => {
      reels.forEach(reel => [...reel.querySelectorAll('span')].forEach(cell => { cell.textContent = randomSymbol(); }));
      ticks += 1;
      if (ticks >= ticksToRun) {
        clearInterval(timer);
        finishSpin(buildGrid(), bet, paidSpin);
        disableDuring(button, false);
      }
    }, delay);
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function finishSpin(grid, bet, paidSpin) {
  renderGrid(grid);
  const wins = evaluatePaylines(grid, bet);
  const scatters = grid.flat().filter(symbol => symbol === 'Scatter').length;
  const scatterAward = scatters >= 5 ? 12 : scatters === 4 ? 8 : scatters === 3 ? 5 : 0;
  if (scatterAward) {
    freeSpins += scatterAward;
    freeSpinBet = bet;
    highlightSymbol('Scatter');
  }

  const lineWin = wins.reduce((sum, win) => sum + win.payout, 0);
  const payout = lineWin;
  const detail = wins.length ? `${wins.length} payline hit${wins.length > 1 ? 's' : ''}` : scatterAward ? `${scatters} scatters awarded free spins` : nearMiss(grid);
  if (wins.length) highlightWins(wins);
  else if (!scatterAward) showNearMiss(grid);

  if (paidSpin) {
    settleBet({ game: 'slots', bet, payout, result: payout > 0 ? 'Win' : 'Loss', detail });
  } else if (payout > 0) {
    settleBet({ game: 'slots', bet: 0, payout, result: 'Free Spin Win', detail });
  } else {
    recordGameHistory('slots', 'lastResults', { result: 'Free Spin', profit: 0, detail, bet: 0, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
  }

  const net = paidSpin ? payout - bet : payout;
  recordGameHistory('slots', 'spinHistory', { bet, result: detail, win: payout, net, freeSpin: !paidSpin }, 10);
  updateFreeSpinsText();
  renderSlotsHistory();

  const message = document.querySelector('#slotMessage');
  if (payout > 0) {
    message.innerHTML = `<span class="win">${detail}. Paid ${formatCredits(payout)}.</span>`;
    toast(`Slots win: +${formatCredits(Math.max(0, net))}`, 'win');
  } else if (scatterAward) {
    message.innerHTML = `<span class="win">${detail}. Free spins: ${freeSpins}.</span>`;
  } else {
    message.innerHTML = `<span class="lose">${detail}. Lost ${formatCredits(paidSpin ? bet : 0)}.</span>`;
  }
  renderAll();
}

function evaluatePaylines(grid, bet) {
  const lineBet = Math.max(1, Math.floor(bet / paylines.length));
  const wins = [];
  paylines.forEach((line, lineIndex) => {
    const sequence = line.map((row, reel) => grid[reel][row]);
    const symbol = sequence[0];
    if (symbol === 'Scatter') return;
    let count = 1;
    for (let i = 1; i < sequence.length; i += 1) {
      if (sequence[i] !== symbol) break;
      count += 1;
    }
    if (count >= 3) {
      const factor = count === 5 ? 1 : count === 4 ? 0.3 : 0.1;
      wins.push({ lineIndex, symbol, count, payout: Math.floor(lineBet * (paytable[symbol] || 0) * factor), cells: line.slice(0, count).map((row, reel) => [reel, row]) });
    }
  });
  return wins.filter(win => win.payout > 0);
}

function buildGrid() {
  return Array.from({ length: 5 }, () => Array.from({ length: 3 }, randomSymbol));
}
function renderGrid(grid) {
  document.querySelectorAll('.reel').forEach((reel, reelIndex) => {
    [...reel.querySelectorAll('span')].forEach((cell, rowIndex) => { cell.textContent = grid[reelIndex][rowIndex]; });
  });
}
function randomSymbol() {
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0);
  let roll = Math.random() * total;
  for (const symbol of symbols) {
    roll -= weights[symbol];
    if (roll <= 0) return symbol;
  }
  return 'Cherry';
}
function clearHighlights() { document.querySelectorAll('.reel span').forEach(cell => cell.className = ''); }
function highlightWins(wins) {
  wins.forEach(win => win.cells.forEach(([reel, row]) => document.querySelector(`.reel[data-reel="${reel}"] span:nth-child(${row + 1})`)?.classList.add('is-winning')));
}
function highlightSymbol(symbol) {
  document.querySelectorAll('.reel span').forEach(cell => cell.classList.toggle('is-winning', cell.textContent === symbol));
}
function nearMiss(grid) {
  const scatterCount = grid.flat().filter(symbol => symbol === 'Scatter').length;
  if (scatterCount === 2) return 'Near miss: 2 scatters landed. 3 are needed for free spins';
  return 'No winning payline';
}
function showNearMiss(grid) {
  if (grid.flat().filter(symbol => symbol === 'Scatter').length === 2) highlightSymbol('Scatter');
}
function updateFreeSpinsText() {
  document.querySelector('#slotsFreeSpinsText').textContent = `Free spins: ${freeSpins}`;
}
function renderSlotsHistory() {
  const history = getGameSession('slots').spinHistory || [];
  document.querySelector('#slotsHistory').innerHTML = history.length ? history.map(item => `
    <span>${item.freeSpin ? 'Free' : formatCredits(item.bet)} | ${item.result} | Win ${formatCredits(item.win)}</span>
  `).join('') : '<span>No spins yet</span>';
}
