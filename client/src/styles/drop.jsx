import styled from 'styled-components';

const DropStyle = styled.div`
    align-self: left;
    max-width: 249px;
    width: 100%;
    border: 1px solid rgb(205,209,212);
    border-radius: 8px;
    background-color: rgb(255,255,255);
    padding: 8px 0px 8px;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    &:focus-within {
        border: 3px solid rgb(0,120,130);
    }
    `;

export default DropStyle;
