/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Controllers

import Price from './controllers/price';
import Down from './controllers/down';
import Interest from './controllers/interest';
import Loan from './controllers/loan';

// Raw Components

import Svg from './svg';
import Data from './data';

// Styles

import Label from './styles/label';
import DarkBox from './styles/darkBox';
import Title from './styles/title';
import Text from './styles/text';
import SvgStyle from './styles/svgStyle';
import View from './styles/view';
import DataContainer from './styles/dataContainer';
import SvgData from './styles/svgData';

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
  const total = Math.round(
    principal + propertyTax + homeInsurance + mortgageInsurance,
  );

  // Data conditioning

  const tax = `$${Math.round(propertyTax).toLocaleString()}`; // Helper function
  const down = `$${Math.round(downPayment).toLocaleString()}`;
  const price = `$${homePrice.toLocaleString()}`;
  const payments = `$${total.toLocaleString()}`;
  const rateStr = `${downPaymentRate.toLocaleString()}%`;
  const interestStr = `${interestRate}%`;
  const principalStr = `$${principal.toLocaleString()}`;
  const homeInsuranceStr = `$${homeInsurance.toLocaleString()}`;
  const mortgageInsuranceStr = `$${mortgageInsurance.toLocaleString()}`;

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
    let num = parseFloat(value.replace(/\D/g, '')); // 86-89 Helper
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
      num = 0.1;
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
    <Text>
      <Title>
        <h3>Affordability</h3>
        <div>Calculate your monthly mortgage payments</div>
      </Title>
      <div id="paymentTitle" style={{ fontWeight: '1' }}>
        Your est. payment:
        {` ${payments}`}
        /month
      </div>
      <DarkBox>
        <Label>
          <Price
            id="priceSection"
            // style={style.slider}
            price={price}
            homePrice={homePrice}
            onChange={changePrice}
          />
        </Label>
        <Label>
          <Down
            id="down"
            // style={style.slider}
            value={downPayment}
            valueStr={down}
            rate={downPaymentRate}
            rateStr={rateStr}
            onRateChange={changeRate}
            onValueChange={changeValue}
          />
        </Label>
        <Label>
          <Interest
            id="interest"
            value={interestRate}
            valueStr={interestStr}
            onChange={changeInterest}
          />
        </Label>
        <Label>
          <Loan
            id="loan"
            onChange={changeLoan}
          />
        </Label>
      </DarkBox>
      <View>
        <SvgStyle>
          <div id="paymentsData" value={payments}>
            <Svg
              principal={principal}
              tax={propertyTax}
              homeInsurance={homeInsurance}
              mortgageInsurance={mortgageInsurance}
              total={total}
              payments={payments}
            />
            <SvgData
              value={payments}
            />
          </div>
        </SvgStyle>
        <DataContainer>
          <Data // Cant map over an object with color & text because data needs to be independant
            color="#052286"
            text="Principal & Interest"
            value={principalStr}
          />
          <Data
            color="#00adbb"
            text="Property Taxes"
            value={tax}
          />
          <Data
            color="#c2d500"
            text="Home Insurance"
            value={homeInsuranceStr}
          />
          <Data
            color="#ceb6ff"
            text="Mortgage ins. & other"
            value={mortgageInsuranceStr}
          />
        </DataContainer>
      </View>
    </Text>
  );
}
