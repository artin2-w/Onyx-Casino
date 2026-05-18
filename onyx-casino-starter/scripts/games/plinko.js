import { emitSoundHook, formatCredits, getGameSession, placeBet, recordGameHistory, settleBet } from '../state.js';
import { renderAll, selectedBet, toast, wireBetButtons } from '../ui.js';

let dropping = false;

export function initPlinko() {
  wireBetButtons('plinko');
  document.querySelector('#plinkoDropBtn').addEventListener('click', dropBall);
  document.querySelector('#plinkoRisk').addEventListener('change', renderBoard);
  document.querySelector('#plinkoRows').addEventListener('change', renderBoard);
  renderBoard();
  renderHistory();
}

function dropBall() {
  if (dropping) return;
  try {
    const bet = selectedBet('plinko');
    const risk = document.querySelector('#plinkoRisk').value;
    const rows = Number(document.querySelector('#plinkoRows').value);
    placeBet('plinko', bet);
    emitSoundHook('game-start', { game: 'plinko' });
    dropping = true;
    setControls();
    const path = buildPath(rows);
    animatePath(path, () => finishDrop({ bet, risk, rows, slot: path[path.length - 1] }));
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function finishDrop({ bet, risk, rows, slot }) {
  const multipliers = buildMultipliers(risk, rows);
  const multiplier = multipliers[slot];
  const payout = Math.floor(bet * multiplier);
  const profit = payout - bet;
  const outerSlot = slot === 0 || slot === rows;
  const highRiskWin = risk === 'high' && multiplier >= 5 && profit > 0;
  settleBet({
    game: 'plinko',
    bet,
    payout,
    result: profit > 0 ? 'Win' : 'Loss',
    detail: `${risk} risk, ${rows} rows, ${multiplier.toFixed(2)}x`,
    meta: { highRiskWin, outerSlot }
  });
  recordGameHistory('plinko', 'plinkoDrops', { risk, rows, slot, multiplier, profit }, 12);
  document.querySelectorAll('.plinko-slot').forEach((node, index) => node.classList.toggle('is-hit', index === slot));
  document.querySelector('#plinkoResult').innerHTML = profit > 0
    ? `<span class="win">Landed ${multiplier.toFixed(2)}x. Paid ${formatCredits(payout)}.</span>`
    : `<span class="lose">Landed ${multiplier.toFixed(2)}x. Lost ${formatCredits(bet)}.</span>`;
  dropping = false;
  renderHistory();
  renderAll();
  setControls();
}

function renderBoard() {
  const risk = document.querySelector('#plinkoRisk').value;
  const rows = Number(document.querySelector('#plinkoRows').value);
  const board = document.querySelector('#plinkoBoard');
  board.innerHTML = Array.from({ length: rows }, (_, row) => `
    <div class="plinko-row" style="--cols:${row + 3}">
      ${Array.from({ length: row + 3 }, () => '<span class="plinko-peg"></span>').join('')}
    </div>
  `).join('');
  const multipliers = buildMultipliers(risk, rows);
  document.querySelector('#plinkoMultipliers').innerHTML = multipliers.map(value => `<span class="plinko-slot">${value.toFixed(value >= 10 ? 0 : 1)}x</span>`).join('');
  document.querySelector('#plinkoRiskText').textContent = {
    low: 'Safer',
    medium: 'Balanced',
    high: 'Volatile'
  }[risk];
}

function animatePath(path, done) {
  document.querySelectorAll('.plinko-peg').forEach(peg => peg.classList.remove('is-hit'));
  const rows = [...document.querySelectorAll('.plinko-row')];
  path.forEach((position, rowIndex) => {
    setTimeout(() => {
      rows[rowIndex]?.querySelectorAll('.plinko-peg')[position + 1]?.classList.add('is-hit');
      if (rowIndex === path.length - 1) done();
    }, rowIndex * 80);
  });
}

function buildPath(rows) {
  let position = 0;
  const path = [];
  for (let row = 0; row < rows; row += 1) {
    if (Math.random() > 0.5) position += 1;
    path.push(position);
  }
  return path;
}

function buildMultipliers(risk, rows) {
  return Array.from({ length: rows + 1 }, (_, slot) => {
    const distance = Math.abs(slot - rows / 2) / (rows / 2);
    if (risk === 'low') return roundMultiplier(0.7 + Math.pow(distance, 2) * 3.2);
    if (risk === 'high') return roundMultiplier(0.2 + Math.pow(distance, 3.2) * 55);
    return roundMultiplier(0.45 + Math.pow(distance, 2.35) * 12);
  });
}

function roundMultiplier(value) {
  return Math.max(0.2, Math.round(value * 10) / 10);
}
function renderHistory() {
  const drops = getGameSession('plinko').plinkoDrops || [];
  document.querySelector('#plinkoHistory').innerHTML = drops.length ? drops.map(item => `<span class="${item.profit > 0 ? 'win' : 'lose'}">${item.risk} ${item.multiplier.toFixed(1)}x</span>`).join('') : '<span>No drops yet</span>';
}
function setControls() {
  document.querySelector('#plinkoDropBtn').disabled = dropping;
}
