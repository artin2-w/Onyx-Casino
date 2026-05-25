# Onyx Casino Version 2: Luxury & Power

Onyx Casino is a premium browser casino simulator built with vanilla HTML, CSS, and JavaScript modules. Version 2 turns virtual credits into a long-term lifestyle and status progression loop with the Onyx Penthouse, fictional luxury assets, Vault Investments, High Roller access, prestige titles, Onyx Notes, and a dynamic luxury market.

## Fake-Money Clarification

Onyx Casino uses fictional virtual credits only. Credits, rewards, VIP progress, Vault items, luxury assets, Onyx Notes, cosmetics, and market states exist only inside the browser save. This project does not provide real-money gambling.

## Version 2 Highlights

- The Onyx Penthouse luxury hub with net worth, lifestyle level, passive income, equipped showcase, asset store, owned collection, and market ticker
- Fictional luxury asset economy with watches, supercars, art pieces, private jet, casino shares, furniture, and rare Onyx collectibles
- Asset effects for passive credit income, VIP XP boosts, Vault XP boosts, daily reward boosts, prestige value, and High Roller access
- Vault Investments with Safe Bond, Luxe Bond, High Roller Bond, and Black Vault Bond lock timers, projected returns, maturity collection, and local simulated risk
- High Roller World with invitation-style access paths and premium table variants that reuse existing game engines
- Prestige and status system with lifestyle level, net worth rank, High Roller score, and titles from Lobby Regular to Black Card Legend
- Dynamic luxury market with daily/session states, hot assets, rare listings, market trend indicators, and ticker messages
- Onyx Notes as a simple in-game-only prestige currency earned from major luxury and Vault milestones
- Retention hooks for near-affordable assets, High Roller access, ready income, rare listings, daily streaks, and comeback rewards

## Playable Games

- Onyx Slots
- European Roulette
- Blackjack Classic
- Dice Duel
- Mines
- Crash
- Plinko

All playable games remain connected to the shared economy, XP, VIP tiers, missions, achievements, transactions, session stats, sound hooks, Vault XP, and big-win effects.

## Platform Sections

- Lobby: live floor, Tonight at Onyx, game cards, missions, achievements, recent wins, transactions, and status prompts
- Penthouse: luxury assets, equipped showcase, net worth, lifestyle level, passive income, Onyx Notes, and luxury market
- High Roller: status gate, unlock requirements, and premium table variant cards
- Rewards: daily calendar, missions, achievements, VIP rewards, promo-style local codes, and reward claims
- Vault: crates, keys, Vault XP, cosmetic inventory, recent reveals, and Vault Investments
- VIP: tier progress, benefits, max bet unlocks, and next-tier preview
- Profile: username, prestige title, net worth rank, lifestyle level, equipped cosmetics, luxury showcase, favorite game, and lifetime stats
- History: transaction analytics and filters
- Settings: username, sound, reduced animations, compact mode, save export/import, history clearing, reset, and known limitations
- Help: simulator explanation, balance/VIP/missions/game guidance, Penthouse guidance, and localStorage troubleshooting

## How to Run Locally

Because the app uses JavaScript modules, run it through a local static server.

In VS Code:

1. Install the Live Server extension.
2. Open the `onyx-casino-starter` folder.
3. Right-click `index.html`.
4. Choose `Open with Live Server`.

Any simple static server also works:

```bash
npx serve .
```

## Version History

- v0.1: Starter fake-credit lobby and early game loop
- v0.2: Premium lobby, virtual-credit economy, VIP, profile, missions, and transactions
- v0.3: Deeper sessions, bet slip, slots paylines/free spins, roulette board, blackjack shoe, dice math, and achievements
- v0.4: Mines, Crash, and Plinko added as full playable modern games
- v0.5: Onboarding, daily calendar, Reward Center, VIP Club, History, Settings, import/export, and app shell polish
- v0.6: Visual identity overhaul, CSS-only brand assets, Help Center, public alpha labeling, sound manager, accessibility pass, and release notes
- Version 1: Live Casino systems, Tonight at Onyx, The Vault, cosmetics, prestige identity, big-win effects, atmosphere, retention prompts, and platform polish
- Version 2: Luxury assets, Onyx Penthouse, Vault Investments, High Roller World, prestige status, Onyx Notes, luxury market, and wealth progression

## Known Limitations

- Live players, table activity, hot games, and events are simulated ambience systems.
- Luxury assets, market values, Onyx Notes, and Vault Investments are local browser-save progression systems.
- Vault Investments use browser time and light local guards; they are not server-authoritative.
- High Roller variants currently reuse existing game engines with premium labels and access gates.
- Onyx Notes are earned and displayed; a deeper rare shop is prepared for a future update.
- Plinko uses a visualized path rather than a physics engine.
- Crash rounds are tuned for short browser sessions.
- Sound effects use lightweight generated tones.
- Save data is local to the current browser and device unless exported.
- Wheel, Baccarat, and Scratch Cards remain locked cards for future expansion.

## Roadmap Preview

- Version 3: The House Edge with deeper table variants, configurable simulator math, and richer risk education
- Rare Onyx Notes shop for prestige cosmetics and limited luxury listings
- More Penthouse upgrade tiers and visual room states
- More High Roller table variant rules without duplicating core game engines
- Expanded market events and authored Tonight at Onyx luxury event scripting
- Wider mobile browser QA before a broader beta
