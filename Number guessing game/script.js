'use strict';

// Page elements
const outputGuessFeedback = document.querySelector('.message');
const outputScoreboard = document.querySelector('.score');
const outputSecretNumber = document.querySelector('.number');
const outputHighScore = document.querySelector('.highscore');
const outputAgainButton = document.querySelector('.again');
const RIGHT_GUESS_POINTS = 1;

//Core variables initialization
let currentScore = 20;
let lastHighScore = 0;
let correctGuess = Math.trunc(Math.random() * 20 + 1);
console.log(correctGuess);

//Check button click function
document.querySelector('.check').addEventListener('click', function () {
  const inputGuess = Number(document.querySelector('.guess').value);

  //Check for valid input
  if ((!inputGuess && inputGuess <= 0) || inputGuess > 20) {
    outputGuessFeedback.textContent = '🚫 Not valid!';
  } else {
    if (inputGuess === correctGuess) {
      // if guess is correct
      outputGuessFeedback.textContent = '✅ Correct!';
      outputSecretNumber.textContent = correctGuess;
      document.body.style.backgroundColor = 'green';
      currentScore += RIGHT_GUESS_POINTS;

      // generates next number
      correctGuess = Math.trunc(Math.random() * 20 + 1);
      console.log(correctGuess); // TEMP
    } else {
      //if guess is incorrect, gives hints
      if (inputGuess > correctGuess) {
        outputGuessFeedback.textContent = 'Wrong, too high!';
      } else {
        outputGuessFeedback.textContent = 'Wrong, too low!';
      }

      document.body.style.backgroundColor = '#222';
      currentScore > 0 ? (currentScore -= 1) : 0;
    }
  }
  //check for high score
  if (currentScore > lastHighScore) {
    lastHighScore = currentScore;
    outputHighScore.textContent = lastHighScore;
  }

  outputScoreboard.textContent = currentScore;
});

//Play again button function
outputAgainButton.addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  outputGuessFeedback.textContent = 'Start Guessing...';
  outputScoreboard.textContent = '0';
  outputSecretNumber.textContent = '?';
  document.body.style.backgroundColor = '#222';
  currentScore = 20;
});
