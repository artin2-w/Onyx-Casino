import { getState } from './state.js';

const toneMap = {
  'chip-click': [{ frequency: 520, duration: 0.045, type: 'square', volume: 0.025 }],
  win: [
    { frequency: 640, duration: 0.07, type: 'sine', volume: 0.035 },
    { frequency: 880, duration: 0.09, type: 'sine', volume: 0.03, delay: 0.055 }
  ],
  loss: [{ frequency: 180, duration: 0.11, type: 'triangle', volume: 0.022 }],
  'bonus-claim': [
    { frequency: 720, duration: 0.08, type: 'sine', volume: 0.03 },
    { frequency: 960, duration: 0.11, type: 'sine', volume: 0.026, delay: 0.07 }
  ],
  'card-deal': [{ frequency: 420, duration: 0.05, type: 'triangle', volume: 0.022 }],
  spin: [{ frequency: 300, duration: 0.08, type: 'sawtooth', volume: 0.018 }],
  'game-start': [{ frequency: 340, duration: 0.08, type: 'sawtooth', volume: 0.018 }],
  cashout: [
    { frequency: 560, duration: 0.06, type: 'sine', volume: 0.03 },
    { frequency: 780, duration: 0.08, type: 'sine', volume: 0.026, delay: 0.055 }
  ]
};

let audioContext = null;
let unlocked = false;

export function initSoundManager() {
  const unlock = () => {
    unlocked = true;
    ensureContext()?.resume?.().catch(() => {});
  };

  document.addEventListener('pointerdown', unlock, { once: true });
  document.addEventListener('keydown', unlock, { once: true });
  window.addEventListener('onyx:sound', event => playTone(event.detail?.name));
}

function playTone(name) {
  const settings = getState().settings || {};
  if (!settings.soundEnabled || settings.reducedAnimations || !unlocked) return;
  const context = ensureContext();
  const tones = toneMap[name] || toneMap.spin;
  if (!context || !tones) return;

  try {
    for (const tone of tones) scheduleTone(context, tone);
  } catch {
    // Audio is optional. Browser policies or unavailable Web Audio should never affect gameplay.
  }
}

function ensureContext() {
  if (audioContext) return audioContext;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  try {
    audioContext = new AudioContextClass();
    return audioContext;
  } catch {
    return null;
  }
}

function scheduleTone(context, tone) {
  const start = context.currentTime + (tone.delay || 0);
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = tone.type || 'sine';
  oscillator.frequency.setValueAtTime(tone.frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(tone.volume || 0.02, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + tone.duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + tone.duration + 0.02);
}
