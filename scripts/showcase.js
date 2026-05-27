import { getLuxuryAsset, getState } from './state.js';

export function initShowcase() {
  renderShowcaseAccent();
  window.addEventListener('onyx:view-change', renderShowcaseAccent);
}

function renderShowcaseAccent() {
  const stage = document.querySelector('.penthouse-hero');
  if (!stage) return;
  const equipped = getState().penthouse?.equippedAssets || [];
  const featured = equipped.map(getLuxuryAsset).filter(Boolean)[0];
  stage.dataset.featuredAsset = featured ? featured.category : 'Penthouse';
  stage.style.setProperty('--showcase-title', `"${featured ? featured.name : 'Onyx Showcase'}"`);
}
