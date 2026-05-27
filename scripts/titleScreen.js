import { getState, resetState } from './state.js';

export function initTitleScreen({ setView, showOnboarding, renderAll }) {
  const title = document.querySelector('#titleScreen');
  const intro = document.querySelector('#entranceIntro');
  const continueBtn = document.querySelector('#continueGameBtn');
  if (!title) return;

  continueBtn.disabled = !getState().onboardingComplete;

  document.querySelector('#enterCasinoBtn')?.addEventListener('click', () => enterCasino({ title, intro, setView, showOnboarding }));
  continueBtn?.addEventListener('click', () => enterCasino({ title, intro, setView, showOnboarding, skipOnboarding: true }));
  document.querySelector('#newGameBtn')?.addEventListener('click', () => {
    if (!confirm('Start a new Onyx Casino browser save? This resets local virtual-credit progress.')) return;
    resetState();
    renderAll?.();
    setView('lobby');
    enterCasino({ title, intro, setView, showOnboarding });
  });
  document.querySelector('#titleSettingsBtn')?.addEventListener('click', () => {
    document.querySelector('#pauseMenu')?.classList.add('is-visible');
    document.querySelector('#pauseMenu')?.setAttribute('aria-hidden', 'false');
  });
}

function enterCasino({ title, intro, setView, showOnboarding, skipOnboarding = false }) {
  window.dispatchEvent(new CustomEvent('onyx:sound', { detail: { name: 'game-start', source: 'title' } }));
  title.classList.add('is-entering');
  intro?.classList.add('is-playing');
  setTimeout(() => {
    title.classList.remove('is-visible', 'is-entering');
    intro?.classList.remove('is-playing');
    document.body.classList.add('game-started');
    setView('lobby');
    if (!skipOnboarding && !getState().onboardingComplete) showOnboarding();
  }, 1050);
}
