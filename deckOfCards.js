class Card {
    constructor(suit, stringVal, numVal) {
        this.suit = suit;
        this.stringVal = stringVal;
        this.numVal = numVal;
    }

    show() {
        console.log(`Suit: ${suits}`)
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }

    reset() {
        this.deck = [];
        const suit = ["Hearts", "Diamonds", "Clubs", "Spades"];
        const stringVal = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        const numVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13];

        for(s in suit) {
            for(let i = 0; i < stringVal.length; i++) {
                newDeck = new Card(stringVal[i], s, numVal);
                this.deck.push(newDeck);
            }
        }
        return this.deck;
    }

    shuffle() {
        var i = deck.length - 1;
        while(i > 0) {
            var j = Math.floor(Math.random() * i + 1);
            var tempVal = this.deck[j];
            this.deck[j] = this.deck[i];
            this.deck[i] = tempVal;
            i--;
        }
        return this.deck;
    }

    deal() {
        while(this.deck.length > 0) {
            var top = this.deck[0];
            return top.pop();
        }
        this.reset();
        return this.deal();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        return this.hand.pop();
    }
}

