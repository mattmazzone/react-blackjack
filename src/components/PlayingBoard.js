import { Fragment } from "react";
import classes from "./PlayingBoard.module.css";

import DealerCard from "./DealerCard";

import Card from "./Card";

const PlayingBoard = (props) => {
  const playerCardslist = props.playerCards.map((card) => {
    return <Card key={card} value={card} />;
  });

  const dealerCardslist = props.dealerCards.map((card) => {
    return <Card key={card} value={card} />;
  });

  return (
    <Fragment>
      <div className={classes.dealerCards}>
        {dealerCardslist}
        <DealerCard className={classes.dealerCard} />
      </div>
      <div className={classes.playerCards}>
        {playerCardslist}
        {/* <Card key={"holder"} value={"holder"}></Card> */}
      </div>
    </Fragment>
  );
};

export default PlayingBoard;
