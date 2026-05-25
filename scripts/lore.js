import { LORE_FILES, getState } from './state.js';

export function unlockedLoreFiles() {
  return LORE_FILES.filter(file => getState().houseEdge.loreUnlocked.includes(file.id));
}
