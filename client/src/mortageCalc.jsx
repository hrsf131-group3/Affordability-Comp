import math from "./numberCruncher.js";
import React, { useState } from "react";

function MortgageCalc() {
  const [homePrice, setHomePrice] = useState(math.homePrice);
  const [downPayment, setDownPayment] = useState(math.downPayment);
  const [interestRate, setInterestRate] = useState(math.interestRate);

  return (
    <div>
      <div id="affordability-container">
        <div className="padding-1">
          <h3 id="heading-container" style={{ margin: "0px 0px 8px" }}>
            <div className="text-1">Affordability</div>
          </h3>
        </div>
        <div className="padding-2">
          <div className="text-2">Calculate your monthly mortgage payments</div>
          <div className="text-3">{`Your est. payment:${math.payment}`}</div>
        </div>
      </div>
    </div>
  );
}

export default MortgageCalc;
