var gameCards = document.querySelector("#gameCards");
gameCards.addEventListener("click", handleClick);

function handleClick(event) {
  if(event.target.className.indexOf("card-back") === -1) {
    return;
  }
  // console.log(event);
  event.target.className = "hidden";
 if(firstCardClicked == true) {
   console.log(secondCardClicked);
   secondCardClicked = document.getElementsByClassName("card-back");
 } else {
   console.log(firstCardClicked);
  firstCardClicked = document.getElementsByClassName("card-back");
 }
}
var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
