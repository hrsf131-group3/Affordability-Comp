/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const SvgDataStyle = styled.div`
  position: absolute;
  flex-direction: column;
    display: inline-block;
    top: 40%;
    left: 0%;
    width: 100%;
    display: flex;
    justify-content: center;

`;
const SvgText = styled.div`
    font-size: 38px;
    font-weight: bold;
    line-height: 1.05;
    align-self: center;
`;

// threeprops: color, value, text
export default function SvgData(props) {
  return (
    <SvgDataStyle>
      <SvgText>{props.value}</SvgText>
      <div style={{ fontSize: '16px', textAlign: 'center', fontWeight: '1' }}>/month</div>
    </SvgDataStyle>
  );
}
