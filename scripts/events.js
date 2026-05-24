import { getState, rotateOnyxEvent } from './state.js';

export const EVENT_CATALOG = [
  { id: 'bloodHour', name: 'Blood Hour', palette: 'blood', featuredGame: 'roulette', xpMultiplier: 1.2, vaultMultiplier: 1.05, rewardMultiplier: 1.1, description: 'Deep red tables glow brighter. Roulette and table play feel especially alive tonight.' },
  { id: 'diamondRush', name: 'Diamond Rush', palette: 'diamond', featuredGame: 'slots', xpMultiplier: 1.1, vaultMultiplier: 1.25, rewardMultiplier: 1, description: 'Vault XP glitters across the floor. Every wager nudges the next crate closer.' },
  { id: 'crashFrenzy', name: 'Crash Frenzy', palette: 'neon', featuredGame: 'crash', xpMultiplier: 1.15, vaultMultiplier: 1.15, rewardMultiplier: 1, description: 'Fast games take the spotlight with electric neon ambience and sharper activity.' },
  { id: 'vipGala', name: 'VIP Gala', palette: 'vip', featuredGame: 'blackjack', xpMultiplier: 1.25, vaultMultiplier: 1.1, rewardMultiplier: 1.15, description: 'The house spotlights VIP progression, prestige titles, and polished table play.' },
  { id: 'rouletteFever', name: 'Roulette Fever', palette: 'blood', featuredGame: 'roulette', xpMultiplier: 1.12, vaultMultiplier: 1.1, rewardMultiplier: 1, description: 'The wheel room is busy, warm, and dramatic. Outside bets and straight shots own the floor.' },
  { id: 'luckyNight', name: 'Lucky Night', palette: 'gold', featuredGame: 'plinko', xpMultiplier: 1.1, vaultMultiplier: 1.1, rewardMultiplier: 1.15, description: 'A calm golden ambience runs through missions, rewards, and steady progression.' },
  { id: 'blackjackHeat', name: 'Blackjack Heat', palette: 'vip', featuredGame: 'blackjack', xpMultiplier: 1.15, vaultMultiplier: 1.08, rewardMultiplier: 1, description: 'The classic tables feel focused, crisp, and high-touch.' },
  { id: 'midnightSurge', name: 'Midnight Surge', palette: 'midnight', featuredGame: 'mines', xpMultiplier: 1.18, vaultMultiplier: 1.18, rewardMultiplier: 1, description: 'A darker floor state with subtle motion, cool highlights, and vault momentum.' },
  { id: 'vaultStorm', name: 'Vault Storm', palette: 'diamond', featuredGame: 'mines', xpMultiplier: 1.05, vaultMultiplier: 1.45, rewardMultiplier: 1, description: 'Vault XP surges. Keys and crates are the focus of the evening.' },
  { id: 'neonRush', name: 'Neon Rush', palette: 'neon', featuredGame: 'dice', xpMultiplier: 1.16, vaultMultiplier: 1.14, rewardMultiplier: 1, description: 'Quick games glow with neon accents and a faster casino-floor rhythm.' }
];

// Events are deterministic enough to feel stable for a visit, but rotate by time so the lobby feels alive.
export function initEventSystem() {
  ensureEvent();
  setInterval(() => {
    ensureEvent();
    window.dispatchEvent(new CustomEvent('onyx:event-tick'));
  }, 30000);
}

export function getActiveEvent() {
  return EVENT_CATALOG.find(event => event.id === getState().tonightAtOnyx.activeEventId) || EVENT_CATALOG[1];
}

export function getEventCountdown() {
  const endsAt = Date.parse(getState().tonightAtOnyx.endsAt || '');
  const remaining = Number.isFinite(endsAt) ? Math.max(0, endsAt - Date.now()) : 0;
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function ensureEvent() {
  const state = getState();
  const endsAt = Date.parse(state.tonightAtOnyx.endsAt || '');
  if (Number.isFinite(endsAt) && endsAt > Date.now()) return;
  const hour = new Date().getHours();
  const event = EVENT_CATALOG[(hour + new Date().getDate()) % EVENT_CATALOG.length];
  rotateOnyxEvent(event, 75);
}
