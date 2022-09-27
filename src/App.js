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

  return randomElement;
};

function App() {
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerStands, setPlayerStands] = useState(false);
  const [dealerStands, setDealerStands] = useState(false);

  const [playerCardCount, setPlayerCardCount] = useState(0);
  const [dealerCardCount, setDealerCardCount] = useState(0);

  const hitHandler = () => {
    console.log("hit");

    setPlayerCards((prevState) => [...prevState, pickRandomCard()]);
  };

  const standHandler = () => {
    console.log("stand");
    setPlayerStands(true);
  };

  const resetHandler = () => {
    console.log("reset");
    setPlayerCards([]);
    setDealerCards([]);
    setPlayerStands(false);
    setDealerStands(false);

    CardDeck = new DeckOfCards().concatCardNames();
  };

  const startHandler = () => {
    console.log("start");

    // Select dealer card
    setDealerCards((prevState) => [...prevState, pickRandomCard()]);

    // Select 2 player cards
    setPlayerCards((prevState) => [...prevState, pickRandomCard()]);
    setPlayerCards((prevState) => [...prevState, pickRandomCard()]);
  };

  // Update card count
  useEffect(() => {
    console.log("checking card count");
    setPlayerCardCount(CardCount(playerCards));
    setDealerCardCount(CardCount(dealerCards));
  }, [playerCards, dealerCards]);

  // Flip dealer cards when player stands
  useEffect(() => {
    if (playerStands) {
      if (dealerCardCount < 17) {
        setDealerCards((prevState) => [...prevState, pickRandomCard()]);
      }
      if (dealerCardCount > 16) {
        setDealerStands(true);
      }
    }
  }, [playerStands, dealerCardCount]);

  useEffect(() => {
    console.log("checking for winner");
    if (playerCardCount > 21) {
      console.log("player bust");
    }
    if (dealerStands) {
      if (dealerCardCount > 21) {
        console.log("Dealer busts! You win!");
      } else if (dealerCardCount > playerCardCount) {
        console.log("Dealer wins!");
      } else if (dealerCardCount < playerCardCount) {
        console.log("You win!");
      } else {
        console.log("It's a tie!");
      }
    }
  }, [dealerStands, dealerCardCount, playerCardCount]);

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
