import { formatCredits, getPrestigeStatus, getState, getVipTier, subscribe } from './state.js';

const LOCATION_LABELS = {
  lobby: 'Onyx Lobby',
  floor: 'Casino Floor',
  penthouse: 'Penthouse',
  highroller: 'High Roller',
  houseedge: 'House Edge',
  vault: 'The Vault',
  vip: 'VIP Lounge',
  rewards: 'Rewards',
  profile: 'Profile',
  settings: 'Settings'
};

let currentView = 'lobby';

export function initGameHud() {
  subscribe(renderGameHud);
  window.addEventListener('onyx:view-change', event => {
    currentView = event.detail?.view || currentView;
    renderGameHud();
  });
  renderGameHud();
}

function renderGameHud() {
  const state = getState();
  const hud = document.querySelector('#gameHud');
  if (!hud) return;
  hud.querySelector('[data-hud-credits]').textContent = formatCredits(state.balance);
  hud.querySelector('[data-hud-vip]').textContent = getVipTier().name;
  hud.querySelector('[data-hud-location]').textContent = LOCATION_LABELS[currentView] || 'At Table';
  hud.querySelector('[data-hud-title]').textContent = `${state.username} - ${getPrestigeStatus().title}`;
}
