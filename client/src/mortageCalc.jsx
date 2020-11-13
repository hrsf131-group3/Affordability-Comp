// import React, { useState } from 'react';
import React from 'react';
import math from './numberCruncher';

const style = {
  text: {
    fontFamily:
      'TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif',
    letterSpacing: '-0.1px',
    fontSize: '16px',
    lineHeight: '24px',
    wordSpacing: '0px',
    fontWeight: '700',
    color: 'rgb(59, 65, 68)',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    outline: 'none',
  },
  moment: {
    fontWeight: '1',
  },
  slider: {
    width: '100%',
    height: '2px',
    background:
      'linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) 51.0393%, rgb(205, 209, 212) 51.0393%, rgb(205, 209, 212) 100%)',
    appearance: 'none',
  },
  darkBox: {
    backgroundColor: 'rgb(245, 246, 247)',
    borderRadius: '8px',
    width: '100%',
    overflow: 'hidden',
  },
  optionsContainer: {
    display: 'flex',
  },
};

function MortgageCalc() {
  // const [homePrice, setHomePrice] = useState(math.homePrice);
  // const [downPayment, setDownPayment] = useState(math.downPayment);
  // const [interestRate, setInterestRate] = useState(math.interestRate);

  return (
    <div style={style.text}>
      <div>
        <div>
          <h3 style={{ margin: '0px 0px 8px' }}>
            <div style={style.title}>Affordability</div>
          </h3>
        </div>
        <div className="padding-2">
          <div>Calculate your monthly mortgage payments</div>
          <div style={style.moment}>{`Your est. payment: ${math.payment}`}</div>
        </div>
        <div style={style.darkBox}>
          <div>text</div>
        </div>
      </div>
    </div>
  );
}
// { padding: '16px' }//

export default MortgageCalc;
