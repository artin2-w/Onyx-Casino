# Onyx Casino Version 2 Notes

## What Was Added

Version 2 adds the Luxury & Power layer: the Onyx Penthouse, fictional luxury asset economy, passive income, Vault Investments, High Roller access, prestige status, Onyx Notes, and a dynamic luxury market.

## Biggest Systems

- Onyx Penthouse: luxury overview, net worth, lifestyle level, equipped asset showcase, passive income, Onyx Notes, and market signals
- Luxury Assets: fictional watches, supercars, art, furniture, private jet, casino shares, and rare Onyx collectibles with rarity, value, prestige, boosts, and income
- Vault Investments: browser-local Credit Bonds with lock timers, projected return percentages, maturity collection, transaction entries, XP, Vault XP, and simulated risk on higher tiers
- High Roller World: invitation-style access based on VIP, lifestyle, net worth, Vault level, and elite assets
- Prestige: lifestyle level, net worth rank, High Roller score, and titles from Lobby Regular to Black Card Legend
- Luxury Market: daily/session market state, hot assets, rare listings, value multipliers, trend indicators, and ticker lines
- Retention Hooks: near-affordable assets, ready Penthouse income, rare listings, High Roller proximity, and existing mission/VIP/Vault prompts
- Save Migration: Version 2 fields are merged into older browser saves without resetting existing credits, games, Vault progress, cosmetics, or history

## What Is Simulated

- Luxury assets and market values
- Passive income
- Vault Investment returns and risk adjustments
- High Roller invitations and table variants
- Onyx Notes
- Net worth, prestige, and lifestyle progression

Everything uses virtual credits and local browser-save progression only.

## Known Limitations

- Vault Investment timing is browser-local and not server-authoritative.
- High Roller tables currently route into existing game engines rather than separate table-rule engines.
- Onyx Notes have an earning/history layer; a deeper rare shop is planned.
- Market movement is intentionally lightweight and refreshed locally.
- Asset visuals are CSS/card based, not external image assets.

## Future Hooks for Version 3: The House Edge

- Table variant configuration can be expanded from High Roller cards into rule-level modifiers.
- Asset boosts are centralized in `state.js` and can affect future simulator tuning.
- Market state can drive themed events, rare shops, and High Roller invitations.
- Onyx Notes can support a prestige shop without touching the credit economy.
- Vault Investments can become a broader Lockbox system with richer maturity events.
