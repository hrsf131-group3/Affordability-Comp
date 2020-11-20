/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from '../styles/slider';
import SplitInput1 from '../styles/splitInput1';
import SplitInput2 from '../styles/splitInput2';
import Controls from '../styles/controls';
import InputContainer from '../styles/inputContainer';

export default function Down(props) {
  // const { onChange } = props

  function handleRateChange(e) {
    props.onRateChange(e.target.value);
  }
  function handleValueChange(e) {
    props.onValueChange(e.target.value);
  }
  return (
    <Controls>
      <InputContainer>
        <div>Down Payment</div>
        <div style={{ display: 'inline-flex' }}>
          <SplitInput1
            id="downPaymentValue"
            type="text"
            onChange={handleValueChange}
            maxLength={10}
            value={props.valueStr}
          />
          <SplitInput2
            id="downPaymentRate"
            type="text"
            onChange={handleRateChange}
            maxLength={3}
            value={props.rateStr}
          />
        </div>
      </InputContainer>
      <Slider
        step={1}
        min={0}
        max={30}
        onChange={handleRateChange}
        value={props.rate}
      />
    </Controls>
  );
}
