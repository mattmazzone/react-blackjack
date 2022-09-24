import React from "react";

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.hit}>Hit</button>
      <button onClick={props.stand}>Stand</button>
    </div>
  );
};

export default Controls;
