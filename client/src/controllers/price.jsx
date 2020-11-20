/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Slider from '../styles/slider';
import Input from '../styles/input';
import Controls from '../styles/controls';
import InputContainer from '../styles/inputContainer';

export default function Price(props) {
  // Conditional statement significantly reduces preformance

  let max = props.homePrice * 1.2;
  if (props.homePrice < 1300000) {
    max = 1500000;
  }

  function handleChange(e) {
    // eslint-disable-next-line react/prop-types
    props.onChange(e.target.value);
  }

  return (
    <Controls>
      <InputContainer>
        <div>Home Price</div>
        <Input
          id="priceInput"
          style={{ width: '94px' }}
          type="text"
          onChange={handleChange}
          maxLength={10}
          value={props.price}
        />
      </InputContainer>
      <Slider
        step={10}
        min={0}
        max={max || 1300000} // Trulia has sudo limit set to 1.3mil
        onChange={handleChange}
        value={props.homePrice}
      />
    </Controls>
  );
}
