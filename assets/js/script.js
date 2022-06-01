// Array of all the cards
let cardList = [
    {name: 'bear', img: 'assets/images/bear.png'},
    {name: 'dinosarie', img: 'assets/images/dinosarie.png'},
    {name: 'dog', img: 'assets/images/dog.png'},
    {name: 'elephant', img: 'assets/images/elephant.png'},
    {name: 'horse', img: 'assets/images/horse.png'},
    {name: 'monkey', img: 'assets/images/monkey.png'},
    {name: 'panda', img: 'assets/images/panda.png'},
    {name: 'unicorn', img: 'assets/images/unicorn.png'},
    {name: 'bear', img: 'assets/images/bear.png'},
    {name: 'dinosarie', img: 'assets/images/dinosarie.png'},
    {name: 'dog', img: 'assets/images/dog.png'},
    {name: 'elephant', img: 'assets/images/elephant.png'},
    {name: 'horse', img: 'assets/images/horse.png'},
    {name: 'monkey', img: 'assets/images/monkey.png'},
    {name: 'panda', img: 'assets/images/panda.png'},
    {name: 'unicorn', img: 'assets/images/unicorn.png'},
];


// Getting elments from the DOM and setting variables
let cardArea = document.querySelector('.card-area');
let scoreArea = document.querySelector('.score-area');
let cardsChosen = [];
let cardsId = [];
let won = [];
let callCount = 0;
let clickLock = false;
let time = 0;
let attempts = document.getElementById('attempts');
let animationInProgress = false;
let menuDiv = document.getElementById('menu');

// Keeps the game from loading when entering the page
document.addEventListener('DOMContentLoaded', function() {
    cardArea.style.display = 'none';
    scoreArea.style.display = 'none';
});    

// Randomize the cards. Credits for solution: https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j
function randomCards() {
    cardList.sort(() => 0.5 - Math.random());
}

randomCards();
    
// Setting up the board with the cards
function setBoard() {
    cardArea.replaceChildren();
    for (let i = 0; i < cardList.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', 'assets/images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', turnCard, true);
    cardArea.appendChild(card);
 }
}

//Check for pairs
function CheckForPairs() {
    let cards = document.querySelectorAll('img');
    let cardOne = cardsId[0];
    let cardTwo = cardsId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        won.push(1);
    } else {
        cards[cardOne].setAttribute('src', 'assets/images/blank.png');
        cards[cardTwo].setAttribute('src', 'assets/images/blank.png');
        cards[cardTwo].classList.remove('turn');
        cards[cardOne].classList.remove('turn');
    }
// Counts the attempts and displays it in the HTML
    callCount++;
    attempts.innerHTML = (callCount); 
    cardsChosen = [];
    cardsId = [];
    clickLock = false;
    if (won.length === 8) {
        gameFinished();
    }
} 
    
// Turning the cards and prevents click on open cards and cards that are turning
function turnCard() {
    if (clickLock || this.getAttribute('src') !== 'assets/images/blank.png' || animationInProgress)
        return;
    animationInProgress = true;    
    let id = this.getAttribute('data-id');     
    cardsChosen.push(cardList[id].name);
    cardsId.push(id);
    this.classList.add('turn');
//  Credits to Ludde Hedlund for help with delaying the card change
    setTimeout(() => {
        this.setAttribute('src', cardList[id].img);
        animationInProgress = false;
        }, 200);
    if (cardsChosen.length === 2) {
        setTimeout(CheckForPairs, 700);
        clickLock = true;
    }
}

// Hide menu div when game starts
function hideMenu () {
    menuDiv.style.display = 'none';
}    

// Keeping time function
function keepTime() {
    time = document.getElementById('seconds');
    setInterval(function() {
        time.innerHTML ++;
    }, 1000);
}

keepTime();

// Function for resetting the game
function reset() {
    hideMenu();
    cardArea.style.display = 'flex';
    scoreArea.style.display = 'initial';
    randomCards();
    setBoard();
    callCount = 0;
    attempts.innerHTML = callCount;
    time.innerHTML = 0;
    won = [];
}   
// Makes the New Game button to run the function for resetting the game    
document.getElementById('btn').addEventListener('click', reset);

// Menu button
let toMenu = document.getElementById('toMenu');

toMenu.onclick = function() {
    cardArea.style.display = 'none';
    scoreArea.style.display = 'none';
    menuDiv.style.display = 'initial';
}; 

// HTML Modal Credits: https://www.w3schools.com/howto/howto_css_modals.asp
let modal = document.getElementById('rulesModal');
let btn = document.getElementById('rulesBtn');
let hideModal = document.getElementById('closeBtn');

hideModal.onclick = function() {
    modal.style.display = 'none';
};

btn.onclick = function() {
    modal.style.display = "block";
};

// HTML Modal that shows when game is finished
let gameFinishedModal = document.getElementById('gameFinishedModal');
let btnRestart = document.getElementById('btnRestart');
let btnMenu = document.getElementById('btnMenu');

// Shows the modal and presents how many attempts and time needed
function gameFinished() {
    document.getElementById('congratulations').innerHTML = 
    `Congratulations! You completed the game. :D \nYou finished in ${callCount} attempts and made it in ${time.innerHTML} seconds!`;
    gameFinishedModal.style.display ='block';
    scoreArea.style.display = "none";
}

// New game button
btnRestart.onclick = function() {
    gameFinishedModal.style.display ='none';
    reset();
};

// Button to get back to the menu
btnMenu.onclick = function() {
    cardArea.style.display = 'none';
    scoreArea.style.display = 'none';
    gameFinishedModal.style.display = "none";
    menuDiv.style.display = 'initial';
}; 