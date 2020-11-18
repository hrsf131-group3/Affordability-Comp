/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Svg(props) {
  function findPercent(value) {
    return (value / props.total) * 100;
  }
  function findOffSet(value) {
    return 125 - value;
  }
  const principal = findPercent(props.principal);
  const tax = findPercent(props.tax);
  const taxOffSet = findOffSet(principal);
  const homeInsurance = findPercent(props.homeInsurance);
  const homeInsuranceOffSet = findOffSet(principal + tax);
  const mortgageInsurance = findPercent(props.mortgageInsurance);
  const mortgageInsuranceOffSet = findOffSet(principal + tax + homeInsurance);

  return (
    <div style={{ height: '100px', width: '100px' }}>
      <svg viewBox="0 0 36 36">
        {/* <circle cx={18} cy={18} r={12} fill="#fff" role="presentation" /> */}
        <circle
          cx={18}
          cy={18}
          r={16}
          fill="transparent"
          stroke="rgb(5, 34, 134)"
          strokeWidth="3.8"
          strokeDasharray={`${principal} ${100 - principal}`}
          strokeDashoffset="25"
        />
        <circle
          cx={18}
          cy={18}
          r={16}
          fill="transparent"
          stroke="rgb(0, 173, 187)"
          strokeWidth="3.8"
          strokeDasharray={`${tax} ${100 - tax}`}
          strokeDashoffset={taxOffSet}
        />
        <circle
          cx={18}
          cy={18}
          r={16}
          fill="transparent"
          stroke="rgb(194, 213, 0)"
          strokeWidth="3.8"
          strokeDasharray={`${homeInsurance} ${100 - homeInsurance}`}
          strokeDashoffset={homeInsuranceOffSet}
        />
        <circle
          cx={18}
          cy={18}
          r={16}
          fill="transparent"
          stroke="rgb(206, 182, 255)"
          strokeWidth="3.8"
          strokeDasharray={`${mortgageInsurance} ${100 - mortgageInsurance}`}
          strokeDashoffset={mortgageInsuranceOffSet}
        />
      </svg>
      {/* <div>
        <div>{props.payments}</div>
        <div>/month</div>
      </div> */}
    </div>
  );
}
