import { Fragment, useState } from "react";

import PlayingBoard from "./components/PlayingBoard.js";
import Controls from "./components/Controls.js";
import { DeckOfCards } from "./DeckOfCards.js";

const CardDeck = new DeckOfCards().concatCardNames();

const pickRandomCard = () => {
  const cards = [
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
  const suits = ["Spades", "Diamonds", "Hearts", "Clubs"];
  const card = cards[Math.floor(Math.random() * cards.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  return card + "-" + suit;
};

function App() {
  const [dealerCards, setDealerCards] = useState(["Two-Clubs", "Four-Clubs"]);
  const [playerCards, setPlayerCards] = useState(["Three-Clubs", "Four-Clubs"]);

  const hitHandler = () => {
    console.log("hit");
    let randomCard = pickRandomCard();
    let index = playerCards.indexOf(randomCard);
    CardDeck.splice(index, 1);
    while (playerCards.includes(randomCard)) {
      randomCard = pickRandomCard();
    }
    setPlayerCards((prevState) => [...prevState, randomCard]);
  };
  const standHandler = () => {
    console.log("stand");
  };

  return (
    <Fragment>
      <PlayingBoard dealerCards={dealerCards} playerCards={playerCards} />
      <Controls hit={hitHandler} stand={standHandler} />
    </Fragment>
  );
}

export default App;
