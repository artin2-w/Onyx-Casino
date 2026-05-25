import {
  ACHIEVEMENTS,
  CHIP_VALUES,
  COSMETICS,
  DAILY_REWARDS,
  PLAYABLE_GAMES,
  PROMO_CODES,
  INVESTMENT_OPTIONS,
  LUXURY_ASSETS,
  VAULT_CRATES,
  addToSelectedBet,
  buyLuxuryAsset,
  claimComebackBonus,
  claimDailyBonus,
  claimPenthouseIncome,
  claimMission,
  claimPromoCode,
  collectInvestment,
  clearHistory,
  clearSelectedBet,
  completeOnboarding,
  doubleBet,
  equipLuxuryAsset,
  exportSave,
  favoriteGame,
  formatCredits,
  formatMultiplier,
  formatPercent,
  formatProfit,
  gameLabel,
  getDailyRewardForStreak,
  getHighRollerAccess,
  getGameSession,
  getLifestyleLevel,
  getLuxuryAsset,
  getLuxuryAssetValue,
  getNetWorth,
  getNextDailyClaimText,
  getPassiveIncomePerHour,
  getPassiveIncomeReady,
  getPrestigeStatus,
  getPrestigeValue,
  getState,
  getTableLimit,
  getVaultProgress,
  getVipProgress,
  getVipTier,
  getPrestigeTitle,
  halfBet,
  importSave,
  maxSelectedBet,
  repeatBet,
  replayOnboarding,
  resetGameSession,
  sellLuxuryAsset,
  setSelectedBet,
  startInvestment,
  tierRewardMultiplier,
  toggleWishlistAsset,
  updateSettings,
  updateUsername,
  xpNeeded
} from './state.js';
import { missions } from './missions.js';
import { getActiveEvent, getEventCountdown } from './events.js';

export const games = [
  { id: 'slots', title: 'Onyx Slots', category: ['featured', 'slots'], status: 'Playable', meta: '5 reels, premium symbols', accent: 'gold' },
  { id: 'roulette', title: 'European Roulette', category: ['featured', 'table'], status: 'Playable', meta: 'Inside and outside bets', accent: 'red' },
  { id: 'blackjack', title: 'Blackjack Classic', category: ['featured', 'table'], status: 'Playable', meta: 'Hit, stand, double', accent: 'green' },
  { id: 'dice', title: 'Dice Duel', category: ['featured', 'quick'], status: 'Playable', meta: 'Risk-based payout', accent: 'blue' },
  { id: 'mines', title: 'Mines', category: ['featured', 'quick', 'new'], status: 'New', meta: 'Reveal gems, avoid mines', accent: 'red' },
  { id: 'crash', title: 'Crash', category: ['featured', 'quick', 'new'], status: 'Hot', meta: 'Cash out before the crash', accent: 'gold' },
  { id: 'plinko', title: 'Plinko', category: ['featured', 'quick', 'new'], status: 'New', meta: 'Drop into multiplier slots', accent: 'blue' },
  { id: 'wheel', title: 'Wheel', category: ['quick'], status: 'Coming soon', meta: 'Spin for credit rewards', accent: 'gold' },
  { id: 'baccarat', title: 'Baccarat', category: ['table'], status: 'Coming soon', meta: 'Player, banker, tie', accent: 'green' },
  { id: 'scratch', title: 'Scratch Cards', category: ['slots', 'new'], status: 'Coming soon', meta: 'Instant play-money reveals', accent: 'red' }
];

const modalCopy = {
  fakeMoney: {
    title: 'Fake Money Only',
    body: '<p>Onyx Casino uses fictional virtual credits only. Credits exist only in this browser save for entertainment and simulation.</p><p>No real-money gambling.</p>'
  },
  'rules-lobby': {
    title: 'How It Works',
    body: '<p>Start with 10,000 virtual credits, choose chip bets, and play simulated casino games. Playing earns XP, VIP progress, mission rewards, and daily play-money bonuses.</p><p>All balances and rewards are fictional credits only.</p>'
  },
  'rules-slots': {
    title: 'Onyx Slots Rules',
    body: '<p>Choose a chip bet and spin five reels with three visible rows. Ten fixed paylines are checked left to right. Scatter symbols can trigger free spins when 3 or more land anywhere.</p><p>Buttons: Spin starts a paid spin unless free spins are active. Turbo shortens the simulator animation. Repeat, double, half, and clear adjust the virtual-credit bet.</p><p>Payouts are simulator multipliers only. Virtual credits only. No real-money gambling.</p>'
  },
  'rules-roulette': {
    title: 'European Roulette Rules',
    body: '<p>Only one active bet type is supported for now. Pick a straight number, color, odd/even, low/high, dozen, or column, then spin.</p><p>Red/black, odd/even, and 1-18/19-36 pay 2x. Dozens and columns pay 3x. Straight numbers pay 36x. Zero only wins on straight zero.</p><p>Virtual credits only. No real-money gambling.</p>'
  },
  'rules-blackjack': {
    title: 'Blackjack Classic Rules',
    body: '<p>Blackjack uses a 6-deck shoe. Dealer stands on all 17s, including soft 17. Blackjack pays 3:2 plus your returned bet. Push returns your bet.</p><p>Buttons: New Hand deals, Hit draws, Stand holds, Double doubles the bet and draws once, Split separates matching first cards into two simple hands.</p><p>Virtual credits only. No real-money gambling.</p>'
  },
  'rules-dice': {
    title: 'Dice Duel Rules',
    body: '<p>Pick Roll Over or Roll Under, then set a target from 2 to 98. Win chance is based on how many results beat or fall below that target.</p><p>Projected payout uses a fictional 96% simulator return formula: multiplier = 0.96 / win chance. Higher risk means lower win chance and higher payout.</p><p>Virtual credits only. No real-money gambling.</p>'
  },
  'rules-mines': {
    title: 'Mines Rules',
    body: '<p>Choose a virtual-credit bet and mine count, then start a 5x5 board. Mines are hidden. Revealing safe tiles increases the cashout multiplier.</p><p>Cash out after at least one safe tile to collect bet times multiplier. Hitting a mine ends the round and loses the bet. More mines means higher risk and faster multiplier growth.</p><p>Virtual credits only. No real-money gambling.</p>'
  },
  'rules-crash': {
    title: 'Crash Rules',
    body: '<p>Place a virtual-credit bet and launch. The multiplier rises until the hidden crash point. Cash out before the crash to win bet times current multiplier.</p><p>Optional auto cashout can collect at your target when the round reaches it. If the game crashes first, the bet is lost.</p><p>Virtual credits only. No real-money gambling.</p>'
  },
  'rules-plinko': {
    title: 'Plinko Rules',
    body: '<p>Choose a bet, risk level, and row count. The ball drops through pegs and lands in a multiplier slot. Low risk is steadier; high risk has bigger edge payouts and more low middle results.</p><p>The highlighted path is simulated and the final slot determines the payout.</p><p>Virtual credits only. No real-money gambling.</p>'
  },
  paytable: {
    title: 'Onyx Slots Paytable',
    body: '<div class="paytable"><p><strong>Five on a payline:</strong> Onyx 60x, 7 45x, BAR 28x, Diamond 22x, Crown 18x, Bell 12x, Cherry 8x.</p><p><strong>Four on a payline:</strong> 30% of the five-symbol multiplier. <strong>Three:</strong> 10% of the five-symbol multiplier.</p><p><strong>Scatters:</strong> 3 scatters grant 5 free spins, 4 grant 8, 5 grant 12. Free spins use the triggering bet and do not subtract additional credits.</p></div>'
  },
  'whats-new': {
    title: 'Version 2: Luxury & Power',
    body: '<div class="release-list"><p><strong>The Onyx Penthouse:</strong> buy fictional luxury assets, grow net worth, equip a showcase, and collect browser-local passive income.</p><p><strong>Vault Investments:</strong> lock virtual credits into local Credit Bonds with maturity timers, projected returns, and simulated risk tiers.</p><p><strong>High Roller World:</strong> status-gated premium table variants reuse the existing games with richer labels and progression boosts.</p><p><strong>Prestige economy:</strong> lifestyle level, net worth rank, High Roller score, Onyx Notes, market trends, and rare listings give credits long-term meaning.</p><p><strong>Reminder:</strong> Onyx Casino is a virtual-credit simulator. No real-money gambling.</p></div>'
  }
};

let lastModalFocus = null;

export function setView(viewName) {
  document.querySelectorAll('.view').forEach(view => view.classList.remove('is-visible'));
  document.querySelector(`#view-${viewName}`)?.classList.add('is-visible');
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('is-active', btn.dataset.view === viewName));
  document.querySelectorAll('.mobile-bottom-nav button').forEach(btn => btn.classList.toggle('is-active', btn.dataset.view === viewName));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function renderAll() {
  renderTopbar();
  renderLiveCasino();
  renderTonightAtOnyx();
  renderVault();
  renderPenthouse();
  renderInvestments();
  renderHighRoller();
  renderRetentionPrompts();
  renderGameGrid(currentCategory());
  renderChipGroups();
  renderSessionPanels();
  renderMissions();
  renderAchievements();
  renderTransactions();
  renderRecentWins();
  renderProfile();
  renderRewardsPage();
  renderVipPage();
  renderHistoryPage();
  renderSettingsPage();
  applySettings();
}

export function renderTopbar() {
  const state = getState();
  const vip = getVipProgress();
  const needed = xpNeeded();
  const today = new Date().toISOString().slice(0, 10);
  const claimed = state.dailyBonusDate === today;
  const nextReward = getDailyRewardForStreak(state.dailyStreak + (claimed ? 0 : 1));
  const dailyAmount = Math.floor(nextReward.credits * tierRewardMultiplier());

  text('#balanceText', formatCredits(state.balance));
  text('#levelText', state.level);
  text('#xpText', `${state.xp.toLocaleString()} / ${needed.toLocaleString()} XP`);
  document.querySelector('#xpBar').style.width = `${Math.min(100, (state.xp / needed) * 100)}%`;
  text('#vipText', vip.current.name);
  document.querySelector('#vipBar').style.width = `${vip.percent}%`;
  text('#streakText', `${state.dailyStreak} ${state.dailyStreak === 1 ? 'day' : 'days'}`);
  text('#dailyBonusAmount', `+${formatCredits(dailyAmount)}`);
  text('#dailyBonusText', claimed ? 'Already claimed today.' : `${vip.current.name} tier bonus available.`);
  document.querySelector('#dailyBonusBtn').disabled = claimed;
  text('#netWorthText', formatCredits(getNetWorth()));
  text('#onyxNotesText', `${state.onyxNotes.balance.toLocaleString()} notes`);
  text('#prestigeHeaderText', getPrestigeStatus().title);
}

export function renderLiveCasino() {
  const state = getState();
  text('#onlinePlayersText', `${state.liveCasino.onlinePlayers || 145} players online`);
  text('#hotGameText', gameLabel(state.liveCasino.hotGame || getActiveEvent().featuredGame));
  const ticker = document.querySelector('#liveTicker');
  if (ticker) {
    ticker.innerHTML = state.liveCasino.activities.length ? state.liveCasino.activities.map(item => `
      <article class="live-ticker-item tone-${item.tone}">
        <span>${item.time}</span><strong>${item.text}</strong>
      </article>
    `).join('') : '<p class="muted">Simulated casino activity will appear here.</p>';
  }
  const tables = document.querySelector('#tableActivityList');
  if (tables) {
    tables.innerHTML = (state.liveCasino.tableActivity || []).map(line => `<span>${line}</span>`).join('') || '<span>Tables are opening.</span>';
  }
}

export function renderTonightAtOnyx() {
  const event = getActiveEvent();
  const state = getState();
  const banner = document.querySelector('#tonightAtOnyx');
  if (banner) {
    banner.dataset.palette = event.palette;
    banner.innerHTML = `
      <div>
        <p class="eyebrow">Tonight at Onyx</p>
        <h2>${event.name}</h2>
        <p>${event.description}</p>
      </div>
      <div class="event-metrics">
        <span><strong>${getEventCountdown()}</strong><small>remaining</small></span>
        <span><strong>${event.xpMultiplier.toFixed(2)}x</strong><small>XP</small></span>
        <span><strong>${event.vaultMultiplier.toFixed(2)}x</strong><small>Vault XP</small></span>
        <button class="secondary small" data-open-game="${event.featuredGame}">Play Hot Game</button>
      </div>
    `;
  }
  const history = document.querySelector('#eventHistoryList');
  if (history) {
    history.innerHTML = state.tonightAtOnyx.history.length
      ? state.tonightAtOnyx.history.map(item => `<span>${item.id} ended ${item.endedAt}</span>`).join('')
      : '<span>Event history starts tonight.</span>';
  }
}

export function renderVault() {
  const state = getState();
  const progress = getVaultProgress();
  text('#vaultLevelText', `Level ${progress.level}`);
  text('#vaultXpText', `${progress.xp.toLocaleString()} / ${progress.needed.toLocaleString()} Vault XP`);
  text('#vaultKeysText', `${state.vault.keys} ${state.vault.keys === 1 ? 'key' : 'keys'}`);
  const bar = document.querySelector('#vaultBar');
  if (bar) bar.style.width = `${progress.percent}%`;
  const crates = document.querySelector('#vaultCrates');
  if (crates) {
    crates.innerHTML = Object.entries(VAULT_CRATES).map(([key, crate]) => `
      <article class="vault-crate">
        <span class="vault-crate-icon"></span>
        <strong>${crate.label}</strong>
        <small>${state.vault.crates[key] || 0} ready - ${crate.keyCost} ${crate.keyCost === 1 ? 'key' : 'keys'}</small>
        <button class="secondary small" data-open-crate="${key}" ${(state.vault.crates[key] || 0) > 0 && state.vault.keys >= crate.keyCost ? '' : 'disabled'}>Open</button>
      </article>
    `).join('');
  }
  const inventory = document.querySelector('#vaultInventory');
  if (inventory) {
    inventory.innerHTML = state.vault.inventory.map(id => {
      const item = COSMETICS.find(cosmetic => cosmetic.id === id);
      const equipped = item && state.cosmetics.equipped[item.type] === item.id;
      return item ? `
        <article class="cosmetic-card rarity-${item.rarity.toLowerCase()} ${equipped ? 'is-equipped' : ''}">
          <span>${item.rarity}</span>
          <strong>${item.name}</strong>
          <small>${item.type.replace(/([A-Z])/g, ' $1')}</small>
          <button class="ghost small" data-equip-cosmetic="${item.id}" ${equipped ? 'disabled' : ''}>${equipped ? 'Equipped' : 'Equip'}</button>
        </article>
      ` : '';
    }).join('');
  }
  const recent = document.querySelector('#vaultRecentRewards');
  if (recent) {
    recent.innerHTML = state.vault.recentRewards.length ? state.vault.recentRewards.map(item => `
      <article class="log-item"><span>${item.time}</span><strong>${item.name}</strong><small>${item.rarity}</small><small>${item.type}</small><b>${item.duplicate ? '+1 key' : 'Unlocked'}</b></article>
    `).join('') : '<p class="muted">Vault reveals will appear here.</p>';
  }
}

export function renderPenthouse() {
  const state = getState();
  const prestige = getPrestigeStatus();
  const access = getHighRollerAccess();
  text('#penthouseNetWorth', formatCredits(getNetWorth()));
  text('#penthouseLifestyle', `Level ${getLifestyleLevel()}`);
  text('#penthousePrestige', prestige.title);
  text('#penthouseRank', prestige.rank);
  text('#penthouseIncomeRate', `${formatCredits(getPassiveIncomePerHour())} / hour`);
  text('#penthouseIncomeReady', formatCredits(getPassiveIncomeReady()));
  text('#penthouseNotes', `${state.onyxNotes.balance.toLocaleString()} Onyx Notes`);
  text('#penthouseHighRoller', access.access ? 'Invitation active' : 'Build lifestyle or VIP to unlock');
  const claim = document.querySelector('#claimPenthouseIncomeBtn');
  if (claim) claim.disabled = getPassiveIncomeReady() <= 0;

  const showcase = document.querySelector('#assetShowcase');
  if (showcase) {
    const equipped = state.penthouse.equippedAssets.map(getLuxuryAsset).filter(Boolean);
    showcase.innerHTML = equipped.length ? equipped.map(asset => assetCard(asset, { compact: true, equipped: true })).join('')
      : '<p class="muted">Equip owned luxury assets to build your public penthouse showcase.</p>';
  }

  const store = document.querySelector('#assetStore');
  if (store) {
    const category = document.querySelector('#assetCategoryFilter')?.value || 'all';
    const rarity = document.querySelector('#assetRarityFilter')?.value || 'all';
    const assets = LUXURY_ASSETS.filter(asset => (category === 'all' || asset.category === category) && (rarity === 'all' || asset.rarity === rarity));
    store.innerHTML = assets.map(asset => assetCard(asset, {
      owned: state.penthouse.ownedAssets.includes(asset.id),
      equipped: state.penthouse.equippedAssets.includes(asset.id),
      wished: state.penthouse.wishlist.includes(asset.id)
    })).join('');
  }

  const owned = document.querySelector('#ownedAssets');
  if (owned) {
    const assets = state.penthouse.ownedAssets.map(getLuxuryAsset).filter(Boolean);
    owned.innerHTML = assets.length ? assets.map(asset => assetCard(asset, {
      owned: true,
      equipped: state.penthouse.equippedAssets.includes(asset.id),
      ownedView: true
    })).join('') : '<p class="muted">No luxury assets owned yet. Start with a watch or furniture piece when your credit stack is ready.</p>';
  }

  const market = document.querySelector('#luxuryMarketPanel');
  if (market) {
    const hot = getLuxuryAsset(state.luxuryMarket.hotAssetId);
    const rare = getLuxuryAsset(state.luxuryMarket.rareAssetId);
    market.innerHTML = `
      <div class="market-state state-${state.luxuryMarket.state.toLowerCase().replace(/\s+/g, '-')}">
        <span class="label">Market State</span><strong>${state.luxuryMarket.state}</strong>
      </div>
      <p><strong>Hot:</strong> ${hot?.name || 'Market opening'} ${hot ? marketTrend(hot.id) : ''}</p>
      <p><strong>Rare listing:</strong> ${rare?.name || 'No rare listing yet'} ${rare ? marketTrend(rare.id) : ''}</p>
      <div class="market-ticker">${(state.luxuryMarket.ticker || []).map(line => `<span>${line}</span>`).join('')}</div>
    `;
  }
}

export function renderInvestments() {
  const state = getState();
  const options = document.querySelector('#investmentOptions');
  if (options) {
    options.innerHTML = Object.entries(INVESTMENT_OPTIONS).map(([id, option]) => {
      const amount = Number(document.querySelector('#investmentAmountInput')?.value || option.min);
      const projected = Math.floor(Math.max(option.min, amount) * option.returnRate);
      return `
        <article class="investment-card">
          <span class="label">${durationLabel(option.durationMs)} lock</span>
          <h3>${option.label}</h3>
          <p>${option.risk ? `${formatPercent(option.risk * 100)} simulated risk adjustment` : 'Guaranteed simulator return'}</p>
          <div class="mini-stat"><span>Minimum</span><strong>${formatCredits(option.min)}</strong></div>
          <div class="mini-stat"><span>Projected return</span><strong>+${formatCredits(projected)}</strong></div>
          <button class="secondary full" data-start-investment="${id}">Start ${option.label}</button>
        </article>
      `;
    }).join('');
  }
  const active = document.querySelector('#activeInvestments');
  if (active) {
    active.innerHTML = state.investments.active.length ? state.investments.active.map(item => {
      const option = INVESTMENT_OPTIONS[item.optionId];
      const matured = Date.parse(item.unlocksAt) <= Date.now();
      return `
        <article class="log-item investment-row">
          <span>${option?.label || 'Credit Bond'}</span>
          <strong>${formatCredits(item.principal)}</strong>
          <small>${matured ? 'Ready to collect' : timeUntil(item.unlocksAt)}</small>
          <small>Return ${(option?.returnRate * 100 || 0).toFixed(0)}%</small>
          <button class="secondary small" data-collect-investment="${item.id}" ${matured ? '' : 'disabled'}>Collect</button>
        </article>
      `;
    }).join('') : '<p class="muted">No active Vault Investments. Credits stay unlocked until you choose a browser-local bond.</p>';
  }
  const history = document.querySelector('#investmentHistory');
  if (history) {
    history.innerHTML = state.investments.history.length ? state.investments.history.map(item => `
      <article class="log-item"><span>${new Date(item.collectedAt).toLocaleString()}</span><strong>${INVESTMENT_OPTIONS[item.optionId]?.label || 'Credit Bond'}</strong><small>${item.riskHit ? 'Risk adjusted' : 'Matured'}</small><small>${formatCredits(item.payout)}</small><b class="${item.profit >= 0 ? 'win' : 'lose'}">${formatProfit(item.profit)}</b></article>
    `).join('') : '<p class="muted">Collected investments will appear here.</p>';
  }
}

export function renderHighRoller() {
  const access = getHighRollerAccess();
  const prestige = getPrestigeStatus();
  text('#highRollerStatus', access.access ? 'Invitation active' : 'Invitation locked');
  text('#highRollerScore', access.score.toLocaleString());
  text('#highRollerTitle', prestige.title);
  const requirements = document.querySelector('#highRollerRequirements');
  if (requirements) {
    requirements.innerHTML = [
      ['VIP Silver or better', getVipTier().name !== 'Bronze'],
      ['Lifestyle level 4+', access.lifestyle >= 4],
      ['Net worth 50,000 credits+', getNetWorth() >= 50000],
      ['Vault level 8+', getState().vault.level >= 8],
      ['Own Onyx House Shares or elite asset', access.hasShare]
    ].map(([label, done]) => `<article class="${done ? 'is-done' : ''}"><span>${done ? 'Unlocked' : 'Locked'}</span><strong>${label}</strong></article>`).join('');
  }
  const tables = document.querySelector('#highRollerTables');
  if (tables) {
    const variants = [
      ['Platinum Blackjack', 'blackjack', 'VIP shoe, higher table energy'],
      ['Crimson Roulette', 'roulette', 'Premium wheel ambience'],
      ['Diamond Crash', 'crash', 'Fast high-risk multiplier room'],
      ['Onyx Plinko', 'plinko', 'Volatile showcase board'],
      ['Private Mines', 'mines', 'Quiet risk room'],
      ['Elite Dice', 'dice', 'Precision quick table']
    ];
    tables.innerHTML = variants.map(([name, game, detail]) => `
      <article class="high-table ${access.access ? '' : 'is-locked'}">
        <span class="vip-badge">High Roller</span>
        <h3>${name}</h3>
        <p>${detail}</p>
        <small>Uses ${gameLabel(game)} engine - higher table fantasy, same virtual-credit simulator.</small>
        <button class="secondary small" data-open-game="${game}" ${access.access ? '' : 'disabled'}>${access.access ? 'Enter Table' : 'Locked'}</button>
      </article>
    `).join('');
  }
}

export function renderRetentionPrompts() {
  const state = getState();
  const prompts = [];
  const remainingMissions = missions.filter(mission => {
    const stored = state.missions[mission.id] || {};
    return !stored.claimed && (stored.progress || 0) < mission.target;
  });
  if (remainingMissions.length === 1) prompts.push('1 mission remaining for today.');
  if (xpNeeded() - state.xp <= 120) prompts.push('VIP level almost reached.');
  const vault = getVaultProgress();
  if (vault.needed - vault.xp <= 120) prompts.push('Vault reward ready soon.');
  if (state.dailyBonusDate === new Date().toISOString().slice(0, 10)) prompts.push('Daily streak continues tomorrow.');
  if (state.sessionProfit <= -2000 && state.retention.comebackClaimedDate !== new Date().toISOString().slice(0, 10)) prompts.push('Comeback reward available.');
  const nextAsset = LUXURY_ASSETS
    .filter(asset => !state.penthouse.ownedAssets.includes(asset.id))
    .map(asset => ({ asset, value: getLuxuryAssetValue(asset.id) }))
    .sort((a, b) => a.value - b.value)
    .find(item => item.value > state.balance && item.value - state.balance <= Math.max(1200, state.balance * 0.18));
  if (nextAsset) prompts.push(`${nextAsset.asset.name} is nearly affordable.`);
  if (!getHighRollerAccess().access && getHighRollerAccess().score >= 1500) prompts.push('High Roller access is getting close.');
  if (getPassiveIncomeReady() > 0) prompts.push('Penthouse income is ready.');
  if (state.luxuryMarket.rareAssetId) prompts.push('Rare luxury listing appeared.');
  const node = document.querySelector('#retentionPrompts');
  if (node) {
    node.innerHTML = prompts.length ? prompts.slice(0, 3).map(prompt => `<span>${prompt}</span>`).join('') : '<span>The floor is steady. Play at your own pace.</span>';
  }
  const comeback = document.querySelector('#comebackRewardBtn');
  if (comeback) comeback.disabled = !(state.sessionProfit <= -2000 && state.retention.comebackClaimedDate !== new Date().toISOString().slice(0, 10));
}

export function renderGameGrid(category = 'featured') {
  const grid = document.querySelector('#gameGrid');
  if (!grid) return;
  grid.innerHTML = games
    .filter(game => game.category.includes(category))
    .map(game => {
      const playable = game.status !== 'Coming soon';
      return `
        <article class="game-card accent-${game.accent} ${playable ? '' : 'is-locked'}" ${playable ? `data-open-game="${game.id}"` : ''}>
          <div class="game-card-top">
            <span class="game-icon">${gameIcon(game.id)}</span>
            <span class="status-pill">${game.status}</span>
          </div>
          <h3>${game.title}${game.id === getActiveEvent().featuredGame ? ' <span class="hot-dot">Hot</span>' : ''}</h3>
          <p>${game.meta}</p>
          <button class="${playable ? 'secondary' : 'ghost'} small" ${playable ? '' : 'disabled'}>${playable ? 'Play' : 'Locked'}</button>
        </article>
      `;
    })
    .join('');
}

export function renderChipGroups() {
  document.querySelectorAll('[data-chip-group]').forEach(group => {
    const game = group.dataset.chipGroup;
    group.innerHTML = CHIP_VALUES.map(value => `
      <button class="chip-btn" data-chip-game="${game}" data-chip-value="${value}">${value.toLocaleString()}</button>
    `).join('');
  });
  for (const game of PLAYABLE_GAMES) {
    const value = getState().selectedBets[game] || 0;
    text(`#${game}BetText`, formatCredits(value));
    text(`#${game}ProjectedText`, projectedText(game, value));
    const stack = document.querySelector(`[data-bet-stack="${game}"]`);
    if (stack) stack.innerHTML = renderBetStack(value);
  }
  updateQuickBetButtons();
}

export function renderSessionPanels() {
  for (const game of PLAYABLE_GAMES) {
    const session = getGameSession(game);
    const node = document.querySelector(`#${game}SessionStats`);
    if (!node) continue;
    node.innerHTML = `
      <div class="mini-stat"><span>Current bet</span><strong>${formatCredits(getState().selectedBets[game] || 0)}</strong></div>
      <div class="mini-stat"><span>Session wagered</span><strong>${formatCredits(session.sessionWagered)}</strong></div>
      <div class="mini-stat"><span>Session profit</span><strong class="${session.sessionProfit >= 0 ? 'win' : 'lose'}">${formatProfit(session.sessionProfit)}</strong></div>
      <div class="mini-stat"><span>Biggest session win</span><strong>${formatCredits(session.biggestSessionWin)}</strong></div>
      <div class="session-results">${session.lastResults.length ? session.lastResults.map(item => `<span class="${item.profit > 0 ? 'win' : item.profit < 0 ? 'lose' : ''}">${item.result} ${formatProfit(item.profit)}</span>`).join('') : '<span>No results yet</span>'}</div>
    `;
  }
}

export function renderMissions() {
  const state = getState();
  const list = document.querySelector('#missionsList');
  const completed = missions.filter(mission => (state.missions[mission.id]?.progress || 0) >= mission.target).length;
  text('#missionProgressText', `${completed}/${missions.length}`);
  text('#miniMissionText', `${completed}/${missions.length} missions ready or complete.`);
  if (!list) return;
  const html = missions.map(mission => {
    const stored = state.missions[mission.id] || { progress: 0, claimed: false };
    const progress = Math.min(stored.progress, mission.target);
    const complete = progress >= mission.target;
    return `
      <article class="mission ${complete ? 'is-done' : ''}">
        <div>
          <strong>${mission.title}</strong>
          <p class="muted">${mission.description}</p>
          <div class="mission-bar"><span style="width:${(progress / mission.target) * 100}%"></span></div>
          <small>${progress.toLocaleString()} / ${mission.target.toLocaleString()}</small>
        </div>
        <button class="secondary small" data-claim-mission="${mission.id}" ${complete && !stored.claimed ? '' : 'disabled'}>
          ${stored.claimed ? 'Claimed' : `Claim ${formatCredits(mission.rewardCredits)}`}
        </button>
      </article>
    `;
  }).join('');
  list.innerHTML = html;
  const rewardsList = document.querySelector('#rewardsMissionsList');
  if (rewardsList) rewardsList.innerHTML = html;
  text('#rewardsMissionProgressText', `${completed}/${missions.length}`);
}

export function renderAchievements() {
  const node = document.querySelector('#achievementsList');
  if (!node) return;
  const state = getState();
  node.innerHTML = ACHIEVEMENTS.map(item => {
    const unlocked = state.achievements[item.id]?.unlocked;
    return `
      <article class="achievement ${unlocked ? 'is-done' : ''}">
        <span class="badge">${item.badge}</span>
        <div><strong>${item.title}</strong><small>${unlocked ? 'Unlocked' : `Reward ${formatCredits(item.rewardCredits)}`}</small></div>
      </article>
    `;
  }).join('');
  const rewardsNode = document.querySelector('#rewardsAchievementsList');
  if (rewardsNode) rewardsNode.innerHTML = node.innerHTML;
}

export function renderTransactions() {
  const transactions = getState().transactions;
  const html = transactions.length ? transactions.map(item => `
    <article class="log-item">
      <span>${item.time}</span>
      <strong>${item.game}</strong>
      <small>Bet ${formatCredits(item.bet)}</small>
      <small>${item.result}</small>
      <b class="${item.profit > 0 ? 'win' : item.profit < 0 ? 'lose' : ''}">${formatProfit(item.profit)}</b>
    </article>
  `).join('') : '<p class="muted">No transactions yet. Start with a chip bet to build your history.</p>';
  document.querySelectorAll('#activityLog, #profileHistory').forEach(node => { node.innerHTML = html; });
}

export function renderRecentWins() {
  if (getState().settings.hideRecentWins) {
    const feed = document.querySelector('#recentWinsFeed');
    if (feed) feed.innerHTML = '<p class="muted">Recent winners feed is hidden in settings.</p>';
    return;
  }
  const wins = getState().recentWins;
  const feed = document.querySelector('#recentWinsFeed');
  if (!feed) return;
  feed.innerHTML = wins.length ? wins.map(win => `
    <article class="win-feed-item">
      <span>${win.time}</span>
      <strong>${win.game}</strong>
      <b>+${formatCredits(win.amount)}</b>
      <small>${win.text}</small>
    </article>
  `).join('') : '<p class="muted">Winning results will appear here.</p>';
}

export function renderProfile() {
  const state = getState();
  const tier = getVipTier();
  const input = document.querySelector('#usernameInput');
  if (input && document.activeElement !== input) input.value = state.username;
  const stats = [
    ['Username', state.username],
    ['Current VIP', `${tier.name} (${tier.badge})`],
    ['Prestige title', getPrestigeTitle()],
    ['Net worth rank', getPrestigeStatus().rank],
    ['Net worth', formatCredits(getNetWorth())],
    ['Lifestyle level', getLifestyleLevel()],
    ['High Roller score', getHighRollerAccess().score.toLocaleString()],
    ['Vault level', getState().vault.level],
    ['Total games played', state.stats.totalGamesPlayed],
    ['Total wagered', formatCredits(state.stats.totalWagered)],
    ['Biggest win', formatCredits(state.stats.biggestWin)],
    ['Favorite game', favoriteGame()],
    ['Session result', formatProfit(state.sessionProfit)],
    ['Daily streak', `${state.dailyStreak} days`]
  ];
  const node = document.querySelector('#profileStats');
  if (!node) return;
  node.innerHTML = stats.map(([label, value]) => `
    <article class="stat">
      <span class="label">${label}</span>
      <strong>${value}</strong>
    </article>
  `).join('');
  const showcase = document.querySelector('#profileShowcase');
  if (showcase) {
    const equipped = Object.values(state.cosmetics.equipped).map(id => COSMETICS.find(item => item.id === id)).filter(Boolean);
    const assets = state.penthouse.equippedAssets.map(getLuxuryAsset).filter(Boolean);
    showcase.innerHTML = `
      <div class="profile-card-preview ${equipped.map(item => item.className).join(' ')}">
        <span class="badge">${tier.badge}</span>
        <h2>${state.username}</h2>
        <p>${getPrestigeTitle()} - ${favoriteGame()}</p>
        <small>${getPrestigeStatus().rank} - ${formatCredits(getNetWorth())} net worth</small>
      </div>
      <div class="cosmetic-mini-list">${equipped.map(item => `<span>${item.name}</span>`).join('')}</div>
      <div class="cosmetic-mini-list">${assets.map(item => `<span>${item.name}</span>`).join('') || '<span>No luxury showcase equipped</span>'}</div>
    `;
  }
}

export function renderRewardsPage() {
  const state = getState();
  const claimed = state.dailyBonusDate === new Date().toISOString().slice(0, 10);
  const nextStreak = state.dailyStreak + (claimed ? 0 : 1);
  document.querySelector('#rewardDailyBtn').disabled = claimed;
  text('#dailyCooldownText', getNextDailyClaimText());
  const currentDay = getDailyRewardForStreak(nextStreak).day;
  const multiplier = tierRewardMultiplier();
  const calendar = document.querySelector('#dailyCalendar');
  if (calendar) {
    calendar.innerHTML = DAILY_REWARDS.map(reward => `
      <article class="daily-day ${reward.day === currentDay ? 'is-current' : ''} ${claimed && reward.day === currentDay ? 'is-claimed' : ''}">
        <span>Day ${reward.day}</span>
        <strong>${formatCredits(Math.floor(reward.credits * multiplier))}</strong>
        <small>${Math.floor(reward.xp * multiplier)} XP</small>
      </article>
    `).join('');
  }
  const vipSummary = document.querySelector('#vipRewardSummary');
  if (vipSummary) {
    vipSummary.innerHTML = [
      `${getVipTier().name} daily reward multiplier: ${multiplier.toFixed(2)}x`,
      `Mission reward multiplier: ${getVipTier().missionMultiplier.toFixed(2)}x`,
      `Current max bet unlock: ${formatCredits(getTableLimit('slots'))}`
    ].map(item => `<p>${item}</p>`).join('');
  }
  const claims = document.querySelector('#rewardClaimsList');
  if (claims) {
    claims.innerHTML = state.rewardClaims.length ? state.rewardClaims.map(item => `
      <article class="log-item"><span>${item.time}</span><strong>${item.source}</strong><small>${item.detail}</small><small>${item.xp} XP</small><b class="win">+${formatCredits(item.credits)}</b></article>
    `).join('') : '<p class="muted">No reward claims yet.</p>';
  }
}

export function renderVipPage() {
  const state = getState();
  const progress = getVipProgress();
  text('#vipPageTier', `${progress.current.name} (${progress.current.badge})`);
  text('#vipPageProgressText', progress.next ? `${state.lifetimeXp.toLocaleString()} lifetime XP toward ${progress.next.name}` : 'Top VIP tier reached');
  const bar = document.querySelector('#vipPageBar');
  if (bar) bar.style.width = `${progress.percent}%`;
  const benefits = [
    `Better daily rewards: ${tierRewardMultiplier().toFixed(2)}x`,
    `Larger mission rewards: ${progress.current.missionMultiplier.toFixed(2)}x`,
    `Cosmetic badge: ${progress.current.badge}`,
    `Higher max bet unlock: ${formatCredits(getTableLimit('slots'))}`
  ];
  const list = document.querySelector('#vipBenefitsList');
  if (list) list.innerHTML = benefits.map(item => `<article class="benefit-card">${item}</article>`).join('');
  const next = document.querySelector('#vipNextTier');
  if (next) next.innerHTML = progress.next
    ? `<strong>Next tier: ${progress.next.name}</strong><p class="muted">Unlocks ${progress.next.badge}, ${progress.next.missionMultiplier.toFixed(2)}x mission rewards, and larger table limits.</p>`
    : '<strong>Onyx tier active</strong><p class="muted">You have reached the highest simulator VIP tier.</p>';
}

export function renderHistoryPage() {
  const state = getState();
  const game = document.querySelector('#historyGameFilter')?.value || 'all';
  const result = document.querySelector('#historyResultFilter')?.value || 'all';
  const filtered = state.transactions.filter(item => {
    const gameOk = game === 'all' || item.game === game;
    const resultOk = result === 'all' || (result === 'win' && item.profit > 0) || (result === 'loss' && item.profit < 0) || (result === 'neutral' && item.profit === 0);
    return gameOk && resultOk;
  });
  const net = state.transactions.reduce((sum, item) => sum + item.profit, 0);
  const biggest = [...state.transactions].sort((a, b) => b.profit - a.profit)[0];
  const stats = [
    ['Total wagered', formatCredits(state.stats.totalWagered)],
    ['Net profit/loss', formatProfit(net)],
    ['Biggest win', biggest && biggest.profit > 0 ? formatCredits(biggest.profit) : '0 credits'],
    ['Most played', favoriteGame()]
  ];
  const statNode = document.querySelector('#historyStats');
  if (statNode) statNode.innerHTML = stats.map(([label, value]) => `<article class="stat"><span class="label">${label}</span><strong>${value}</strong></article>`).join('');
  const list = document.querySelector('#historyList');
  if (list) list.innerHTML = filtered.length ? filtered.map(item => `
    <article class="log-item"><span>${item.time}</span><strong>${item.game}</strong><small>Bet ${formatCredits(item.bet)}</small><small>${item.result}</small><b class="${item.profit > 0 ? 'win' : item.profit < 0 ? 'lose' : ''}">${formatProfit(item.profit)}</b></article>
  `).join('') : '<p class="muted">No matching history yet.</p>';
}

export function renderSettingsPage() {
  const state = getState();
  const username = document.querySelector('#settingsUsernameInput');
  if (username && document.activeElement !== username) username.value = state.username;
  const reduced = document.querySelector('#reducedAnimationsToggle');
  const compact = document.querySelector('#compactModeToggle');
  const hide = document.querySelector('#hideWinnersToggle');
  const sound = document.querySelector('#soundToggle');
  if (reduced) reduced.checked = !!state.settings.reducedAnimations;
  if (compact) compact.checked = !!state.settings.compactMode;
  if (hide) hide.checked = !!state.settings.hideRecentWins;
  if (sound) sound.checked = state.settings.soundEnabled !== false;
}

export function initSharedUi() {
  initHistoryFilters();
  document.querySelector('#categoryTabs')?.addEventListener('click', event => {
    const tab = event.target.closest('[data-category]');
    if (!tab) return;
    document.querySelectorAll('.tab').forEach(btn => btn.classList.toggle('is-active', btn === tab));
    renderGameGrid(tab.dataset.category);
  });

  document.body.addEventListener('click', event => {
    const chip = event.target.closest('[data-chip-value]');
    if (chip) {
      addToSelectedBet(chip.dataset.chipGame, Number(chip.dataset.chipValue));
      renderChipGroups();
      renderSessionPanels();
      return;
    }

    const claim = event.target.closest('[data-claim-mission]');
    if (claim) {
      const mission = missions.find(item => item.id === claim.dataset.claimMission);
      const reward = claimMission(mission);
      if (reward) toast(`Mission reward: +${formatCredits(reward.credits)}`);
      renderAll();
      return;
    }

    const modal = event.target.closest('[data-modal]');
    if (modal) openModal(modal.dataset.modal);

    const buy = event.target.closest('[data-buy-asset]');
    if (buy) {
      try {
        const asset = buyLuxuryAsset(buy.dataset.buyAsset);
        toast(`${asset.name} added to your Penthouse`, 'win');
        document.body.classList.add('luxury-pulse');
        setTimeout(() => document.body.classList.remove('luxury-pulse'), 700);
      } catch (error) {
        toast(error.message, 'warning');
      }
      renderAll();
      return;
    }

    const sell = event.target.closest('[data-sell-asset]');
    if (sell) {
      const asset = getLuxuryAsset(sell.dataset.sellAsset);
      if (!confirm(`Sell ${asset?.name || 'this asset'} for partial virtual-credit value?`)) return;
      try {
        const value = sellLuxuryAsset(sell.dataset.sellAsset);
        toast(`Asset sold: +${formatCredits(value)}`, 'win');
      } catch (error) {
        toast(error.message, 'warning');
      }
      renderAll();
      return;
    }

    const equip = event.target.closest('[data-equip-asset]');
    if (equip) {
      try {
        const asset = equipLuxuryAsset(equip.dataset.equipAsset);
        toast(`${asset.name} equipped in your showcase`);
      } catch (error) {
        toast(error.message, 'warning');
      }
      renderAll();
      return;
    }

    const wish = event.target.closest('[data-wishlist-asset]');
    if (wish) {
      try {
        const added = toggleWishlistAsset(wish.dataset.wishlistAsset);
        toast(added ? 'Added to luxury wishlist' : 'Removed from wishlist');
      } catch (error) {
        toast(error.message, 'warning');
      }
      renderAll();
      return;
    }

    const startBond = event.target.closest('[data-start-investment]');
    if (startBond) {
      try {
        const amount = Number(document.querySelector('#investmentAmountInput')?.value || 0);
        startInvestment(startBond.dataset.startInvestment, amount);
        toast('Vault Investment started');
      } catch (error) {
        toast(error.message, 'warning');
      }
      renderAll();
      return;
    }

    const collectBond = event.target.closest('[data-collect-investment]');
    if (collectBond) {
      try {
        const result = collectInvestment(collectBond.dataset.collectInvestment);
        toast(`Investment collected: +${formatCredits(result.payout)}`, result.profit >= 0 ? 'win' : 'warning');
      } catch (error) {
        toast(error.message, 'warning');
      }
      renderAll();
    }
  });

  document.querySelector('#claimPenthouseIncomeBtn')?.addEventListener('click', () => {
    try {
      const amount = claimPenthouseIncome();
      toast(`Penthouse income: +${formatCredits(amount)}`, 'win');
    } catch (error) {
      toast(error.message, 'warning');
    }
    renderAll();
  });
  document.querySelector('#assetCategoryFilter')?.addEventListener('change', renderPenthouse);
  document.querySelector('#assetRarityFilter')?.addEventListener('change', renderPenthouse);
  document.querySelector('#investmentAmountInput')?.addEventListener('input', renderInvestments);

  document.querySelector('#modalCloseBtn')?.addEventListener('click', closeModal);
  document.querySelector('#modalLayer')?.addEventListener('click', event => {
    if (event.target.id === 'modalLayer') closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
  document.querySelector('#howItWorksBtn')?.addEventListener('click', () => openModal('rules-lobby'));
  document.querySelector('#saveUsernameBtn')?.addEventListener('click', () => {
    updateUsername(document.querySelector('#usernameInput').value);
    toast('Username updated');
    renderAll();
  });

  document.querySelector('#rewardDailyBtn')?.addEventListener('click', () => {
    try {
      const amount = claimDailyBonus();
      toast(`Daily reward claimed: +${formatCredits(amount)}`, 'win');
      document.querySelector('.reward-claim-panel')?.classList.add('is-claiming');
      setTimeout(() => document.querySelector('.reward-claim-panel')?.classList.remove('is-claiming'), 800);
    } catch (error) {
      toast(error.message, 'warning');
    }
    renderAll();
  });
  document.querySelector('#promoClaimBtn')?.addEventListener('click', () => {
    try {
      const promo = claimPromoCode(document.querySelector('#promoCodeInput').value);
      toast(`Promo claimed: +${formatCredits(promo.credits)}`, 'win');
    } catch (error) {
      toast(error.message, 'warning');
    }
    renderAll();
  });
  document.querySelector('#comebackRewardBtn')?.addEventListener('click', () => {
    try {
      const amount = claimComebackBonus();
      toast(`Comeback reward: +${formatCredits(amount)}`, 'win');
    } catch (error) {
      toast(error.message, 'warning');
    }
    renderAll();
  });
  window.addEventListener('onyx:event-tick', renderAll);
  window.addEventListener('onyx:big-win', event => showBigWin(event.detail));
  document.querySelector('#settingsSaveBtn')?.addEventListener('click', () => {
    updateUsername(document.querySelector('#settingsUsernameInput').value);
    updateSettings({
      reducedAnimations: document.querySelector('#reducedAnimationsToggle').checked,
      compactMode: document.querySelector('#compactModeToggle').checked,
      hideRecentWins: document.querySelector('#hideWinnersToggle').checked,
      soundEnabled: document.querySelector('#soundToggle')?.checked !== false
    });
    toast('Settings saved');
    renderAll();
  });
  document.querySelector('#replayOnboardingBtn')?.addEventListener('click', () => {
    replayOnboarding();
    showOnboarding();
  });
  document.querySelector('#exportSaveBtn')?.addEventListener('click', () => {
    document.querySelector('#saveJsonBox').value = exportSave();
    toast('Save JSON exported');
  });
  document.querySelector('#importSaveBtn')?.addEventListener('click', () => {
    try {
      importSave(document.querySelector('#saveJsonBox').value);
      toast('Save imported');
    } catch {
      toast('Invalid save JSON', 'warning');
    }
    renderAll();
  });
  document.querySelector('#clearHistoryBtn')?.addEventListener('click', () => {
    if (!confirm('Clear transaction, reward, and recent winner history only?')) return;
    clearHistory();
    toast('History cleared');
    renderAll();
  });
  document.querySelector('#startOnboardingBtn')?.addEventListener('click', () => {
    completeOnboarding(document.querySelector('#onboardingUsername').value);
    hideOnboarding();
    toast('Starter bonus ready. Welcome to Onyx Casino.', 'win');
    renderAll();
  });
}

export function wireBetButtons(game) {
  document.querySelector(`#${game}MaxBetBtn`)?.addEventListener('click', () => {
    maxSelectedBet(game);
    renderAll();
  });
  document.querySelector(`#${game}ClearBetBtn`)?.addEventListener('click', () => {
    clearSelectedBet(game);
    renderAll();
  });
  document.querySelector(`#${game}RepeatBetBtn`)?.addEventListener('click', () => {
    repeatBet(game);
    renderAll();
  });
  document.querySelector(`#${game}DoubleBetBtn`)?.addEventListener('click', () => {
    doubleBet(game);
    renderAll();
  });
  document.querySelector(`#${game}HalfBetBtn`)?.addEventListener('click', () => {
    halfBet(game);
    renderAll();
  });
  document.querySelector(`#${game}NewSessionBtn`)?.addEventListener('click', () => {
    if (!confirm(`Start a new ${gameLabelForUi(game)} session? Lifetime stats stay saved.`)) return;
    resetGameSession(game);
    toast('New game session started');
    renderAll();
  });
}

export function disableDuring(button, disabled) {
  if (button) button.disabled = disabled;
}

export function openModal(key) {
  const copy = modalCopy[key];
  if (!copy) return;
  lastModalFocus = document.activeElement;
  text('#modalTitle', copy.title);
  document.querySelector('#modalBody').innerHTML = copy.body;
  const layer = document.querySelector('#modalLayer');
  layer.classList.add('is-visible');
  layer.setAttribute('aria-hidden', 'false');
  document.querySelector('#modalCloseBtn')?.focus();
}

export function closeModal() {
  const layer = document.querySelector('#modalLayer');
  if (!layer?.classList.contains('is-visible')) return;
  layer.classList.remove('is-visible');
  layer.setAttribute('aria-hidden', 'true');
  if (lastModalFocus && typeof lastModalFocus.focus === 'function') lastModalFocus.focus();
  lastModalFocus = null;
}

export function toast(message, tone = 'neutral') {
  const area = document.querySelector('#toastArea');
  if (area.children.length >= 4) area.firstElementChild?.remove();
  const node = document.createElement('div');
  node.className = `toast ${tone}`;
  node.textContent = message;
  area.appendChild(node);
  setTimeout(() => node.remove(), 3400);
}

export function showOnboarding() {
  const state = getState();
  const input = document.querySelector('#onboardingUsername');
  if (input) input.value = state.username;
  const layer = document.querySelector('#onboardingLayer');
  layer.classList.add('is-visible');
  layer.setAttribute('aria-hidden', 'false');
}

export function hideOnboarding() {
  const layer = document.querySelector('#onboardingLayer');
  layer.classList.remove('is-visible');
  layer.setAttribute('aria-hidden', 'true');
}

export function selectedBet(game) {
  return getState().selectedBets[game] || 0;
}

export function setBet(game, value) {
  setSelectedBet(game, value);
  renderChipGroups();
}

function currentCategory() {
  return document.querySelector('.tab.is-active')?.dataset.category || 'featured';
}

function gameIcon(id) {
  return {
    slots: '777',
    roulette: '36',
    blackjack: '21',
    dice: 'D6',
    mines: 'M',
    crash: 'X',
    plinko: 'P',
    wheel: 'W',
    baccarat: 'B',
    scratch: 'SC'
  }[id] || 'OC';
}

function assetCard(asset, options = {}) {
  const value = getLuxuryAssetValue(asset.id);
  const owned = !!options.owned;
  const equipped = !!options.equipped;
  const wished = !!options.wished;
  return `
    <article class="asset-card rarity-${asset.rarity.toLowerCase()} ${equipped ? 'is-equipped' : ''}">
      <div class="asset-top">
        <span class="asset-icon">${asset.category.split(' ').map(word => word[0]).join('').slice(0, 2)}</span>
        <span class="status-pill">${asset.rarity}</span>
      </div>
      <h3>${asset.name}</h3>
      <p>${asset.description}</p>
      <div class="asset-metrics">
        <span><strong>${formatCredits(value)}</strong><small>Market value ${marketTrend(asset.id)}</small></span>
        <span><strong>${asset.prestige.toLocaleString()}</strong><small>Prestige</small></span>
        <span><strong>${formatCredits(asset.income)}</strong><small>Hourly income</small></span>
      </div>
      ${options.compact ? '' : `<div class="game-actions">
        ${owned ? `<button class="secondary small" data-equip-asset="${asset.id}" ${equipped ? 'disabled' : ''}>${equipped ? 'Showcased' : 'Showcase'}</button><button class="ghost small" data-sell-asset="${asset.id}">Sell</button>` : `<button class="primary small" data-buy-asset="${asset.id}">Buy</button>`}
        <button class="ghost small" data-wishlist-asset="${asset.id}">${wished ? 'Wishlisted' : 'Wishlist'}</button>
      </div>`}
    </article>
  `;
}

function marketTrend(assetId) {
  const multiplier = Number(getState().luxuryMarket.multipliers?.[assetId] || 1);
  const trend = multiplier > 1.04 ? 'up' : multiplier < 0.98 ? 'down' : 'flat';
  const sign = trend === 'up' ? '+' : trend === 'down' ? '-' : '';
  return `<span class="trend trend-${trend}">${sign}${Math.abs((multiplier - 1) * 100).toFixed(0)}%</span>`;
}

function durationLabel(ms) {
  const hours = Math.round(ms / (60 * 60 * 1000));
  if (hours < 24) return `${hours}h`;
  return `${Math.round(hours / 24)}d`;
}

function timeUntil(dateText) {
  const ms = Math.max(0, Date.parse(dateText) - Date.now());
  const minutes = Math.ceil(ms / 60000);
  if (minutes < 60) return `${minutes}m remaining`;
  const hours = Math.ceil(minutes / 60);
  if (hours < 24) return `${hours}h remaining`;
  return `${Math.ceil(hours / 24)}d remaining`;
}

function text(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function renderBetStack(value) {
  if (!value) return '<span class="empty-stack">No chips selected</span>';
  const chips = [];
  let remaining = value;
  for (const chip of [...CHIP_VALUES].sort((a, b) => b - a)) {
    while (remaining >= chip && chips.length < 14) {
      chips.push(chip);
      remaining -= chip;
    }
  }
  if (remaining > 0) chips.push(remaining);
  return chips.map((chip, index) => `<span class="stack-chip" style="--i:${index}">${chip >= 1000 ? '1K' : chip}</span>`).join('');
}

function projectedText(game, bet) {
  if (!bet) return 'Select chips';
  if (game === 'slots') return 'Line pays vary; scatters can trigger free spins';
  if (game === 'roulette') return 'Projected payout updates by bet type';
  if (game === 'blackjack') return `Standard win pays ${formatCredits(bet * 2)}`;
  if (game === 'dice') return 'Projected payout updates by target';
  if (game === 'mines') return 'Potential cashout rises with every safe tile';
  if (game === 'crash') return 'Potential payout rises while the round runs';
  if (game === 'plinko') return 'Projected payout depends on risk and final slot';
  return formatCredits(bet);
}

function updateQuickBetButtons() {
  const state = getState();
  for (const game of PLAYABLE_GAMES) {
    const bet = state.selectedBets[game] || 0;
    const last = state.lastBets[game] || 0;
    const balance = state.balance;
    const table = getTableLimit(game);
    toggle(`#${game}RepeatBetBtn`, last > 0 && last <= balance && last <= table);
    toggle(`#${game}DoubleBetBtn`, bet > 0 && bet * 2 <= balance && bet * 2 <= table);
    toggle(`#${game}HalfBetBtn`, bet >= 20);
    toggle(`#${game}ClearBetBtn`, bet > 0);
    const playButton = { slots: '#spinSlotsBtn', roulette: '#spinRouletteBtn', blackjack: '#dealBtn', dice: '#rollDiceBtn', mines: '#minesStartBtn', crash: '#crashLaunchBtn', plinko: '#plinkoDropBtn' }[game];
    if (game === 'blackjack' && document.querySelector('#hitBtn') && !document.querySelector('#hitBtn').disabled) continue;
    toggle(playButton, bet > 0 && bet <= balance && bet <= table);
  }
}

function toggle(selector, enabled) {
  const node = document.querySelector(selector);
  if (node) node.disabled = !enabled;
}

function gameLabelForUi(game) {
  return { slots: 'slots', roulette: 'roulette', blackjack: 'blackjack', dice: 'dice', mines: 'mines', crash: 'crash', plinko: 'plinko' }[game] || game;
}

function initHistoryFilters() {
  const gameFilter = document.querySelector('#historyGameFilter');
  if (gameFilter && gameFilter.options.length <= 1) {
    const labels = ['Rewards', 'Missions', 'Achievements', 'Promo', 'Level Up', ...PLAYABLE_GAMES.map(gameLabel)];
    labels.forEach(label => {
      const option = document.createElement('option');
      option.value = label;
      option.textContent = label;
      gameFilter.appendChild(option);
    });
  }
  document.querySelector('#historyGameFilter')?.addEventListener('change', renderHistoryPage);
  document.querySelector('#historyResultFilter')?.addEventListener('change', renderHistoryPage);
}

function applySettings() {
  const settings = getState().settings;
  document.body.classList.toggle('reduced-motion', !!settings.reducedAnimations);
  document.body.classList.toggle('compact-mode', !!settings.compactMode);
}

function showBigWin(detail) {
  if (!detail || getState().settings.reducedAnimations) return;
  const layer = document.querySelector('#bigWinLayer');
  if (!layer) return;
  layer.className = `big-win-layer is-visible tier-${detail.tier}`;
  layer.querySelector('[data-big-win-tier]').textContent = `${detail.tier} win`;
  layer.querySelector('[data-big-win-game]').textContent = detail.game;
  layer.querySelector('[data-big-win-amount]').textContent = formatCredits(detail.profit);
  setTimeout(() => layer.classList.remove('is-visible'), 2500);
}
