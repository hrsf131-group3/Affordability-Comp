import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Price from './sliders/price';
import Down from './sliders/down';

export default function Main() {
  const [homePrice, setHomePrice] = useState(1000000);
  const [downPaymentRate, setDownPaymentRate] = useState(20);
  const [downPayment, setDownPayment] = useState(
    homePrice * (downPaymentRate / 100)
  );
  const [term, setTerm] = useState(360);
  const [interestRate, setInterestRate] = useState(2.88);
  // const downPaymentRate = 20;
  // const downPayment = homePrice * (downPaymentRate / 100);
  const monthlyRate = interestRate / 1200;
  const firstEQ = (homePrice - downPayment) * monthlyRate;
  const principal = Math.round(firstEQ / (1 - 1 / (1 + monthlyRate) ** term));
  const propertyTax = principal * 0.1682;
  const homeInsurance = 75;
  const mortgageInsurance = downPaymentRate < 20 ? principal * 0.1 : 0;
  const payments = Math.round(
    principal + propertyTax + homeInsurance + mortgageInsurance,
  ).toLocaleString();

  //
  const price = `$${homePrice.toLocaleString()}`;
  const down = `$${downPayment.toLocaleString()}`;
  const rateStr = `%${downPaymentRate.toLocaleString()}`;

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
        id="Down"
        value={downPayment}
        valueStr={down}
        rate={downPaymentRate}
        rateStr={rateStr}
        onRateChange={changeRate}
        onValueChange={changeValue}
      />
      <div id="svg">
        <div id="paymentsData" value={payments}>
          $
          {payments}
        </div>
      </div>
      <div id="data">data</div>
    </div>
  );
}
