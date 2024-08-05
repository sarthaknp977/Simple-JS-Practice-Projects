let hoursLeft = 0,
  minutesLeft = 0,
  secondsLeft = 0,
  daysLeft = 0;
let countdown = document.querySelector(".countdown");
let timerInterval;

let startBtn = document.querySelector(".start");
let pauseBtn = document.querySelector(".pause");
let resetBtn = document.querySelector(".reset");

let dayInp = document.querySelector("#day");
let hourInp = document.querySelector("#hour");
let minuteInp = document.querySelector("#minute");
let secondInp = document.querySelector("#second");

function validateInput() {
  hoursLeft = parseInt(hourInp.value) || 0;
  daysLeft = parseInt(dayInp.value) || 0;
  minutesLeft = parseInt(minuteInp.value) || 0;
  secondsLeft = parseInt(secondInp.value) || 0;

  if (secondsLeft >= 60) {
    minutesLeft += Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;
  }
  if (minutesLeft >= 60) {
    hoursLeft += Math.floor(minutesLeft / 60);
    minutesLeft = minutesLeft % 60;
  }
  if (hoursLeft >= 24) {
    daysLeft += Math.floor(hoursLeft / 24);
    hoursLeft = hoursLeft % 24;
  }
}

function startCountdown() {
  timerInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  if (
    secondsLeft === 0 &&
    minutesLeft === 0 &&
    hoursLeft === 0 &&
    daysLeft === 0
  ) {
    clearInterval(timerInterval);
    return;
  }

  if (secondsLeft > 0) {
    secondsLeft--;
  } else {
    if (minutesLeft > 0) {
      minutesLeft--;
      secondsLeft = 59;
    } else {
      if (hoursLeft > 0) {
        hoursLeft--;
        minutesLeft = 59;
        secondsLeft = 59;
      } else {
        if (daysLeft > 0) {
          daysLeft--;
          hoursLeft = 23;
          minutesLeft = 59;
          secondsLeft = 59;
        }
      }
    }
  }

  countdown.textContent = `${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`;
}

startBtn.addEventListener("click", function () {
  validateInput();
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  startCountdown();
  pauseBtn.textContent = "Pause";
});

pauseBtn.addEventListener("click", function () {
  if (pauseBtn.textContent == "Pause") {
    clearInterval(timerInterval);
    clicked = 0;
    pauseBtn.textContent = "Resume";
  } else if (pauseBtn.textContent == "Resume") {
    pauseBtn.textContent = "Pause";
    startCountdown();
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerInterval);

  secondsLeft = 0;
  minutesLeft = 0;
  hoursLeft = 0;
  daysLeft = 0;
  pauseBtn.textContent = "Pause";
  countdown.textContent = "";
});
