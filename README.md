# Onyx Casino Version 4: The Immersive Lobby

Onyx Casino is a premium browser casino simulator built with vanilla HTML, CSS, and JavaScript modules. Version 4 is a presentation and immersion overhaul: the app now opens as a cinematic casino hub with floating game-style navigation, scene-based destinations, ambient world layers, and stronger luxury casino identity.

## Fake-Money Clarification

Onyx Casino uses fictional virtual credits only. Credits, rewards, VIP progress, Vault items, luxury assets, Onyx Notes, table licenses, staff, management rank, lore files, and events exist only inside the browser save. This project does not provide real-money gambling.

## Version 4 Highlights

- Immersive central lobby hub with cinematic hero staging, animated casino background, Tonight at Onyx spotlight, live ambience, and portal-style location entries
- Classic fixed sidebar removed from the live experience and replaced with floating game-style navigation
- Compact cinematic status HUD for credits, level, VIP, net worth, Onyx Notes, and management rank
- Scene-based visual identities for Casino Floor, Penthouse, High Roller, House Edge, Vault, VIP, and supporting pages
- Layered atmosphere with moving lights, fog, crowd silhouettes, soft scene transitions, and reduced-motion support
- Luxury showcase pass for Penthouse assets and collectible displays
- Optional Web Audio ambience that responds to scene changes after player interaction and respects sound/reduced-animation settings

## Existing Major Systems

- Version 1: Live Casino atmosphere, Tonight at Onyx events, Vault progression, cosmetics, big-win effects, retention prompts, and dynamic ambience
- Version 2: Onyx Penthouse, fictional luxury assets, Vault Investments, High Roller World, prestige/status, dynamic luxury market, and Onyx Notes
- Version 3: House Edge operations, table ownership, staff, NPC traffic, surveillance, simulator edge tools, operations events, management rank, and subtle Onyx lore

## Playable Games

- Onyx Slots
- European Roulette
- Blackjack Classic
- Dice Duel
- Mines
- Crash
- Plinko

All playable games remain connected to the shared economy, XP, VIP tiers, missions, achievements, transactions, session stats, sound hooks, Vault XP, and big-win effects.

## Scene-Based Navigation

- Lobby: cinematic hub with portal destinations and live casino ambience
- Casino Floor: playable 2D floor with movement and table interactions
- Penthouse: luxury skyline suite and asset showcase
- High Roller: private velvet-and-gold room with gated table variants
- House Edge: surveillance operations room with CCTV styling and management systems
- Vault: reward chamber, crates, inventory, and Credit Bonds
- VIP Lounge: tier progress and benefits

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
- Version 3: House Edge operations, table ownership, staff, NPC traffic, surveillance, edge tools, operations events, management rank, and Onyx lore
- Version 4: Immersive Lobby, scene-based navigation, sidebar removal, cinematic environments, atmospheric world layers, and ambient audio hooks

## Known Limitations

- Live players, NPC traffic, table activity, hot games, and events are simulated ambience systems.
- Luxury assets, market values, Onyx Notes, Vault Investments, table licenses, and staff are local browser-save progression systems.
- Vault Investments and House Edge income use browser time and are not server-authoritative.
- Surveillance incidents are fictional decision cards and do not teach real cheating or real-world abuse methods.
- Edge Tools provide broad simulator hints only; they never guarantee outcomes.
- High Roller variants currently reuse existing game engines with premium labels and access gates.
- Version 4 changes presentation heavily, but many internal systems still render their original data lists inside the new scene treatments.
- Wheel, Baccarat, and Scratch Cards remain locked cards for future expansion.

## Roadmap Preview

- Version 5: deeper first-person room transitions and more diegetic terminals
- Floor-native game entrances for Slots, Roulette, and High Roller variants
- More animated collectible showcases and cosmetic room effects
- Expanded ambient audio layers with user-selectable sound themes
- Better mobile gesture navigation and wider mobile browser QA
