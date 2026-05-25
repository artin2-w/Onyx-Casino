import { TABLE_LICENSES, getState } from './state.js';

export function ownedTableReports() {
  return getState().houseEdge.ownedTables.map(table => ({
    ...table,
    license: TABLE_LICENSES.find(license => license.id === table.licenseId)
  }));
}
