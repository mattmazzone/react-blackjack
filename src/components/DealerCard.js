import classes from "./DealerCard.module.css";

const DealerCard = (props) => {
  let dealerDeck = String.fromCodePoint(127136);

  return <div className={classes.dealerCard}>{dealerDeck}</div>;
};

export default DealerCard;
