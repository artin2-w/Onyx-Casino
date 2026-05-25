import { generateOperationsEvent, getState } from './state.js';

export function ensureOperationsEvent() {
  return getState().houseEdge.activeEvent || generateOperationsEvent();
}
