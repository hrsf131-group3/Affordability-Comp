/* eslint-disable react/prop-types */
import React from 'react';

export default function Loan(props) {
  //
  function handleChange(e) {
    const trouble = e.target.value.split(',');
    props.onChange(trouble);
  }
  return (
    <div id="loan">
      <div>Loan Type</div>
      <select id="loan" onChange={handleChange}>
        <option value={[240, 2.88, 20]}> 30-year fixed </option>
        <option value={[180, 2.93, 20]}> 20-year fixed </option>
        <option value={[120, 2.55, 20]}> 15-year fixed </option>
        <option value={[120, 2.64, 20]}> 10-year fixed </option>
        <option value={[360, 2.25, 3.5]}> FHA 30-year fixed </option>
        <option value={[180, 2.25, 3.5]}> FHA 15-year fixed </option>
        <option value={[360, 2.41, 0]}> VA 30-year fixed </option>
        <option value={[180, 2.42, 0]}> VA 15-year fixed </option>
      </select>
    </div>
  );
}
