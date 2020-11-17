/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Interest(props) {
  // const { onChange } = props

  function handleChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <div className="sliders">
      <label>Interest Rate</label>
      <input
        id="InterestInput"
        type="text"
        onChange={handleChange}
        maxLength={10}
        value={props.rateStr}
      />
      <input
        id="InterestSlider"
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
