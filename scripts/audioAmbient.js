import { getState } from './state.js';

const sceneTones = {
  lobby: 82,
  floor: 96,
  penthouse: 132,
  highroller: 118,
  houseedge: 54,
  vault: 74,
  vip: 146
};

let context = null;
let gain = null;
let oscillator = null;
let unlocked = false;
let currentScene = 'lobby';

export function initAmbientAudio() {
  const unlock = () => {
    unlocked = true;
    startAmbient();
  };
  document.addEventListener('pointerdown', unlock, { once: true });
  document.addEventListener('keydown', unlock, { once: true });
  window.addEventListener('onyx:view-change', event => {
    currentScene = event.detail?.view || 'lobby';
    retune();
  });
}

function startAmbient() {
  const settings = getState().settings || {};
  if (!settings.soundEnabled || settings.reducedAnimations || !unlocked) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    context = context || new AudioContextClass();
    gain = gain || context.createGain();
    oscillator = oscillator || context.createOscillator();
    oscillator.type = 'sine';
    gain.gain.value = 0.006;
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    retune();
  } catch {
    // Ambient audio is decorative and must never affect gameplay.
  }
}

function retune() {
  if (!context || !oscillator || !gain) return;
  const settings = getState().settings || {};
  gain.gain.setTargetAtTime(settings.soundEnabled && !settings.reducedAnimations ? 0.006 : 0.0001, context.currentTime, 0.4);
  oscillator.frequency.setTargetAtTime(sceneTones[currentScene] || 82, context.currentTime, 0.8);
}
