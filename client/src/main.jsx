import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Price from './sliders/price';
import Down from './sliders/down';
import Interest from './sliders/interest';

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
  const mortgageInsurance = downPaymentRate < 20 ? principal * 0.1 : 0; // hasn't been called yet
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
    axios
      .get('/db')
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

  // DOM Rendering

  return (
    <div>
      <h3>Affordability</h3>
      <div>Calculate your monthly mortgage payments</div>
      <div id="paymentTitle">
        Your est. payment: $
        {payments}
        /month
      </div>
      <Price
        id="price"
        price={price}
        homePrice={homePrice}
        onChange={changePrice}
      />
      <Down
        id="down"
        value={downPayment}
        valueStr={down}
        rate={downPaymentRate}
        rateStr={rateStr}
        onRateChange={changeRate}
        onValueChange={changeValue}
      />
      <Interest
        id="interest"
        value={interestRate}
        valueStr={interestStr}
        onChange={changeInterest}
      />
      <div id="svg">
        <div id="paymentsData" value={payments}>
          <div>SVG</div>
          $
          {payments}
        </div>
      </div>
      <div id="data">data</div>
    </div>
  );
}
