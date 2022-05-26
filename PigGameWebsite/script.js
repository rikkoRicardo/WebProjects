'use strict';

//selecting elements
const btnRollDice = document.getElementsByClassName('btn--roll')[0];
const btnHoldScore = document.getElementsByClassName('btn--hold')[0];
const btnNewGame = document.getElementsByClassName('btn--new')[0];

//selecting conditions
let playerTurn = 0,
  playing = true,
  playerScores = [0, 0];

function init() {
  playing = true;

  //hides the dice
  document.getElementsByClassName('dice')[0].classList.add('hidden');

  //start as player0
  playerTurn = 0;

  document
    .getElementsByClassName(`player--0`)[0]
    .classList.add('player--active');

  document
    .getElementsByClassName(`player--1`)[0]
    .classList.remove('player--active');

  for (let index = 0; index < playerScores.length; index++) {
    document
      .getElementsByClassName(`player--${index}`)[0]
      .classList.remove('player--winner');

    //clear scores
    playerScores[index] = 0;
    document.querySelector(`#score--${index}`).textContent = 0;
    document.querySelector(`#current--${index}`).textContent = 0;
  }
}

init();

const changePlayer = () => {
  document
    .getElementsByClassName(`player--${playerTurn}`)[0]
    .classList.toggle('player--active');

  playerTurn = playerTurn === 1 ? 0 : 1;

  document
    .getElementsByClassName(`player--${playerTurn}`)[0]
    .classList.toggle('player--active');
};

const createDiceNumber = () => {
  //generate a random dice number
  const number = Math.trunc(Math.random() * 6 + 1);

  //shows the dice
  if (document.getElementsByClassName('dice')[0].classList.contains('hidden'))
    document.getElementsByClassName('dice')[0].classList.remove('hidden');

  //display dice
  const dice = (document.getElementsByClassName(
    'dice'
  )[0].src = `dice-${number}.png`);

  return number;
};

btnRollDice.addEventListener('click', () => {
  if (!playing) return;

  const currentNumber = createDiceNumber();

  const currentPlayerScore = document.querySelector(`#current--${playerTurn}`);

  if (currentNumber === 1) {
    currentPlayerScore.textContent = 0;
    changePlayer();
  } else {
    currentPlayerScore.textContent =
      Number(currentPlayerScore.textContent) + Number(currentNumber);
  }
});

btnHoldScore.addEventListener('click', () => {
  const outputCurrentScore = document.querySelector(`#current--${playerTurn}`);
  const outputPlayerScore = document.querySelector(`#score--${playerTurn}`);

  if (!playing) return;

  playerScores[playerTurn] += Number(outputCurrentScore.textContent);

  outputPlayerScore.textContent = playerScores[Number(playerTurn)];

  if (playerScores[playerTurn] >= 100) {
    console.log(`Player ${playerTurn} WINS!`);
    document
      .getElementsByClassName('player--active')[0]
      .classList.add('player--winner');
    playing = false;
    document.getElementsByClassName('dice')[0].classList.add('hidden');
  }

  outputCurrentScore.textContent = 0;

  changePlayer();
});

btnNewGame.addEventListener('click', init);
