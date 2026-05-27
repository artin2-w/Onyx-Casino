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
import { initPenthouse } from './penthouse.js';
import { initLuxuryMarket } from './market.js';
import { initInvestments } from './investments.js';
import { initHighRoller } from './highRoller.js';
import { initPrestige } from './prestige.js';
import { initAssetEconomy } from './assets.js';
import { initHouseEdge } from './houseEdge.js';
import { initCasinoFloor } from './casinoFloor.js';
import { initFloorHud } from './hud.js';
import { initLivingCasinoFloor } from './livingCasinoFloor.js';
import { initLobbyScene } from './lobbyScene.js';
import { initImmersiveNavigation } from './navigation.js';
import { initEnvironment } from './environment.js';
import { initShowcase } from './showcase.js';
import { initTransitions } from './transitions.js';
import { initAmbientAudio } from './audioAmbient.js';
import { initWorldScenes } from './worldScenes.js';
import { initVisualAssets } from './visualAssets.js';
import { initCamera } from './camera.js';
import { initJuice } from './juice.js';
import { initShowroom } from './showroom.js';
import { initControlRoom } from './controlRoom.js';
import { initVaultRoom } from './vaultRoom.js';
import { initTitleScreen } from './titleScreen.js';
import { initRoomSystem } from './roomSystem.js';
import { initGameHud } from './gameHud.js';
import { initPauseMenu } from './pauseMenu.js';
import { initObjectives } from './objectives.js';
import { initTableExperience } from './tableExperience.js';
import { initGamePresentation } from './gamePresentation.js';

loadState();
initSharedUi();
initSoundManager();
initEventSystem();
initCosmetics();
initAtmosphere();
initLiveCasino();
initVaultUi();
initLuxuryMarket();
initAssetEconomy();
initPenthouse();
initInvestments();
initHighRoller();
initPrestige();
initHouseEdge();
initEnvironment();
initTransitions();
initLobbyScene();
initImmersiveNavigation();
initShowcase();
initAmbientAudio();
initVisualAssets();
initWorldScenes();
initCamera();
initJuice();
initShowroom();
initControlRoom();
initVaultRoom();
initRoomSystem();
initGameHud();
initPauseMenu({ setView });
initObjectives();
initTableExperience({ setView });
initGamePresentation();
initFloorHud();
initCasinoFloor({ setView, toast });
initLivingCasinoFloor();
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
setView('lobby');
initTitleScreen({ setView, showOnboarding, renderAll });

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
