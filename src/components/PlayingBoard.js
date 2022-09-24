import { Fragment } from "react";
import classes from "./PlayingBoard.module.css";

import Card from "./Card";

const PlayingBoard = (props) => {

    const dealerCards = [];
    const playerCards = [];
    



  return (
    <Fragment>
      <div className={classes.dealerCards}>
        <Card value={props.dealerCards} />
      </div>
      <div className={classes.dealerCards}>
        <Card value={props.playerCards} />
      </div>
    </Fragment>
  );
};

export default PlayingBoard;
