const frontFaceCards = document.querySelectorAll(".front-face");
const backFaceCards = document.querySelectorAll(".back-face");
const cards = document.querySelectorAll(".card");
const tiles = document.querySelectorAll(".tile");

// /* I need to add this functiona;oty
// .back-face {
//     background-color: #f8f8f8;
//     //  transform: rotateY(180deg);  
// }
// .tile:hover .card {
//     transform: rotateY(180deg);
// }
// */

// // for(let card in cards){
// //     card.addEventListener("click" , () => {
// //         console.log("YOu clicked a card");
// //     } )
// // }

// function toggleCard (){
//     let fCard = false;

//     backFaceCards.forEach(bc => {
//         bc.style.display = "none";

//         fCard = true;
//     })

// }

console.log("YOu working?");

// function toggleCard(card){
//     card.classList.toggle("is-flipped");
// }



// cards.forEach((card) => {
//     card.addEventListener("click" , () => {

//         let firstChild = card.firstElementChild;

//         let cardName = firstChild.getAttribute("alt");
//         console.log("YOu clicked me " , cardName);

//         toggleCard(card);
        
//     })
// })



// const cards = document.querySelectorAll(".card");

function toggleCard(card) {
    card.classList.toggle("is-flipped");
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        toggleCard(card);
    });
});

