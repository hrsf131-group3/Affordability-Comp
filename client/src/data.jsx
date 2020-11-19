/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const DataLine = styled.div`
    /* flex: 1 1 0%; */
    min-width: 222px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    `;

// threeprops: color, value, text
export default function Data(props) {
  return (
    <DataLine>
      <DataLine style={{ justifyContent: 'left' }}>
        <svg style={{ height: '16px', width: '16px' }} viewBox="0, 0, 16, 16">
          <circle
            id="colorRef"
            cx={8}
            cy={8}
            r={8}
            fill={props.color}
          />
        </svg>
        <div id="descriptRef" style={{ marginTop: '-3px', paddingLeft: '9px', fontWeight: '100' }}>{props.text}</div>
      </DataLine>
      <div id="amountRef" style={{ fontWeight: '900' }}>{props.value}</div>
    </DataLine>
  );
}
