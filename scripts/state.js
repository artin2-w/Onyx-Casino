const SAVE_KEY = 'onyxCasinoSaveV5';
const LEGACY_SAVE_KEYS = ['onyxCasinoSaveV4', 'onyxCasinoSaveV3', 'onyxCasinoSaveV2'];

export const PLAYABLE_GAMES = ['slots', 'roulette', 'blackjack', 'dice', 'mines', 'crash', 'plinko'];
export const CHIP_VALUES = [10, 25, 50, 100, 250, 500, 1000];
export const GAME_LIMITS = { slots: 1000, roulette: 1000, blackjack: 1000, dice: 1000, mines: 1000, crash: 1000, plinko: 1000 };

export const VIP_TIERS = [
  { name: 'Bronze', minXp: 0, dailyBonus: 750, missionMultiplier: 1, badge: 'BRZ' },
  { name: 'Silver', minXp: 1800, dailyBonus: 1000, missionMultiplier: 1.1, badge: 'SLV' },
  { name: 'Gold', minXp: 5200, dailyBonus: 1500, missionMultiplier: 1.2, badge: 'GLD' },
  { name: 'Platinum', minXp: 11000, dailyBonus: 2250, missionMultiplier: 1.35, badge: 'PLT' },
  { name: 'Onyx', minXp: 22000, dailyBonus: 3500, missionMultiplier: 1.6, badge: 'ONX' }
];

export const DAILY_REWARDS = [
  { day: 1, credits: 750, xp: 75 },
  { day: 2, credits: 1000, xp: 90 },
  { day: 3, credits: 1250, xp: 110 },
  { day: 4, credits: 1600, xp: 130 },
  { day: 5, credits: 2000, xp: 160 },
  { day: 6, credits: 2600, xp: 190 },
  { day: 7, credits: 4000, xp: 300 }
];

export const PROMO_CODES = {
  ONYXWELCOME: { credits: 1500, xp: 120, label: 'Welcome code' },
  FREESPIN: { credits: 1000, xp: 90, label: 'Free-spin style code' },
  VIPBOOST: { credits: 750, xp: 350, label: 'VIP boost code' }
};

export const ACHIEVEMENTS = [
  { id: 'firstWin', title: 'First Win', badge: 'WIN', rewardCredits: 300, rewardXp: 80 },
  { id: 'bigWin', title: 'Big Win', badge: 'BIG', rewardCredits: 900, rewardXp: 180 },
  { id: 'tenSpins', title: '10 Spins', badge: '10X', rewardCredits: 500, rewardXp: 120 },
  { id: 'blackjackNatural', title: 'Blackjack Natural', badge: 'BJ', rewardCredits: 750, rewardXp: 160 },
  { id: 'rouletteStraightHit', title: 'Roulette Straight Hit', badge: '36X', rewardCredits: 1000, rewardXp: 220 },
  { id: 'diceHighRiskWin', title: 'Dice High Risk Win', badge: 'RISK', rewardCredits: 850, rewardXp: 190 },
  { id: 'vipSilver', title: 'VIP Silver', badge: 'SLV', rewardCredits: 600, rewardXp: 120 },
  { id: 'minesFirstCashout', title: 'First Mines Cashout', badge: 'MINE', rewardCredits: 500, rewardXp: 120 },
  { id: 'mines10Safe', title: '10 Safe Tiles', badge: 'SAFE', rewardCredits: 700, rewardXp: 160 },
  { id: 'minesHighRiskWin', title: 'High Risk Mines Win', badge: 'HM', rewardCredits: 1000, rewardXp: 220 },
  { id: 'crashFirstCashout', title: 'First Crash Cashout', badge: 'CASH', rewardCredits: 500, rewardXp: 120 },
  { id: 'crash5xCashout', title: '5x Crash Cashout', badge: '5X', rewardCredits: 1200, rewardXp: 260 },
  { id: 'crashAutoWin', title: 'Auto Cashout Win', badge: 'AUTO', rewardCredits: 700, rewardXp: 160 },
  { id: 'plinkoFirstDrop', title: 'First Plinko Drop', badge: 'DROP', rewardCredits: 400, rewardXp: 100 },
  { id: 'plinkoHighRiskWin', title: 'High Risk Plinko Win', badge: 'HP', rewardCredits: 900, rewardXp: 200 },
  { id: 'plinkoOuterSlot', title: 'Outer Slot Hit', badge: 'EDGE', rewardCredits: 1100, rewardXp: 240 }
];

const defaultGameSession = () => ({
  sessionWagered: 0,
  sessionProfit: 0,
  biggestSessionWin: 0,
  lastResults: [],
  spinHistory: [],
  rouletteNumbers: [],
  diceRolls: [],
  minesResults: [],
  crashHistory: [],
  plinkoDrops: []
});

const defaultSessions = () => Object.fromEntries(PLAYABLE_GAMES.map(game => [game, defaultGameSession()]));
const defaultAchievements = () => Object.fromEntries(ACHIEVEMENTS.map(item => [item.id, { unlocked: false, unlockedAt: null }]));

export const defaultState = {
  version: 5,
  username: 'Guest Player',
  balance: 0,
  level: 1,
  xp: 0,
  lifetimeXp: 0,
  sessionProfit: 0,
  dailyBonusDate: null,
  dailyStreak: 0,
  lastDailyClaimDate: null,
  missionDate: null,
  onboardingComplete: false,
  starterBonusGranted: false,
  promoCodes: {},
  rewardClaims: [],
  settings: {
    reducedAnimations: false,
    compactMode: false,
    hideRecentWins: false
  },
  selectedBets: { slots: 100, roulette: 100, blackjack: 100, dice: 100, mines: 100, crash: 100, plinko: 100 },
  lastBets: { slots: 100, roulette: 100, blackjack: 100, dice: 100, mines: 100, crash: 100, plinko: 100 },
  gameSessions: defaultSessions(),
  achievements: defaultAchievements(),
  badges: [],
  stats: {
    totalGamesPlayed: 0,
    totalBets: 0,
    totalWagered: 0,
    totalWon: 0,
    biggestWin: 0,
    gamesPlayed: { slots: 0, roulette: 0, blackjack: 0, dice: 0, mines: 0, crash: 0, plinko: 0, wheel: 0, baccarat: 0, scratch: 0 }
  },
  missions: {
    slots5: { progress: 0, claimed: false },
    blackjack3: { progress: 0, claimed: false },
    rouletteWin: { progress: 0, claimed: false },
    wager1000: { progress: 0, claimed: false },
    dailyBonus: { progress: 0, claimed: false },
    minesSafe10: { progress: 0, claimed: false },
    crashCashout3: { progress: 0, claimed: false },
    plinkoDrop5: { progress: 0, claimed: false },
    highRiskWin: { progress: 0, claimed: false }
  },
  transactions: [],
  recentWins: []
};

let state = structuredClone(defaultState);
const listeners = new Set();

export function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY) || LEGACY_SAVE_KEYS.map(key => localStorage.getItem(key)).find(Boolean);
    state = raw ? sanitizeState(mergeDeep(structuredClone(defaultState), JSON.parse(raw))) : structuredClone(defaultState);
    resetDailyMissionsIfNeeded();
    checkTierAchievements();
    saveState();
    return state;
  } catch {
    state = structuredClone(defaultState);
    saveState();
    return state;
  }
}

export function getState() { return state; }
export function subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }
export function saveState() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  listeners.forEach(listener => listener(state));
}
export function resetState() { state = structuredClone(defaultState); saveState(); return state; }

export function completeOnboarding(username) {
  updateUsername(username || state.username);
  if (!state.starterBonusGranted) {
    const topUp = Math.max(0, 10000 - state.balance);
    state.balance += topUp;
    state.starterBonusGranted = true;
    addRewardClaim('Onboarding', topUp, 0, 'Starter bonus ready');
  }
  state.onboardingComplete = true;
  saveState();
}

export function replayOnboarding() {
  state.onboardingComplete = false;
  saveState();
}

export function updateUsername(username) {
  const cleaned = String(username || '').trim().slice(0, 24);
  state.username = cleaned || 'Guest Player';
  saveState();
}

export function setSelectedBet(game, amount) {
  const maxBet = getTableLimit(game);
  const next = Math.max(0, Math.min(maxBet, Math.floor(Number(amount) || 0)));
  state.selectedBets[game] = next;
  saveState();
  return next;
}
export function addToSelectedBet(game, amount) {
  emitSoundHook('chip-click', { game, amount });
  return setSelectedBet(game, (state.selectedBets[game] || 0) + amount);
}
export function clearSelectedBet(game) { return setSelectedBet(game, 0); }
export function maxSelectedBet(game) { return setSelectedBet(game, Math.min(getTableLimit(game), state.balance)); }
export function repeatBet(game) { return setSelectedBet(game, state.lastBets[game] || defaultState.selectedBets[game] || 0); }
export function doubleBet(game) { return setSelectedBet(game, (state.selectedBets[game] || 0) * 2); }
export function halfBet(game) { return setSelectedBet(game, Math.floor((state.selectedBets[game] || 0) / 2)); }

export function canAfford(amount) {
  const value = Math.floor(Number(amount));
  return Number.isFinite(value) && value > 0 && state.balance >= value;
}

export function placeBet(game, amount) {
  const bet = Math.floor(Number(amount));
  if (!Number.isFinite(bet) || bet <= 0) throw new Error('Choose a bet first');
  if (bet > getTableLimit(game)) throw new Error(`Table limit is ${formatCredits(getTableLimit(game))}`);
  if (!canAfford(bet)) throw new Error(`Not enough credits. Balance: ${formatCredits(state.balance)}`);

  state.balance -= bet;
  state.sessionProfit -= bet;
  state.lastBets[game] = bet;
  state.stats.totalBets += 1;
  state.stats.totalGamesPlayed += 1;
  state.stats.totalWagered += bet;
  state.stats.gamesPlayed[game] = (state.stats.gamesPlayed[game] || 0) + 1;
  const session = ensureGameSession(game);
  session.sessionWagered += bet;
  session.sessionProfit -= bet;
  addXP(Math.max(5, Math.floor(bet / 20)), false);
  updateMissionProgress('wager1000', bet);
  if (game === 'slots') updateMissionProgress('slots5', 1);
  if (game === 'blackjack') updateMissionProgress('blackjack3', 1);
  if (game === 'plinko') updateMissionProgress('plinkoDrop5', 1);
  if (game === 'slots' && state.stats.gamesPlayed.slots >= 10) unlockAchievement('tenSpins');
  if (game === 'plinko') unlockAchievement('plinkoFirstDrop');
  saveState();
  return bet;
}

export function placeAdditionalWager(game, amount) {
  const bet = Math.floor(Number(amount));
  if (!Number.isFinite(bet) || bet <= 0) throw new Error('Choose a bet first');
  if (!canAfford(bet)) throw new Error(`Not enough credits. Balance: ${formatCredits(state.balance)}`);
  state.balance -= bet;
  state.sessionProfit -= bet;
  state.stats.totalWagered += bet;
  const session = ensureGameSession(game);
  session.sessionWagered += bet;
  session.sessionProfit -= bet;
  updateMissionProgress('wager1000', bet);
  addXP(Math.max(3, Math.floor(bet / 25)), false);
  saveState();
  return bet;
}

export function settleBet({ game, bet, payout = 0, result = 'Loss', detail = '', meta = {} }) {
  const paid = Math.max(0, Math.floor(Number(payout) || 0));
  const wager = Math.floor(Number(bet) || 0);
  const profit = paid - wager;
  const session = ensureGameSession(game);

  if (paid > 0) {
    state.balance += paid;
    state.sessionProfit += paid;
    session.sessionProfit += paid;
    state.stats.totalWon += paid;
    state.stats.biggestWin = Math.max(state.stats.biggestWin, profit, paid);
    session.biggestSessionWin = Math.max(session.biggestSessionWin, profit, paid);
    addXP(Math.max(8, Math.floor(paid / 30)), false);
  }

  if (profit > 0) unlockAchievement('firstWin');
  if (profit >= 1000 || paid >= wager * 10) unlockAchievement('bigWin');
  if (game === 'roulette' && profit > 0) updateMissionProgress('rouletteWin', 1);
  if (game === 'blackjack' && meta.blackjackNatural) unlockAchievement('blackjackNatural');
  if (game === 'roulette' && meta.straightHit) unlockAchievement('rouletteStraightHit');
  if (game === 'dice' && meta.highRiskWin) unlockAchievement('diceHighRiskWin');
  if (game === 'mines' && meta.cashout) unlockAchievement('minesFirstCashout');
  if (game === 'mines' && meta.safeTiles >= 10) unlockAchievement('mines10Safe');
  if (game === 'mines' && meta.highRiskWin) unlockAchievement('minesHighRiskWin');
  if (game === 'crash' && meta.cashout) {
    unlockAchievement('crashFirstCashout');
    updateMissionProgress('crashCashout3', 1);
  }
  if (game === 'crash' && meta.multiplier >= 5) unlockAchievement('crash5xCashout');
  if (game === 'crash' && meta.autoCashout) unlockAchievement('crashAutoWin');
  if (game === 'plinko' && meta.highRiskWin) unlockAchievement('plinkoHighRiskWin');
  if (game === 'plinko' && meta.outerSlot) unlockAchievement('plinkoOuterSlot');
  if (meta.highRiskWin) updateMissionProgress('highRiskWin', 1);
  checkTierAchievements();

  const transaction = {
    id: id(),
    game: gameLabel(game),
    bet: wager,
    result,
    profit,
    detail,
    time: timeNow()
  };
  state.transactions.unshift(transaction);
  state.transactions = state.transactions.slice(0, 24);
  session.lastResults.unshift({ result, profit, detail, bet: wager, time: transaction.time });
  session.lastResults = session.lastResults.slice(0, 10);

  if (profit > 0) {
    state.recentWins.unshift({ game: gameLabel(game), amount: profit, text: detail || result, time: transaction.time });
    state.recentWins = state.recentWins.slice(0, 8);
    emitSoundHook('win', { game, profit });
  } else if (profit < 0) {
    emitSoundHook('loss', { game, profit });
  }

  saveState();
  return transaction;
}

export function recordGameHistory(game, key, item, limit = 10) {
  const session = ensureGameSession(game);
  session[key].unshift(item);
  session[key] = session[key].slice(0, limit);
  saveState();
}

export function resetGameSession(game) {
  state.gameSessions[game] = defaultGameSession();
  saveState();
}

export function claimDailyBonus() {
  const today = dateKey(new Date());
  if (state.dailyBonusDate === today) throw new Error('Daily bonus already claimed');

  const yesterday = dateKey(addDays(new Date(), -1));
  state.dailyStreak = state.lastDailyClaimDate === yesterday ? state.dailyStreak + 1 : 1;
  state.dailyBonusDate = today;
  state.lastDailyClaimDate = today;

  const reward = getDailyRewardForStreak(state.dailyStreak);
  const tier = getVipTier();
  const amount = Math.floor(reward.credits * tierRewardMultiplier());
  const xp = Math.floor(reward.xp * tierRewardMultiplier());
  state.balance += amount;
  addXP(xp, false);
  updateMissionProgress('dailyBonus', 1);
  state.transactions.unshift({ id: id(), game: 'Rewards', bet: 0, result: `Daily Day ${reward.day}`, profit: amount, detail: `${tier.name} daily calendar reward`, time: timeNow() });
  state.transactions = state.transactions.slice(0, 24);
  addRewardClaim(`Daily Day ${reward.day}`, amount, xp, `${tier.name} multiplier`);
  emitSoundHook('bonus-claim', { amount });
  saveState();
  return amount;
}

export function claimPromoCode(code) {
  const normalized = String(code || '').trim().toUpperCase();
  const promo = PROMO_CODES[normalized];
  if (!promo) throw new Error('Promo code not found');
  if (state.promoCodes[normalized]) throw new Error('Promo code already claimed');
  state.promoCodes[normalized] = true;
  state.balance += promo.credits;
  addXP(promo.xp, false);
  state.transactions.unshift({ id: id(), game: 'Promo', bet: 0, result: normalized, profit: promo.credits, detail: promo.label, time: timeNow() });
  state.transactions = state.transactions.slice(0, 24);
  addRewardClaim(normalized, promo.credits, promo.xp, promo.label);
  emitSoundHook('bonus-claim', { amount: promo.credits });
  saveState();
  return promo;
}

export function claimMission(mission) {
  const stored = state.missions[mission.id];
  if (!stored || stored.claimed || stored.progress < mission.target) return null;
  const multiplier = getVipTier().missionMultiplier;
  const credits = Math.floor(mission.rewardCredits * multiplier);
  const xp = Math.floor(mission.rewardXp * multiplier);
  stored.claimed = true;
  state.balance += credits;
  addXP(xp, false);
  state.transactions.unshift({ id: id(), game: 'Missions', bet: 0, result: 'Reward Claimed', profit: credits, detail: mission.title, time: timeNow() });
  state.transactions = state.transactions.slice(0, 24);
  addRewardClaim(mission.title, credits, xp, 'Mission reward');
  saveState();
  return { credits, xp };
}

export function addXP(amount, shouldSave = true) {
  const gain = Math.max(0, Math.floor(Number(amount) || 0));
  state.xp += gain;
  state.lifetimeXp += gain;
  while (state.xp >= xpNeeded()) {
    state.xp -= xpNeeded();
    state.level += 1;
    const bonus = 500 + state.level * 125;
    state.balance += bonus;
    state.transactions.unshift({ id: id(), game: 'Level Up', bet: 0, result: `Level ${state.level}`, profit: bonus, detail: 'Level bonus', time: timeNow() });
  }
  checkTierAchievements();
  if (shouldSave) saveState();
}

export function updateMissionProgress(id, amount) {
  if (!state.missions[id] || state.missions[id].claimed) return;
  state.missions[id].progress += Math.max(0, Math.floor(Number(amount) || 0));
}

export function unlockAchievement(idToUnlock) {
  const achievement = ACHIEVEMENTS.find(item => item.id === idToUnlock);
  const stored = state.achievements[idToUnlock];
  if (!achievement || !stored || stored.unlocked) return null;
  stored.unlocked = true;
  stored.unlockedAt = timeNow();
  state.badges = Array.from(new Set([...state.badges, achievement.badge]));
  state.balance += achievement.rewardCredits;
  addXP(achievement.rewardXp, false);
  state.transactions.unshift({ id: id(), game: 'Achievements', bet: 0, result: achievement.title, profit: achievement.rewardCredits, detail: `Badge unlocked: ${achievement.badge}`, time: timeNow() });
  state.transactions = state.transactions.slice(0, 24);
  addRewardClaim(achievement.title, achievement.rewardCredits, achievement.rewardXp, `Badge ${achievement.badge}`);
  return achievement;
}

export function updateSettings(patch) {
  state.settings = { ...state.settings, ...(patch || {}) };
  saveState();
}

export function clearHistory() {
  state.transactions = [];
  state.recentWins = [];
  state.rewardClaims = [];
  saveState();
}

export function exportSave() {
  return JSON.stringify(state, null, 2);
}

export function importSave(jsonText) {
  const parsed = JSON.parse(jsonText);
  if (!parsed || typeof parsed !== 'object') throw new Error('Invalid save JSON');
  state = sanitizeState(mergeDeep(structuredClone(defaultState), parsed));
  saveState();
  return state;
}

export function resetDailyMissionsIfNeeded() {
  const today = dateKey(new Date());
  if (state.missionDate === today) return;
  state.missionDate = today;
  for (const mission of Object.values(state.missions)) {
    mission.progress = 0;
    mission.claimed = false;
  }
}

export function xpNeeded() { return 500 + state.level * 175; }
export function getVipTier() { return [...VIP_TIERS].reverse().find(tier => state.lifetimeXp >= tier.minXp) || VIP_TIERS[0]; }
export function getVipProgress() {
  const current = getVipTier();
  const next = VIP_TIERS.find(tier => tier.minXp > current.minXp);
  if (!next) return { current, next: null, percent: 100 };
  const percent = ((state.lifetimeXp - current.minXp) / (next.minXp - current.minXp)) * 100;
  return { current, next, percent: Math.max(0, Math.min(100, percent)) };
}
export function getDailyRewardForStreak(streak = state.dailyStreak + 1) {
  const day = ((Math.max(1, streak) - 1) % 7) + 1;
  return DAILY_REWARDS[day - 1];
}
export function tierRewardMultiplier() {
  const index = VIP_TIERS.findIndex(tier => tier.name === getVipTier().name);
  return 1 + Math.max(0, index) * 0.15;
}
export function getNextDailyClaimText() {
  const today = dateKey(new Date());
  if (state.dailyBonusDate !== today) return 'Available now';
  return 'Available tomorrow';
}
export function getTableLimit(game) {
  const bump = { Bronze: 1, Silver: 1.5, Gold: 2, Platinum: 3, Onyx: 5 }[getVipTier().name] || 1;
  return Math.floor((GAME_LIMITS[game] || 1000) * bump);
}
export function getGameSession(game) { return ensureGameSession(game); }
export function gameLabel(game) {
  return { slots: 'Onyx Slots', roulette: 'European Roulette', blackjack: 'Blackjack Classic', dice: 'Dice Duel', mines: 'Mines', crash: 'Crash', plinko: 'Plinko' }[game] || game;
}
export function favoriteGame() {
  const favorite = Object.entries(state.stats.gamesPlayed).sort((a, b) => b[1] - a[1])[0];
  return favorite && favorite[1] > 0 ? gameLabel(favorite[0]) : 'No favorite yet';
}
export function formatCredits(n) { return `${Math.floor(Number(n) || 0).toLocaleString()} credits`; }
export function formatProfit(n) {
  const value = Math.floor(Number(n) || 0);
  if (value === 0) return '0 credits';
  return `${value > 0 ? '+' : '-'}${Math.abs(value).toLocaleString()} credits`;
}

export function emitSoundHook(name, detail = {}) {
  window.dispatchEvent(new CustomEvent('onyx:sound', { detail: { name, ...detail } }));
}

function checkTierAchievements() {
  if (getVipTier().name !== 'Bronze') unlockAchievement('vipSilver');
}
function ensureGameSession(game) {
  if (!state.gameSessions[game]) state.gameSessions[game] = defaultGameSession();
  return state.gameSessions[game];
}
function sanitizeState(nextState) {
  const incomingVersion = safeNumber(nextState.version, 1);
  nextState.version = 5;
  nextState.balance = safeNumber(nextState.balance, 10000);
  nextState.level = Math.max(1, safeNumber(nextState.level, 1));
  nextState.xp = safeNumber(nextState.xp, 0);
  nextState.lifetimeXp = safeNumber(nextState.lifetimeXp, nextState.xp);
  nextState.sessionProfit = safeNumber(nextState.sessionProfit, 0);
  nextState.gameSessions = mergeDeep(defaultSessions(), nextState.gameSessions || {});
  nextState.achievements = mergeDeep(defaultAchievements(), nextState.achievements || {});
  nextState.badges = Array.isArray(nextState.badges) ? nextState.badges : [];
  nextState.settings = mergeDeep(structuredClone(defaultState.settings), nextState.settings || {});
  nextState.promoCodes = nextState.promoCodes && typeof nextState.promoCodes === 'object' ? nextState.promoCodes : {};
  nextState.rewardClaims = Array.isArray(nextState.rewardClaims) ? nextState.rewardClaims.slice(0, 30) : [];
  if (incomingVersion < 5 && nextState.balance >= 10000) nextState.starterBonusGranted = true;
  for (const game of PLAYABLE_GAMES) {
    nextState.selectedBets[game] = safeNumber(nextState.selectedBets[game], defaultState.selectedBets[game]);
    nextState.lastBets[game] = safeNumber(nextState.lastBets?.[game], nextState.selectedBets[game]);
  }
  return nextState;
}
function safeNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.floor(number) : fallback;
}
function mergeDeep(target, source) {
  for (const key of Object.keys(source || {})) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      target[key] = mergeDeep(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
function dateKey(date) { return date.toISOString().slice(0, 10); }
function addDays(date, days) { const next = new Date(date); next.setDate(next.getDate() + days); return next; }
function timeNow() { return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }
function id() { return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`; }

function addRewardClaim(source, credits, xp, detail) {
  state.rewardClaims.unshift({ source, credits: Math.floor(credits || 0), xp: Math.floor(xp || 0), detail, time: timeNow() });
  state.rewardClaims = state.rewardClaims.slice(0, 30);
}
