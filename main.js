var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;

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
   } else {

     setTimeout(function(){
    firstCardClicked.classList.remove("hidden");
    secondCardClicked.classList.remove("hidden");
    gameCards.addEventListener("click", handleClick);
       firstCardClicked = null;
       secondCardClicked = null;
     }, 1500);

   }
 }
}
