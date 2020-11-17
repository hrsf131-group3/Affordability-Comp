import React from 'react';

export default function Price(props) {
  // const { onChange } = props

  function handleChange(e) {
    // eslint-disable-next-line react/prop-types
    props.onChange(e.target.value);
  }
  return (
    <div className='sliders'>
      <label>Home Price</label>
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
