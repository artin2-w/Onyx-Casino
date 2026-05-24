import { formatCredits, getState, pushLiveActivity, updateLiveCasino } from './state.js';
import { getActiveEvent } from './events.js';
import { renderAll } from './ui.js';

const names = ['NovaAce', 'LunaViper', 'VelvetKai', 'CrownEcho', 'NyxVale', 'RedLux', 'OrionJet', 'MiraOnyx', 'VantaRay', 'GoldSaint'];
const vipRanks = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Onyx'];
const games = ['Crash', 'Mines', 'Onyx Slots', 'Blackjack', 'Roulette', 'Plinko', 'Dice Duel'];
const tableLines = [
  'Blackjack Platinum Table is heating up',
  'Roulette private table has a full rail',
  'Crash lounge is running fast rounds',
  'Mines room is chasing vault keys',
  'VIP Obsidian table just opened',
  'Plinko high-risk board is glowing'
];

export function initLiveCasino() {
  seedLiveCasino();
  setInterval(tickLiveCasino, 11000);
}

// The live floor is intentionally simulated and paced slowly so it adds atmosphere without spamming.
function seedLiveCasino() {
  if (getState().liveCasino.activities.length) return;
  for (let index = 0; index < 5; index += 1) pushLiveActivity(generateActivity());
  updateLiveCasino({ onlinePlayers: onlineCount(), hotGame: getActiveEvent().featuredGame, tableActivity: tableLines.slice(0, 4) });
}

function tickLiveCasino() {
  const state = getState();
  if (state.settings.reducedAnimations) {
    updateLiveCasino({ onlinePlayers: onlineCount(), hotGame: getActiveEvent().featuredGame });
    return;
  }
  pushLiveActivity(generateActivity());
  updateLiveCasino({
    onlinePlayers: onlineCount(),
    hotGame: getActiveEvent().featuredGame,
    tableActivity: shuffle(tableLines).slice(0, 4)
  });
  renderAll();
}

function generateActivity() {
  const name = pick(names);
  const game = pick(games);
  const rank = pick(vipRanks);
  const amount = Math.floor((Math.random() * 26000 + 1200) / 100) * 100;
  const templates = [
    { tone: 'win', text: `${name} won ${formatCredits(amount)} on ${game}` },
    { tone: 'vip', text: `${name} reached ${rank} VIP` },
    { tone: 'table', text: pick(tableLines) },
    { tone: 'vault', text: `${name} opened an ${rank === 'Onyx' ? 'Onyx' : 'Elite'} Vault reward` },
    { tone: 'hot', text: `${game} is now trending in the simulated lobby` }
  ];
  return pick(templates);
}

function onlineCount() {
  const minutes = new Date().getMinutes();
  return 118 + ((minutes * 7) % 62) + Math.floor(Math.random() * 12);
}

function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
