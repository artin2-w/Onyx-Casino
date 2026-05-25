import { getPrestigeStatus } from './state.js';

export function initPrestige() {
  document.body.dataset.prestigeTitle = getPrestigeStatus().title.toLowerCase().replace(/\s+/g, '-');
}

export function prestigeSnapshot() {
  return getPrestigeStatus();
}
