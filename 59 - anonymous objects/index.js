// anonymous objects = Objects without a name 
//                     Not directly referenced
//                     Less Syntax 
//                     No need for unique names 

class Card {

    constructor(value, suit) {
        this.value = value
        this.suit = suit
    }
}

let card1 = new Card('A', 'Hearts')
let card2 = new Card('B', 'Spades')
let card3 = new Card('C', 'Clubs')
let card4 = new Card('D', 'Diamonds')
let card5 = new Card('2', 'Hearts')
let card6 = new Card('2', 'Spades')
let card7 = new Card('2', 'Clubs')
let card8 = new Card('2', 'Diamonds')

// let cards = [card1, card2, card3, card4, card5, card6, card7, card8]

// console.log(card1.value + card1.suit)
// console.log(cards[0].value + cards[0].suit)

let cards = [
    new Card('A', 'Hearts'),
    new Card('B', 'Spades'),
    new Card('C', 'Clubs'),
    new Card('D', 'Diamonds'),
    new Card('2', 'Hearts'),
    new Card('2', 'Spades'),
    new Card('2', 'Clubs'),
    new Card('2', 'Diamonds')
]

//console.log(cards[0].value + cards[0].suit)

cards.map((show) => {
    console.log(`${show.value} ${show.suit}`)
})

cards.forEach((test) => {
    console.log(`${test.value} ${test.suit}`)
})

