const LABELS = {
  blackjack: 'Press E to sit at Blackjack',
  roulette: 'Press E to approach Roulette',
  slots: 'Press E to play Slots',
  cashier: 'Press E to visit Rewards Desk',
  vip: 'Press E to call the VIP elevator',
  penthouse: 'Press E for Penthouse access',
  profile: 'Press E to open your profile phone',
  crash: 'Press E to enter Crash Arcade',
  plinko: 'Press E to drop into Plinko',
  mines: 'Press E to enter Risk Corner',
  dice: 'Press E to roll Dice Duel',
  lobby: 'Press E to open Classic dashboard'
};

export function createInteractionSystem({ stage, prompt, setView, toast }) {
  const objects = Array.from(stage.querySelectorAll('[data-floor-object]')).map(node => ({
    node,
    id: node.dataset.floorObject,
    target: node.dataset.targetView,
    x: Number.parseFloat(node.style.getPropertyValue('--x')),
    y: Number.parseFloat(node.style.getPropertyValue('--y'))
  }));
  let nearby = null;

  function update(player) {
    nearby = null;
    let bestDistance = Infinity;
    for (const object of objects) {
      const distance = Math.hypot(player.x - object.x, player.y - object.y);
      const active = distance < 10;
      object.node.classList.toggle('is-nearby', active);
      if (active && distance < bestDistance) {
        nearby = object;
        bestDistance = distance;
      }
    }
    if (nearby) {
      prompt.hidden = false;
      prompt.textContent = LABELS[nearby.id] || 'Press E to interact';
      prompt.style.left = `${nearby.x}%`;
      prompt.style.top = `${Math.max(8, nearby.y - 10)}%`;
      document.querySelector('#floorLocationText').textContent = nearby.node.querySelector('strong')?.textContent || 'Casino Floor';
    } else {
      prompt.hidden = true;
      document.querySelector('#floorLocationText').textContent = 'Main Floor';
    }
  }

  function interact() {
    if (!nearby) {
      toast?.('Move closer to a table or elevator.', 'warning');
      return;
    }
    window.dispatchEvent(new CustomEvent('onyx:sound', { detail: { name: 'chip-click', source: 'floor' } }));
    setView(nearby.target);
  }

  window.addEventListener('keydown', event => {
    if (event.key.toLowerCase() === 'e' && document.querySelector('#view-floor')?.classList.contains('is-visible')) {
      event.preventDefault();
      interact();
    }
  });
  document.querySelector('[data-floor-interact]')?.addEventListener('click', interact);
  objects.forEach(object => object.node.addEventListener('click', () => {
    nearby = object;
    interact();
  }));

  return { update, interact };
}
