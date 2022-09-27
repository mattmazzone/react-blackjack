
import classes from "./Controls.module.css";

const Controls = (props) => {

  return (
    <div className={classes.controlContainer}>
      <div className={classes.playerCardCount}>
        Your Cards: {props.playerCardsAdded}
      </div>
      <div className={classes.dealerCardCount}>
        Dealer Cards: {props.dealerCardsAdded}
      </div>
      <button className={classes.controlButton} onClick={props.start}>
        Start Game
      </button>
      <button className={classes.controlButton} onClick={props.hit}>
        Hit
      </button>
      <button className={classes.controlButton} onClick={props.stand}>
        Stand
      </button>
      <button className={classes.controlButton} onClick={props.reset}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
