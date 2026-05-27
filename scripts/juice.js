export function initJuice() {
  window.addEventListener('onyx:big-win', burst);
  window.addEventListener('onyx:vault-reveal', burst);
  window.addEventListener('onyx:luxury-purchase', burst);
  document.body.addEventListener('click', event => {
    if (event.target.closest('button, .game-card, .asset-card, .high-table, .portal-card, .floor-zone')) {
      chipTrail(event.clientX, event.clientY);
    }
  });
}

function burst() {
  if (document.body.classList.contains('reduced-motion')) return;
  document.body.classList.add('world-burst');
  window.setTimeout(() => document.body.classList.remove('world-burst'), 520);
}

function chipTrail(x, y) {
  if (document.body.classList.contains('reduced-motion') || !x || !y) return;
  const node = document.createElement('span');
  node.className = 'chip-trail';
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;
  document.body.appendChild(node);
  window.setTimeout(() => node.remove(), 700);
}
