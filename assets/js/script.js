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


// Getting elments from the DOM 
let cardArea = document.querySelector('.card-area');
let cardsChosen = [];
let cardsId = [];
let won = [];
let card;

document.addEventListener('DOMContentLoaded', function() {

// Randomize the cards. Credits for solution: https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j
    function randomCards() {
        cardList.sort(() => 0.5 - Math.random());
    }

    randomCards();
    
// Setting up the board with the cards
    function setBoard() {
    for (let i = 0; i < cardList.length; i++) {
        card = document.createElement('img');
        card.setAttribute('src', 'assets/images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', turnCard);
        cardArea.appendChild(card);
     };
    };

    setBoard();


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
        }
        if (won.length === 8) {
            alert('Congratulations! You completed the game. :D')
        }

        cardsChosen = [];
        cardsId = [];
    }    

// Turning the cards
    function turnCard() {
        let id = this.getAttribute('data-id');
        cardsChosen.push(cardList[id].name);
        cardsId.push(id);
        this.setAttribute('src', cardList[id].img);
        if (cardsChosen.length === 2) {
            setTimeout(CheckForPairs, 500);
        }
    }
    
});

