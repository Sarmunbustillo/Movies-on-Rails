import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import CONFIG from '../config';
import styled, { keyframes } from 'styled-components';

const HeroLanding = (props) => {
  //get data to display in carousel or thru prps

  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  useEffect(() => {
    const getMovies = async () => {
      const resp = await fetch(`${CONFIG.BASE_URL}/3/movie/top_rated?api_key=${CONFIG.API_KEY}`);
      const movies = await resp.json();
      console.log('dataaaaa', movies.results);

      const results = movies.results
        .map((rel) => {
          const { popularity, backdrop_path, title } = rel;
          return { popularity, backdrop_path, title };
        })
        .slice(0, 3);
      console.log('results', results);
      setData1(results[0]);
      setData2(results[1]);
      setData3(results[2]);
    };
    getMovies();
  }, []);

  const hero1 = useRef(null);
  const hero2 = useRef(null);
  const hero3 = useRef(null);
  useEffect(() => {
    hero1.current.style.backgroundImage = `url(${`https://image.tmdb.org/t/p/original/${data1.backdrop_path}`})`;
    hero1.current.style.left = '0%';

    hero2.current.style.backgroundImage = `url(${`https://image.tmdb.org/t/p/original/${data2.backdrop_path}`})`;
    hero2.current.style.left = '33.33%';

    hero3.current.style.backgroundImage = `url(${`https://image.tmdb.org/t/p/original/${data3.backdrop_path}`})`;
    hero3.current.style.left = '66.66%';
  });

  const slide = keyframes`
    0%{
        transform: translateX(0)
    }
    20%{
        transform: translateX(0)
    }
    40%{
        transform: translateX(-100vw)
    }
    50%{
        transform: translateX(-100vw)
    }
    70%{
        transform: translateX(-100vw)
    }

    80%{
        transform: translateX(-200vw)
    }
    100%{
        transform: translateX(-200vw)
    }
    
    `;

  const Carousel = styled.div`
    height: 600px;
    width: 300vw;
    display: flex;
    margin-bottom: 20px;
    position: relative;
    animation: ${slide} 22s ease-in-out infinite alternate;
  `;

  const Hero = styled.div`
    position: absolute;
    height: 100%;
    width: 100vw;
    background-size: cover;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
      height: 100%;
      width: 100%;
    }

    h3 {
      font-size: 50px;
      color: var(--white);
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translatex(-50%);
      display: block;
      text-transform: uppercase;
      padding: 0;
      margin: 0;
      z-index: 2;
      border-bottom: 4px solid var(--secondary-color);
    }
  `;

  return (
    <Carousel>
      <Hero ref={hero1}>
        <h3>{data1.title}</h3>
      </Hero>
      <Hero ref={hero2}>
        <h3>{data2.title}</h3>
      </Hero>
      <Hero ref={hero3}>
        <h3>{data3.title}</h3>
      </Hero>
    </Carousel>
  );
};

export default HeroLanding;
