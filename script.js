
const frontFaceCards = document.querySelectorAll(".front-face");
const backFaceCards = document.querySelectorAll(".back-face");
const cards = document.querySelectorAll(".card");
const tiles = document.querySelectorAll(".tile");
const restartBtn = document.querySelector("#restart");
const pauseBtn = document.querySelector("#pause");
const stopwatch = document.querySelector(".stopwatch");

console.log("YOu working?");

let incorrectGuess = 0;
let correctGuess = 0;
let totalPoints = 0;
let matchedCards = 0;
let clickedCards = [];


// For the watch
let timer = true;
let minute = 0;
let second = 0;
let millisecond = 0;
let count = 0;

runTimer();

function pauseGame(){
    timer = false;


}

function resetGame(){
    timer = false;
    minute = 0;
    second = 0;
    millisecond = 0;
    correctGuess = 0;
    incorrectGuess = 0;
    totalPoints = 0;
    matchedCards = 0;
    clickedCards = [];
    
    stopwatch.innerText = `00:00:00`;

    // cards.forEach(card => {
    //     card.classList.remove("flipped");
    //     card.style.display = "block";
    // });

}

function runTimer() {
    if (timer) {
        millisecond += 10;
        if (millisecond === 100) {
            millisecond = 0;
            second++;
        }
        if (second === 60) {
            second = 0;
            minute++;
        }

        let msString = millisecond < 100 ? `0${millisecond}`.slice(-3) : millisecond;
        let secString = second < 10 ? `0${second}` : second;
        let minString = minute < 10 ? `0${minute}` : minute;

        stopwatch.innerText = `${minString}:${secString}:${msString}`;

        setTimeout(runTimer, 10);
    }
}

function toggleCard(card) {
  let firstChild = card.firstElementChild;
  let lastChild = card.lastElementChild;
  let name;

  if (firstChild.style.display === "block") {
    firstChild.style.display = "none";
    lastChild.style.display = "block";

    name = lastChild.getAttribute("alt");
  } else {
    firstChild.style.display = "block";
    lastChild.style.display = "none";

    name = firstChild.getAttribute("alt");
  }
  return name;

}

function checkMatch(){
    let card1 = clickedCards[0];
    let card2 = clickedCards[1];

    let alt1 = card1.firstElementChild.getAttribute("alt");
    let alt2 = card2.firstElementChild.getAttribute("alt");

    if(alt1 === alt2){
        console.log("Match found!");

        correctGuess += 50;
        matchedCards += 2;
        card1.firstElementChild.style.display = "block";
        card2.firstElementChild.style.display = "block";

        clickedCards = [];
    console.log("Correct guees : " + correctGuess);

    }else{

        incorrectGuess += 30;
        console.log("Incorrect : " + incorrectGuess);
        setTimeout(() => {
            clickedCards.forEach((clickedCard) => {
                toggleCard(clickedCard);
            });
            clickedCards = [];
        } , 1000);
    }

    totalPoints = correctGuess - incorrectGuess;
    console.log("Points : " + totalPoints);
}

function checkGameCompleted(){
    if(matchedCards === cards.length){
        console.log("Game completed");
    }
}

cards.forEach((card) => {
  card.addEventListener("click", () => {

    if(clickedCards.length === 2){  
        return;
    }

    let firstChild = card.firstElementChild;

    let cardName = firstChild.getAttribute("alt");
    console.log("YOu clicked me", cardName);

    toggleCard(card);

    clickedCards.push(card);

    if(clickedCards.length === 2){
        checkMatch();
    }
  });
});



restartBtn.addEventListener("click" , () => {
    console.log("YOu clicked restart btn");
    resetGame();
})

pauseBtn.addEventListener("click" , () => {
    console.log("YOu clicked PAUSE btn");
})