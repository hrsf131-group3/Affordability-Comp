/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Down(props) {
  // const { onChange } = props

  function handleChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <div className="sliders">
      <label>Down Payment</label>
      <input
        id="downPaymentInput"
        type="text"
        onChange={handleChange}
        maxLength={10}
        value={props.rateStr}
      />
      <input
        id="downPaymentSlider"
        type="range"
        step={1}
        min={0}
        max={30}
        onChange={handleChange}
        value={props.rate}
      />
      <div>{props.valueStr}</div>
    </div>
  );
}
