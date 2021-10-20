"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".user-guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
    return;
  }

  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "#A3BE8C";
    document.querySelector(".number-show").textContent = secretNumber;
    document.querySelector(".number-show").style.width = "220px";
    if (highScore < score) {
      document.querySelector(".highscore").textContent = score;
    }
    return;
  }
  score--;
  document.querySelector(".score").textContent = score;
  if (score <= 0) {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "💥 You lost the game!";
    document.querySelector("body").style.backgroundColor = "#BF616A";
    return;
  }
  if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too High";
  } else {
    document.querySelector(".message").textContent = "📉 Too Low";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#2e3440";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-show").textContent = "?";
  document.querySelector(".number-show").style.width = "220px";
});
