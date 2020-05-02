import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import CONFIG from '../config';
import styled, { keyframes } from 'styled-components';

const SingleMovie = (props) => {
  const location = useLocation();
  const splitArr = location.pathname.split('/');
  const id = splitArr[splitArr.length - 1];
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getSingleMovie = async () => {
      const resp = await fetch(`${CONFIG.BASE_URL}/3/movie/${id}?api_key=${CONFIG.API_KEY}`);
      const data = await resp.json();
      console.log('singleeeeee', data);
      setMovie(data);
    };

    getSingleMovie();
  }, []);

  const slide = keyframes`
    0% {
      width: 0%;
      left:0%
    }
    50% {
      width: 50%;
      left: 0%   
    }
    100% {
      width: 0%;
      left: 100%
    }
  `;

  const appearH1 = keyframes`
    0% {
    }
    100% {
      color: var(--secondary-color);
    }
  `;

  const appearP = keyframes`
    0% {
    }
    100% {
      color: var(--white);
    }
  `;

  const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(10deg);
    }
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #030303;
    height: calc(100vh - 81px);
    background: var(--gray);
  `;

  const TextWrapper = styled.div`
    text-align: left;
    padding: 20px;

    h1,
    p {
      color: var(--gray);
      margin: 0;
    }

    h1 {
      font-size: 70px;
      font-weight: bold;
      text-transform: uppercase;
      animation: ${appearH1} 0.4s ease-in-out forwards 1.4s;
      position: relative;

      &::after {
        content: '';
        height: 80%;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        background-color: var(--secondary-color);
        z-index: 1;
        animation: ${slide} 1.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
      }
    }

    p {
      margin: 10px 0;
      font-size: 20px;
      z-index: 2;
      display: inline-block;
      line-height: 30px;
      animation: ${appearP} 0.4s ease-in-out forwards 1.8s;
    }

    p:nth-child(2) {
      font-style: italic;
    }
    p:nth-child(3) {
      margin-top: 20px;
    }
  `;

  const ImgWrapper = styled.div`
    position: relative;
    height: 65%;
    width: 100%;
    background-image: url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`});
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 50%;

    &::after {
      content: '';
      height: 100%;
      width: 100%;
      top: 0%;
      left: 0%;
      position: absolute;
      background-color: black;
      opacity: 0.25;
      z-index: 1;
    }
  `;

  const Rating = styled.span`
    display: inline-block;
    color: white;
    position: absolute;
    z-index: 2;
    top: -1%;
    right: 2%;
    font-size: 32px;
    font-weight: bold;
    background-color: var(--secondary-color);
    padding: 5px 10px;
    border-radius: 20%;
    animation: ${rotate} 1.2s ease-in-out forwards;
  `;

  console.log('MOVIE', movie);
  return (
    <Wrapper>
      <ImgWrapper />
      <TextWrapper>
        <h1>{movie.title}</h1>
        <p>{movie.tagline}</p>
        <p>{movie.overview}</p>
        <Rating>{movie.vote_average}</Rating>
      </TextWrapper>
    </Wrapper>
  );
};

export default SingleMovie;
