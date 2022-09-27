import { Fragment, useState, useEffect } from "react";

import PlayingBoard from "./components/PlayingBoard.js";
import Controls from "./components/Controls.js";
import { DeckOfCards } from "./DeckOfCards.js";

import { CardCount } from "./Helper/HelperFunctions.js";

var CardDeck = new DeckOfCards().concatCardNames();

const pickRandomCard = () => {
  let randomElement = CardDeck[Math.floor(Math.random() * CardDeck.length)];
  let index = CardDeck.indexOf(randomElement);
  CardDeck.splice(index, 1);
  console.log(CardDeck);

  return randomElement;
};

function App() {
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

  const [playerCardCount, setPlayerCardCount] = useState(0);
  const [dealerCardCount, setDealerCardCount] = useState(0);

  const hitHandler = () => {
    console.log("hit");
    let randomCard = pickRandomCard();

    setPlayerCards((prevState) => [...prevState, randomCard]);
  };

  const standHandler = () => {
    console.log("stand");
  };

  const resetHandler = () => {
    console.log("reset");
    setPlayerCards([]);
    setDealerCards([]);
    CardDeck = new DeckOfCards().concatCardNames();
  };

  const startHandler = () => {
    console.log("start");

    // Select dealer card
    let randomCard1 = pickRandomCard();

    setDealerCards((prevState) => [...prevState, randomCard1]);

    // Select player cards
    let randomCard2 = pickRandomCard();
    setPlayerCards((prevState) => [...prevState, randomCard2]);
    let randomCard3 = pickRandomCard();
    setPlayerCards((prevState) => [...prevState, randomCard3]);
  };

  useEffect(() => {
    console.log("useEffect");
    setPlayerCardCount(CardCount(playerCards));
    setDealerCardCount(CardCount(dealerCards));
  }, [playerCards, dealerCards]);

  return (
    <Fragment>
      <PlayingBoard dealerCards={dealerCards} playerCards={playerCards} />
      <Controls
        hit={hitHandler}
        stand={standHandler}
        reset={resetHandler}
        start={startHandler}
        playerCardsAdded={playerCardCount}
        dealerCardsAdded={dealerCardCount}
      />
    </Fragment>
  );
}

export default App;
