var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatch = 9;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;
var resetGame;

function resetGame() {
  document.querySelector("#attempts").textContent = 0;
  document.querySelector("#accuracy").textContent = 0;
  document.querySelector("#gamesPlayed").textContent = ++gamesPlayed;
  resetCards();
  stopTimer();
}

// var timer;
// var output;
// var game;

// function init(){
//   game = new Scene();
//   output = document.getElementById("output");
//   timer.reset();
//   game.start();
// }

// function update(){
//   game.hide();
//   currentTime = timer.getElapsedTime();
//   output.innerHTML = currentTime;
// }

// function reset(){
//   timer.reset();
// }
var timer;
var secondsLeft = 60;
function tick() {
  console.log('tick');
  secondsLeft -= 1;
  if (secondsLeft === 0) {
    document.querySelector(".modal-overlay-defeat").classList.remove("hidden");
  } else {
    document.getElementById("output").textContent = secondsLeft;
    timer = window.setTimeout(tick, 1000);
  }
};
//document.addEventListener('DOMContentLoaded',tick,false);
tick();

function stopTimer() {
  clearTimeout(timer);
  secondsLeft = 60;
  timer = window.setTimeout(tick, 1000);
  tick();
}

function resetCards() {
  var hiddenCards = document.querySelectorAll(".card-back");
  for (var i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].classList.remove("hidden");
  }
  document.querySelector(".modal-overlay").classList.add("hidden");
  document.querySelector(".modal-overlay-defeat").classList.add("hidden");
}

var button = document.querySelector("#button");
button.addEventListener("click", resetGame);

var buttonDefeat = document.querySelector("#button-defeat");
buttonDefeat.addEventListener("click", resetGame);

var array = [
  "js-logo",
  "css-logo",
  "docker-logo",
  "gitHub-logo",
  "html-logo",
  "mysql-logo",
  "node-logo",
  "php-logo",
  "react-logo",
  "js-logo",
  "css-logo",
  "docker-logo",
  "gitHub-logo",
  "html-logo",
  "mysql-logo",
  "node-logo",
  "php-logo",
  "react-logo"
]

var cardFronts = document.getElementsByClassName("card-front");



function shuffle(array) {
  var i = 0;
  var j = 0;
  var temp = null;
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle(array);
for (i = 0; i < cardFronts.length; i++) {
  cardFronts[i].className += ' ' + array[i];
}

function calculateAccuracy(matches, attempts) {
  var x = Math.trunc((matches / attempts) * 100);
  return x + "%";
}

function displayStats() {
  document.querySelector("#gamesPlayed").textContent = gamesPlayed;
  document.querySelector("#attempts").textContent = attempts;
  document.querySelector("#accuracy").textContent = calculateAccuracy(matches, attempts);
}

var gameCards = document.querySelector("#gameCards");
gameCards.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  // console.log(event.target);
  event.target.className = "card-back" + " hidden";
  if (!firstCardClicked) {
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;
  } else {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;
    gameCards.removeEventListener("click", handleClick);
    if (firstCardClasses === secondCardClasses) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      matches++;
      attempts++;
      //  console.log(attempts);
      displayStats();
      if (maxMatch === matches) {
        document.querySelector(".modal-overlay").classList.remove("hidden");
      }
    } else {
      setTimeout(function () {
        firstCardClicked.classList.remove("hidden");
        secondCardClicked.classList.remove("hidden");
        gameCards.addEventListener("click", handleClick);
        firstCardClicked = null;
        secondCardClicked = null;
      }, 1500);
      attempts++;
      //  console.log(attempts);
      displayStats();
    }
    //  displayStats();
  }
  // displayStats();
}
