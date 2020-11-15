import React from 'react';

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
  sliders: {
    width: '100%',
    height: '20px',
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
  },
  sliderInput: {
    width: '100%',
    height: '2px',
    background: 'linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) 86.9565%, rgb(205, 209, 212) 86.9565%, rgb(205, 209, 212) 100%)',
    appearance: 'none',
    outline: 'none',
    margin: '0px',
    padding: '0px',
  },
};

function Sliders({ homePrice }, { downPayment }) {
  // Sliders.propTypes = {
  //   homePrice: PropTypes.number.isRequired
  // };

  return (
    <div style={style.main}>
      <div style={style.options}>
        <div style={style.slider}>
          <div style={style.label}>
            <div>
              <label htmlFor="HomePriceInput">Home Price</label>
            </div>
            <input id="HomePriceInput" style={style.textInput} type="text" value={homePrice} />
          </div>
          <div style={style.slider}>
            <input style={style.sliderInput} type="range" min="0" max={homePrice * 1.15} value={homePrice} />
          </div>
          <div style={style.label}>
            <div>
              <label htmlFor="downPaymentInput">Down Payment</label>
            </div>
            <input id="downPaymentInput" style={style.textInput} type="text" value={downPayment} />
          </div>
          <div style={style.slider}>
            <input style={style.sliderInput} type="range" min="0" max={downPayment * 1.15} value={downPayment} />
          </div>
          <div style={style.label}>
            <div>
              <label htmlFor="HomePriceInput">Interest Rate</label>
            </div>
            <input id="HomePriceInput" style={style.textInput} type="text" value={homePrice} />
          </div>
          <div style={style.slider}>
            <input style={style.sliderInput} type="range" min="0" max={homePrice * 1.15} value={homePrice} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sliders;
