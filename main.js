var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatch = 9;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;

function calculateAccuracy(matches, attempts){
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
  if(event.target.className.indexOf("card-back") === -1) {
    return;
  }
  // console.log(event.target);
  event.target.className = "card-back" + " hidden";
 if(!firstCardClicked) {
   firstCardClicked = event.target;
   firstCardClasses = firstCardClicked.previousElementSibling.className;
 } else {
   secondCardClicked = event.target;
   secondCardClasses = secondCardClicked.previousElementSibling.className;
   gameCards.removeEventListener("click", handleClick);
   if(firstCardClasses === secondCardClasses) {
     gameCards.addEventListener("click", handleClick);
     firstCardClicked = null;
     secondCardClicked = null;
     matches++;
     attempts++;
     console.log(attempts);
     displayStats();
     if (maxMatch === matches) {
       document.querySelector(".modal-overlay").classList.remove("hidden");
     }
   } else {
     setTimeout(function(){
    firstCardClicked.classList.remove("hidden");
    secondCardClicked.classList.remove("hidden");
    gameCards.addEventListener("click", handleClick);
       firstCardClicked = null;
       secondCardClicked = null;
     }, 1500);
     attempts++;
     console.log(attempts);
     displayStats();
   }
  //  displayStats();
 }
  // displayStats();
}
