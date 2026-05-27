export function initVaultRoom() {
  window.addEventListener('onyx:view-change', event => {
    document.querySelector('.vault-door-visual')?.classList.toggle('is-awake', event.detail?.view === 'vault');
  });
  window.addEventListener('onyx:vault-reveal', () => {
    const door = document.querySelector('.vault-door-visual');
    if (!door) return;
    door.classList.add('is-opening');
    window.setTimeout(() => door.classList.remove('is-opening'), 900);
  });
}
