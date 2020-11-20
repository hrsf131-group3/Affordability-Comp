import styled from 'styled-components';

const Input = styled.input`
    font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
    border-radius: 8px;
    border: 1px solid rgb(205, 209, 212);
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    &:focus-within {
        border: 3px solid rgb(0,120,130);
    }
    `;
Input.displayName = 'inputRef';

export default Input;
