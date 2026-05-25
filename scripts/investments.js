import { getState, saveState } from './state.js';

export function initInvestments() {
  pruneCollectedInvestmentHistory();
}

function pruneCollectedInvestmentHistory() {
  const state = getState();
  state.investments.history = (state.investments.history || []).slice(0, 20);
  saveState();
}

export function maturedInvestments() {
  return getState().investments.active.filter(item => Date.parse(item.unlocksAt) <= Date.now());
}
