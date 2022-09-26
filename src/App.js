import { Fragment, useState } from "react";

import PlayingBoard from "./components/PlayingBoard.js";
import Controls from "./components/Controls.js";
import { DeckOfCards } from "./DeckOfCards.js";

var CardDeck = new DeckOfCards().concatCardNames();

const pickRandomCard = () => {
  let randomElement = CardDeck[Math.floor(Math.random() * CardDeck.length)];
  let index = CardDeck.indexOf(randomElement);
  CardDeck.splice(index, 1);
  console.log(CardDeck);

  return randomElement;
};

function App() {
  const [dealerCards, setDealerCards] = useState(["Two-Clubs", "Four-Clubs"]);
  const [playerCards, setPlayerCards] = useState(["Three-Clubs", "Four-Clubs"]);

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

  return (
    <Fragment>
      <PlayingBoard dealerCards={dealerCards} playerCards={playerCards} />
      <Controls hit={hitHandler} stand={standHandler} reset={resetHandler} />
    </Fragment>
  );
}

export default App;
