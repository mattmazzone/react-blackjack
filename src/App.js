import { Fragment } from "react";

import PlayingBoard from "./components/PlayingBoard.js";
import Controls from "./components/Controls.js";

function App() {
  const hitHandler = () => {
    console.log("hit");
  };
  const standHandler = () => {
    console.log("stand");
  };

  return (
    <Fragment>
      <PlayingBoard dealerCards={"Three-Clubs"} playerCards={"Ace-Hearts"} />

      <Controls hit={hitHandler} stand={standHandler} />
    </Fragment>
  );
}

export default App;
