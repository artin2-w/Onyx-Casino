# Version 4 Notes: The Immersive Lobby

## What Changed

Version 4 is a presentation and immersion overhaul. The classic fixed sidebar is removed from the live experience and replaced by a cinematic central lobby hub with floating game-style navigation.

## Major Visual Changes

- New fullscreen immersive lobby scene
- Portal-style entries for Casino Floor, Penthouse, High Roller, House Edge, Vault, and VIP Lounge
- Compact cinematic status HUD
- Layered world atmosphere with moving lights, fog, and crowd silhouettes
- Scene-themed backgrounds for major destinations
- Softer reveal transitions and premium hover feedback

## Navigation Redesign

Navigation now behaves like a game hub instead of a web admin panel. Players enter locations through the lobby portals or the floating bottom navigation. The existing systems remain available, but the presentation is more scene-based.

## Atmosphere Overhaul

- Lobby uses animated signage, crowd shadows, and a Tonight at Onyx spotlight
- Penthouse uses skyline-suite lighting and luxury showcase framing
- High Roller uses darker velvet-and-gold private-room styling
- House Edge uses CCTV, scanline, and red-alert visual language
- Vault and VIP use stronger chamber/lounge ambience

## Performance Considerations

Animations use CSS transforms, opacity, gradients, and lightweight Web Audio tones. Reduced-motion settings and `prefers-reduced-motion` disable decorative motion. No external image or audio assets were added.

## Known Limitations

- Many existing system lists still use their original generated markup, now wrapped in a more cinematic scene treatment.
- The immersive lobby is visual/navigation focused; it does not add new economy systems.
- Ambient audio is synthesized and intentionally subtle.
- Some destination pages still have dense data because their underlying systems are large.

## Future Hooks for Version 5

- Room-to-room camera travel
- More diegetic terminals for Vault, House Edge, and Investments
- Floor-native game entrances and table variants
- Expanded cosmetic room effects
- Deeper ambient audio layers and selectable atmosphere themes
