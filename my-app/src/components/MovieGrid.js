import React, { useState, useEffect } from 'react';
import CONFIG from '../config';
import GridStyles from './Grid.js';
import Cards from './Card.js';

const MovieGrid = props => {
  const [data, setData] = useState({ data: [], page: null });

  useEffect(() => {
    const getMovies = async () => {
      const resp = await fetch(`${CONFIG.BASE_URL}/3/movie/popular?api_key=${CONFIG.API_KEY}`);
      const data = await resp.json();
      setData({ data: data.results, page: data.page });
    };
    getMovies();
  }, []);

  return (
    <GridStyles>
      {data.data.map((value, index) => {
        return <Cards data={{ value }} key={index}></Cards>;
      })}
    </GridStyles>
  );
};

export default MovieGrid;
