import { equipCosmetic, formatCredits, getState, getVaultProgress, openVaultCrate } from './state.js';
import { renderAll, toast } from './ui.js';
import { applyCosmetics } from './cosmetics.js';

export function initVaultUi() {
  document.body.addEventListener('click', event => {
    const crate = event.target.closest('[data-open-crate]');
    if (crate) {
      try {
        const reward = openVaultCrate(crate.dataset.openCrate);
        showVaultReveal(reward);
        toast(`Vault unlocked: ${reward.name}`, 'win');
      } catch (error) {
        toast(error.message, 'warning');
      }
      renderAll();
      return;
    }

    const cosmetic = event.target.closest('[data-equip-cosmetic]');
    if (cosmetic) {
      try {
        const item = equipCosmetic(cosmetic.dataset.equipCosmetic);
        applyCosmetics();
        toast(`Equipped ${item.name}`);
      } catch (error) {
        toast(error.message, 'warning');
      }
      renderAll();
    }
  });
}

export function vaultSummaryText() {
  const vault = getState().vault;
  const progress = getVaultProgress();
  return `Vault Level ${progress.level} - ${vault.keys} keys - ${formatCredits(vault.crates.daily + vault.crates.elite + vault.crates.mega)} style crate score`;
}

function showVaultReveal(reward) {
  const overlay = document.querySelector('#vaultRevealLayer');
  if (!overlay) return;
  overlay.querySelector('[data-vault-reveal-rarity]').textContent = reward.rarity;
  overlay.querySelector('[data-vault-reveal-name]').textContent = reward.name;
  overlay.querySelector('[data-vault-reveal-detail]').textContent = reward.duplicate
    ? 'Duplicate protection converted this into a Vault Key.'
    : `${reward.type.replace(/([A-Z])/g, ' $1')} cosmetic added to inventory.`;
  overlay.className = `vault-reveal-layer is-visible rarity-${reward.rarity.toLowerCase()}`;
  setTimeout(() => overlay.classList.remove('is-visible'), 2600);
}
