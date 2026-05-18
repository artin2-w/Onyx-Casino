import { canAfford, emitSoundHook, formatCredits, placeAdditionalWager, placeBet, settleBet } from '../state.js';
import { renderAll, selectedBet, toast, wireBetButtons } from '../ui.js';

const SHOE_SIZE = 312;
let shoe = [];
let dealer = [];
let hands = [];
let activeHand = 0;
let inHand = false;

export function initBlackjack() {
  wireBetButtons('blackjack');
  document.querySelector('#dealBtn').addEventListener('click', newHand);
  document.querySelector('#hitBtn').addEventListener('click', hit);
  document.querySelector('#standBtn').addEventListener('click', stand);
  document.querySelector('#doubleBtn').addEventListener('click', doubleDown);
  document.querySelector('#splitBtn').addEventListener('click', splitHand);
  shuffleShoe();
  renderHands(false);
  setButtons();
}

function newHand() {
  const bet = selectedBet('blackjack');
  try {
    if (shoe.length < 78) shuffleShoe();
    placeBet('blackjack', bet);
    dealer = [];
    hands = [{ cards: [draw(), draw()], bet, stood: false, done: false, result: null }];
    dealer = [draw(), draw()];
    activeHand = 0;
    inHand = true;
    renderHands(true);
    if (isBlackjack(hands[0].cards)) finishAll('blackjack');
    else {
      message('Hand started. Dealer stands on soft 17.');
      setButtons();
      renderAll();
    }
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function hit() {
  if (!inHand) return;
  active().cards.push(draw());
  emitSoundHook('card-deal', { game: 'blackjack' });
  if (score(active().cards).total > 21) {
    active().done = true;
    active().result = 'Bust';
    nextHandOrDealer();
  } else {
    renderHands(true);
    setButtons();
  }
}

function stand() {
  if (!inHand) return;
  active().stood = true;
  active().done = true;
  nextHandOrDealer();
}

function doubleDown() {
  if (!inHand || !canDouble()) return;
  try {
    placeAdditionalWager('blackjack', active().bet);
    active().bet *= 2;
    active().cards.push(draw());
    active().done = true;
    active().result = score(active().cards).total > 21 ? 'Bust' : 'Doubled';
    nextHandOrDealer();
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function splitHand() {
  if (!inHand || !canSplit()) return;
  try {
    placeAdditionalWager('blackjack', active().bet);
    const [first, second] = active().cards;
    hands = [
      { cards: [first, draw()], bet: active().bet, stood: false, done: false, result: null },
      { cards: [second, draw()], bet: active().bet, stood: false, done: false, result: null }
    ];
    activeHand = 0;
    message('Split into two hands. Playing hand 1.');
    renderHands(true);
    setButtons();
  } catch (error) {
    toast(error.message, 'warning');
  }
}

function nextHandOrDealer() {
  const next = hands.findIndex((hand, index) => index > activeHand && !hand.done);
  if (next >= 0) {
    activeHand = next;
    message(`Playing split hand ${activeHand + 1}.`);
    renderHands(true);
    setButtons();
    return;
  }
  dealerPlay();
  finishAll('compare');
}

function dealerPlay() {
  while (score(dealer).total < 17) dealer.push(draw());
}

function finishAll(type) {
  inHand = false;
  const dealerScore = score(dealer);
  hands.forEach((hand, index) => {
    const handScore = score(hand.cards);
    let payout = 0;
    let result = 'Dealer wins';
    let detail = '';
    if (type === 'blackjack' && index === 0) {
      payout = Math.floor(hand.bet * 2.5);
      result = 'Blackjack';
      detail = 'Natural blackjack pays 3:2';
    } else if (handScore.total > 21 || hand.result === 'Bust') {
      detail = `Bust at ${handScore.total}`;
    } else if (dealerScore.total > 21) {
      payout = hand.bet * 2;
      result = 'Dealer bust';
      detail = `Dealer bust ${dealerScore.total}. Player wins.`;
    } else if (handScore.total > dealerScore.total) {
      payout = hand.bet * 2;
      result = 'Player wins';
      detail = `${handLabel(index)} ${handScore.label}, dealer ${dealerScore.label}`;
    } else if (handScore.total === dealerScore.total) {
      payout = hand.bet;
      result = 'Push';
      detail = `Push at ${handScore.label}`;
    } else {
      detail = `Dealer wins with ${dealerScore.label} against ${handScore.label}`;
    }
    settleBet({ game: 'blackjack', bet: hand.bet, payout, result, detail, meta: { blackjackNatural: result === 'Blackjack' } });
    hand.result = result;
  });
  renderHands(false);
  message(hands.map((hand, index) => `${handLabel(index)}: ${hand.result}`).join(' | '));
  setButtons();
  renderAll();
}

function shuffleShoe() {
  const suits = ['S', 'H', 'D', 'C'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  shoe = [];
  for (let deck = 0; deck < 6; deck += 1) {
    for (const suit of suits) for (const rank of ranks) shoe.push({ rank, suit });
  }
  shoe.sort(() => Math.random() - 0.5);
}

function draw() {
  if (shoe.length === 0) shuffleShoe();
  emitSoundHook('card-deal', { game: 'blackjack' });
  return shoe.pop();
}
function cardValue(card) {
  if (card.rank === 'A') return 11;
  if (['K', 'Q', 'J'].includes(card.rank)) return 10;
  return Number(card.rank);
}
function score(cards) {
  let total = cards.reduce((sum, card) => sum + cardValue(card), 0);
  let aces = cards.filter(card => card.rank === 'A').length;
  let soft = aces > 0;
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
    soft = aces > 0;
  }
  return { total, soft: soft && total <= 21, label: `${soft && total <= 21 ? 'soft ' : ''}${total}` };
}
function isBlackjack(cards) { return cards.length === 2 && score(cards).total === 21; }
function active() { return hands[activeHand]; }
function canDouble() { return inHand && active()?.cards.length === 2 && canAfford(active().bet); }
function canSplit() { return inHand && hands.length === 1 && active().cards.length === 2 && active().cards[0].rank === active().cards[1].rank && canAfford(active().bet); }

function renderHands(hideDealer) {
  renderCards('#dealerCards', hideDealer && dealer.length ? [dealer[0], null] : dealer);
  const hand = hands[0]?.cards || [];
  renderCards('#playerCards', hand);
  document.querySelector('#dealerTotal').textContent = hideDealer ? 'Hidden' : dealer.length ? score(dealer).label : '';
  document.querySelector('#playerTotal').textContent = hand.length ? `${score(hand).label}${hands.length > 1 ? ' (hand 1)' : ''}` : '';
  document.querySelector('#splitHands').innerHTML = hands.length > 1 ? hands.map((item, index) => `
    <div class="split-hand ${index === activeHand && inHand ? 'is-active' : ''}">
      <strong>Hand ${index + 1}: ${score(item.cards).label}</strong>
      <div class="cards mini-cards">${item.cards.map(cardHtml).join('')}</div>
    </div>
  `).join('') : '';
  document.querySelector('#shoeText').textContent = `Shoe: ${shoe.length}/${SHOE_SIZE} cards (${Math.round((shoe.length / SHOE_SIZE) * 100)}%)`;
}
function renderCards(selector, cards) {
  document.querySelector(selector).innerHTML = cards.length ? cards.map(cardHtml).join('') : '<p class="muted">No cards dealt.</p>';
}
function cardHtml(card) {
  if (!card) return '<div class="card card-back">?</div>';
  const red = card.suit === 'H' || card.suit === 'D';
  return `<div class="card ${red ? 'red' : ''}"><span>${card.rank}</span><small>${card.suit}</small></div>`;
}
function setButtons() {
  document.querySelector('#dealBtn').disabled = inHand;
  document.querySelector('#hitBtn').disabled = !inHand;
  document.querySelector('#standBtn').disabled = !inHand;
  document.querySelector('#doubleBtn').disabled = !canDouble();
  document.querySelector('#splitBtn').disabled = !canSplit();
}
function message(text) { document.querySelector('#blackjackResult').textContent = text; }
function handLabel(index) { return hands.length > 1 ? `Hand ${index + 1}` : 'Player'; }
