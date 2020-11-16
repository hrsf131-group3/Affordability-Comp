import React, { useState, useEffect } from 'react';

function DownPaymentSlider() {
  return (
    <div>
      <div style={style.label}>
        <div>
          <label>Down Payment</label>
        </div>
        <input
          id='downPaymentInput'
          onChange={() => change}
          name='homePrice'
          style={style.textInput}
          type='text'
          value={downPayment.d}
        />
      </div>
      <div style={style.slider}>
        <input
          style={style.sliderInput}
          onChange={() => change}
          name='homePrice'
          type='range'
          min='0'
          max='30'
          step='1'
          value={downPayment.d}
        />
      </div>
    </div>
  );
}

export default DownPaymentSlider;
