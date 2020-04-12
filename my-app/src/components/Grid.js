import styled, { css } from 'styled-components';
import React, { Component } from 'react';

const GridStyles = (props) => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: fit-content(1em);
    grid-gap: 10px;
    padding: 10px;

    div {
      margin: auto;
    }
  `;

  return <Container>{props.children}</Container>;
};

export default GridStyles;
