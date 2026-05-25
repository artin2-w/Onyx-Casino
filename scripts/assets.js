import { LUXURY_ASSETS, getState, getLuxuryAssetValue, saveState } from './state.js';

export function initAssetEconomy() {
  normalizeAssetWishlist();
}

function normalizeAssetWishlist() {
  const validIds = new Set(LUXURY_ASSETS.map(asset => asset.id));
  const state = getState();
  state.penthouse.wishlist = (state.penthouse.wishlist || []).filter(assetId => validIds.has(assetId));
  saveState();
}

export function assetMarketSnapshot() {
  return LUXURY_ASSETS.map(asset => ({
    ...asset,
    marketValue: getLuxuryAssetValue(asset.id)
  }));
}
