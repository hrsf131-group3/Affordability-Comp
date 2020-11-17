/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Price from './controllers/price';
import Down from './controllers/down';
import Interest from './controllers/interest';
import Loan from './controllers/loan';

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
  darkBox: {
    backgroundColor: 'rgb(245, 246, 247)',
    borderRadius: '8px',
    width: '100%',
    overflow: 'hidden',
  },
  label: {
    marginTop: '16px',
    flex: '1 1 0%',
    width: '100%',
    display: 'flex',
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    marginBottom: '16px',
    minHeight: '48px',
  },
  slider: {
    width: '100%',
    height: '2px',
    background:
      'linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) 51.0393%, rgb(205, 209, 212) 51.0393%, rgb(205, 209, 212) 100%)',
    appearance: 'none',
  },
};

export default function Main() {
  // State declarations and Functions

  const [homePrice, setHomePrice] = useState(1000000);
  const [downPaymentRate, setDownPaymentRate] = useState(20);
  const [downPayment, setDownPayment] = useState(
    homePrice * (downPaymentRate / 100),
  );
  const [term, setTerm] = useState(360);
  const [interestRate, setInterestRate] = useState(2.88);

  // Helper Declarations

  const monthlyRate = interestRate / 1200;
  const firstEQ = (homePrice - downPayment) * monthlyRate;

  // Data Calculations

  const principal = Math.round(firstEQ / (1 - 1 / (1 + monthlyRate) ** term));
  const propertyTax = principal * 0.1682;
  const homeInsurance = 75;
  const mortgageInsurance = Math.ceil(downPaymentRate < 20 ? principal * 0.1 : 0);
  const payments = Math.round(
    principal + propertyTax + homeInsurance + mortgageInsurance,
  ).toLocaleString();

  // Data conditioning

  const price = `$${homePrice.toLocaleString()}`;
  const down = `$${Math.round(downPayment).toLocaleString()}`;
  const rateStr = `%${downPaymentRate.toLocaleString()}`;
  const interestStr = `%${interestRate}`;

  // API request to Mongo for initial HomePrice

  useEffect(() => {
    axios({
      method: 'get',
      url: `${window.location}db`,
    })
      .then((res) => {
        setHomePrice(res.data.homePrice);
        setDownPayment(res.data.homePrice * (downPaymentRate / 100));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // On Change Calculations

  function changePrice(value) {
    let num = parseFloat(value.replace(/\D/g, ''));
    if (Number.isNaN(num)) {
      num = 0;
    }
    setHomePrice(num);
    setDownPayment(num * (downPaymentRate / 100));
  }
  function changeRate(value) {
    let num = parseFloat(value.replace(/\D/g, ''));
    if (Number.isNaN(num)) {
      num = 0;
    }
    setDownPaymentRate(num);
    setDownPayment(homePrice * (num / 100));
  }
  function changeValue(value) {
    let num = parseFloat(value.replace(/\D/g, ''));
    if (Number.isNaN(num)) {
      num = 0;
    }
    setDownPaymentRate((num / homePrice) * 100);
    setDownPayment(num);
  }
  function changeInterest(value) { // has bug when editing input box to NaN
    let num = value.replace('%', '');
    if (num === '0') {
      num = 0.7;
    }
    setInterestRate(num);
  }
  function changeLoan(value) {
    // [0] = term | [1] = interest | [2] = rate
    setTerm(Number(value[0]));
    setInterestRate(Number(value[1]));
    setDownPaymentRate(Number(value[2]));
  }

  // DOM Rendering

  return (
    <div style={style.text}>
      <div style={style.title}>
        <h3>Affordability</h3>
        <div>Calculate your monthly mortgage payments</div>
      </div>
      <div id="paymentTitle" style={style.moment}>
        Your est. payment: $
        {payments}
        /month
      </div>
      <div style={style.darkBox}>
        <div style={style.label}>
          <Price
            id="price"
            style={style.slider}
            price={price}
            homePrice={homePrice}
            onChange={changePrice}
          />
        </div>
        <div style={style.label}>
          <Down
            id="down"
            style={style.slider}
            value={downPayment}
            valueStr={down}
            rate={downPaymentRate}
            rateStr={rateStr}
            onRateChange={changeRate}
            onValueChange={changeValue}
          />
        </div>
        <div style={style.label}>
          <Interest
            id="interest"
            style={style.slider}
            value={interestRate}
            valueStr={interestStr}
            onChange={changeInterest}
          />
        </div>
        <Loan
          id="loan"
          onChange={changeLoan}
        />
      </div>
      <div id="svg">
        <div id="paymentsData" value={payments}>
          <div>SVG</div>
          $
          {payments}
        </div>
        <div>{mortgageInsurance}</div>
      </div>
      <div id="data">data</div>
    </div>
  );
}
