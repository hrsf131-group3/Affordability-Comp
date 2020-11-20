import styled from 'styled-components';

const SplitInput2 = styled.input`
    font-family: Roboto;
    font-weight: thin !important;
    border: 1px solid rgb(205, 209, 212);
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    width: 38px;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    border-radius: 0px 8px 8px 0px;
    &:focus-within {
        border: 3px solid rgb(0,120,130);
    }
    `;

export default SplitInput2;
