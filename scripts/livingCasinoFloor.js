import { formatCredits, gameLabel } from './state.js';

const names = ['NovaAce', 'LunaViper', 'VelvetKai', 'OnyxRae', 'CrimsonLux', 'JetVale'];
const games = ['slots', 'blackjack', 'roulette', 'crash', 'plinko'];

export function initLivingCasinoFloor() {
  buildParticles();
  buildNpcs();
  pushFloorNotice('Welcome to the Living Casino Floor.');
  setInterval(() => {
    const name = names[Math.floor(Math.random() * names.length)];
    const game = games[Math.floor(Math.random() * games.length)];
    const amount = 250 + Math.floor(Math.random() * 9500);
    pushFloorNotice(`${name} won ${formatCredits(amount)} on ${gameLabel(game)}.`);
  }, 9000);
}

export function pushFloorNotice(message) {
  const feed = document.querySelector('#floorNotificationFeed');
  if (!feed) return;
  const item = document.createElement('div');
  item.textContent = message;
  feed.prepend(item);
  while (feed.children.length > 4) feed.lastElementChild?.remove();
  window.dispatchEvent(new CustomEvent('onyx:sound', { detail: { name: 'bonus-claim', source: 'floor-feed' } }));
}

function buildParticles() {
  const layer = document.querySelector('#floorParticles');
  if (!layer || layer.children.length) return;
  layer.innerHTML = Array.from({ length: 22 }, (_, index) => `<span style="--i:${index};--x:${(index * 13) % 100};--d:${7 + (index % 8)}s"></span>`).join('');
}

function buildNpcs() {
  const layer = document.querySelector('#floorNpcLayer');
  if (!layer || layer.children.length) return;
  layer.innerHTML = Array.from({ length: 7 }, (_, index) => `<span class="floor-npc npc-${index}" style="--x:${18 + index * 10};--y:${28 + (index % 3) * 18};--delay:${index * -1.7}s"></span>`).join('');
}
