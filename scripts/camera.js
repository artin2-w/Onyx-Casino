export function initCamera() {
  document.body.addEventListener('pointermove', event => {
    if (document.body.classList.contains('reduced-motion')) return;
    const x = (event.clientX / window.innerWidth - 0.5).toFixed(3);
    const y = (event.clientY / window.innerHeight - 0.5).toFixed(3);
    document.documentElement.style.setProperty('--camera-x', x);
    document.documentElement.style.setProperty('--camera-y', y);
  });
  window.addEventListener('onyx:view-change', event => {
    document.documentElement.dataset.cameraScene = event.detail?.view || 'lobby';
  });
}
