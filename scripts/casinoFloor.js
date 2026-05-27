import { createInteractionSystem } from './interactionSystem.js';
import { createPlayerController } from './playerController.js';
import { renderFloorHud } from './hud.js';

export function initCasinoFloor({ setView, toast }) {
  const stage = document.querySelector('#casinoFloorStage');
  const player = document.querySelector('#floorPlayer');
  const prompt = document.querySelector('#floorInteractionPrompt');
  if (!stage || !player || !prompt) return;

  const interactions = createInteractionSystem({ stage, prompt, setView, toast });
  const controller = createPlayerController({
    stage,
    player,
    onMove: position => interactions.update(position)
  });

  window.addEventListener('onyx:view-change', event => {
    if (event.detail?.view === 'floor') {
      stage.focus({ preventScroll: true });
      controller.start();
      renderFloorHud();
    } else {
      controller.stop();
    }
  });

  document.querySelectorAll('[data-view="floor"]').forEach(button => {
    button.addEventListener('click', () => setTimeout(() => stage.focus({ preventScroll: true }), 0));
  });
  controller.start();
}
