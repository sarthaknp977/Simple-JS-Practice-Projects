let time = document.querySelector(".time-left");
let btn = document.querySelector(".btn");
let btnString = document.querySelector(".btn span");
let selectablePages = document.querySelectorAll(".selectable");
let selectedPage = "pomodoro";
let updated = false;
let timeInterval;

let timeLeftMinPomodoro = 25;
let timeLeftMinShort = 5;
let timeLeftMinLong = 15;

let timeLeftSecPomodoro = "00";
let timeLeftSecShort = "00";
let timeLeftSecLong = "00";

selectablePages.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (elem.textContent === "Pomodoro") {
      selectedPage = "pomodoro";
      updatePage("", "", "#e2dcdc49", "none", "none");

      updateTimer(timeLeftMinPomodoro, timeLeftSecPomodoro);
    } else if (elem.textContent === "Short Break") {
      pageSwitched = true;
      selectedPage = "short";
      updatePage("#38858a", "#4c9196", "none", "#e2dcdc49", "none");

      updateTimer(timeLeftMinShort, timeLeftSecShort);
    } else if (elem.textContent == "Long Break") {
      selectedPage = "long";
      pageSwitched = true;
      updatePage("#397097", "#4d7fa2", "none", "none", "#e2dcdc49");
      updateTimer(timeLeftMinLong, timeLeftSecLong);
    }
  });
});

btn.addEventListener("click", function () {
  if (btnString.textContent.trim() === "Start") {
    btnString.textContent = "Pause";
    startTimer();
  } else if (btnString.textContent.trim() === "Pause") {
    btnString.textContent = "Start";
    pauseTimer();
  }
});

function updateTimer(min, sec) {
  time.textContent =
    String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

function startTimer() {
  timeInterval = setInterval(() => {
    if (selectedPage == "pomodoro") pomodoro();
    if (selectedPage == "long") longBreak();
    if (selectedPage == "short") shortBreak();
  }, 1000);
}

function pomodoro() {
  if (timeLeftSecPomodoro == 0) {
    if (timeLeftMinPomodoro == 0) {
      clearInterval(timeInterval);
    }
    timeLeftMinPomodoro--;
    timeLeftSecPomodoro = 59;
  } else {
    timeLeftSecPomodoro--;
  }
  updateTimer(timeLeftMinPomodoro, timeLeftSecPomodoro);
}

function longBreak() {
  if (timeLeftSecLong == 0) {
    if (timeLeftMinLong == 0) {
      clearInterval(timeInterval);
    }
    timeLeftMinLong--;
    timeLeftSecLong = 59;
  } else {
    timeLeftSecLong--;
  }
  updateTimer(timeLeftMinLong, timeLeftSecLong);
}

function shortBreak() {
  if (timeLeftSecShort == 0) {
    if (timeLeftMinShort == 0) {
      clearInterval(timeInterval);
    }
    timeLeftMinShort--;
    timeLeftSecShort = 59;
  } else {
    timeLeftSecShort--;
  }
  updateTimer(timeLeftMinShort, timeLeftSecShort);
}

function pauseTimer() {
  clearInterval(timeInterval);
}

function updatePage(bodyBg, mainBg, pomodoroBg, shortBreakBg, longBreakBg) {
  document.querySelector("body").style.background = bodyBg;
  document.querySelector(".main").style.background = mainBg;
  document.querySelector(".pomodoro").style.background = pomodoroBg;
  document.querySelector(".short-break").style.background = shortBreakBg;
  document.querySelector(".long-break").style.background = longBreakBg;
  btnString.style.color = mainBg;
  updated = true;
  if (updated) {
    btnString.textContent = "Start";
    pauseTimer();
  }
}
