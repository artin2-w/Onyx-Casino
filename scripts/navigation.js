import { getState, formatCredits, getVipTier, subscribe } from './state.js';

export function initImmersiveNavigation() {
  renderImmersiveHud();
  subscribe(renderImmersiveHud);
  window.addEventListener('onyx:view-change', renderImmersiveHud);
  window.addEventListener('onyx:sound', () => renderImmersiveHud());
}

export function renderImmersiveHud() {
  const state = getState();
  const nav = document.querySelector('.immersive-nav');
  if (!nav) return;
  nav.dataset.balance = formatCredits(state.balance);
  nav.dataset.vip = getVipTier().name;
  nav.dataset.level = `Level ${state.level}`;
}
