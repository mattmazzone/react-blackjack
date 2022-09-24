import classes from "./Card.module.css";
import { DeckOfCards } from "../DeckOfCards";

const cardMap = new DeckOfCards().init();

const Card = (props) => {
  const CardClass = () => {
    if (props.value.includes("Hearts") || props.value.includes("Diamonds")) {
      return classes.redCard;
    } else {
      return classes.blackCard;
    }
  };

  return <div className={CardClass()}>{cardMap.get(props.value)}</div>;
};

export default Card;