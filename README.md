# Onyx Casino Version 6: True Game Experience Rebuild

Onyx Casino is a premium browser casino simulator built with vanilla HTML, CSS, and JavaScript modules. Version 6 rebuilds the first impression around a real game flow: title screen, casino entrance intro, room-entry splashes, game HUD, pause menu, objective tracker, and table-focused presentation.

## Fake-Money Clarification

Onyx Casino uses fictional virtual credits only. Credits, rewards, VIP progress, Vault items, luxury assets, Onyx Notes, table licenses, staff, management rank, lore files, and events exist only inside the browser save. This project does not provide real-money gambling.

## Version 6 Highlights

- Full title screen with Onyx logo, animated casino doors, particles, Enter Casino, Continue, New Game, Settings, and fake-money disclaimer
- Casino entrance intro with doors opening, light sweep, ambient sound hook, and camera-style transition into the lobby
- Lobby redesigned further as a casino map with environmental entrances instead of simple cards
- Room-entry system with title splashes, subtitles, ambient shift, and cinematic pacing
- In-game HUD with credits chip, VIP badge, current location, prestige/player identity, and quick menu
- Pause menu with Resume, Profile, Rewards, Settings, Export Save, Help, and Return to Title
- Objective tracker for the first-session flow and longer progression prompts
- Table experience overlay for playable games with Leave Table, chip tray, session display, and table intro feel
- Stronger visual presentation for Blackjack, Roulette, Slots, Crash, Mines, Plinko, and Dice

## Existing Major Systems

- Version 1: Live Casino atmosphere, Tonight at Onyx events, Vault progression, cosmetics, big-win effects, retention prompts, and dynamic ambience
- Version 2: Onyx Penthouse, fictional luxury assets, Vault Investments, High Roller World, prestige/status, dynamic luxury market, and Onyx Notes
- Version 3: House Edge operations, table ownership, staff, NPC traffic, surveillance, simulator edge tools, operations events, management rank, and subtle Onyx lore
- Version 4: Immersive Lobby, scene-based navigation, sidebar removal, cinematic environments, atmospheric world layers, and ambient audio hooks
- Version 5: Playable World graphics pass, physical casino floor zones, Penthouse showroom, House Edge control room, Vault room, High Roller private room, CSS visual asset system, and stronger game juice

## Playable Games

- Onyx Slots
- European Roulette
- Blackjack Classic
- Dice Duel
- Mines
- Crash
- Plinko

All playable games remain connected to the shared economy, XP, VIP tiers, missions, achievements, transactions, session stats, sound hooks, Vault XP, and big-win effects.

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
- Version 5: Playable World graphics pass, physical casino floor zones, Penthouse showroom, House Edge control room, Vault room, High Roller private room, CSS visual asset system, and stronger game juice
- Version 6: Title screen, entrance intro, casino-map lobby, room system, game HUD, pause menu, objectives, and table experience overlay

## Known Limitations

- Live players, NPC traffic, table activity, hot games, and events are simulated ambience systems.
- Luxury assets, market values, Onyx Notes, Vault Investments, table licenses, and staff are local browser-save progression systems.
- Vault Investments and House Edge income use browser time and are not server-authoritative.
- Table-focused presentation wraps the existing game engines rather than replacing every game UI from scratch.
- Some deep systems still use generated data lists inside room-themed layouts.
- Wheel, Baccarat, and Scratch Cards remain locked cards for future expansion.

## Roadmap Preview

- Version 7: deeper room-to-room camera travel and more diegetic terminals
- More authored first-session guidance and table tutorials
- More floor-native game entrances for Slots, Roulette, and High Roller variants
- Expanded ambient audio themes and stronger mobile gesture navigation
