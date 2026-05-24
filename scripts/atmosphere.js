import { getState } from './state.js';
import { getActiveEvent } from './events.js';

export function initAtmosphere() {
  createParticles();
  applyAtmosphere();
  setInterval(applyAtmosphere, 15000);
}

export function applyAtmosphere() {
  const event = getActiveEvent();
  document.body.dataset.eventPalette = event.palette;
  document.body.classList.toggle('quiet-atmosphere', !!getState().settings.reducedAnimations);
}

function createParticles() {
  if (document.querySelector('.atmosphere-layer')) return;
  const layer = document.createElement('div');
  layer.className = 'atmosphere-layer';
  layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = Array.from({ length: 18 }, (_, index) => `<span style="--p:${index}; left:${(index * 7) % 100}%"></span>`).join('');
  document.body.prepend(layer);
}
