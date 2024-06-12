const frontFaceCards = document.querySelectorAll(".front-face");
const backFaceCards = document.querySelectorAll(".back-face");
const cards = document.querySelectorAll(".card");
const tiles = document.querySelectorAll(".tile");

console.log("YOu working?");

let previousCardName = null;

let clickedCards = [];


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

cards.forEach((card) => {
  card.addEventListener("click", () => {

    if(clickedCards.length === 2){
        clickedCards.forEach((clickedCard) => {
            toggleCard(clickedCard);
        });

        clickedCards = [];
    }

    let firstChild = card.firstElementChild;

    let cardName = firstChild.getAttribute("alt");
    console.log("YOu clicked me", cardName);

    toggleCard(card);

    clickedCards.push(card);

    // let nextCardName = toggleCard(card);
    // console.log("Next card name : " + nextCardName);

    // if (previousCardName !== null && nextCardName === previousCardName) {
    //   console.log("point");
    // }

    // previousCardName = nextCardName;
  });
});
