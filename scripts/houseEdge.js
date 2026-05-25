import { getHouseEdgeAccess, refreshNpcTraffic, saveState, seedSurveillanceAlert, getState } from './state.js';

export function initHouseEdge() {
  const access = getHouseEdgeAccess();
  if (access.unlocked) getState().houseEdge.unlocked = true;
  refreshNpcTraffic();
  if (access.unlocked && getState().houseEdge.surveillanceAlerts.length === 0) seedSurveillanceAlert();
  saveState();
}
