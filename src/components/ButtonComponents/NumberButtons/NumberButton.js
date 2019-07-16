import React from "react";

const NumberButton = ( props ) => {
  console.log( props );
  return (
    <>
      <button>{props.number}</button>
    </>
  );
};

export default NumberButton;
