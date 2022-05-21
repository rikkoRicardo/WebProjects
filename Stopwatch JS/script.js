"use strict";

//button element selectors
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const btnReset = document.querySelector(".btnReset");

//timer element selectors
const timerMilisec = document.querySelector(".timer-miliseconds");
const timerSecond = document.getElementsByClassName("timer-seconds")[0];

//set to zero to use later
timerMilisec.textContent = Number(0);
timerSecond.textContent = Number(0);

let TimerId,
  started = false;
const value = "textContent";

//set eventListeners
btnStart.addEventListener("click", startTimer);
btnReset.addEventListener("click", resetTimer);
btnStop.addEventListener("click", stopTimer);

//Play, pause and reset hotkeys
document.body.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case " ":
      started === true ? stopTimer() : startTimer();
      started = !started;
      break;
    case "R":
    case "r":
      resetTimer();
      break;
  }
});

function startTimer() {
  //if there is a timer running, do nothing
  if (TimerId) return;

  TimerId = setInterval(function () {
    timerMilisec[value] = checkDecimals(++timerMilisec[value]);

    if (timerMilisec[value] > 90) {
      timerMilisec[value] = 0;

      timerSecond[value] = checkDecimals(++timerSecond[value]);
    }
  }, 10);
}

function stopTimer() {
  clearInterval(TimerId);
  TimerId = null;
}

function resetTimer() {
  timerMilisec[value] = "00";
  timerSecond[value] = "00";
}

//add the zero when value is below 10
function checkDecimals(timerValue) {
  return timerValue < 10 ? "0" + timerValue : timerValue;
}
