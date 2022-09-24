export class DeckOfCards {
  constructor() {
    this.cardTypes = [
      "Ace",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Jack",
      "Queen",
      "King",
    ];
    this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    this.unicodeArray = null;
    this.cardNames = null;
    this.cardMap = null;
  }

  get(value) {
    return this.cardMap.get(value);
  }

  // Function to map two arrays together
  buildMap(cardNames, unicodeArray) {
    const map = new Map();
    for (let i = 0; i < cardNames.length; i++) {
      map.set(cardNames[i], unicodeArray[i]);
    }
    return map;
  }

  // Unicode values for the cards
  concatCardUnicodes() {
    let cardUnicodes = [];
    for (let i = 127137; i < 127151; i++) {
      if (i !== 127148) {
        cardUnicodes.push(String.fromCodePoint(i));
      }
    }
    for (let i = 127153; i < 127167; i++) {
      if (i !== 127164) {
        cardUnicodes.push(String.fromCodePoint(i));
      }
    }
    for (let i = 127169; i < 127183; i++) {
      if (i !== 127180) {
        cardUnicodes.push(String.fromCodePoint(i));
      }
    }
    for (let i = 127185; i < 127199; i++) {
      if (i !== 127196) {
        cardUnicodes.push(String.fromCodePoint(i));
      }
    }
    return cardUnicodes;
  }

  // Combine the card types and suits into a single array
  concatCardNames() {
    let cardNames = [];
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.cardTypes.length; j++) {
        cardNames.push(this.cardTypes[j] + "-" + this.suits[i]);
      }
    }
    return cardNames;
  }

  // Initialize the card map
  init() {
    this.unicodeArray = this.concatCardUnicodes();
    this.cardNames = this.concatCardNames();
    this.cardMap = this.buildMap(this.cardNames, this.unicodeArray);
    console.log(this.cardMap);
    return this.cardMap;
  }
}
