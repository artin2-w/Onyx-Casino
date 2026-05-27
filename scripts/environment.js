const sceneLabels = {
  lobby: 'Immersive Lobby',
  floor: 'Casino Floor',
  penthouse: 'Skyline Penthouse',
  highroller: 'High Roller Room',
  houseedge: 'Surveillance Ops',
  vault: 'Vault Chamber',
  vip: 'VIP Lounge'
};

export function initEnvironment() {
  updateEnvironment({ detail: { view: 'lobby' } });
  window.addEventListener('onyx:view-change', updateEnvironment);
}

function updateEnvironment(event) {
  const view = event.detail?.view || 'lobby';
  document.body.dataset.scene = view;
  document.body.dataset.sceneLabel = sceneLabels[view] || 'Onyx Casino';
  const layer = document.querySelector('#worldLayer');
  if (layer) layer.dataset.scene = view;
}
