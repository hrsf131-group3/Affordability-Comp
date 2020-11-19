import styled from 'styled-components';

const View = styled.div`
  max-width: 960px;
  min-width:275px;
  display: flex;
  flex-flow: row wrap;
  margin: 0px auto;
  padding: 8px;

  /* &:focus {
    appearance: none;
    outline:none;
    outline-offset: none;
  } */
  `;
View.displayName = 'ViewRef';
export default View;
