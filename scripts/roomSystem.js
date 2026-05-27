const ROOMS = {
  lobby: ['ONYX LOBBY', 'The casino opens around you'],
  floor: ['CASINO FLOOR', 'Tables, lights, and virtual-credit action'],
  penthouse: ['THE ONYX PENTHOUSE', 'Luxury above the casino floor'],
  houseedge: ['THE HOUSE EDGE', 'Where the casino watches back'],
  vault: ['THE VAULT', 'Keys, crates, and locked rewards'],
  highroller: ['HIGH ROLLER', 'Private tables behind black-card doors'],
  vip: ['VIP LOUNGE', 'Tier progress and prestige benefits'],
  rewards: ['REWARD CENTER', 'Missions, claims, and bonus rituals'],
  settings: ['PAUSE TERMINAL', 'Tune the casino experience'],
  profile: ['PLAYER ID', 'Your Onyx identity']
};

export function initRoomSystem() {
  window.addEventListener('onyx:view-change', event => showRoomSplash(event.detail?.view));
}

function showRoomSplash(view) {
  if (!document.body.classList.contains('game-started')) return;
  const copy = ROOMS[view];
  if (!copy || document.body.classList.contains('reduced-motion')) return;
  const layer = document.querySelector('#roomSplash');
  if (!layer) return;
  layer.querySelector('[data-room-title]').textContent = copy[0];
  layer.querySelector('[data-room-subtitle]').textContent = copy[1];
  layer.classList.remove('is-visible');
  void layer.offsetWidth;
  layer.classList.add('is-visible');
  layer.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    layer.classList.remove('is-visible');
    layer.setAttribute('aria-hidden', 'true');
  }, 1100);
}
