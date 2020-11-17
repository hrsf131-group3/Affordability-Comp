/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Slider from '../styles/slider';

export default function Price(props) {
  const [homePrice, setHomePrice] = useState(props.homePrice);
  function handleChange(e) {
    // eslint-disable-next-line react/prop-types
    props.onChange(e.target.value);
  }

  const max = (homePrice * 1.3);
  return (
    <div className="sliders">
      <div>Home Price</div>
      <input
        id="homePriceInput"
        type="text"
        onChange={handleChange}
        maxLength={10}
        value={props.price}
      />
      <Slider
        step={10}
        min={0}
        max={max}
        onChange={handleChange}
        value={props.homePrice}
      />
    </div>
  );
}
