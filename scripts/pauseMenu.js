import { exportSave } from './state.js';

export function initPauseMenu({ setView }) {
  const menu = document.querySelector('#pauseMenu');
  const open = () => {
    menu?.classList.add('is-visible');
    menu?.setAttribute('aria-hidden', 'false');
  };
  const close = () => {
    menu?.classList.remove('is-visible');
    menu?.setAttribute('aria-hidden', 'true');
  };

  document.querySelector('#pauseBtn')?.addEventListener('click', open);
  document.querySelector('#resumeBtn')?.addEventListener('click', close);
  document.querySelector('#returnTitleBtn')?.addEventListener('click', () => {
    close();
    document.body.classList.remove('game-started');
    document.querySelector('#titleScreen')?.classList.add('is-visible');
  });
  document.querySelector('#pauseExportBtn')?.addEventListener('click', () => {
    const box = document.querySelector('#pauseSaveBox');
    if (box) box.value = exportSave();
  });
  menu?.addEventListener('click', event => {
    const viewButton = event.target.closest('[data-view]');
    if (!viewButton) return;
    close();
    setView(viewButton.dataset.view);
  });
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('game-started')) {
      menu?.classList.contains('is-visible') ? close() : open();
    }
  });
}
