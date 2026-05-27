export function initTransitions() {
  window.addEventListener('onyx:view-change', event => {
    const layer = document.querySelector('#sceneTransition');
    if (!layer) return;
    layer.textContent = event.detail?.view ? sceneTitle(event.detail.view) : 'Onyx Casino';
    layer.classList.remove('is-playing');
    void layer.offsetWidth;
    layer.classList.add('is-playing');
  });
}

function sceneTitle(view) {
  return {
    lobby: 'Onyx Lobby',
    floor: 'Casino Floor',
    penthouse: 'Penthouse',
    highroller: 'High Roller',
    houseedge: 'House Edge',
    vault: 'The Vault',
    vip: 'VIP Lounge'
  }[view] || 'Onyx Casino';
}
