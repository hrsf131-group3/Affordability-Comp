/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Price(props) {
  function handleChange(e) {
    // eslint-disable-next-line react/prop-types
    props.onChange(e.target.value);
  }
  return (
    <div className="sliders">
      <text>Home Price</text>
      <input
        id="homePriceInput"
        type="text"
        onChange={handleChange}
        maxLength={10}
        value={props.price}
      />
      <input
        id="homePriceSlider"
        type="range"
        step={10}
        min={0}
        max={3000000}
        onChange={handleChange}
        value={props.homePrice}
      />
    </div>
  );
}
