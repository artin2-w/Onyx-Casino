# Onyx Casino Version 1: The Live Casino

Onyx Casino is a premium browser casino simulator built with vanilla HTML, CSS, and JavaScript modules. Version 1 turns the project into a living casino platform with atmosphere, simulated social activity, rotating events, Vault progression, cosmetics, profile identity, and daily return hooks.

## Fake-Money Clarification

Onyx Casino uses fictional virtual credits only. Credits, rewards, VIP progress, Vault items, and cosmetics exist only inside the browser save. This project does not provide real-money gambling.

## Version 1 Highlights

- Live Casino system with simulated online player count, activity ticker, table signals, hot game rotation, player names, and VIP rank moments
- Tonight at Onyx event system with rotating events, countdowns, color palettes, featured games, XP boosts, Vault boosts, reward boosts, and event history
- The Vault long-term progression system with Vault XP, keys, Daily/Elite/Mega crates, rarity tiers, reward reveal animation, duplicate protection, and cosmetic inventory
- Cosmetic identity system with profile borders, chip skins, card backs, roulette themes, lobby themes, VIP-flavored prestige, and equipped visuals across the UI
- Big win system with Mega/Massive/Legendary win states, glow overlays, coin rain, and reduced-motion respect
- Retention prompts for near-level-up, mission completion, Vault progress, daily streak continuation, and comeback recovery rewards
- Expanded profile with prestige title, Vault level, equipped cosmetics, favorite game, VIP status, lifetime stats, and badge showcase
- Premium atmosphere pass with event-based ambience, animated particles, richer hierarchy, stronger mobile layout, and polished interaction states

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

- Lobby: live floor, Tonight at Onyx, game cards, missions, achievements, recent wins, and transactions
- Rewards: daily calendar, missions, achievements, VIP rewards, promo-style local codes, and reward claims
- Vault: crates, keys, Vault XP, cosmetic inventory, recent reveals, and equip controls
- VIP: tier progress, benefits, max bet unlocks, and next-tier preview
- Profile: username, prestige title, cosmetic profile card, favorite game, Vault level, VIP status, and lifetime stats
- History: transaction analytics and filters
- Settings: username, sound, reduced animations, compact mode, save export/import, history clearing, reset, and known limitations
- Help: simulator explanation, balance/VIP/missions/game guidance, and localStorage troubleshooting

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

## Known Limitations

- Live players, table activity, hot games, and events are simulated ambience systems.
- Vault rewards and cosmetics are local browser-save collectibles.
- Plinko uses a visualized path rather than a physics engine.
- Crash rounds are tuned for short browser sessions.
- Sound effects use lightweight generated tones.
- Save data is local to the current browser and device unless exported.
- Wheel, Baccarat, and Scratch Cards remain locked cards for future expansion.

## Roadmap Preview

- Version 2 live host-style lobby moments and richer event scripting
- More playable games and deeper table variants
- More Vault collectible sets and cosmetic previews
- Optional authored audio assets behind the existing sound manager
- Enhanced keyboard shortcuts and accessibility announcements per game
- Wider mobile browser QA before a broader beta
