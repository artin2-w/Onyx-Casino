import { emitSoundHook, formatCredits, getGameSession, placeBet, recordGameHistory, settleBet } from '../state.js';
import { renderAll, selectedBet, toast, wireBetButtons } from '../ui.js';

let round = { state: 'waiting', bet: 0, multiplier: 1, crashPoint: 1, timer: null, auto: false };

export function initCrash() {
  wireBetButtons('crash');
  document.querySelector('#crashLaunchBtn').addEventListener('click', launch);
  document.querySelector('#crashCashoutBtn').addEventListener('click', () => cashOut(false));
  document.querySelector('#crashAutoToggle').addEventListener('change', updatePanel);
  document.querySelector('#crashAutoAt').addEventListener('input', updatePanel);
  renderCrashHistory();
  updatePanel();
}

function launch() {
  try {
    const bet = selectedBet('crash');
    placeBet('crash', bet);
    round = { state: 'running', bet, multiplier: 1, crashPoint: randomCrashPoint(), timer: null, auto: document.querySelector('#crashAutoToggle').checked };
    emitSoundHook('game-start', { game: 'crash' });
    document.querySelector('#crashResult').textContent = 'Round running. Cash out before the crash.';
    round.timer = setInterval(tick, 45);
    updatePanel();
    renderAll();
    updatePanel();
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function tick() {
  round.multiplier += 0.018 + round.multiplier * 0.012;
  const autoAt = Number(document.querySelector('#crashAutoAt').value) || 2;
  if (round.auto && round.multiplier >= autoAt && round.multiplier < round.crashPoint) {
    cashOut(true);
    return;
  }
  if (round.multiplier >= round.crashPoint) {
    crash();
    return;
  }
  updatePanel();
}

function cashOut(autoCashout) {
  if (round.state !== 'running') return;
  clearInterval(round.timer);
  round.state = 'cashed out';
  const multiplier = round.multiplier;
  const payout = Math.floor(round.bet * multiplier);
  settleBet({
    game: 'crash',
    bet: round.bet,
    payout,
    result: autoCashout ? 'Auto Cashout' : 'Cashout',
    detail: `${multiplier.toFixed(2)}x before crash`,
    meta: { cashout: true, multiplier, autoCashout, highRiskWin: multiplier >= 3 }
  });
  recordGameHistory('crash', 'crashHistory', { point: round.crashPoint, cashout: multiplier, won: true }, 12);
  emitSoundHook('cashout', { game: 'crash', payout });
  document.querySelector('#crashResult').innerHTML = `<span class="win">Cashed out at ${multiplier.toFixed(2)}x for ${formatCredits(payout)}.</span>`;
  renderCrashHistory();
  updatePanel();
  renderAll();
}

function crash() {
  clearInterval(round.timer);
  round.state = 'crashed';
  round.multiplier = round.crashPoint;
  settleBet({ game: 'crash', bet: round.bet, payout: 0, result: 'Crashed', detail: `Crashed at ${round.crashPoint.toFixed(2)}x` });
  recordGameHistory('crash', 'crashHistory', { point: round.crashPoint, cashout: 0, won: false }, 12);
  document.querySelector('#crashResult').innerHTML = `<span class="lose">Crashed at ${round.crashPoint.toFixed(2)}x. Lost ${formatCredits(round.bet)}.</span>`;
  renderCrashHistory();
  updatePanel();
  renderAll();
}

function updatePanel() {
  const multiplier = Math.max(1, round.multiplier);
  document.querySelector('#crashMultiplier').textContent = `${multiplier.toFixed(2)}x`;
  document.querySelector('#crashPotentialText').textContent = formatCredits(round.state === 'running' ? Math.floor(round.bet * multiplier) : 0);
  document.querySelector('#crashGraph span').style.width = `${Math.min(100, (multiplier / 8) * 100)}%`;
  document.querySelector('#crashGraph span').style.transform = `translateY(${Math.max(-90, -multiplier * 7)}px)`;
  document.querySelector('#crashLaunchBtn').disabled = round.state === 'running';
  document.querySelector('#crashCashoutBtn').disabled = round.state !== 'running';
}

function renderCrashHistory() {
  const history = getGameSession('crash').crashHistory || [];
  document.querySelector('#crashHistory').innerHTML = history.length ? history.map(item => `<span class="${item.won ? 'win' : 'lose'}">${item.point.toFixed(2)}x</span>`).join('') : '<span>No crash rounds yet</span>';
}

function randomCrashPoint() {
  const r = Math.random();
  const point = 0.96 / Math.max(0.04, 1 - r);
  return Math.max(1.04, Math.min(25, point));
}
