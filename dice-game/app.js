const scoreElements = document.querySelectorAll('.score');
const diceElement = document.querySelector('.dice');
const currentScoreElements = document.querySelectorAll('.current-score');
const sectionPlayers = document.querySelectorAll('.player');

const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newButton = document.querySelector('.btn--new');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

rollButton.addEventListener('click', clickRollDice);
holdButton.addEventListener('click', clickHold);
newButton.addEventListener('click', newGame);

function clickRollDice() {
  diceElement.classList.remove('hidden');
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  diceElement.src = `./images/dice-${diceNumber}.png`;
  if (diceNumber === 1) {
    currentScore = 0;
    currentScoreElements[activePlayer].textContent = 0;
    activePlayer = 1 - activePlayer;
    sectionPlayers.forEach((item) => item.classList.toggle('player--active'));
  } else {
    currentScore += diceNumber;
    currentScoreElements[activePlayer].textContent = currentScore;
  }
}

function clickHold() {
  scores[activePlayer] += currentScore;
  scoreElements[activePlayer].textContent = scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    sectionPlayers[activePlayer].classList.add('player--winner');
    holdButton.removeEventListener('click', clickHold);
    rollButton.removeEventListener('click', clickRollDice);
  } else {
    currentScore = 0;
    currentScoreElements[activePlayer].textContent = 0;
    activePlayer = 1 - activePlayer;

    sectionPlayers.forEach((item) => item.classList.toggle('player--active'));
  }
}

function newGame() {
  scores[0] = 0;
  scores[1] = 0;
  scoreElements.forEach((item) => (item.textContent = 0));
  currentScoreElements.forEach((item) => (item.textContent = 0));

  rollButton.addEventListener('click', clickRollDice);
  holdButton.addEventListener('click', clickHold);
  sectionPlayers.forEach((item) =>
    item.classList.remove('player--winner', 'player--active')
  );

  sectionPlayers[0].classList.add('player--active');

  currentScore = 0;
  activePlayer = 0;
  diceElement.classList.add('hidden');
}

newGame();
