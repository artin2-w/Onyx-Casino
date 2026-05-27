export function initVisualAssets() {
  document.documentElement.classList.add('visual-assets-ready');
}

export function visualClassForAsset(category = '') {
  if (category.includes('Watch')) return 'visual-watch';
  if (category.includes('Supercar')) return 'visual-car';
  if (category.includes('Jet')) return 'visual-jet';
  if (category.includes('Art') || category.includes('Collectibles')) return 'visual-sculpture';
  if (category.includes('Shares')) return 'visual-black-card';
  if (category.includes('Furniture')) return 'visual-sofa';
  return 'visual-diamond';
}
