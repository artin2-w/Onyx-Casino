import { getLuxuryAsset, getState } from './state.js';
import { visualClassForAsset } from './visualAssets.js';

export function initShowroom() {
  renderShowroom();
  window.addEventListener('onyx:view-change', renderShowroom);
  window.addEventListener('onyx:luxury-purchase', renderShowroom);
}

function renderShowroom() {
  const visual = document.querySelector('#penthouseFeaturedVisual');
  if (!visual) return;
  const state = getState();
  const asset = state.penthouse.equippedAssets.map(getLuxuryAsset).filter(Boolean)[0];
  visual.className = `visual-asset ${asset ? visualClassForAsset(asset.category) : 'visual-chip'}`;
  visual.setAttribute('aria-label', asset?.name || 'Luxury showcase');
}
