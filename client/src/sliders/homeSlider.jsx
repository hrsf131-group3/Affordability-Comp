import React, { useState, useEffect } from 'react';
import math from '../numberCruncher';

const style = {
  label: {
    marginTop: '16px',
    flex: '1 1 0%',
    width: '100%',
    display: 'flex',
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    marginBottom: '16px',
    minHeight: '48px',
  },
  textInput: {
    borderRadius: '8px',
    border: '1px solid rgb(205, 209, 212)',
    padding: '8px',
    fontSize: '16px',
    lineHeight: '1.5',
    width: '112px',
    display: 'inline-block',
    outline: 'none',
    transition: 'box-shadow 0.15s ease 0s, border-color 0.15s ease 0s',
  },
  slider: {
    width: '100%',
    boxSizing: 'border-box',
    flex: '1 1 0%',
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '2px',
  },
  sliders: {
    width: '100%',
    height: '20px',
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
  },
  sliderInput: {
    WebkitRtlOrdering: 'logical',
    width: '100%',
    height: '2px',
    appearance: 'none',
    outline: 'none',
    margin: '0px',
    padding: '0px',
  },
  // priceBG: {
  //   background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${homePrice / maxPrice}%, rgb(205, 209, 212) 86.9565%, rgb(205, 209, 212) 100%)`,
  // },
  // downPaymentBG: {
  //   background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${percent}%, rgb(205, 209, 212) 86.9565%, rgb(205, 209, 212) 100%)`,
  // },
  // interestRateBG: {
  //   background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${percent}%, rgb(205, 209, 212) 86.9565%, rgb(205, 209, 212) 100%)`,
  // },
};
// function init(math.homePrice) {
//   return { homePrice: math.homePrice };
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     case 'reset':
//       return init(action.payload);
//     default:
//       throw new Error();
//   }
// }

function HomeSlider() {
  const [maxPrice, setMaxPrice] = useState(0);
  const [homePrice, setHomePrice] = useState(0);
  // const maxPrice = Number(homePrice) * 1.4;
  useEffect(() => {
    if (math.homePrice) {
      setHomePrice(math.homePrice);
      setMaxPrice(homePrice * 1.4);
    }
  });
  function change(e) {
    console.log(e.target.value);
    math.homePrice = e.target.value;
    setHomePrice(e.target.value);
  }
  return (
    <div>
      <div>
        <div style={style.label}>
          <label htmlFor='HomePriceInput'>Home Price</label>
        </div>
        <input
          id='HomePriceInput'
          onChange={change}
          name='homePrice'
          style={style.textInput}
          type='text'
          value={homePrice}
        />
      </div>
      <div style={style.slider}>
        <input
          style={style.sliderInput}
          onChange={change}
          name='homePrice'
          type='range'
          min='0'
          max={maxPrice}
          step='10'
          value={homePrice}
        />
      </div>
    </div>
  );
}
export default HomeSlider;
