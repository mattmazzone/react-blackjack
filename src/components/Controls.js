import { useState, useEffect } from "react";
import classes from "./Controls.module.css";

const Controls = (props) => {
  const [disableStart, setDisableStart] = useState(false);
  const [disableHit, setDisableHit] = useState(true);
  const [disableStand, setDisableStand] = useState(true);

  const startBtnHandler = () => {
    props.start();
    setDisableStart(true);
  };

  const resetBtnHandler = () => {
    props.reset();
    setDisableStart(false);
    setDisableStart(false);
  };

  const hitBtnHandler = () => {
    props.hit();
  };

  const standBtnHandler = () => {
    props.stand();
    setDisableHit(true);
    setDisableStand(true);
  };

  useEffect(() => {
    if (props.playerCardsAdded > 21) {
      setDisableHit(true);
      setDisableStand(true);
    } else if (props.playerCardsAdded > 0) {
      setDisableHit(false);
      setDisableStand(false);
    }
  }, [props.playerCardsAdded]);

  return (
    <div className={classes.controlContainer}>
      <div className={classes.playerCardCount}>
        Your Cards: {props.playerCardsAdded}
      </div>
      <div className={classes.dealerCardCount}>
        Dealer Cards: {props.dealerCardsAdded}
      </div>
      <button
        className={classes.controlButton}
        onClick={startBtnHandler}
        disabled={disableStart}
      >
        Start Game
      </button>
      <button
        className={classes.controlButton}
        onClick={hitBtnHandler}
        disabled={disableHit}
      >
        Hit
      </button>
      <button
        className={classes.controlButton}
        onClick={standBtnHandler}
        disabled={disableStand}
      >
        Stand
      </button>
      <button className={classes.controlButton} onClick={resetBtnHandler}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
