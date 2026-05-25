const SAVE_KEY = 'onyxCasinoSaveV3';
const LEGACY_SAVE_KEYS = ['onyxCasinoSaveV2', 'onyxCasinoSaveV1', 'onyxCasinoSaveV6', 'onyxCasinoSaveV5', 'onyxCasinoSaveV4', 'onyxCasinoSaveV3'];

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

export const VAULT_CRATES = {
  daily: { label: 'Daily Vault', keyCost: 1, xp: 350 },
  elite: { label: 'Elite Vault', keyCost: 3, xp: 950 },
  mega: { label: 'Mega Vault', keyCost: 7, xp: 2200 }
};

export const COSMETICS = [
  { id: 'border-gold', name: 'Gilded Edge', type: 'profileBorder', rarity: 'Common', className: 'cos-border-gold' },
  { id: 'border-crimson', name: 'Crimson Halo', type: 'profileBorder', rarity: 'Rare', className: 'cos-border-crimson' },
  { id: 'border-neon', name: 'Neon Luxe Frame', type: 'profileBorder', rarity: 'Epic', className: 'cos-border-neon' },
  { id: 'border-onyx', name: 'Onyx Legend Frame', type: 'profileBorder', rarity: 'Onyx', className: 'cos-border-onyx' },
  { id: 'chip-obsidian', name: 'Obsidian Chip', type: 'chipSkin', rarity: 'Common', className: 'chip-obsidian' },
  { id: 'chip-crimson', name: 'Crimson Gold Chip', type: 'chipSkin', rarity: 'Rare', className: 'chip-crimson' },
  { id: 'chip-vault', name: 'Vault Coin Chip', type: 'chipSkin', rarity: 'Legendary', className: 'chip-vault' },
  { id: 'cards-midnight', name: 'Midnight Card Backs', type: 'cardBack', rarity: 'Rare', className: 'cards-midnight' },
  { id: 'cards-onyx', name: 'Onyx Filigree Cards', type: 'cardBack', rarity: 'Epic', className: 'cards-onyx' },
  { id: 'roulette-blood', name: 'Blood Hour Wheel', type: 'rouletteTheme', rarity: 'Epic', className: 'roulette-blood' },
  { id: 'lobby-midnight', name: 'Midnight Black', type: 'lobbyTheme', rarity: 'Common', className: 'theme-midnight' },
  { id: 'lobby-crimson', name: 'Crimson Gold', type: 'lobbyTheme', rarity: 'Rare', className: 'theme-crimson' },
  { id: 'lobby-neon', name: 'Neon Luxe', type: 'lobbyTheme', rarity: 'Epic', className: 'theme-neon' },
  { id: 'lobby-vip', name: 'VIP Obsidian', type: 'lobbyTheme', rarity: 'Legendary', className: 'theme-vip' }
];

export const LUXURY_ASSETS = [
  { id: 'obsidian-chronograph', name: 'Obsidian Chronograph', category: 'Watches', price: 4500, rarity: 'Common', prestige: 120, income: 18, vipBoost: 0.01, vaultBoost: 0.01, description: 'A black-gold timepiece worn by rising Onyx regulars.' },
  { id: 'velvet-suite-sofa', name: 'Velvet Suite Sofa', category: 'Luxury Furniture', price: 7200, rarity: 'Common', prestige: 160, income: 28, dailyBoost: 0.01, description: 'Deep red lounge seating for a more serious penthouse floor.' },
  { id: 'crimson-gt', name: 'Crimson GT', category: 'Supercars', price: 18500, rarity: 'Rare', prestige: 420, income: 82, vipBoost: 0.025, description: 'A fictional grand tourer with a red lacquer finish and gold trim.' },
  { id: 'aurelia-coupe', name: 'Aurelia Coupe', category: 'Supercars', price: 34000, rarity: 'Epic', prestige: 760, income: 145, vaultBoost: 0.035, description: 'A low, luminous coupe built for the Onyx valet circle.' },
  { id: 'black-diamond-sculpture', name: 'Black Diamond Sculpture', category: 'Art Pieces', price: 52000, rarity: 'Epic', prestige: 980, income: 205, vaultBoost: 0.045, description: 'A faceted centerpiece that catches every neon edge.' },
  { id: 'onyx-house-shares', name: 'Onyx House Shares', category: 'Casino Shares', price: 88000, rarity: 'Legendary', prestige: 1650, income: 420, dailyBoost: 0.04, highRollerAccess: true, description: 'Fictional in-game shares in the simulated Onyx house.' },
  { id: 'nightfall-jet', name: 'Nightfall Jet', category: 'Private Jet', price: 145000, rarity: 'Legendary', prestige: 2500, income: 680, vipBoost: 0.06, highRollerAccess: true, description: 'A private jet silhouette for the black-card lifestyle fantasy.' },
  { id: 'rare-onyx-monolith', name: 'Rare Onyx Monolith', category: 'Rare Onyx Collectibles', price: 240000, rarity: 'Onyx', prestige: 4200, income: 1050, vaultBoost: 0.09, dailyBoost: 0.06, highRollerAccess: true, description: 'A mythic collectible displayed only in the top penthouse tier.' }
];

export const INVESTMENT_OPTIONS = {
  safe: { label: 'Safe Bond', durationMs: 60 * 60 * 1000, min: 1000, returnRate: 0.03, risk: 0, xp: 35 },
  luxe: { label: 'Luxe Bond', durationMs: 6 * 60 * 60 * 1000, min: 5000, returnRate: 0.09, risk: 0.04, xp: 110 },
  highRoller: { label: 'High Roller Bond', durationMs: 24 * 60 * 60 * 1000, min: 15000, returnRate: 0.22, risk: 0.11, xp: 260 },
  blackVault: { label: 'Black Vault Bond', durationMs: 3 * 24 * 60 * 60 * 1000, min: 50000, returnRate: 0.45, risk: 0.22, xp: 700 }
};

export const MARKET_STATES = ['Stable', 'Rising', 'Cooling', 'Rare Demand', 'VIP Frenzy'];

export const TABLE_LICENSES = [
  { id: 'blackjack-table', name: 'Blackjack Table', cost: 28000, baseIncome: 180, staffRequired: 'Dealer', risk: 8, popularity: 62, reputation: 3 },
  { id: 'roulette-table', name: 'Roulette Table', cost: 36000, baseIncome: 230, staffRequired: 'Dealer', risk: 10, popularity: 68, reputation: 4 },
  { id: 'slots-terminal', name: 'Slots Terminal', cost: 22000, baseIncome: 150, staffRequired: 'Technician', risk: 6, popularity: 72, reputation: 2 },
  { id: 'crash-terminal', name: 'Crash Terminal', cost: 42000, baseIncome: 310, staffRequired: 'Floor Manager', risk: 14, popularity: 76, reputation: 5 },
  { id: 'plinko-board', name: 'Plinko Board', cost: 30000, baseIncome: 205, staffRequired: 'Technician', risk: 7, popularity: 64, reputation: 3 },
  { id: 'mines-room', name: 'Mines Room', cost: 48000, baseIncome: 340, staffRequired: 'Security Analyst', risk: 16, popularity: 58, reputation: 5 },
  { id: 'dice-lounge', name: 'Dice Lounge', cost: 26000, baseIncome: 170, staffRequired: 'VIP Host', risk: 9, popularity: 60, reputation: 3 }
];

export const STAFF_CANDIDATES = [
  { id: 'mara-vale', name: 'Mara Vale', role: 'Dealer', skill: 62, salary: 420, morale: 78, trait: 'Calm Under Pressure', bonus: 'Stabilizes table heat', riskModifier: -2 },
  { id: 'dax-riven', name: 'Dax Riven', role: 'Dealer', skill: 54, salary: 360, morale: 72, trait: 'Crowd Favorite', bonus: 'Improves NPC mood', riskModifier: 0 },
  { id: 'selene-cross', name: 'Selene Cross', role: 'Floor Manager', skill: 68, salary: 620, morale: 74, trait: 'Night Shift Expert', bonus: 'Boosts late-floor traffic', riskModifier: -1 },
  { id: 'oren-glass', name: 'Oren Glass', role: 'Security Analyst', skill: 71, salary: 700, morale: 80, trait: 'Sharp Eyes', bonus: 'Improves incident outcomes', riskModifier: -5 },
  { id: 'ivy-nocturne', name: 'Ivy Nocturne', role: 'VIP Host', skill: 66, salary: 660, morale: 76, trait: 'Lucky Presence', bonus: 'Improves high roller traffic', riskModifier: 1 },
  { id: 'keir-fuse', name: 'Keir Fuse', role: 'Technician', skill: 59, salary: 470, morale: 70, trait: 'High Maintenance', bonus: 'Repairs table condition faster', riskModifier: -3 }
];

export const SURVEILLANCE_INCIDENTS = [
  { id: 'card-counter', title: 'Possible card counter', table: 'Blackjack Table', severity: 16, bestAction: 'observe', detail: 'A pattern-focused guest is drawing attention in the simulator.' },
  { id: 'roulette-pattern', title: 'Suspicious roulette pattern', table: 'Roulette Table', severity: 12, bestAction: 'warn', detail: 'The wheel log shows unusual repeat attention from one simulated player.' },
  { id: 'vip-dispute', title: 'VIP dispute', table: 'High Roller Floor', severity: 14, bestAction: 'compensate', detail: 'A fictional VIP guest is unhappy with table pacing.' },
  { id: 'table-malfunction', title: 'Table malfunction', table: 'Slots Terminal', severity: 10, bestAction: 'technician', detail: 'A terminal needs a maintenance check before traffic drops.' },
  { id: 'dealer-fatigue', title: 'Dealer fatigue', table: 'Blackjack Table', severity: 8, bestAction: 'observe', detail: 'A staff member needs rotation before morale slips.' },
  { id: 'chip-irregularity', title: 'Chip irregularity', table: 'Dice Lounge', severity: 18, bestAction: 'analyst', detail: 'A simulated chip mismatch appeared in the backroom ledger.' },
  { id: 'streamer-surge', title: 'Streamer crowd surge', table: 'Crash Terminal', severity: 9, bestAction: 'manager', detail: 'A simulated stream drew extra guests to a volatile table.' },
  { id: 'vault-anomaly', title: 'Vault door anomaly', table: 'Vault Hall', severity: 20, bestAction: 'analyst', detail: 'A sensor flicker was recorded near the decorative Vault doors.' }
];

export const EDGE_TOOLS = [
  { id: 'blackjack-lens', name: 'Blackjack Probability Lens', cost: 3, game: 'Blackjack', hint: 'Estimates broad shoe texture. It never guarantees a hand outcome.' },
  { id: 'crash-analyzer', name: 'Crash Range Analyzer', cost: 4, game: 'Crash', hint: 'Shows low, medium, or high simulator volatility mood.' },
  { id: 'roulette-map', name: 'Roulette Heat Map', cost: 3, game: 'Roulette', hint: 'Visualizes recent-number clusters without predicting future numbers.' },
  { id: 'mines-scanner', name: 'Mines Risk Scanner', cost: 5, game: 'Mines', hint: 'Reports a risk mood. It never reveals mine positions.' },
  { id: 'plinko-meter', name: 'Plinko Volatility Meter', cost: 3, game: 'Plinko', hint: 'Explains selected row/risk volatility in simulator terms.' }
];

export const OPERATIONS_EVENTS = [
  { id: 'vip-whale-arrived', title: 'VIP Whale Arrived', tone: 'vip', choices: ['private-table', 'luxury-comp', 'assign-host'] },
  { id: 'dealer-burnout', title: 'Dealer Burnout', tone: 'staff', choices: ['rotate-staff', 'train-team', 'ignore'] },
  { id: 'table-heat-spike', title: 'Table Heat Spike', tone: 'heat', choices: ['cool-table', 'boost-security', 'ride-wave'] },
  { id: 'security-alert', title: 'Security Alert', tone: 'alert', choices: ['observe', 'assign-analyst', 'warn-floor'] },
  { id: 'lucky-crowd-night', title: 'Lucky Crowd Night', tone: 'crowd', choices: ['extend-hours', 'vip-host', 'bank-income'] },
  { id: 'maintenance-needed', title: 'Maintenance Needed', tone: 'service', choices: ['call-technician', 'delay', 'premium-service'] },
  { id: 'influencer-visit', title: 'Influencer Visit', tone: 'crowd', choices: ['stage-moment', 'quiet-room', 'ignore'] },
  { id: 'vault-audit', title: 'Vault Audit', tone: 'vault', choices: ['review-log', 'assign-analyst', 'founder-file'] }
];

export const LORE_FILES = [
  { id: 'founder-brief', title: 'Founder Brief: First Stone', unlock: 'House Edge unlock', body: 'A clipped executive memo references The Founder and the first onyx stone placed under the lobby floor.' },
  { id: 'black-card-record', title: 'Black Card Record 07', unlock: 'Management rank: Table Owner', body: 'A silent Black Card guest appears in old logs under several different names.' },
  { id: 'vault-echo', title: 'Vault Echo Log', unlock: 'Vault level 5', body: 'A Vault camera caught a gold reflection even while the room was empty.' },
  { id: 'syndicate-rumor', title: 'Onyx Syndicate Rumor', unlock: 'Resolve 2 incidents', body: 'Staff whispers describe an invitation-only circle that never appears on public schedules.' },
  { id: 'midnight-door', title: 'Midnight Door Note', unlock: 'Own 3 tables', body: 'A door behind the roulette wall is labeled only with a matte black diamond.' },
  { id: 'director-ledger', title: 'Director Ledger Fragment', unlock: 'High Roller score 5000', body: 'The ledger lists reputation, not credits, as the true currency of Onyx.' }
];

const defaultHouseEdge = () => ({
  unlocked: false,
  reputation: 20,
  securityRisk: 18,
  staffMorale: 72,
  tableHeat: 24,
  lastIncomeClaimAt: null,
  lifetimeHouseIncome: 0,
  ownedTables: [],
  staffRoster: [],
  assignments: {},
  npcTraffic: {
    mood: 'Curious',
    spendingPressure: 28,
    vipPresence: 8,
    tableDemand: 34,
    mix: { tourists: 38, regulars: 26, highRollers: 10, vipWhales: 2, suspiciousPlayers: 4, streamers: 3, nightGuests: 17 }
  },
  surveillanceAlerts: [],
  surveillanceResolved: 0,
  operationsLog: [],
  edgeTools: {},
  toolReports: [],
  loreUnlocked: ['founder-brief'],
  eventHistory: [],
  activeEvent: null
});

const defaultPenthouse = () => ({
  ownedAssets: [],
  equippedAssets: [],
  wishlist: [],
  lastIncomeClaimAt: null,
  incomeReadyAt: null,
  lifetimeIncome: 0
});

const defaultInvestments = () => ({
  active: [],
  history: []
});

const defaultLuxuryMarket = () => ({
  state: 'Stable',
  hotAssetId: 'obsidian-chronograph',
  rareAssetId: 'black-diamond-sculpture',
  multipliers: {},
  updatedAt: null,
  ticker: []
});

const defaultOnyxNotes = () => ({
  balance: 0,
  history: []
});

const defaultLiveCasino = () => ({
  onlinePlayers: 145,
  hotGame: 'crash',
  activities: [],
  tableActivity: [],
  updatedAt: null
});

const defaultTonightAtOnyx = () => ({
  activeEventId: 'diamondRush',
  endsAt: null,
  xpMultiplier: 1.1,
  vaultMultiplier: 1.15,
  rewardMultiplier: 1,
  palette: 'diamond',
  history: []
});

const defaultVault = () => ({
  level: 1,
  xp: 0,
  keys: 0,
  crates: { daily: 0, elite: 0, mega: 0 },
  inventory: ['border-gold', 'chip-obsidian', 'lobby-midnight'],
  recentRewards: [],
  lastReveal: null
});

const defaultCosmetics = () => ({
  equipped: {
    profileBorder: 'border-gold',
    chipSkin: 'chip-obsidian',
    cardBack: 'cards-midnight',
    rouletteTheme: 'roulette-blood',
    lobbyTheme: 'lobby-midnight'
  }
});

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
  version: 3,
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
    hideRecentWins: false,
    soundEnabled: true
  },
  liveCasino: defaultLiveCasino(),
  tonightAtOnyx: defaultTonightAtOnyx(),
  vault: defaultVault(),
  cosmetics: defaultCosmetics(),
  penthouse: defaultPenthouse(),
  investments: defaultInvestments(),
  luxuryMarket: defaultLuxuryMarket(),
  onyxNotes: defaultOnyxNotes(),
  highRoller: {
    invited: false,
    lastViewedAt: null
  },
  houseEdge: defaultHouseEdge(),
  retention: {
    comebackClaimedDate: null,
    lastPromptAt: null,
    luckyStreak: 0
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
  if (state.highRoller && getHighRollerAccess().access) state.highRoller.invited = true;
  if (state.houseEdge && getHouseEdgeAccess().unlocked) {
    state.houseEdge.unlocked = true;
    maybeUnlockLore();
  }
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
  addVaultProgress(Math.max(3, Math.floor(bet / 35)), false);
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
    addVaultProgress(Math.max(4, Math.floor(profit / 45)), false);
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
    emitBigWinHook(game, profit, wager);
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
  const boostedAmount = Math.floor(amount * (1 + getAssetBoosts().daily));
  const xp = Math.floor(reward.xp * tierRewardMultiplier());
  state.balance += boostedAmount;
  addXP(xp, false);
  updateMissionProgress('dailyBonus', 1);
  state.transactions.unshift({ id: id(), game: 'Rewards', bet: 0, result: `Daily Day ${reward.day}`, profit: boostedAmount, detail: `${tier.name} daily calendar reward`, time: timeNow() });
  state.transactions = state.transactions.slice(0, 24);
  addRewardClaim(`Daily Day ${reward.day}`, boostedAmount, xp, `${tier.name} multiplier`);
  addVaultCrate('daily', 1, false);
  emitSoundHook('bonus-claim', { amount: boostedAmount });
  saveState();
  return boostedAmount;
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
  addVaultProgress(Math.max(20, Math.floor(xp / 2)), false);
  saveState();
  return { credits, xp };
}

export function addXP(amount, shouldSave = true) {
  const gain = Math.max(0, Math.floor((Number(amount) || 0) * getEventXpMultiplier()));
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

export function addVaultProgress(amount, shouldSave = true) {
  const gain = Math.max(0, Math.floor((Number(amount) || 0) * getEventVaultMultiplier()));
  if (!gain) return;
  state.vault.xp += gain;
  // Vault levels are long-term progression: every level grants a key, milestone levels add crates.
  while (state.vault.xp >= vaultXpNeeded()) {
    state.vault.xp -= vaultXpNeeded();
    state.vault.level += 1;
    state.vault.keys += 1;
    if (state.vault.level % 5 === 0) addVaultCrate('elite', 1, false);
    if (state.vault.level % 10 === 0) addVaultCrate('mega', 1, false);
  }
  if (shouldSave) saveState();
}

export function addVaultCrate(type, amount = 1, shouldSave = true) {
  const key = VAULT_CRATES[type] ? type : 'daily';
  state.vault.crates[key] = safeNumber(state.vault.crates[key], 0) + Math.max(0, Math.floor(Number(amount) || 0));
  if (shouldSave) saveState();
}

export function openVaultCrate(type) {
  const key = VAULT_CRATES[type] ? type : 'daily';
  const crate = VAULT_CRATES[key];
  if ((state.vault.crates[key] || 0) <= 0) throw new Error(`${crate.label} is not ready yet`);
  if (state.vault.keys < crate.keyCost) throw new Error(`Need ${crate.keyCost} Vault ${crate.keyCost === 1 ? 'Key' : 'Keys'}`);
  state.vault.crates[key] -= 1;
  state.vault.keys -= crate.keyCost;
  addVaultProgress(crate.xp, false);
  const reward = chooseVaultReward(key);
  const duplicate = state.vault.inventory.includes(reward.id);
  if (!duplicate) state.vault.inventory.push(reward.id);
  if (duplicate) state.vault.keys += 1;
  state.vault.lastReveal = { ...reward, duplicate, time: timeNow() };
  state.vault.recentRewards.unshift(state.vault.lastReveal);
  state.vault.recentRewards = state.vault.recentRewards.slice(0, 12);
  addRewardClaim(crate.label, 0, crate.xp, `${reward.rarity} cosmetic: ${reward.name}`);
  emitSoundHook('bonus-claim', { source: 'vault' });
  saveState();
  return state.vault.lastReveal;
}

export function equipCosmetic(idToEquip) {
  const item = COSMETICS.find(cosmetic => cosmetic.id === idToEquip);
  if (!item || !state.vault.inventory.includes(item.id)) throw new Error('Cosmetic is not unlocked');
  state.cosmetics.equipped[item.type] = item.id;
  saveState();
  return item;
}

export function pushLiveActivity(item) {
  const next = {
    id: id(),
    text: String(item?.text || 'A simulated table updated.').slice(0, 140),
    tone: String(item?.tone || 'neutral').slice(0, 20),
    game: String(item?.game || '').slice(0, 20),
    time: timeNow()
  };
  state.liveCasino.activities.unshift(next);
  state.liveCasino.activities = state.liveCasino.activities.slice(0, 10);
  saveState();
  return next;
}

export function updateLiveCasino(patch = {}) {
  state.liveCasino = { ...state.liveCasino, ...patch, updatedAt: timeNow() };
  if (Array.isArray(state.liveCasino.tableActivity)) state.liveCasino.tableActivity = state.liveCasino.tableActivity.slice(0, 6);
  saveState();
}

export function rotateOnyxEvent(event, durationMinutes = 75) {
  if (!event?.id) return state.tonightAtOnyx;
  const current = state.tonightAtOnyx.activeEventId;
  if (current && current !== event.id) {
    state.tonightAtOnyx.history.unshift({ id: current, endedAt: timeNow() });
    state.tonightAtOnyx.history = state.tonightAtOnyx.history.slice(0, 6);
  }
  state.tonightAtOnyx.activeEventId = event.id;
  state.tonightAtOnyx.endsAt = new Date(Date.now() + durationMinutes * 60 * 1000).toISOString();
  state.tonightAtOnyx.xpMultiplier = Number(event.xpMultiplier || 1);
  state.tonightAtOnyx.vaultMultiplier = Number(event.vaultMultiplier || 1);
  state.tonightAtOnyx.rewardMultiplier = Number(event.rewardMultiplier || 1);
  state.tonightAtOnyx.palette = String(event.palette || 'diamond');
  saveState();
  return state.tonightAtOnyx;
}

export function claimComebackBonus() {
  const today = dateKey(new Date());
  if (state.retention.comebackClaimedDate === today) throw new Error('Comeback reward already claimed today');
  if (state.sessionProfit > -2000) throw new Error('Comeback reward is not active yet');
  const amount = Math.min(1800, Math.max(500, Math.abs(state.sessionProfit) * 0.12));
  state.retention.comebackClaimedDate = today;
  state.balance += Math.floor(amount);
  addVaultProgress(80, false);
  state.transactions.unshift({ id: id(), game: 'Host', bet: 0, result: 'Comeback Reward', profit: Math.floor(amount), detail: 'Session recovery credits', time: timeNow() });
  addRewardClaim('Comeback Host', Math.floor(amount), 0, 'Session recovery reward');
  emitSoundHook('bonus-claim', { amount });
  saveState();
  return Math.floor(amount);
}

export function buyLuxuryAsset(assetId) {
  const asset = getLuxuryAsset(assetId);
  if (!asset) throw new Error('Luxury asset not found');
  if (state.penthouse.ownedAssets.includes(asset.id)) throw new Error('Asset already owned');
  const price = getLuxuryAssetValue(asset.id);
  if (state.balance < price) throw new Error(`Not enough credits. Need ${formatCredits(price)}`);
  state.balance -= price;
  state.penthouse.ownedAssets.push(asset.id);
  if (state.penthouse.equippedAssets.length < 3) state.penthouse.equippedAssets.push(asset.id);
  state.transactions.unshift({ id: id(), game: 'Penthouse', bet: price, result: 'Asset Purchase', profit: -price, detail: asset.name, time: timeNow() });
  addXP(Math.floor(asset.prestige / 10), false);
  addVaultProgress(Math.floor(asset.prestige / 8), false);
  awardOnyxNotes(Math.max(1, Math.floor(asset.prestige / 500)), `Purchased ${asset.name}`, false);
  saveState();
  return asset;
}

export function sellLuxuryAsset(assetId) {
  const asset = getLuxuryAsset(assetId);
  if (!asset || !state.penthouse.ownedAssets.includes(asset.id)) throw new Error('Asset is not owned');
  const value = Math.floor(getLuxuryAssetValue(asset.id) * 0.65);
  state.penthouse.ownedAssets = state.penthouse.ownedAssets.filter(idToKeep => idToKeep !== asset.id);
  state.penthouse.equippedAssets = state.penthouse.equippedAssets.filter(idToKeep => idToKeep !== asset.id);
  state.balance += value;
  state.transactions.unshift({ id: id(), game: 'Penthouse', bet: 0, result: 'Asset Sale', profit: value, detail: asset.name, time: timeNow() });
  saveState();
  return value;
}

export function equipLuxuryAsset(assetId) {
  const asset = getLuxuryAsset(assetId);
  if (!asset || !state.penthouse.ownedAssets.includes(asset.id)) throw new Error('Asset is not owned');
  state.penthouse.equippedAssets = [asset.id, ...state.penthouse.equippedAssets.filter(idToKeep => idToKeep !== asset.id)].slice(0, 3);
  saveState();
  return asset;
}

export function toggleWishlistAsset(assetId) {
  if (!getLuxuryAsset(assetId)) throw new Error('Luxury asset not found');
  const exists = state.penthouse.wishlist.includes(assetId);
  state.penthouse.wishlist = exists
    ? state.penthouse.wishlist.filter(idToKeep => idToKeep !== assetId)
    : [...state.penthouse.wishlist, assetId].slice(0, 10);
  saveState();
  return !exists;
}

export function claimPenthouseIncome() {
  const ready = getPassiveIncomeReady();
  if (ready <= 0) throw new Error('Penthouse income is not ready yet');
  state.balance += ready;
  state.penthouse.lifetimeIncome += ready;
  state.penthouse.lastIncomeClaimAt = new Date().toISOString();
  state.penthouse.incomeReadyAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  state.transactions.unshift({ id: id(), game: 'Penthouse', bet: 0, result: 'Income Claimed', profit: ready, detail: 'Luxury asset income', time: timeNow() });
  addRewardClaim('Penthouse Income', ready, 0, 'Hourly lifestyle income');
  saveState();
  return ready;
}

export function startInvestment(optionId, amount) {
  const option = INVESTMENT_OPTIONS[optionId];
  const principal = safeNumber(amount, 0);
  if (!option) throw new Error('Vault Investment not found');
  if (principal < option.min) throw new Error(`Minimum is ${formatCredits(option.min)}`);
  if (state.balance < principal) throw new Error(`Not enough credits. Balance: ${formatCredits(state.balance)}`);
  state.balance -= principal;
  const investment = {
    id: id(),
    optionId,
    principal,
    startedAt: new Date().toISOString(),
    unlocksAt: new Date(Date.now() + option.durationMs).toISOString(),
    collected: false
  };
  state.investments.active.unshift(investment);
  state.transactions.unshift({ id: id(), game: 'Vault Investment', bet: principal, result: option.label, profit: -principal, detail: 'Credits locked in browser-local bond', time: timeNow() });
  saveState();
  return investment;
}

export function collectInvestment(investmentId) {
  const investment = state.investments.active.find(item => item.id === investmentId);
  if (!investment) throw new Error('Investment not found');
  if (Date.parse(investment.unlocksAt) > Date.now()) throw new Error('Investment has not matured yet');
  const option = INVESTMENT_OPTIONS[investment.optionId];
  const riskHit = option.risk > 0 && seededRisk(investment.id) < option.risk;
  const profit = riskHit ? -Math.floor(investment.principal * option.returnRate * 0.35) : Math.floor(investment.principal * option.returnRate);
  const payout = Math.max(0, investment.principal + profit);
  state.balance += payout;
  addXP(option.xp, false);
  addVaultProgress(Math.floor(option.xp * 1.4), false);
  awardOnyxNotes(Math.max(1, Math.floor(option.xp / 180)), `${option.label} matured`, false);
  state.investments.active = state.investments.active.filter(item => item.id !== investment.id);
  state.investments.history.unshift({ ...investment, payout, profit, riskHit, collectedAt: new Date().toISOString() });
  state.investments.history = state.investments.history.slice(0, 20);
  state.transactions.unshift({ id: id(), game: 'Vault Investment', bet: 0, result: riskHit ? 'Risk Adjusted' : 'Matured', profit: payout, detail: option.label, time: timeNow() });
  saveState();
  return { payout, profit, riskHit };
}

export function refreshLuxuryMarket(force = false) {
  const today = dateKey(new Date());
  if (!force && state.luxuryMarket.updatedAt === today) return state.luxuryMarket;
  const marketState = pick(MARKET_STATES);
  const hot = pick(LUXURY_ASSETS);
  const rare = pick(LUXURY_ASSETS.filter(asset => asset.rarity === 'Epic' || asset.rarity === 'Legendary' || asset.rarity === 'Onyx'));
  const base = { Stable: 1, Rising: 1.08, Cooling: 0.94, 'Rare Demand': 1.12, 'VIP Frenzy': 1.18 }[marketState] || 1;
  state.luxuryMarket = {
    state: marketState,
    hotAssetId: hot.id,
    rareAssetId: rare.id,
    updatedAt: today,
    multipliers: Object.fromEntries(LUXURY_ASSETS.map(asset => {
      const modifier = asset.id === hot.id ? 1.12 : asset.id === rare.id ? 1.22 : 0.96 + Math.random() * 0.12;
      return [asset.id, Number((base * modifier).toFixed(2))];
    })),
    ticker: [
      `${marketState} market opened for luxury assets`,
      `${hot.name} is drawing attention`,
      `${rare.name} appeared as a rare listing`
    ]
  };
  saveState();
  return state.luxuryMarket;
}

export function awardOnyxNotes(amount, detail = 'Onyx Notes reward', shouldSave = true) {
  const notes = Math.max(0, Math.floor(Number(amount) || 0));
  if (!notes) return 0;
  state.onyxNotes.balance += notes;
  state.onyxNotes.history.unshift({ amount: notes, detail, time: timeNow() });
  state.onyxNotes.history = state.onyxNotes.history.slice(0, 20);
  if (shouldSave) saveState();
  return notes;
}

export function getHouseEdgeAccess() {
  const lifestyle = getLifestyleLevel();
  const ownsShares = state.penthouse.ownedAssets.includes('onyx-house-shares');
  const vipOk = ['Gold', 'Platinum', 'Onyx'].includes(getVipTier().name);
  const unlocked = lifestyle >= 5 || ownsShares || vipOk || !!state.houseEdge.unlocked;
  return { unlocked, lifestyle, ownsShares, vipOk };
}

export function refreshNpcTraffic() {
  const tables = state.houseEdge.ownedTables.length;
  const staffPower = getStaffPower();
  const event = state.tonightAtOnyx?.rewardMultiplier || 1;
  const prestige = getPrestigeValue();
  const reputation = safeNumber(state.houseEdge.reputation, 20);
  const security = safeNumber(state.houseEdge.securityRisk, 18);
  const demand = clamp(22 + tables * 9 + reputation * 0.45 + staffPower * 0.12 + (event - 1) * 18, 5, 96);
  const vipPresence = clamp(5 + getLifestyleLevel() * 2.2 + (getHighRollerAccess().access ? 12 : 0) + prestige / 900, 0, 55);
  const suspiciousPlayers = clamp(3 + security / 7 + tables * 0.7 - staffPower / 45, 1, 28);
  state.houseEdge.npcTraffic = {
    mood: reputation > 72 ? 'Electric' : reputation > 48 ? 'Confident' : security > 58 ? 'Uneasy' : 'Curious',
    spendingPressure: Math.floor(clamp(demand + vipPresence * 0.4, 5, 98)),
    vipPresence: Math.floor(vipPresence),
    tableDemand: Math.floor(demand),
    mix: {
      tourists: Math.floor(clamp(42 - tables * 1.5, 15, 48)),
      regulars: Math.floor(clamp(24 + reputation / 6, 16, 42)),
      highRollers: Math.floor(clamp(8 + vipPresence / 3, 3, 30)),
      vipWhales: Math.floor(clamp(vipPresence / 12, 0, 8)),
      suspiciousPlayers: Math.floor(suspiciousPlayers),
      streamers: Math.floor(clamp(2 + demand / 24, 1, 8)),
      nightGuests: Math.floor(clamp(14 + tables * 2, 8, 32))
    }
  };
  return state.houseEdge.npcTraffic;
}

export function getHouseEdgeSummary() {
  const access = getHouseEdgeAccess();
  if (access.unlocked && !state.houseEdge.unlocked) state.houseEdge.unlocked = true;
  refreshNpcTraffic();
  const incomeRate = getHouseIncomeRate();
  return {
    access,
    rank: getManagementRank(),
    incomeRate,
    incomeReady: getHouseIncomeReady(),
    staffPower: getStaffPower(),
    tableCount: state.houseEdge.ownedTables.length,
    averageCondition: averageTableMetric('condition'),
    averagePopularity: averageTableMetric('popularity')
  };
}

export function buyTableLicense(tableId) {
  const license = getTableLicense(tableId);
  if (!license) throw new Error('Table license not found');
  if (state.houseEdge.ownedTables.some(table => table.licenseId === tableId)) throw new Error('Table license already owned');
  if (state.balance < license.cost) throw new Error(`Not enough credits. Need ${formatCredits(license.cost)}`);
  state.balance -= license.cost;
  state.houseEdge.ownedTables.push({
    id: id(),
    licenseId: tableId,
    level: 1,
    condition: 88,
    popularity: license.popularity,
    heat: 24 + license.risk,
    assignedStaffId: null,
    purchasedAt: timeNow()
  });
  state.houseEdge.reputation += license.reputation;
  state.houseEdge.securityRisk = clamp(state.houseEdge.securityRisk + Math.ceil(license.risk / 4), 0, 100);
  logOperation(`Purchased ${license.name} license`, -license.cost, 'Table ownership');
  addXP(Math.floor(license.cost / 500), false);
  addVaultProgress(Math.floor(license.cost / 650), false);
  saveState();
  return license;
}

export function upgradeHouseTable(tableId) {
  const table = getOwnedTable(tableId);
  if (!table) throw new Error('Owned table not found');
  const cost = getTableUpgradeCost(table);
  if (state.balance < cost) throw new Error(`Not enough credits. Need ${formatCredits(cost)}`);
  state.balance -= cost;
  table.level += 1;
  table.condition = clamp(table.condition + 8, 0, 100);
  table.popularity = clamp(table.popularity + 6, 0, 100);
  table.heat = clamp(table.heat + 3, 0, 100);
  state.houseEdge.reputation += 2;
  logOperation(`Upgraded ${getTableLicense(table.licenseId)?.name || 'table'} to level ${table.level}`, -cost, 'Table upgrade');
  saveState();
  return table;
}

export function repairHouseTable(tableId) {
  const table = getOwnedTable(tableId);
  if (!table) throw new Error('Owned table not found');
  const cost = Math.max(250, Math.floor((100 - table.condition) * 35));
  if (state.balance < cost) throw new Error(`Not enough credits. Need ${formatCredits(cost)}`);
  state.balance -= cost;
  table.condition = clamp(table.condition + 28, 0, 100);
  table.heat = clamp(table.heat - 6, 0, 100);
  state.houseEdge.securityRisk = clamp(state.houseEdge.securityRisk - 2, 0, 100);
  logOperation(`Maintained ${getTableLicense(table.licenseId)?.name || 'table'}`, -cost, 'Maintenance');
  saveState();
  return table;
}

export function hireStaff(candidateId) {
  const candidate = STAFF_CANDIDATES.find(staff => staff.id === candidateId);
  if (!candidate) throw new Error('Staff candidate not found');
  if (state.houseEdge.staffRoster.some(staff => staff.candidateId === candidateId)) throw new Error('Staff member already hired');
  const hireCost = candidate.salary * 2;
  if (state.balance < hireCost) throw new Error(`Not enough credits. Need ${formatCredits(hireCost)}`);
  state.balance -= hireCost;
  const staff = { ...candidate, id: id(), candidateId, hiredAt: timeNow(), assignedTableId: null, training: 0 };
  state.houseEdge.staffRoster.push(staff);
  state.houseEdge.staffMorale = clamp(state.houseEdge.staffMorale + 2, 0, 100);
  logOperation(`Hired ${candidate.name}, ${candidate.role}`, -hireCost, candidate.trait);
  saveState();
  return staff;
}

export function assignStaff(tableId, staffId) {
  const table = getOwnedTable(tableId);
  const staff = state.houseEdge.staffRoster.find(member => member.id === staffId);
  if (!table || !staff) throw new Error('Assignment target not found');
  table.assignedStaffId = staff.id;
  staff.assignedTableId = table.id;
  state.houseEdge.assignments[table.id] = staff.id;
  logOperation(`${staff.name} assigned to ${getTableLicense(table.licenseId)?.name || 'table'}`, 0, staff.role);
  saveState();
  return { table, staff };
}

export function trainStaff(staffId) {
  const staff = state.houseEdge.staffRoster.find(member => member.id === staffId);
  if (!staff) throw new Error('Staff member not found');
  const cost = Math.floor(staff.salary * 1.5);
  if (state.balance < cost) throw new Error(`Not enough credits. Need ${formatCredits(cost)}`);
  state.balance -= cost;
  staff.skill = clamp(staff.skill + 7, 0, 100);
  staff.morale = clamp(staff.morale + 4, 0, 100);
  staff.training += 1;
  state.houseEdge.staffMorale = clamp(state.houseEdge.staffMorale + 1, 0, 100);
  logOperation(`Trained ${staff.name}`, -cost, 'Staff training');
  saveState();
  return staff;
}

export function payStaffSalary() {
  const total = state.houseEdge.staffRoster.reduce((sum, staff) => sum + staff.salary, 0);
  if (total <= 0) throw new Error('No staff salaries are due');
  if (state.balance < total) throw new Error(`Not enough credits. Need ${formatCredits(total)}`);
  state.balance -= total;
  state.houseEdge.staffMorale = clamp(state.houseEdge.staffMorale + 6, 0, 100);
  state.houseEdge.staffRoster.forEach(staff => { staff.morale = clamp(staff.morale + 5, 0, 100); });
  logOperation('Paid staff salary cycle', -total, 'Morale improved');
  saveState();
  return total;
}

export function fireStaff(staffId) {
  const staff = state.houseEdge.staffRoster.find(member => member.id === staffId);
  if (!staff) throw new Error('Staff member not found');
  state.houseEdge.staffRoster = state.houseEdge.staffRoster.filter(member => member.id !== staff.id);
  state.houseEdge.ownedTables.forEach(table => { if (table.assignedStaffId === staff.id) table.assignedStaffId = null; });
  delete state.houseEdge.assignments[staff.assignedTableId];
  state.houseEdge.staffMorale = clamp(state.houseEdge.staffMorale - 5, 0, 100);
  logOperation(`Released ${staff.name} from staff`, 0, 'Roster change');
  saveState();
  return staff;
}

export function collectHouseIncome() {
  const amount = getHouseIncomeReady();
  if (amount <= 0) throw new Error('House income is not ready yet');
  state.balance += amount;
  state.houseEdge.lifetimeHouseIncome += amount;
  state.houseEdge.lastIncomeClaimAt = new Date().toISOString();
  state.houseEdge.ownedTables.forEach(table => {
    table.condition = clamp(table.condition - 2, 0, 100);
    table.heat = clamp(table.heat + 1, 0, 100);
  });
  addVaultProgress(Math.floor(amount / 35), false);
  awardOnyxNotes(Math.max(1, Math.floor(amount / 3000)), 'House income milestone', false);
  logOperation('Collected house income', amount, 'Operations income');
  saveState();
  return amount;
}

export function seedSurveillanceAlert() {
  if (state.houseEdge.surveillanceAlerts.length >= 4) return null;
  const incident = pick(SURVEILLANCE_INCIDENTS);
  const alert = { id: id(), incidentId: incident.id, createdAt: timeNow(), status: 'open' };
  state.houseEdge.surveillanceAlerts.unshift(alert);
  logOperation(`Surveillance alert: ${incident.title}`, 0, 'Control room');
  saveState();
  return alert;
}

export function resolveSurveillanceAlert(alertId, action) {
  const alert = state.houseEdge.surveillanceAlerts.find(item => item.id === alertId);
  if (!alert) throw new Error('Surveillance alert not found');
  const incident = SURVEILLANCE_INCIDENTS.find(item => item.id === alert.incidentId);
  const good = action === incident.bestAction;
  const credit = good ? 450 + incident.severity * 22 : -Math.floor(incident.severity * 18);
  state.balance = Math.max(0, state.balance + credit);
  state.houseEdge.reputation = clamp(state.houseEdge.reputation + (good ? 4 : -2), 0, 100);
  state.houseEdge.securityRisk = clamp(state.houseEdge.securityRisk + (good ? -5 : 4), 0, 100);
  state.houseEdge.staffMorale = clamp(state.houseEdge.staffMorale + (good ? 2 : -2), 0, 100);
  state.houseEdge.surveillanceResolved += good ? 1 : 0;
  if (good) {
    addVaultProgress(90 + incident.severity * 2, false);
    awardOnyxNotes(1, `Resolved ${incident.title}`, false);
  }
  state.houseEdge.surveillanceAlerts = state.houseEdge.surveillanceAlerts.filter(item => item.id !== alert.id);
  logOperation(`${good ? 'Resolved' : 'Closed'} ${incident.title}`, credit, actionLabel(action));
  maybeUnlockLore();
  saveState();
  return { good, credit, incident };
}

export function unlockEdgeTool(toolId) {
  const tool = EDGE_TOOLS.find(item => item.id === toolId);
  if (!tool) throw new Error('Edge tool not found');
  if (state.houseEdge.edgeTools[toolId]) throw new Error('Tool already unlocked');
  if (state.onyxNotes.balance < tool.cost) throw new Error(`Need ${tool.cost} Onyx Notes`);
  state.onyxNotes.balance -= tool.cost;
  state.houseEdge.edgeTools[toolId] = { unlockedAt: timeNow(), uses: 0 };
  logOperation(`Unlocked ${tool.name}`, 0, 'Simulator edge tool');
  saveState();
  return tool;
}

export function useEdgeTool(toolId) {
  const tool = EDGE_TOOLS.find(item => item.id === toolId);
  if (!tool || !state.houseEdge.edgeTools[toolId]) throw new Error('Tool is locked');
  const report = {
    toolId,
    text: edgeToolReport(tool),
    time: timeNow()
  };
  state.houseEdge.edgeTools[toolId].uses += 1;
  state.houseEdge.toolReports.unshift(report);
  state.houseEdge.toolReports = state.houseEdge.toolReports.slice(0, 8);
  logOperation(`${tool.name} generated a simulator hint`, 0, tool.game);
  saveState();
  return report;
}

export function generateOperationsEvent() {
  const event = pick(OPERATIONS_EVENTS);
  state.houseEdge.activeEvent = { id: id(), eventId: event.id, createdAt: timeNow() };
  logOperation(`Operations event: ${event.title}`, 0, 'Decision ready');
  saveState();
  return state.houseEdge.activeEvent;
}

export function resolveOperationsEvent(choice) {
  const active = state.houseEdge.activeEvent;
  if (!active) throw new Error('No operations event is active');
  const event = OPERATIONS_EVENTS.find(item => item.id === active.eventId);
  const strongChoice = event.choices.includes(choice);
  const rep = strongChoice ? 3 : -1;
  const income = strongChoice ? 650 + state.houseEdge.ownedTables.length * 90 : 120;
  state.balance += income;
  state.houseEdge.reputation = clamp(state.houseEdge.reputation + rep, 0, 100);
  state.houseEdge.securityRisk = clamp(state.houseEdge.securityRisk + (choice.includes('security') || choice.includes('analyst') ? -3 : 1), 0, 100);
  state.houseEdge.staffMorale = clamp(state.houseEdge.staffMorale + (choice.includes('ignore') ? -4 : 2), 0, 100);
  awardOnyxNotes(strongChoice ? 1 : 0, `Operations event: ${event.title}`, false);
  addVaultProgress(strongChoice ? 80 : 35, false);
  state.houseEdge.eventHistory.unshift({ event: event.title, choice, income, time: timeNow() });
  state.houseEdge.eventHistory = state.houseEdge.eventHistory.slice(0, 12);
  state.houseEdge.activeEvent = null;
  logOperation(`Handled ${event.title}`, income, choiceLabel(choice));
  saveState();
  return { event, income, strongChoice };
}

export function unlockLoreFile(fileId) {
  const file = LORE_FILES.find(item => item.id === fileId);
  if (!file) throw new Error('Lore file not found');
  if (!state.houseEdge.loreUnlocked.includes(file.id)) state.houseEdge.loreUnlocked.push(file.id);
  saveState();
  return file;
}

export function getManagementRank() {
  const tableCount = state.houseEdge.ownedTables.length;
  const staffPower = getStaffPower();
  const score = tableCount * 520 + state.houseEdge.reputation * 18 + getNetWorth() / 90 + staffPower * 5 + state.houseEdge.surveillanceResolved * 220 + getHighRollerScore() / 8;
  const title = score >= 9000 ? 'The House'
    : score >= 6800 ? 'Onyx Director'
    : score >= 5000 ? 'Executive Host'
    : score >= 3400 ? 'House Partner'
    : score >= 2100 ? 'Floor Operator'
    : score >= 900 ? 'Table Owner'
    : getHouseEdgeAccess().unlocked ? 'Investor'
    : 'Guest';
  return { title, score: Math.floor(score) };
}

export function getTableLicense(idToFind) { return TABLE_LICENSES.find(table => table.id === idToFind); }
export function getStaffCandidate(idToFind) { return STAFF_CANDIDATES.find(staff => staff.id === idToFind); }
export function getSurveillanceIncident(idToFind) { return SURVEILLANCE_INCIDENTS.find(item => item.id === idToFind); }
export function getOperationsEvent(idToFind) { return OPERATIONS_EVENTS.find(item => item.id === idToFind); }
export function getLoreFile(idToFind) { return LORE_FILES.find(item => item.id === idToFind); }

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
export function vaultXpNeeded() { return 500 + state.vault.level * 180; }
export function getVaultProgress() {
  const needed = vaultXpNeeded();
  return { level: state.vault.level, xp: state.vault.xp, needed, percent: Math.max(0, Math.min(100, (state.vault.xp / needed) * 100)) };
}
export function getPrestigeTitle() {
  return getPrestigeStatus().title;
}
export function getLifestyleLevel() {
  return Math.max(1, Math.floor((getNetWorth() + getPrestigeValue()) / 18000) + 1);
}
export function getNetWorth() {
  return state.balance + state.penthouse.ownedAssets.reduce((sum, assetId) => sum + getLuxuryAssetValue(assetId), 0);
}
export function getPrestigeValue() {
  return state.penthouse.ownedAssets.reduce((sum, assetId) => sum + (getLuxuryAsset(assetId)?.prestige || 0), 0);
}
export function getPassiveIncomePerHour() {
  return state.penthouse.ownedAssets.reduce((sum, assetId) => sum + (getLuxuryAsset(assetId)?.income || 0), 0);
}
export function getPassiveIncomeReady() {
  if (!state.penthouse.lastIncomeClaimAt) return getPassiveIncomePerHour();
  const elapsedHours = Math.min(24, Math.max(0, (Date.now() - Date.parse(state.penthouse.lastIncomeClaimAt)) / (60 * 60 * 1000)));
  return Math.floor(getPassiveIncomePerHour() * elapsedHours);
}
export function getLuxuryAsset(assetId) { return LUXURY_ASSETS.find(asset => asset.id === assetId); }
export function getLuxuryAssetValue(assetId) {
  const asset = getLuxuryAsset(assetId);
  if (!asset) return 0;
  return Math.max(1, Math.floor(asset.price * Number(state.luxuryMarket.multipliers?.[asset.id] || 1)));
}
export function getAssetBoosts() {
  return state.penthouse.ownedAssets.reduce((boosts, assetId) => {
    const asset = getLuxuryAsset(assetId);
    if (!asset) return boosts;
    boosts.vip += asset.vipBoost || 0;
    boosts.vault += asset.vaultBoost || 0;
    boosts.daily += asset.dailyBoost || 0;
    return boosts;
  }, { vip: 0, vault: 0, daily: 0 });
}
export function getPrestigeStatus() {
  const score = getHighRollerScore();
  const title = score >= 18000 ? 'Black Card Legend'
    : score >= 11000 ? 'Onyx Magnate'
    : score >= 7200 ? 'Vault Aristocrat'
    : score >= 4200 ? 'Penthouse Owner'
    : score >= 2200 ? 'Rising High Roller'
    : score >= 900 ? 'Velvet Guest'
    : 'Lobby Regular';
  const rank = getNetWorth() >= 250000 ? 'Obsidian Fortune'
    : getNetWorth() >= 100000 ? 'Penthouse Wealth'
    : getNetWorth() >= 35000 ? 'Luxury Builder'
    : 'Starter Stack';
  return { title, rank, score };
}
export function getHighRollerScore() {
  const achievementCount = Object.values(state.achievements).filter(item => item.unlocked).length;
  return Math.floor(getPrestigeValue() + getNetWorth() / 20 + state.vault.level * 95 + state.stats.totalWagered / 120 + state.stats.biggestWin / 4 + achievementCount * 160);
}
export function getHighRollerAccess() {
  const hasShare = state.penthouse.ownedAssets.some(assetId => getLuxuryAsset(assetId)?.highRollerAccess);
  const lifestyle = getLifestyleLevel();
  const access = getVipTier().name !== 'Bronze' || lifestyle >= 4 || getNetWorth() >= 50000 || state.vault.level >= 8 || hasShare;
  return { access, hasShare, lifestyle, score: getHighRollerScore() };
}
export function getHouseIncomeRate() {
  const shareBoost = state.penthouse.ownedAssets.includes('onyx-house-shares') ? 1.15 : 1;
  const hostBoost = state.houseEdge.staffRoster.some(staff => staff.role === 'VIP Host') ? 1.08 : 1;
  const eventBoost = Number(state.tonightAtOnyx?.rewardMultiplier || 1);
  const tableIncome = state.houseEdge.ownedTables.reduce((sum, table) => {
    const license = getTableLicense(table.licenseId);
    if (!license) return sum;
    const staff = state.houseEdge.staffRoster.find(member => member.id === table.assignedStaffId);
    const staffBoost = staff ? 1 + staff.skill / 350 : 0.82;
    const condition = clamp(table.condition, 0, 100) / 100;
    const heat = 1 + clamp(table.heat, 0, 100) / 500;
    return sum + license.baseIncome * table.level * condition * heat * staffBoost;
  }, 0);
  return Math.floor(tableIncome * shareBoost * hostBoost * eventBoost);
}
export function getHouseIncomeReady() {
  const rate = getHouseIncomeRate();
  if (!rate) return 0;
  if (!state.houseEdge.lastIncomeClaimAt) return rate;
  const elapsedHours = Math.min(12, Math.max(0, (Date.now() - Date.parse(state.houseEdge.lastIncomeClaimAt)) / (60 * 60 * 1000)));
  return Math.floor(rate * elapsedHours);
}
export function getTableUpgradeCost(table) {
  const license = getTableLicense(table.licenseId);
  return Math.floor((license?.cost || 10000) * (0.35 + table.level * 0.18));
}
export function getStaffPower() {
  return Math.floor(state.houseEdge.staffRoster.reduce((sum, staff) => sum + staff.skill + staff.morale * 0.35, 0));
}
export function getCosmetic(idToFind) { return COSMETICS.find(item => item.id === idToFind); }
export function getEquippedCosmetic(type) { return getCosmetic(state.cosmetics.equipped[type]); }
export function getEventXpMultiplier() {
  return Number(state.tonightAtOnyx?.xpMultiplier || 1) + getAssetBoosts().vip;
}
export function getEventVaultMultiplier() {
  return Number(state.tonightAtOnyx?.vaultMultiplier || 1) + getAssetBoosts().vault;
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
export function formatMultiplier(n, digits = 2) {
  const value = Number(n);
  return `${Number.isFinite(value) ? Math.max(0, value).toFixed(digits) : (0).toFixed(digits)}x`;
}
export function formatPercent(n, digits = 0) {
  const value = Number(n);
  return `${Number.isFinite(value) ? Math.max(0, Math.min(100, value)).toFixed(digits) : (0).toFixed(digits)}%`;
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
  nextState.version = 3;
  nextState.balance = safeNumber(nextState.balance, 10000);
  nextState.level = Math.max(1, safeNumber(nextState.level, 1));
  nextState.xp = safeNumber(nextState.xp, 0);
  nextState.lifetimeXp = safeNumber(nextState.lifetimeXp, nextState.xp);
  nextState.sessionProfit = safeNumber(nextState.sessionProfit, 0);
  nextState.gameSessions = mergeDeep(defaultSessions(), nextState.gameSessions || {});
  nextState.achievements = mergeDeep(defaultAchievements(), nextState.achievements || {});
  nextState.badges = Array.isArray(nextState.badges) ? nextState.badges : [];
  nextState.settings = mergeDeep(structuredClone(defaultState.settings), nextState.settings || {});
  nextState.liveCasino = mergeDeep(defaultLiveCasino(), nextState.liveCasino || {});
  nextState.tonightAtOnyx = mergeDeep(defaultTonightAtOnyx(), nextState.tonightAtOnyx || {});
  nextState.vault = mergeDeep(defaultVault(), nextState.vault || {});
  nextState.vault.inventory = Array.from(new Set(Array.isArray(nextState.vault.inventory) ? nextState.vault.inventory : defaultVault().inventory));
  nextState.vault.recentRewards = Array.isArray(nextState.vault.recentRewards) ? nextState.vault.recentRewards.slice(0, 12) : [];
  nextState.cosmetics = mergeDeep(defaultCosmetics(), nextState.cosmetics || {});
  nextState.penthouse = mergeDeep(defaultPenthouse(), nextState.penthouse || {});
  nextState.penthouse.ownedAssets = Array.from(new Set(Array.isArray(nextState.penthouse.ownedAssets) ? nextState.penthouse.ownedAssets.filter(getLuxuryAsset) : []));
  nextState.penthouse.equippedAssets = Array.from(new Set(Array.isArray(nextState.penthouse.equippedAssets) ? nextState.penthouse.equippedAssets.filter(id => nextState.penthouse.ownedAssets.includes(id)) : [])).slice(0, 3);
  nextState.penthouse.wishlist = Array.from(new Set(Array.isArray(nextState.penthouse.wishlist) ? nextState.penthouse.wishlist.filter(getLuxuryAsset) : [])).slice(0, 10);
  nextState.investments = mergeDeep(defaultInvestments(), nextState.investments || {});
  nextState.investments.active = sanitizeInvestments(nextState.investments.active);
  nextState.investments.history = Array.isArray(nextState.investments.history) ? nextState.investments.history.slice(0, 20) : [];
  nextState.luxuryMarket = mergeDeep(defaultLuxuryMarket(), nextState.luxuryMarket || {});
  nextState.onyxNotes = mergeDeep(defaultOnyxNotes(), nextState.onyxNotes || {});
  nextState.onyxNotes.balance = safeNumber(nextState.onyxNotes.balance, 0);
  nextState.onyxNotes.history = Array.isArray(nextState.onyxNotes.history) ? nextState.onyxNotes.history.slice(0, 20) : [];
  nextState.highRoller = mergeDeep(structuredClone(defaultState.highRoller), nextState.highRoller || {});
  nextState.houseEdge = sanitizeHouseEdge(mergeDeep(defaultHouseEdge(), nextState.houseEdge || {}));
  nextState.retention = mergeDeep(structuredClone(defaultState.retention), nextState.retention || {});
  nextState.promoCodes = nextState.promoCodes && typeof nextState.promoCodes === 'object' ? nextState.promoCodes : {};
  nextState.stats = mergeDeep(structuredClone(defaultState.stats), nextState.stats || {});
  nextState.missions = mergeDeep(structuredClone(defaultState.missions), nextState.missions || {});
  nextState.transactions = sanitizeTransactions(nextState.transactions);
  nextState.recentWins = sanitizeRecentWins(nextState.recentWins);
  nextState.rewardClaims = sanitizeRewardClaims(nextState.rewardClaims);
  if (incomingVersion < 5 && nextState.balance >= 10000) nextState.starterBonusGranted = true;
  for (const game of PLAYABLE_GAMES) {
    nextState.selectedBets[game] = safeNumber(nextState.selectedBets[game], defaultState.selectedBets[game]);
    nextState.lastBets[game] = safeNumber(nextState.lastBets?.[game], nextState.selectedBets[game]);
  }
  return nextState;
}
function sanitizeTransactions(items) {
  return Array.isArray(items) ? items.slice(0, 80).map(item => ({
    id: String(item?.id || id()),
    game: String(item?.game || 'Activity').slice(0, 40),
    bet: safeNumber(item?.bet, 0),
    result: String(item?.result || 'Result').slice(0, 80),
    profit: safeNumber(item?.profit, 0),
    detail: String(item?.detail || '').slice(0, 120),
    time: String(item?.time || timeNow()).slice(0, 20)
  })) : [];
}
function sanitizeRecentWins(items) {
  return Array.isArray(items) ? items.slice(0, 12).map(item => ({
    game: String(item?.game || 'Game').slice(0, 40),
    amount: safeNumber(item?.amount, 0),
    text: String(item?.text || 'Win').slice(0, 80),
    time: String(item?.time || timeNow()).slice(0, 20)
  })) : [];
}
function sanitizeRewardClaims(items) {
  return Array.isArray(items) ? items.slice(0, 30).map(item => ({
    source: String(item?.source || 'Reward').slice(0, 60),
    credits: safeNumber(item?.credits, 0),
    xp: safeNumber(item?.xp, 0),
    detail: String(item?.detail || 'Reward claim').slice(0, 100),
    time: String(item?.time || timeNow()).slice(0, 20)
  })) : [];
}
function sanitizeInvestments(items) {
  return Array.isArray(items) ? items.slice(0, 12).map(item => ({
    id: String(item?.id || id()),
    optionId: INVESTMENT_OPTIONS[item?.optionId] ? item.optionId : 'safe',
    principal: safeNumber(item?.principal, 0),
    startedAt: String(item?.startedAt || new Date().toISOString()),
    unlocksAt: String(item?.unlocksAt || new Date().toISOString()),
    collected: !!item?.collected
  })).filter(item => item.principal > 0) : [];
}
function sanitizeHouseEdge(edge) {
  edge.reputation = clamp(safeNumber(edge.reputation, 20), 0, 100);
  edge.securityRisk = clamp(safeNumber(edge.securityRisk, 18), 0, 100);
  edge.staffMorale = clamp(safeNumber(edge.staffMorale, 72), 0, 100);
  edge.tableHeat = clamp(safeNumber(edge.tableHeat, 24), 0, 100);
  edge.lifetimeHouseIncome = safeNumber(edge.lifetimeHouseIncome, 0);
  edge.surveillanceResolved = safeNumber(edge.surveillanceResolved, 0);
  edge.ownedTables = Array.isArray(edge.ownedTables) ? edge.ownedTables.slice(0, 12).map(table => ({
    id: String(table?.id || id()),
    licenseId: getTableLicense(table?.licenseId) ? table.licenseId : TABLE_LICENSES[0].id,
    level: Math.max(1, safeNumber(table?.level, 1)),
    condition: clamp(safeNumber(table?.condition, 88), 0, 100),
    popularity: clamp(safeNumber(table?.popularity, getTableLicense(table?.licenseId)?.popularity || 60), 0, 100),
    heat: clamp(safeNumber(table?.heat, 30), 0, 100),
    assignedStaffId: table?.assignedStaffId ? String(table.assignedStaffId) : null,
    purchasedAt: String(table?.purchasedAt || timeNow())
  })) : [];
  edge.staffRoster = Array.isArray(edge.staffRoster) ? edge.staffRoster.slice(0, 14).map(staff => ({
    ...staff,
    id: String(staff?.id || id()),
    candidateId: String(staff?.candidateId || staff?.id || ''),
    name: String(staff?.name || 'Onyx Staff'),
    role: ['Dealer', 'Floor Manager', 'Security Analyst', 'VIP Host', 'Technician'].includes(staff?.role) ? staff.role : 'Dealer',
    skill: clamp(safeNumber(staff?.skill, 50), 0, 100),
    salary: Math.max(0, safeNumber(staff?.salary, 400)),
    morale: clamp(safeNumber(staff?.morale, 70), 0, 100),
    trait: String(staff?.trait || 'Reliable'),
    bonus: String(staff?.bonus || 'Supports operations'),
    riskModifier: safeNumber(staff?.riskModifier, 0),
    assignedTableId: staff?.assignedTableId ? String(staff.assignedTableId) : null,
    training: safeNumber(staff?.training, 0)
  })) : [];
  edge.assignments = edge.assignments && typeof edge.assignments === 'object' ? edge.assignments : {};
  edge.surveillanceAlerts = Array.isArray(edge.surveillanceAlerts) ? edge.surveillanceAlerts.slice(0, 6).map(alert => ({
    id: String(alert?.id || id()),
    incidentId: getSurveillanceIncident(alert?.incidentId) ? alert.incidentId : SURVEILLANCE_INCIDENTS[0].id,
    createdAt: String(alert?.createdAt || timeNow()),
    status: String(alert?.status || 'open')
  })) : [];
  edge.operationsLog = Array.isArray(edge.operationsLog) ? edge.operationsLog.slice(0, 30) : [];
  edge.edgeTools = edge.edgeTools && typeof edge.edgeTools === 'object' ? edge.edgeTools : {};
  edge.toolReports = Array.isArray(edge.toolReports) ? edge.toolReports.slice(0, 8) : [];
  edge.loreUnlocked = Array.from(new Set(Array.isArray(edge.loreUnlocked) ? edge.loreUnlocked.filter(fileId => LORE_FILES.some(file => file.id === fileId)) : ['founder-brief']));
  if (!edge.loreUnlocked.includes('founder-brief')) edge.loreUnlocked.unshift('founder-brief');
  edge.eventHistory = Array.isArray(edge.eventHistory) ? edge.eventHistory.slice(0, 12) : [];
  if (edge.activeEvent && !getOperationsEvent(edge.activeEvent.eventId)) edge.activeEvent = null;
  return edge;
}
function getOwnedTable(tableId) { return state.houseEdge.ownedTables.find(table => table.id === tableId); }
function averageTableMetric(metric) {
  if (!state.houseEdge.ownedTables.length) return 0;
  return Math.floor(state.houseEdge.ownedTables.reduce((sum, table) => sum + safeNumber(table[metric], 0), 0) / state.houseEdge.ownedTables.length);
}
function logOperation(result, profit = 0, detail = 'Operations') {
  const item = { result, profit: Math.floor(profit || 0), detail, time: timeNow() };
  state.houseEdge.operationsLog.unshift(item);
  state.houseEdge.operationsLog = state.houseEdge.operationsLog.slice(0, 30);
  state.transactions.unshift({ id: id(), game: 'House Edge', bet: profit < 0 ? Math.abs(profit) : 0, result, profit, detail, time: item.time });
  state.transactions = state.transactions.slice(0, 80);
}
function maybeUnlockLore() {
  if (state.houseEdge.surveillanceResolved >= 2 && !state.houseEdge.loreUnlocked.includes('syndicate-rumor')) state.houseEdge.loreUnlocked.push('syndicate-rumor');
  if (state.houseEdge.ownedTables.length >= 3 && !state.houseEdge.loreUnlocked.includes('midnight-door')) state.houseEdge.loreUnlocked.push('midnight-door');
  if (state.vault.level >= 5 && !state.houseEdge.loreUnlocked.includes('vault-echo')) state.houseEdge.loreUnlocked.push('vault-echo');
  if (getManagementRank().title !== 'Guest' && getManagementRank().title !== 'Investor' && !state.houseEdge.loreUnlocked.includes('black-card-record')) state.houseEdge.loreUnlocked.push('black-card-record');
  if (getHighRollerScore() >= 5000 && !state.houseEdge.loreUnlocked.includes('director-ledger')) state.houseEdge.loreUnlocked.push('director-ledger');
}
function edgeToolReport(tool) {
  const reports = {
    'blackjack-lens': `Shoe texture: ${pick(['low paint cards', 'balanced ranks', 'face-card heavy'])}. Simulator hint only; outcomes remain random.`,
    'crash-analyzer': `Volatility mood: ${pick(['low chop', 'medium surge', 'high spike'])}. Consider bet size discipline in the simulator.`,
    'roulette-map': `Recent heat: ${pick(['low numbers clustered', 'even spread', 'red side active', 'third dozen visible'])}. This does not predict the next spin.`,
    'mines-scanner': `Risk mood: ${pick(['calm grid', 'tense middle', 'edge pressure'])}. No mine positions are revealed.`,
    'plinko-meter': `Volatility read: ${pick(['soft center bias', 'balanced spread', 'outer-slot swing'])}. Higher risk remains more variable.`
  };
  return reports[tool.id] || tool.hint;
}
function actionLabel(action) {
  return ({ observe: 'Observed quietly', warn: 'Issued floor warning', escort: 'Escorted from floor', compensate: 'VIP compensated', technician: 'Technician called', analyst: 'Security analyst assigned', manager: 'Manager assigned', ignore: 'Ignored' }[action] || action);
}
function choiceLabel(choice) {
  return String(choice || '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function chooseVaultReward(crateType) {
  const rarityRolls = {
    daily: [['Common', 50], ['Rare', 30], ['Epic', 15], ['Legendary', 4], ['Onyx', 1]],
    elite: [['Common', 20], ['Rare', 34], ['Epic', 28], ['Legendary', 14], ['Onyx', 4]],
    mega: [['Common', 8], ['Rare', 22], ['Epic', 34], ['Legendary', 26], ['Onyx', 10]]
  };
  const targetRarity = weightedPick(rarityRolls[crateType] || rarityRolls.daily);
  const candidates = COSMETICS.filter(item => item.rarity === targetRarity);
  const missing = candidates.filter(item => !state.vault.inventory.includes(item.id));
  return pick(missing.length ? missing : candidates) || COSMETICS[0];
}
function weightedPick(entries) {
  const total = entries.reduce((sum, [, weight]) => sum + weight, 0);
  let roll = Math.random() * total;
  for (const [value, weight] of entries) {
    roll -= weight;
    if (roll <= 0) return value;
  }
  return entries[0][0];
}
function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
function seededRisk(seed) {
  let hash = 0;
  for (const char of String(seed)) hash = (hash * 31 + char.charCodeAt(0)) % 100000;
  return (hash % 1000) / 1000;
}
function emitBigWinHook(game, profit, wager) {
  if (profit < 1000 && profit < wager * 6) return;
  const tier = profit >= 10000 || profit >= wager * 25 ? 'legendary'
    : profit >= 5000 || profit >= wager * 12 ? 'massive'
    : 'mega';
  window.dispatchEvent(new CustomEvent('onyx:big-win', {
    detail: { game: gameLabel(game), profit, tier }
  }));
}
function safeNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.floor(number) : fallback;
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
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
