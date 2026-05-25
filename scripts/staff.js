import { getState, getStaffPower } from './state.js';

export function staffRosterSummary() {
  return {
    count: getState().houseEdge.staffRoster.length,
    power: getStaffPower()
  };
}
