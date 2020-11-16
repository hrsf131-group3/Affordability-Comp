import React, { useState, useEffect } from 'react';

function InterestSlider() {
  return (
    <div>
      <div style={style.label}>
        <div>
          <label htmlFor='interestRateInput'>Interest Rate</label>
        </div>
        <input
          id='interestRateInput'
          onChange={() => change}
          name='homePrice'
          style={style.textInput}
          type='text'
          value={interestRate.d}
        />
      </div>
      <div style={style.slider}>
        <input
          style={style.sliderInput}
          onChange={() => change}
          name='homePrice'
          type='range'
          min='0'
          max='6.5'
          step='0.1'
          value={interestRate.d}
        />
      </div>
    </div>
  );
}

export default InterestSlider;
