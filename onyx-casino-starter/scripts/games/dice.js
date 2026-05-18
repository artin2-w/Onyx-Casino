import { formatCredits, getGameSession, placeBet, recordGameHistory, settleBet } from '../state.js';
import { disableDuring, renderAll, selectedBet, toast, wireBetButtons } from '../ui.js';

export function initDice() {
  wireBetButtons('dice');
  document.querySelector('#rollDiceBtn').addEventListener('click', rollDice);
  document.querySelector('#diceTarget').addEventListener('input', updatePayoutPreview);
  document.querySelector('#diceMode').addEventListener('change', updatePayoutPreview);
  updatePayoutPreview();
  renderDiceHistory();
}

function rollDice() {
  const bet = selectedBet('dice');
  const button = document.querySelector('#rollDiceBtn');
  const display = document.querySelector('#diceDisplay');
  const result = document.querySelector('#diceResult');

  try {
    placeBet('dice', bet);
    disableDuring(button, true);
    result.textContent = 'Dice rolling...';
    let ticks = 0;
    const timer = setInterval(() => {
      display.textContent = Math.floor(Math.random() * 100) + 1;
      ticks += 1;
      if (ticks >= 18) {
        clearInterval(timer);
        finishRoll(Math.floor(Math.random() * 100) + 1, bet);
        disableDuring(button, false);
      }
    }, 40);
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function finishRoll(roll, bet) {
  const mode = document.querySelector('#diceMode').value;
  const target = Number(document.querySelector('#diceTarget').value);
  const won = mode === 'over' ? roll > target : roll < target;
  const multiplier = payoutMultiplier(mode, target);
  const payout = won ? Math.floor(bet * multiplier) : 0;
  const chance = winChance(mode, target);
  document.querySelector('#diceDisplay').textContent = roll;

  settleBet({
    game: 'dice',
    bet,
    payout,
    result: won ? 'Win' : 'Loss',
    detail: `${mode === 'over' ? 'Over' : 'Under'} ${target}, rolled ${roll}`,
    meta: { highRiskWin: won && chance <= 20 }
  });
  recordGameHistory('dice', 'diceRolls', { roll, won, target, mode }, 12);

  const result = document.querySelector('#diceResult');
  if (won) {
    result.innerHTML = `<span class="win">Rolled ${roll}. Paid ${formatCredits(payout)} at ${multiplier.toFixed(2)}x.</span>`;
    toast(`Dice win: +${formatCredits(payout - bet)}`, 'win');
  } else {
    result.innerHTML = `<span class="lose">Rolled ${roll}. Lost ${formatCredits(bet)}.</span>`;
  }
  renderDiceHistory();
  updatePayoutPreview();
  renderAll();
}

function updatePayoutPreview() {
  const mode = document.querySelector('#diceMode').value;
  const target = Number(document.querySelector('#diceTarget').value);
  const bet = selectedBet('dice');
  const multiplier = payoutMultiplier(mode, target);
  document.querySelector('#diceTargetText').textContent = target;
  document.querySelector('#dicePayoutText').textContent = `${multiplier.toFixed(2)}x`;
  document.querySelector('#diceChanceText').textContent = `${winChance(mode, target).toFixed(0)}%`;
  document.querySelector('#diceProjectedText').textContent = bet ? `Projected payout ${formatCredits(Math.floor(bet * multiplier))}` : 'Select chips';
}

function winChance(mode, target) {
  const wins = mode === 'over' ? 100 - target : target - 1;
  return Math.max(1, wins);
}
function payoutMultiplier(mode, target) {
  return Math.max(1.01, 96 / winChance(mode, target));
}
function renderDiceHistory() {
  const rolls = getGameSession('dice').diceRolls || [];
  document.querySelector('#diceHistory').innerHTML = rolls.length ? rolls.map(item => `<span class="${item.won ? 'win' : 'lose'}">${item.roll}</span>`).join('') : '<span>No rolls yet</span>';
}
