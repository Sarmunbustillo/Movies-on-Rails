import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import CONFIG from '../config';
import styled from 'styled-components';

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

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #030303;
    height: calc(100vh - 81px);
    h1,
    p {
      color: white;
    }

    h1 {
      font-size: 70px;
      font-weight: bold;
      position: absolute;
      z-index: 2;
      top: 57%;
      left: 30%;
      transform: translate(-50%, -50%);
    }

    p {
      position: absolute;
      font-size: 20px;
      z-index: 2;
      display: inline-block;
    }

    #tagline {
      top: 66%;
      left: 11.5%;
    }

    #overview {
      top: 66%;
      right: 8%;
      letter-spacing: 0.4;
      line-height: 30px;
      width: 38%;
    }
  `;

  const ImgWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    &::after {
      content: 'ss';
      height: 100%;
      width: 100%;
      top: 0%;
      left: 0%;
      position: absolute;
      background-color: black;
      opacity: 0.5;
      z-index: 1;
    }

    img {
      object-fit: cover;
      background-size: cover;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
  `;

  const Rating = styled.span`
    display: inline-block;
    color: white;
    position: absolute;
    z-index: 2;
    top: -1%;
    right: 2%;
    font-size: 25px;
    font-weight: bold;
    background-color: orange;
    padding: 5px 10px;
    border-radius: 20%;
    transform: rotate(10deg);
  `;

  console.log('MOVIE', movie);
  return (
    <Wrapper>
      <h1>{movie.title}</h1>
      <ImgWrapper>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
      </ImgWrapper>
      <p id="tagline">{movie.tagline}</p>
      <p id="overview">{movie.overview}</p>
      <Rating>{movie.vote_average}</Rating>
    </Wrapper>
  );
};

export default SingleMovie;
