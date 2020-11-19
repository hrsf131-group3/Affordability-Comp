/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from '../styles/slider';
import Input from '../styles/input';
import Controls from '../styles/controls';
import InputContainer from '../styles/inputContainer';

export default function Interest(props) {
  // const { onChange } = props

  function handleChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <Controls>
      <InputContainer>
        <div>Interest Rate</div>
        <Input
          id="InterestInput"
          style={{ width: '57px' }}
          type="text"
          onChange={handleChange}
          maxLength={5}
          value={props.valueStr}
        />
      </InputContainer>
      <Slider
        step={0.1}
        min={0}
        max={6}
        onChange={handleChange}
        value={props.value}
      />
    </Controls>
  );
}
