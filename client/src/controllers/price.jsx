/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import Slider from '../styles/slider';

export default function Price(props) {
  // const [max, setMax] = useState(props.homePrice * 1.3);
  // useEffect(() => {
  //   setMax(props.homePrice * 1.3);
  // }, [props.homePrice * 1.3]);
  function handleChange(e) {
    // eslint-disable-next-line react/prop-types
    props.onChange(e.target.value);
  }

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
        max={3000000}
        onChange={handleChange}
        value={props.homePrice}
      />
    </div>
  );
}
