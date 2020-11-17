import React from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  -webkit-rtl-ordering: logical;

  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 0px #cdd1d4;
    border: 4px solid #ffffff;
    height: 20px;
    width: 20px;
    border-radius: 23px;
    background: #007882;
    -webkit-appearance: none;
    margin-top: -10px;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #002200;
    background: ${props => (`linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${(props.value / props.max) * 100}%, rgb(205, 209, 212) ${(props.value / props.max) * 100}%, rgb(205, 209, 212) 100%)`)};
    border-radius: 0px;
    border: 0px solid #18d501;
  }
  &::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #002200;
    background: transparent;
    border-radius: 0px;
    border: 0px solid #18d501;
  }
  &:focus {
    outline: none;
  }
`;

const Slider = ({ ...props }) => <SliderWrapper {...props } type="range" />;

export default Slider;
