//The initial 52 cards (to be distributed)
let initialCards = [
    "carreau-1", "carreau-2", "carreau-3", "carreau-4", "carreau-5", "carreau-6", "carreau-7", "carreau-8", "carreau-9", "carreau-10", "carreau-11", "carreau-12", "carreau-13", "coeur-1", "coeur-2", "coeur-3", "coeur-4", "coeur-5", "coeur-6", "coeur-7", "coeur-8", "coeur-9", "coeur-10", "coeur-11", "coeur-12", "coeur-13", "pique-1", "pique-2", "pique-3", "pique-4", "pique-5", "pique-6", "pique-7", "pique-8", "pique-9", "pique-10", "pique-11", "pique-12", "pique-13", "trefle-1", "trefle-2", "trefle-3", "trefle-4", "trefle-5", "trefle-6", "trefle-7", "trefle-8", "trefle-9", "trefle-10", "trefle-11", "trefle-12", "trefle-13",
];

//The arrays for the player's cards
let plr1Cards = [];
let plr2Cards = [];

let plr1CardCount = document.querySelector("#plr1Cards");
let plr2CardCount = document.querySelector("#plr2Cards");

//The turn div (to show who's turn it is)
const turn = document.querySelector("#turn");

//The player names
const plr1Name = document.querySelector("#plr1Name");
const plr2Name = document.querySelector("#plr2Name");

//The play button for the players
const plr1Button = document.querySelector("#plr1Info button");
const plr2Button = document.querySelector("#plr2Info button");

//Variable which will be used to know who's turn it is
let plrTurn = 0;

//The arrays to see what cards are played in game
let plr1PlayedCards = [];
let plr2PlayedCards = [];

let plr1PlayedCardImage = document.querySelector("#cardPlr1 img");
let plr2PlayedCardImage = document.querySelector("#cardPlr2 img");

/**
 * Function to start the game
 */
function start() {
    plr2Button.disabled = true;
    turn.innerHTML = `Tour de: ${plr1Name.textContent}`;
    plrTurn = 1;

    distributeAndMixCards();
    refreshGameArea();
}

/**
 * Function that grabs a random card from the initial cards and adds them to the player's list of cards
 */
function distributeAndMixCards() {
    for (let i = 0; i < 52; i++) {
        let selectedCard = Math.floor(Math.random() * initialCards.length);

        if (i % 2 == 0) {
            plr2Cards.push(initialCards[selectedCard]);
            initialCards.splice(selectedCard, 1);
        }

        else {
            plr1Cards.push(initialCards[selectedCard]);
            initialCards.splice(selectedCard, 1);
        }
    }
    console.log(initialCards);
    console.log(plr1Cards);
    console.log(plr2Cards);
}

function refreshGameArea() {
    let lastPlr1 = plr1PlayedCards[plr1PlayedCards.length - 1];
    let lastPlr2 = plr2PlayedCards[plr2PlayedCards.length - 1];

    if (plr1PlayedCards.length === 0) {
        plr1PlayedCardImage.src = "./img/vide.png";
    } else {
        plr1PlayedCardImage.src = `./img/${lastPlr1}.png`;
    }

    if (plr2PlayedCards.length === 0) {
        plr2PlayedCardImage.src = "./img/vide.png";
    } else {
        plr2PlayedCardImage.src = `./img/${lastPlr2}.png`;
    }

    plr1CardCount.innerHTML = `${plr1Cards.length}`;
    plr2CardCount.innerHTML = `${plr2Cards.length}`;

    console.log(plr1PlayedCards);
    console.log(plr2PlayedCards);
    isCurrentlyPlaying();
}

//Function that checks who's currently playing
function isCurrentlyPlaying() {
    if (plrTurn === 2) {
        turn.innerHTML = `Tour de: ${plr2Name.textContent}`;
        plr1Button.disabled = true;
        plr2Button.disabled = false;
    } else if (plrTurn === 1) {
        turn.innerHTML = `Tour de: ${plr1Name.textContent}`;
        plr2Button.disabled = true;
        plr1Button.disabled = false;
    }
    console.log(plrTurn);
};

//*TODO*
function CompareCards() {

    //if both playing fields are empty we return to prevent errors
    if (plr1PlayedCards.length === 0) {
        return;
    } else if (plr2PlayedCards.length === 0) {
        return;
    }

    let lastPlr1 = plr1PlayedCards[plr1PlayedCards.length - 1];
    let lastPlr2 = plr2PlayedCards[plr2PlayedCards.length - 1];


    let cardField1 = lastPlr1.match(/\d+/g);
    let cardField2 = lastPlr2.match(/\d+/g);

    if (cardField1 > cardField2) {
        plr1Cards.push(plr1PlayedCards);
        plr1Cards.push(plr2PlayedCards);
        plr1PlayedCards = [];
        plr2PlayedCards = [];
        plr1Button.disabled = true;
        turn.innerHTML = `${plr1Name.textContent} à gagné`;

        refreshGameArea();
        console.log(plr1Cards);

    } else if (cardField2 > cardField1) {
        plr2Cards.push(plr1PlayedCards);
        plr2Cards.push(plr2PlayedCards);
        plr1PlayedCards = [];
        plr2PlayedCards = [];
        plr2Button.disabled = true;
        turn.innerHTML = `${plr2Name.textContent} à gagné`;

        refreshGameArea();
        console.log(plr2Cards);
    }
}

//When the player 1 presses "Jouer"
plr1Button.addEventListener('click', event => {

    //Remove from player's hand and plays it on table (so the cards on the hand is -1)
    plr1PlayedCards.push(plr1Cards[0]);
    plr1Cards.splice(0, 1);
    plr1CardCount.innerHTML -= 1;

    //activate the oponnent's play button, and deactivates the current player's play button
    plr2Button.disabled = false;
    plr1Button.disabled = true;
    plrTurn = 2;
    refreshGameArea();
    CompareCards();
});

//When the player 2 presses "Jouer"
plr2Button.addEventListener('click', event => {

    //Remove from player's hand and plays it on table (so the cards on the hand is -1)
    plr2PlayedCards.push(plr2Cards[0]);
    plr2Cards.splice(0, 1);
    plr2CardCount.innerHTML -= 1;

    //activate the oponnent's play button, and deactivates the current player's play button
    plr1Button.disabled = false;
    plr2Button.disabled = true;
    plrTurn = 1;
    refreshGameArea();
    CompareCards();
});

start();