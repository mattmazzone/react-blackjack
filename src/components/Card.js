import classes from "./Card.module.css";

const cardTypes = [
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
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

const concatCardNames = () => {
  let cardNames = [];
  for (let i = 0; i < cardTypes.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      cardNames.push(cardTypes[i] + "-" + suits[j]);
    }
  }
  return cardNames;
};

const concatCardUnicodes = () => {
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
};

const unicodeArray = concatCardUnicodes();
const cardNames = concatCardNames();

const buildMap = (cardNames, unicodeArray) => {
  const map = new Map();
  for (let i = 0; i < cardNames.length; i++) {
    map.set(cardNames[i], unicodeArray[i]);
  }
  return map;
};

const cardMap = buildMap(cardNames, unicodeArray);
console.log(cardMap);

function Card({ value }) {
  return <div className={classes.cardBox}>
    {cardMap.get(value)}
    </div>;
}
export default Card;
