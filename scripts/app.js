import { claimDailyBonus, getState, loadState, resetState, subscribe } from './state.js';
import { initSharedUi, renderAll, setView, showOnboarding, toast } from './ui.js';
import { initSlots } from './games/slots.js';
import { initRoulette } from './games/roulette.js';
import { initBlackjack } from './games/blackjack.js';
import { initDice } from './games/dice.js';
import { initMines } from './games/mines.js';
import { initCrash } from './games/crash.js';
import { initPlinko } from './games/plinko.js';
import { initSoundManager } from './sound.js';
import { initEventSystem } from './events.js';
import { initLiveCasino } from './liveCasino.js';
import { initAtmosphere } from './atmosphere.js';
import { initCosmetics } from './cosmetics.js';
import { initVaultUi } from './vault.js';

loadState();
initSharedUi();
initSoundManager();
initEventSystem();
initCosmetics();
initAtmosphere();
initLiveCasino();
initVaultUi();
initNavigation();
initSlots();
initRoulette();
initBlackjack();
initDice();
initMines();
initCrash();
initPlinko();
subscribe(() => renderAll());
renderAll();
if (!getState().onboardingComplete) showOnboarding();

function initNavigation() {
  document.body.addEventListener('click', event => {
    const viewButton = event.target.closest('[data-view]');
    if (viewButton) setView(viewButton.dataset.view);

    const gameCard = event.target.closest('[data-open-game]');
    if (gameCard) setView(gameCard.dataset.openGame);
  });

  document.querySelector('#dailyBonusBtn').addEventListener('click', () => {
    try {
      const amount = claimDailyBonus();
      toast(`Daily bonus claimed: +${amount.toLocaleString()} credits`, 'win');
    } catch (error) {
      toast(error.message, 'warning');
    }
  });

  document.querySelector('#resetBtn').addEventListener('click', () => {
    const ok = confirm('Reset your Onyx Casino browser save? This removes credits, profile stats, transactions, and mission progress.');
    if (!ok) return;
    resetState();
    toast('Save reset. Onboarding will restore the starter bonus.');
    showOnboarding();
  });
}
