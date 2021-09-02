window.onload = function () {
  const buttonCount = document.getElementById("btn-count");
  buttonCount.addEventListener("click", clickCounter);
  const buttonReset = document.getElementById("btn-reset");
  buttonReset.addEventListener("click", resetCounter);
  if (localStorage.visits === undefined) {
    localStorage.visits = 1;
  }
  recoverClicks();
};

const counter = document.getElementById("n-clicks");
let savedCount = parseInt(localStorage.visits);

function clickCounter() {
  savedCount += 1;
  localStorage.visits = savedCount;
  recoverClicks();
}

function recoverClicks() {
  counter.innerText = savedCount;
}

function resetCounter() {
  savedCount = 1;
  localStorage.visits = savedCount;
  recoverClicks();
}
