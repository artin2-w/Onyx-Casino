import { formatCredits, getManagementRank, getState, getVipTier } from './state.js';

export function initFloorHud() {
  renderFloorHud();
  window.addEventListener('onyx:view-change', renderFloorHud);
}

export function renderFloorHud() {
  const state = getState();
  setText('#floorCreditsText', formatCredits(state.balance));
  setText('#floorLevelText', state.level);
  setText('#floorVipText', getVipTier().name);
  setText('#managementRankText', getManagementRank().title);
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}
