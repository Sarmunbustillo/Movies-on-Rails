import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SingleMovie from './SingleMovie';
import gStyles from '../utils/globalStyles';
import shortenStr from '../utils/string';

const Cards = (props) => {
  const movieDescription =
    props.data.value.overview.length > 150
      ? shortenStr(props.data.value.overview, 150) + '....'
      : props.data.value.overview;
  const imgURL = `https://image.tmdb.org/t/p/w220_and_h330_face/${props.data.value.poster_path}`;

  const sharedStyle = css`
    width: 220px;
    height: 300px;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
  `;

  const CardTop = styled.div`
    ${sharedStyle}
    position: relative;
    background-image: url("${imgURL}");
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
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
    border-radius: 0px 0px 10px 10px;
  `;

  const CardContent = styled.div`
    opacity: 0.5;
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
      font-size: 14px;
    }

    a {
      margin: 15px 0 0;
      display: inline-block;
      text-decoration: none;
      font-weight: 900;
      padding: 5px;
      border: 2px solid ${gStyles.primaryBG};
      color: black;

      &:hover {
        background-color: ${gStyles.primaryBG};
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

  console.log('Props', props);
  const CardImg = styled.img``;
  return (
    <Card>
      <CardTop>
        <CardContent>
          <CardImg></CardImg>
          {/* <h3> {props.data.value.title} </h3> */}
        </CardContent>
      </CardTop>
      <CardBottom>
        <CardContent>
          <p>{movieDescription}</p>
          <Link
            to={{
              pathname: `/SingleMovie/${props.data.value.id}`,
            }}
          >
            Read More
          </Link>
        </CardContent>
      </CardBottom>
    </Card>
  );
};

export default Cards;
