import { formatCredits, getGameSession, placeBet, recordGameHistory, settleBet } from '../state.js';
import { disableDuring, renderAll, selectedBet, toast, wireBetButtons } from '../ui.js';

const redNumbers = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);
let selectedType = 'red';
let selectedNumber = null;

export function initRoulette() {
  renderNumberGrid();
  wireBetButtons('roulette');
  document.querySelector('#rouletteBoard').addEventListener('click', event => {
    const number = event.target.closest('[data-number]');
    if (!number) return;
    selectedType = 'number';
    selectedNumber = Number(number.dataset.number);
    renderRouletteSelection();
  });
  document.querySelectorAll('[data-roulette-type]').forEach(button => {
    button.addEventListener('click', () => {
      selectedType = button.dataset.rouletteType;
      selectedNumber = null;
      renderRouletteSelection();
    });
  });
  document.querySelector('#spinRouletteBtn').addEventListener('click', spinRoulette);
  renderRouletteSelection();
  renderRouletteHistory();
}

function renderNumberGrid() {
  const board = document.querySelector('#rouletteBoard');
  board.innerHTML = `
    <button class="number-cell green" data-number="0">0</button>
    ${Array.from({ length: 36 }, (_, index) => {
      const number = index + 1;
      const color = redNumbers.has(number) ? 'red' : 'black';
      return `<button class="number-cell ${color}" data-number="${number}">${number}</button>`;
    }).join('')}
  `;
}

function renderRouletteSelection() {
  document.querySelectorAll('.number-cell').forEach(cell => {
    cell.classList.toggle('is-active', selectedType === 'number' && Number(cell.dataset.number) === selectedNumber);
  });
  document.querySelectorAll('[data-roulette-type]').forEach(button => {
    button.classList.toggle('is-active', button.dataset.rouletteType === selectedType);
  });
  const bet = selectedBet('roulette');
  document.querySelector('#rouletteBetTypeText').textContent = `${labelForBet()} ${payoutMultiplier()}x`;
  document.querySelector('#rouletteProjectedText').textContent = bet ? `Projected payout ${formatCredits(bet * payoutMultiplier())}` : 'Select chips';
}

function spinRoulette() {
  const bet = selectedBet('roulette');
  const button = document.querySelector('#spinRouletteBtn');
  const wheel = document.querySelector('#rouletteWheel');
  const numberNode = document.querySelector('#rouletteNumber');
  const result = document.querySelector('#rouletteResult');

  try {
    if (selectedType === 'number' && (selectedNumber < 0 || selectedNumber > 36 || !Number.isInteger(selectedNumber))) throw new Error('Choose a valid straight number');
    placeBet('roulette', bet);
    disableDuring(button, true);
    wheel.classList.add('is-spinning');
    result.textContent = 'Wheel spinning...';

    let ticks = 0;
    const timer = setInterval(() => {
      numberNode.textContent = Math.floor(Math.random() * 37);
      ticks += 1;
      if (ticks >= 28) {
        clearInterval(timer);
        finishSpin(Math.floor(Math.random() * 37), bet);
        wheel.classList.remove('is-spinning');
        disableDuring(button, false);
      }
    }, 42);
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function finishSpin(number, bet) {
  const color = number === 0 ? 'green' : redNumbers.has(number) ? 'red' : 'black';
  const won = checkWin(number, color);
  const multiplier = payoutMultiplier();
  const payout = won ? bet * multiplier : 0;
  document.querySelector('#rouletteNumber').textContent = number;
  recordGameHistory('roulette', 'rouletteNumbers', { number, color }, 12);

  settleBet({
    game: 'roulette',
    bet,
    payout,
    result: won ? 'Win' : 'Loss',
    detail: `${number} ${color}, ${labelForBet()}`,
    meta: { straightHit: won && selectedType === 'number' }
  });

  const result = document.querySelector('#rouletteResult');
  if (won) {
    result.innerHTML = `<span class="win">Result ${number} ${color}. Paid ${formatCredits(payout)}.</span>`;
    toast(`Roulette hit: +${formatCredits(payout - bet)}`, 'win');
  } else {
    result.innerHTML = `<span class="lose">Result ${number} ${color}. Lost ${formatCredits(bet)}.</span>`;
  }
  renderRouletteHistory();
  renderRouletteSelection();
  renderAll();
}

function checkWin(number, color) {
  if (selectedType === 'number') return number === selectedNumber;
  if (number === 0) return false;
  if (selectedType === 'red' || selectedType === 'black') return color === selectedType;
  if (selectedType === 'odd') return number % 2 === 1;
  if (selectedType === 'even') return number % 2 === 0;
  if (selectedType === 'low') return number >= 1 && number <= 18;
  if (selectedType === 'high') return number >= 19 && number <= 36;
  if (selectedType === 'dozen1') return number >= 1 && number <= 12;
  if (selectedType === 'dozen2') return number >= 13 && number <= 24;
  if (selectedType === 'dozen3') return number >= 25 && number <= 36;
  if (selectedType === 'column1') return number % 3 === 1;
  if (selectedType === 'column2') return number % 3 === 2;
  if (selectedType === 'column3') return number > 0 && number % 3 === 0;
  return false;
}

function payoutMultiplier() {
  if (selectedType === 'number') return 36;
  if (selectedType.startsWith('dozen') || selectedType.startsWith('column')) return 3;
  return 2;
}

function labelForBet() {
  const labels = {
    red: 'Red', black: 'Black', odd: 'Odd', even: 'Even', low: '1-18', high: '19-36',
    dozen1: '1st dozen', dozen2: '2nd dozen', dozen3: '3rd dozen',
    column1: 'Column 1', column2: 'Column 2', column3: 'Column 3'
  };
  if (selectedType === 'number') return `Straight ${selectedNumber ?? '-'}`;
  return labels[selectedType] || 'Roulette bet';
}

function renderRouletteHistory() {
  const history = getGameSession('roulette').rouletteNumbers || [];
  document.querySelector('#rouletteHistory').innerHTML = history.length ? history.map(item => `<span class="${item.color}">${item.number}</span>`).join('') : '<span>No spins yet</span>';
}
