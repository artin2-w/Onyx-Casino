import { EDGE_TOOLS, getState } from './state.js';

export function unlockedEdgeTools() {
  const tools = getState().houseEdge.edgeTools;
  return EDGE_TOOLS.filter(tool => tools[tool.id]);
}
