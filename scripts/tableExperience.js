import { formatCredits, getGameSession, getState, subscribe } from './state.js';

const TABLES = {
  slots: ['ONYX SLOTS', 'Machine cabinet online'],
  roulette: ['EUROPEAN ROULETTE', 'Wheel table active'],
  blackjack: ['BLACKJACK CLASSIC', 'Dealer stands on soft 17'],
  dice: ['DICE DUEL', 'Risk tray open'],
  mines: ['MINES', 'Gem chamber armed'],
  crash: ['CRASH', 'Neon graph rising'],
  plinko: ['PLINKO', 'Drop board ready']
};

let currentGame = null;
let setViewRef = null;

export function initTableExperience({ setView }) {
  setViewRef = setView;
  createOverlay();
  subscribe(renderTableOverlay);
  window.addEventListener('onyx:view-change', event => {
    currentGame = TABLES[event.detail?.view] ? event.detail.view : null;
    document.body.classList.toggle('table-mode', !!currentGame);
    renderTableOverlay();
  });
}

function createOverlay() {
  if (document.querySelector('#tableExperienceOverlay')) return;
  const node = document.createElement('section');
  node.id = 'tableExperienceOverlay';
  node.className = 'table-experience-overlay';
  node.innerHTML = `
    <div>
      <span data-table-subtitle>Table</span>
      <strong data-table-title>Onyx Table</strong>
    </div>
    <div class="table-chip-tray"><span>Bet</span><strong data-table-bet>0 credits</strong></div>
    <div class="table-side-display"><span>Session</span><strong data-table-session>0 credits</strong></div>
    <button id="leaveTableBtn" class="ghost">Leave Table</button>
  `;
  document.body.appendChild(node);
  node.querySelector('#leaveTableBtn').addEventListener('click', () => setViewRef?.('floor'));
}

function renderTableOverlay() {
  const overlay = document.querySelector('#tableExperienceOverlay');
  if (!overlay || !currentGame) return;
  const [title, subtitle] = TABLES[currentGame];
  const state = getState();
  const session = getGameSession(currentGame);
  overlay.querySelector('[data-table-title]').textContent = title;
  overlay.querySelector('[data-table-subtitle]').textContent = subtitle;
  overlay.querySelector('[data-table-bet]').textContent = formatCredits(state.selectedBets[currentGame] || 0);
  overlay.querySelector('[data-table-session]').textContent = formatCredits(session.profit || 0);
}
