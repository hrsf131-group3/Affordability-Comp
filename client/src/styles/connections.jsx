/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import DataContainer from './dataContainer';

const ButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(0, 120, 130);
    border-radius: 8px;
    border-color: rgb(0, 120, 130);
    border: 1px solid;
    color: white;
    width: -webkit-fill-available;
    height: 42px;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      background-color: white;
      color:  rgb(0, 120, 130)
    }
    `;

const Hyper = styled.div`
  padding-top: 6px;
  color: rgb(0, 120, 130);
  cursor: pointer;
`;
// threeprops: color, value, text
export default function Connect() {
  return (
    <DataContainer style={{ width: '100%' }}>
      <ButtonStyle>
        Get Pre-Qualified
      </ButtonStyle>
      <div>
        <div style={{ paddingTop: '3px' }}>or</div>
        <Hyper>See today's mortgage rates</Hyper>
      </div>
    </DataContainer>
  );
}
