import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";
import { specials } from "../../../data.js";


const Specials = () => {
  // STEP 2 - add the imported data to state
  const [especial] = useState(specials);
  return (
    <div>
      {especial.map( e => <SpecialButton special={e}/>)}
    </div>
  );
};

export default Specials;