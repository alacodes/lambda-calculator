import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js";
//Import your array data to from the provided data file
import { numbers, operators, specials } from "../../../data.js";
console.log(numbers);

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [nums] = useState(numbers);

  return (
    <div>
      {nums.map( e => <NumberButton number={e} />)}
    </div>
  );
};

export default Numbers;
