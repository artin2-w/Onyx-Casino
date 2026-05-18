# Onyx Casino v0.5 - Virtual Credits Casino Simulator

Onyx Casino is a browser-based fake-money casino simulator built with HTML, CSS, and vanilla JavaScript modules.

## Safety Rule

This project is fake-money only. The player only uses virtual credits saved in localStorage, and the app is a browser-local simulator.

## Included Features

- Premium dark onyx casino lobby
- Mobile-first responsive layout
- Starting balance of 10,000 virtual credits
- Shared chip-style bet selectors using credit amounts
- Daily bonus with cooldown and streak tracking
- XP, levels, VIP tiers, and VIP progress
- Mission rewards and recent wins feed
- Profile screen with username, favorite game, wagering stats, and reset
- Transaction history with game, bet, result, profit/loss, and time
- Per-game sessions with session wagered, session profit, recent results, and reset
- Quick bet flow: repeat, double, half, clear, max, and visual chip stacks
- Achievements with badges and small virtual credit/XP rewards
- Rules, paytable, fake-money info, and how-it-works modals
- Four playable game modules:
  - Onyx Slots with 5 reels, 3 visible rows, 10 paylines, scatters, free spins, turbo toggle, and spin history
  - European Roulette with 0-36 board, outside bets, dozens, columns, straight bets, and number history
  - Blackjack Classic with a 6-deck shoe, soft-total display, double, split, and dealer stand-on-soft-17 rule
  - Dice Duel with roll over/under, target 2-98, win chance, projected payout, and roll history
- Audio-ready `onyx:sound` event hooks without bundled audio files
- v0.4 modern casino games:
  - Mines: 5x5 grid, selectable mine count, rising multiplier, cashout, reveal history
  - Crash: rising multiplier, generated crash point, manual/auto cashout, graph, crash history
  - Plinko: low/medium/high risk, 8/12/16 rows, animated peg path, multiplier slots, drop history
- New missions for Mines safe reveals, Crash cashouts, Plinko drops, and high-risk wins
- New achievements for Mines, Crash, and Plinko milestones
- v0.5 platform polish:
  - First-time onboarding with username setup and starter virtual-credit bonus
  - 7-day daily login reward calendar with VIP scaling
  - Reward Center with daily reward, missions, achievements, VIP rewards, promo-style fake codes, and reward claim history
  - VIP Club page with current tier, tier progress, benefits, and next-tier preview
  - History page with filters, biggest wins, total wagered, net result, and most-played game
  - Settings page with username, reduced animations, compact mode, recent winners visibility, save export/import, history clearing, reset, and onboarding replay
  - Mobile bottom navigation and clearer platform sections
  - Ambient background polish, reward claim animation, improved empty states, and simulator clarity footer

## File Structure

```txt
onyx-casino-starter/
  index.html
  styles/main.css
  scripts/app.js
  scripts/state.js
  scripts/ui.js
  scripts/missions.js
  scripts/games/slots.js
  scripts/games/roulette.js
  scripts/games/blackjack.js
  scripts/games/dice.js
  scripts/games/mines.js
  scripts/games/crash.js
  scripts/games/plinko.js
  data/missions.js
```

## Known Limitations

- Mines, Crash, and Plinko are browser-local simulator games and are not provably fair real-money games.
- Crash timing is intentionally short for a smooth browser-game pace.
- Plinko path animation is visualized as peg highlights rather than a physics engine.
- All save data stays in localStorage and can be reset from the profile panel.
- Promo codes are local simulated rewards only and can be claimed once per browser save.
- Export/import expects the app's JSON save shape and performs basic validation before loading.

## How to Run

Because the project uses JavaScript modules, open it with a local server.

In VS Code:

1. Install the Live Server extension.
2. Open the `onyx-casino-starter` folder.
3. Right-click `index.html`.
4. Click Open with Live Server.

Do not add real-money mechanics to this project.
