import { emitSoundHook, formatCredits, getGameSession, placeBet, recordGameHistory, saveState, settleBet, unlockAchievement, updateMissionProgress } from '../state.js';
import { renderAll, selectedBet, toast, wireBetButtons } from '../ui.js';

const SIZE = 25;
let round = idleRound();

export function initMines() {
  wireBetButtons('mines');
  renderBoard();
  renderHistory();
  document.querySelector('#minesStartBtn').addEventListener('click', startRound);
  document.querySelector('#minesCashoutBtn').addEventListener('click', cashOut);
  document.querySelector('#minesCount').addEventListener('change', updatePanel);
  updatePanel();
}

function idleRound() {
  return { active: false, bet: 0, mines: 5, mineSet: new Set(), revealed: new Set(), ended: false };
}

function startRound() {
  try {
    const bet = selectedBet('mines');
    const mines = Number(document.querySelector('#minesCount').value);
    placeBet('mines', bet);
    emitSoundHook('game-start', { game: 'mines' });
    round = { active: true, bet, mines, mineSet: placeMines(mines), revealed: new Set(), ended: false };
    document.querySelector('#minesResult').textContent = 'Round started. Reveal safe tiles or cash out after one safe reveal.';
    renderBoard();
    updatePanel();
    renderAll();
    updatePanel();
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function revealTile(index) {
  if (!round.active || round.revealed.has(index)) return;
  if (round.mineSet.has(index)) {
    round.ended = true;
    round.active = false;
    settleBet({ game: 'mines', bet: round.bet, payout: 0, result: 'Mine Hit', detail: `${round.mines} mines, ${round.revealed.size} safe tiles` });
    recordGameHistory('mines', 'minesResults', { result: 'Mine', safe: round.revealed.size, multiplier: currentMultiplier(), profit: -round.bet }, 10);
    document.querySelector('#minesResult').innerHTML = `<span class="lose">Mine hit. Lost ${formatCredits(round.bet)}.</span>`;
    revealAll();
    renderHistory();
    renderAll();
    updatePanel();
    return;
  }
  round.revealed.add(index);
  updateMissionProgress('minesSafe10', 1);
  if (round.revealed.size >= 10) unlockAchievement('mines10Safe');
  saveState();
  document.querySelector('#minesResult').textContent = `Safe tile revealed. Cashout is now ${formatCredits(potentialCashout())}.`;
  renderBoard();
  updatePanel();
  renderAll();
  updatePanel();
}

function cashOut() {
  if (!round.active || round.revealed.size === 0) return;
  const multiplier = currentMultiplier();
  const payout = potentialCashout();
  const safe = round.revealed.size;
  const highRiskWin = round.mines >= 10 && multiplier >= 2;
  round.active = false;
  round.ended = true;
  settleBet({
    game: 'mines',
    bet: round.bet,
    payout,
    result: 'Cashout',
    detail: `${safe} safe tiles at ${multiplier.toFixed(2)}x`,
    meta: { cashout: true, safeTiles: safe, highRiskWin }
  });
  recordGameHistory('mines', 'minesResults', { result: 'Cashout', safe, multiplier, profit: payout - round.bet }, 10);
  emitSoundHook('cashout', { game: 'mines', payout });
  document.querySelector('#minesResult').innerHTML = `<span class="win">Cashed out ${formatCredits(payout)} at ${multiplier.toFixed(2)}x.</span>`;
  renderBoard();
  renderHistory();
  renderAll();
  updatePanel();
}

function renderBoard() {
  const grid = document.querySelector('#minesGrid');
  grid.innerHTML = Array.from({ length: SIZE }, (_, index) => {
    const revealed = round.revealed.has(index);
    const mine = round.ended && round.mineSet.has(index);
    const label = mine ? 'Mine' : revealed ? 'Safe' : 'Hidden';
    return `<button class="mine-tile ${revealed ? 'is-safe' : ''} ${mine ? 'is-mine' : ''}" data-tile="${index}" aria-label="${label} tile">${mine ? 'X' : revealed ? 'O' : ''}</button>`;
  }).join('');
  grid.querySelectorAll('[data-tile]').forEach(tile => tile.addEventListener('click', () => revealTile(Number(tile.dataset.tile))));
}

function updatePanel() {
  const mines = round.active ? round.mines : Number(document.querySelector('#minesCount').value);
  const multiplier = currentMultiplier();
  document.querySelector('#minesMultiplierText').textContent = `${multiplier.toFixed(2)}x`;
  document.querySelector('#minesCashoutText').textContent = `Potential ${formatCredits(round.active ? potentialCashout() : 0)}`;
  document.querySelector('#minesStateText').textContent = round.active ? `${round.revealed.size} safe / ${mines} mines` : round.ended ? 'Round ended' : 'Waiting';
  document.querySelector('#minesStartBtn').disabled = round.active;
  document.querySelector('#minesCashoutBtn').disabled = !round.active || round.revealed.size === 0;
  document.querySelector('#minesCount').disabled = round.active;
}

function currentMultiplier() {
  if (!round.active && !round.ended) return 1;
  if (round.revealed.size === 0) return 1;
  const risk = SIZE / Math.max(1, SIZE - round.mines);
  return Math.max(1.01, Math.pow(risk, round.revealed.size) * 0.97);
}
function potentialCashout() {
  return Math.floor(round.bet * currentMultiplier());
}
function placeMines(count) {
  const mineSet = new Set();
  while (mineSet.size < count) mineSet.add(Math.floor(Math.random() * SIZE));
  return mineSet;
}
function revealAll() {
  renderBoard();
}
function renderHistory() {
  const history = getGameSession('mines').minesResults || [];
  document.querySelector('#minesHistory').innerHTML = history.length ? history.map(item => `<span class="${item.profit > 0 ? 'win' : 'lose'}">${item.result} ${item.safe} safe ${item.multiplier.toFixed(2)}x</span>`).join('') : '<span>No Mines rounds yet</span>';
}
