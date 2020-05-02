import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
padding: 0 10px;


  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: fit-content(1em);
  grid-gap: 10px;
  padding: 10px; */
  
  div {
    margin: 0 10px;
  }
`;

const GridStyles = (props) => {
  return <Container>{props.children}</Container>;
};

export default GridStyles;
