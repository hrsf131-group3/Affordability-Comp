/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from '../styles/slider';

export default function Interest(props) {
  // const { onChange } = props

  function handleChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <div className="sliders">
      <div>Interest Rate</div>
      <input
        id="InterestInput"
        type="text"
        onChange={handleChange}
        maxLength={5}
        value={props.valueStr}
      />
      <Slider
        step={0.1}
        min={0}
        max={6}
        onChange={handleChange}
        value={props.value}
      />
    </div>
  );
}
