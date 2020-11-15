/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sliders from './sliders.jsx';
import math from './numberCruncher';

export const Price = React.createContext();

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

};

function MortgageCalc() {
  const [homePrice, setHomePrice] = useState({});
  const [downPayment, setDownPayment] = useState({});
  const [interestRate, setInterestRate] = useState({});

  useEffect(() => {
    axios
      .get('/db')
      .then((response) => {
        math.homePrice = response.data.homePrice;
        setHomePrice(response.data.homePrice);
        setDownPayment(math.downPayment);
      });
  }, []);

  // const mongo = require('../../')

  return (
    <div style={{ maxWidth: '692px', margin: '15px' }}>
      <div style={style.text}>
        <div>
          <div>
            <h3 style={{ margin: '0px 0px 8px' }}>
              <div style={style.title}>Affordability</div>
            </h3>
          </div>
          <div className="padding-2">
            <div>Calculate your monthly mortgage payments</div>
            <div style={style.moment}>{`Your est. payment: ${homePrice}`}</div>
          </div>
          <div style={style.darkBox}>
            <Sliders homePrice={homePrice} downPayment={downPayment} interestRate={interestRate} />
          </div>
        </div>
      </div>
    </div>
  );
}
// { padding: '16px' }//

export default MortgageCalc;
