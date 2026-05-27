import { getActiveEvent, getEventCountdown } from './events.js';
import { gameLabel, getState } from './state.js';

const liveLines = [
  'VelvetKai entered the High Roller room.',
  'A vault crate is glowing behind the cashier wall.',
  'Roulette cameras caught a crimson streak.',
  'Penthouse glass is reflecting the midnight skyline.',
  'The House Edge floor is running a quiet sweep.'
];

export function initLobbyScene() {
  renderLobbyScene();
  window.addEventListener('onyx:view-change', renderLobbyScene);
  setInterval(renderLobbyScene, 12000);
}

function renderLobbyScene() {
  const event = getActiveEvent();
  const state = getState();
  const eventName = document.querySelector('#lobbySceneEventName');
  const eventText = document.querySelector('#lobbySceneEventText');
  if (eventName) eventName.textContent = event.name;
  if (eventText) {
    eventText.textContent = `${event.description} ${getEventCountdown()} remaining. Featured: ${gameLabel(event.featuredGame)}.`;
  }

  const scene = document.querySelector('.immersive-lobby-scene');
  if (scene) {
    scene.dataset.palette = event.palette;
    scene.style.setProperty('--online', String(state.liveCasino.onlinePlayers || 145));
  }

  const feed = document.querySelector('#liveTicker');
  if (feed && !state.liveCasino.activities.length) {
    feed.innerHTML = liveLines.map(line => `<article class="live-ticker-item tone-vip"><span>Live</span><strong>${line}</strong></article>`).join('');
  }
}
