import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main() {
  const [homePrice, setHomePrice] = useState(1000000);
  // const [downPaymentRate, setDownPaymentRate] = useState(20);
  // const [downPayment, setDownPayment] = useState(homePrice * (downPaymentRate / 100));
  const [term, setTerm] = useState(360);
  const [interestRate, setInterestRate] = useState(2.88);
  const downPaymentRate = 20;
  const downPayment = homePrice * (downPaymentRate / 100);
  const monthlyRate = (interestRate / 1200);
  const firstEQ = ((homePrice - downPayment) * monthlyRate);
  const principal = (Math.round(firstEQ / (1 - (1 / ((1 + monthlyRate) ** term)))));
  const propertyTax = principal * 0.1682;
  const homeInsurance = 75;
  const mortgageInsurance = (downPaymentRate < 20) ? principal * 0.1 : 0;
  const payments = Math.round(principal + propertyTax + homeInsurance + mortgageInsurance);

  useEffect(() => {
    axios
      .get('/db')
      .then((res) => { setHomePrice(res.data.homePrice); })
      .catch((err) => { console.log(err); });
  }, []);

  function changePrice(e) {
    setHomePrice(e.target.value);
  }
  return (
    <div>
      <h3>Affordability</h3>
      <div>Calculate your monthly mortgage payments</div>
      <div id="paymentTitle">Your est. payment: ${payments}/month</div>
      <div id="sliders">
        <div className="sliders">
          <label>Home Price</label>
          <input
            id="homePriceInput"
            onChange={changePrice}
            value={homePrice} />
          <input
            id="homePriceSlider"
            type="range"
            steps="10"
            min="0"
            max={3000000}
            onChange={changePrice}
            value={homePrice} />
        </div>
      </div>
      <div id="svg">
        <div id="paymentsData" value={payments}>${payments}</div>
      </div>
      <div id="data">data</div>
    </div>
  );
}
