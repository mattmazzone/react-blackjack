import classes from "./DealerCard.module.css";

const DealerCard = (props) => {
  let dealerDeck = String.fromCodePoint(127136);

  return (
    <div>
      <div className={classes.dealerCard}>{dealerDeck}</div>
    </div>
  );
};

export default DealerCard;
