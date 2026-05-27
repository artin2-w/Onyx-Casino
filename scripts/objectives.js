import { getState, subscribe } from './state.js';

let currentView = 'title';

const OBJECTIVES = [
  { title: 'Enter the Casino', detail: 'Step through the Onyx doors.', done: state => state.onboardingComplete || document.body.classList.contains('game-started') },
  { title: 'Enter your first table', detail: 'Walk into the Casino Floor and choose a game zone.', done: state => state.stats.gamesPlayed > 0 },
  { title: 'Claim a reward', detail: 'Open Rewards and claim a daily or mission bonus.', done: state => state.rewardClaims.length > 0 || !!state.dailyBonusDate },
  { title: 'Visit the Vault', detail: 'Inspect crates, keys, and your reward chamber.', done: () => currentView === 'vault' },
  { title: 'Reach VIP Silver', detail: 'Play with virtual credits to grow VIP progress.', done: state => state.vipXp >= 2500 }
];

export function initObjectives() {
  subscribe(renderObjective);
  window.addEventListener('onyx:view-change', event => {
    currentView = event.detail?.view || currentView;
    renderObjective();
  });
  renderObjective();
}

function renderObjective() {
  const state = getState();
  const objective = OBJECTIVES.find(item => !item.done(state)) || { title: 'Explore Onyx', detail: 'Choose a room and play at your pace.' };
  const tracker = document.querySelector('#objectiveTracker');
  if (!tracker) return;
  tracker.querySelector('[data-objective-title]').textContent = objective.title;
  tracker.querySelector('[data-objective-detail]').textContent = objective.detail;
}
