const keys = new Set();
const touchKeys = new Set();

export function createPlayerController({ stage, player, onMove }) {
  const state = { x: 50, y: 82, speed: 24, running: false, last: performance.now() };

  function setPosition(x, y) {
    state.x = clamp(x, 5, 94);
    state.y = clamp(y, 10, 88);
    player.style.left = `${state.x}%`;
    player.style.top = `${state.y}%`;
    onMove?.({ x: state.x, y: state.y });
  }

  function step(now) {
    const dt = Math.min(0.05, (now - state.last) / 1000);
    state.last = now;
    let dx = 0;
    let dy = 0;
    if (keys.has('arrowleft') || keys.has('a') || touchKeys.has('left')) dx -= 1;
    if (keys.has('arrowright') || keys.has('d') || touchKeys.has('right')) dx += 1;
    if (keys.has('arrowup') || keys.has('w') || touchKeys.has('up')) dy -= 1;
    if (keys.has('arrowdown') || keys.has('s') || touchKeys.has('down')) dy += 1;
    if (dx || dy) {
      const length = Math.hypot(dx, dy) || 1;
      setPosition(state.x + (dx / length) * state.speed * dt, state.y + (dy / length) * state.speed * dt);
      player.classList.add('is-moving');
    } else {
      player.classList.remove('is-moving');
    }
    if (state.running) requestAnimationFrame(step);
  }

  function start() {
    if (state.running) return;
    state.running = true;
    state.last = performance.now();
    setPosition(state.x, state.y);
    requestAnimationFrame(step);
  }

  function stop() {
    state.running = false;
  }

  window.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'w', 'a', 's', 'd'].includes(key)) {
      keys.add(key);
      stage.focus({ preventScroll: true });
      event.preventDefault();
    }
  });
  window.addEventListener('keyup', event => keys.delete(event.key.toLowerCase()));

  document.querySelectorAll('[data-move]').forEach(button => {
    const direction = button.dataset.move;
    const down = event => { event.preventDefault(); touchKeys.add(direction); };
    const up = () => touchKeys.delete(direction);
    button.addEventListener('pointerdown', down);
    button.addEventListener('pointerup', up);
    button.addEventListener('pointerleave', up);
    button.addEventListener('pointercancel', up);
  });

  return { state, start, stop, setPosition };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
