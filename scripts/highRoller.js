import { getHighRollerAccess, getState, saveState } from './state.js';

export function initHighRoller() {
  const state = getState();
  const access = getHighRollerAccess();
  if (access.access && !state.highRoller.invited) {
    state.highRoller.invited = true;
    saveState();
  }
}

export function highRollerTableVariant(game, label) {
  return {
    game,
    label,
    xpMultiplier: 1.18,
    vaultMultiplier: 1.12,
    minBet: 250
  };
}
