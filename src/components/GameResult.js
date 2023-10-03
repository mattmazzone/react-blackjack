import ezEmote from "../assets/eztwitchemote.png";
import clapemote from "../assets/claptwitchemote.gif";
import ripbozo from "../assets/ripbozo.gif";
import omegalul from "../assets/omegalul.png";
import pepesmoke from "../assets/pepesmoke.gif";
import pepelaugh from "../assets/pepelaugh.png";

import { Fragment } from "react";
import classes from "./GameResult.module.css";

const GameResult = (props) => {
  const output = () => {
    if (props.status === "InProgess") {
      return "In Progress...";
    } else if (props.status === "PlayerWins") {
      return (
        <Fragment>
          <img src={ezEmote} alt="ez" /> <img src={clapemote} alt="clap" />
        </Fragment>
      );
    } else if (props.status === "DealerWins") {
      return <img src={pepesmoke} alt="pepesmoke" />;
    } else if (props.status === "DealerBust") {
      return <img src={ripbozo} alt="ripbozo" />;
    } else if (props.status === "PlayerBust") {
      return <img src={omegalul} alt="omegalul" />;
    } else if (props.status === "Tie") {
      return <img src={pepelaugh} alt="pepelaugh" />;
    } else {
      return "???";
    }
  };

  return <div className={classes.gameResult}>{output()}</div>;
};

export default GameResult;


