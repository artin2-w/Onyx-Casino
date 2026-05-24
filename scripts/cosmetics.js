import { getEquippedCosmetic, getState } from './state.js';

export function initCosmetics() {
  applyCosmetics();
  window.addEventListener('storage', applyCosmetics);
}

export function applyCosmetics() {
  const equipped = getState().cosmetics.equipped || {};
  const classes = [
    getEquippedCosmetic('profileBorder')?.className,
    getEquippedCosmetic('chipSkin')?.className,
    getEquippedCosmetic('cardBack')?.className,
    getEquippedCosmetic('rouletteTheme')?.className,
    getEquippedCosmetic('lobbyTheme')?.className
  ].filter(Boolean);

  document.body.classList.remove(
    'cos-border-gold', 'cos-border-crimson', 'cos-border-neon', 'cos-border-onyx',
    'chip-obsidian', 'chip-crimson', 'chip-vault',
    'cards-midnight', 'cards-onyx', 'roulette-blood',
    'theme-midnight', 'theme-crimson', 'theme-neon', 'theme-vip'
  );
  document.body.classList.add(...classes);
  document.body.dataset.profileCosmetic = equipped.profileBorder || 'border-gold';
}
