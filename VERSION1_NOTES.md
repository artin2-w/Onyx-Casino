# Onyx Casino Version 1 Notes

## What Was Added

Version 1 introduces the Live Casino platform layer: simulated social activity, Tonight at Onyx events, Vault progression, cosmetics, prestige identity, big-win effects, retention prompts, and event-driven atmosphere.

## Biggest Systems

- Live Casino: believable simulated player count, activity feed, table activity, hot game rotation, randomized player names, and VIP rank moments
- Tonight at Onyx: rotating event catalog with countdowns, themed palettes, featured games, XP boosts, Vault boosts, reward boosts, and recent event history
- The Vault: Vault XP, Vault Keys, Daily/Elite/Mega crates, rarity tiers, reward reveal animation, duplicate protection, inventory, and equip flow
- Cosmetics: profile borders, chip skins, card backs, roulette theme, lobby themes, and profile card integration
- Big Wins: Mega, Massive, and Legendary overlays with scaled glow and coin-rain effects
- Retention: near-mission, near-level, Vault-ready, daily-streak, and comeback reward prompts
- Atmosphere: dynamic event ambience, subtle particles, richer transitions, and reduced-motion support

## What Is Simulated

- Online player counts
- Player names and VIP activity
- Live wins and table heat
- Casino events and event history
- Vault collectibles and cosmetics
- Reward boosts and progression pacing

Everything uses virtual credits and local browser-save progression only.

## Known Limitations

- The live casino feed is atmospheric simulation, not networked multiplayer.
- Vault rewards are local collectible data, not server inventory.
- Cosmetic effects are visual CSS themes and do not change game odds.
- Some locked lobby games are still future hooks.
- Sound remains generated Web Audio tones.

## Future Expansion Hooks

- `scripts/liveCasino.js` can be expanded with more feed templates and floor segments.
- `scripts/events.js` can add scripted event sequences, more palettes, and event-specific missions.
- `scripts/vault.js` and Vault state can support seasonal collections.
- `scripts/cosmetics.js` can support more equipment slots and preview panels.
- `scripts/atmosphere.js` can support event-specific lighting layers and idle lobby sequences.
