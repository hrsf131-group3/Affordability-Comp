/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    /* flex: 1 1 0%; */
    min-width: 390px;
    width: 100%;
    margin-top: 20px;
    `;

// threeprops: color, value, text
export default function GTQButton() {
  return (
    <div>
      <ButtonStyle />
      {/* add text and new line */}
      {/* add href(needs a top padding) */}
    </div>
  );
}
