# Onyx Casino Version 3 Notes

## What Was Added

Version 3 adds The House Edge: a fictional casino operations layer where the player manages table licenses, staff, NPC traffic, surveillance incidents, simulator analysis tools, operations events, management rank, and secret Onyx lore.

## Major Systems

- House Edge Hub: unlockable operations dashboard with reputation, house income, traffic, security risk, staff morale, table heat, and operations alerts
- Table Ownership: buy, upgrade, maintain, and staff fictional table licenses
- Dealer and Staff System: hire, train, assign, pay, and release fictional staff with roles, traits, morale, salary, and risk modifiers
- NPC Traffic: local simulated crowd mix based on reputation, tables, staff, lifestyle, High Roller access, and Tonight at Onyx boosts
- Surveillance Hub: CCTV-style incident cards with fictional actions and outcomes
- Edge Tools: Onyx Notes unlock simulator-only probability hints for Blackjack, Crash, Roulette, Mines, and Plinko
- Operations Events: choice-based floor events with reputation, income, risk, morale, Onyx Notes, and Vault XP outcomes
- Secret Lore: unlockable operations files referencing The Founder, Black Card records, Vault anomalies, and Onyx Syndicate rumors
- Management Progression: ranks from Guest to The House based on tables, reputation, staff power, net worth, surveillance, and High Roller score

## Save Migration

- Save key upgraded to `onyxCasinoSaveV3`.
- Version 2 saves are merged into the Version 3 schema.
- New `houseEdge` data includes unlock state, owned tables, staff roster, assignments, NPC traffic, alerts, operations log, edge tools, lore files, event history, reputation, security risk, and morale values.
- Sanitizers preserve existing credits, games, VIP, Vault, cosmetics, Penthouse, investments, luxury assets, Onyx Notes, and history.

## Safety Notes

- Everything is fictional, browser-local, and uses virtual credits only.
- Surveillance incidents are game-like decision cards.
- Edge Tools provide broad simulator hints and do not guarantee outcomes.
- No real-world casino abuse guidance is included.

## Known Limitations

- House Edge income is local browser-time based, not server-authoritative.
- Table reports are currently summary cards rather than deep per-hour analytics.
- Staff performance is modeled through simple skill/morale modifiers.
- Edge Tools do not directly alter game odds yet.
- Lore unlocks are lightweight and prepared for a richer story layer.

## Future Hooks

- Table-specific rule variants and deeper reports
- Staff fatigue and shift scheduling
- Operations event chains tied to Tonight at Onyx
- Rare Onyx Notes shop and secret-room unlocks
- Expanded Founder/Black Card lore progression
