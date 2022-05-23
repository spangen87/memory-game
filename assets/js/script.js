

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

document.addEventListener('DOMContentLoaded', function() {
    
// Setting up the board with the cards
function setBoard() {
    for (let i = 0; i < cardList.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/images/blank.png');
        card.setAttribute('data-id', i);
        cardArea.appendChild(card);
    };
};

setBoard();

})

