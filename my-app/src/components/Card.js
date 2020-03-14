import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Cards = props => {
  const sharedStyle = css`
    width: 300px;
    height: 200px;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
  `;

  const CardTop = styled.div`
    ${sharedStyle}
    position: relative;
    background: #353e51;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
  `;

  const CardBottom = styled.div`
    ${sharedStyle}
    position: relative;
    background: white;
    display: flex;
    flex-direction: column-reverse;
    justify-items: center;
    align-items: center;
    padding: 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
    transform: translateY(-100px);
  `;

  const CardContent = styled.div`
    opacity: 0.2;
    transition: all 0.3s ease-in-out;

    img {
      max-width: 100px;
      background-image: linear-gradient(45deg, blue 50%, yellow 50%);
    }

    h3 {
      margin: 10px 0 0;
      padding: 0;
      color: white;
      text-align: center;
      font-size: 20px;
    }

    p {
      line-height: 1.4;
    }

    a {
      margin: 15px 0 0;
      display: inline-block;
      text-decoration: none;
      font-weight: 900;
      padding: 5px;
      border: 2px solid pink;
      color: black;

      &:hover {
        background-color: pink;
        color: white;
      }
    }
  `;

  const Card = styled.div`
    position: relative;

    :hover ${CardTop} {
      transform: translateY(0);
      background-color: steelblue;
    }

    :hover ${CardBottom} {
      transform: translateY(0);
    }

    :hover ${CardContent} {
      opacity: 1;
    }
  `;

  const CardImg = styled.img``;
  console.log(props.data);
  return (
    <Router>
      <Card>
        <CardTop>
          <CardContent>
            <CardImg></CardImg>
            <h3> {props.data.value.title} </h3>
          </CardContent>
        </CardTop>
        <CardBottom>
          <CardContent>
            <p>
              Lorem ipsum dolor de guevas, sit amet consectetur adipisicing elit. Totam expedita doloremque
              assumenda beatae suscipit debitis quisquam
            </p>
            <a href="/singleMovie">Read More</a>
          </CardContent>
        </CardBottom>
      </Card>
    </Router>
  );
};

export default Cards;
