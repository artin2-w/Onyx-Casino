import { getPassiveIncomeReady, getState, saveState } from './state.js';

export function initPenthouse() {
  const state = getState();
  if (!state.penthouse.lastIncomeClaimAt && getPassiveIncomeReady() > 0) {
    state.penthouse.incomeReadyAt = new Date().toISOString();
    saveState();
  }
}

export function penthouseIncomeReady() {
  return getPassiveIncomeReady();
}
