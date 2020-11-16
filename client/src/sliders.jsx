import React, { useState, useEffect } from 'react';
import HomeSlider from './sliders/homeSlider';
import DownPaymentSlider from './sliders/downPaymentSlider';
import InterestSlider from './sliders/interestSlider';

const style = {
  main: {
    display: 'flex',
    marginLeft: '-8px',
    marginRight: '-8px',
    marginTop: '-16px',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  options: {
    width: '100%',
    margin: '0px 16px 16px 16px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth: '16px 8px 0px',
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

};

function Sliders() {
  // Sliders.propTypes = {
  //   homePrice: PropTypes.number.isRequired
  // };

  return (
    <div style={style.main}>
      <div style={style.options}>
        <div style={style.slider}>
          <HomeSlider />
          {/* <DownPaymentSlider /> */}
          {/* <InterestSlider /> */}
        </div>
      </div>
    </div>
  );
}

export default Sliders;
