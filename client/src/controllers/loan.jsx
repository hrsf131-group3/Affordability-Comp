/* eslint-disable react/prop-types */
import React from 'react';
import DropStyle from '../styles/drop';
import Controls from '../styles/controls';
import InputContainer from '../styles/inputContainer';
import Select from '../styles/select';

export default function Loan(props) {
  //
  function handleChange(e) {
    const trouble = e.target.value.split(',');
    props.onChange(trouble);
  }
  return (
    <Controls>
      <InputContainer>
        <div>Loan Type</div>
      </InputContainer>
      <DropStyle>
        <Select id="test" onChange={handleChange}>
          <option value={[240, 2.88, 20]}> 30-year fixed </option>
          <option value={[180, 2.93, 20]}> 20-year fixed </option>
          <option value={[120, 2.55, 20]}> 15-year fixed </option>
          <option value={[120, 2.64, 20]}> 10-year fixed </option>
          <option value={[360, 2.25, 3.5]}> FHA 30-year fixed </option>
          <option value={[180, 2.25, 3.5]}> FHA 15-year fixed </option>
          <option value={[360, 2.41, 0]}> VA 30-year fixed </option>
          <option value={[180, 2.42, 0]}> VA 15-year fixed </option>
        </Select>
      </DropStyle>
    </Controls>
  );
}
