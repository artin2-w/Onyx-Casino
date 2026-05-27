import { getActiveEvent } from './events.js';
import { gameLabel } from './state.js';

export function initWorldScenes() {
  updateWorldScenes();
  window.addEventListener('onyx:view-change', updateWorldScenes);
  setInterval(updateWorldScenes, 15000);
}

function updateWorldScenes() {
  const event = getActiveEvent();
  const featured = document.querySelector('#featuredFloorTable');
  const name = document.querySelector('#featuredFloorGame');
  const meta = document.querySelector('#featuredFloorMeta');
  if (featured) featured.dataset.openGame = event.featuredGame;
  if (name) name.textContent = `${gameLabel(event.featuredGame)} Spotlight`;
  if (meta) meta.textContent = `${event.name} is heating this table.`;
}
