# Version 6 Notes: True Game Experience Rebuild

## Title Screen

- Added a full-screen Onyx Casino title screen
- Includes animated dark casino doors, logo glow, ambient particles, Enter Casino, Continue, New Game, Settings, and fake-money disclaimer
- New Game resets the local browser save only after confirmation

## Casino Entrance Intro

- Entering the casino now plays a short CSS-only door-opening intro
- The intro triggers existing sound hooks and transitions into the lobby

## Casino Map Lobby

- Lobby entrances are presented as environmental casino doors instead of plain cards
- The map emphasizes Casino Floor, Penthouse, Vault, High Roller, House Edge, and VIP as places

## Room System

- Main destinations now show room-entry title splashes with subtitles
- Examples: The Onyx Penthouse, The House Edge, The Vault, and High Roller

## Game HUD

- Added an in-game HUD for credits, VIP tier, current location, player identity, and quick menu
- The old top status bar is hidden during active game mode

## Pause Menu

- Added a real pause menu with Resume, Profile, Rewards, Settings, Export Save, Help, and Return to Title
- Exported save JSON appears inside the pause menu without leaving the game flow

## First 60 Seconds

- Added an objective tracker that starts with entering the casino and points toward first table, rewards, Vault, and VIP progression
- Existing onboarding remains, but it now appears after the title/entrance flow

## Table Experience

- Playable games now get a table overlay with title, subtitle, chip tray, session profit, and Leave Table action
- Blackjack, Roulette, Slots, Crash, Mines, Plinko, and Dice received stronger table/cabinet/board styling

## Remaining Limitations

- The table overlay wraps existing game engines; it does not replace every control layout from scratch.
- Some large systems still use generated lists, though they sit inside more game-like room scenes.
- All graphics remain CSS-only silhouettes and gradients.
