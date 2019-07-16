import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js";
//Import your array data to from the provided data file
import { operators } from "../../../data.js";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops] = useState(operators);

  return (
    <div>
      {ops.map( e => <OperatorButton operator = {e.char} />)}
    </div>
  );
};

export default Operators;