export function initControlRoom() {
  window.addEventListener('onyx:view-change', event => {
    if (event.detail?.view === 'houseedge') pulseControlRoom();
  });
}

function pulseControlRoom() {
  const wall = document.querySelector('.control-room-wall');
  if (!wall) return;
  wall.classList.remove('is-scanning');
  void wall.offsetWidth;
  wall.classList.add('is-scanning');
}
