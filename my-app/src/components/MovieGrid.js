import React, { useState, useEffect } from 'react';
import CONFIG from '../config';
import GridStyles from './Grid.js';
import Cards from './Card.js';
import styled from 'styled-components';
import PageNavigation from './Page'
import HeroLanding from './HeroLanding';

const MINI_VOTE_COUNT = 500;

const MovieGrid = (props) => {
  const [data, setData] = useState({ data: [], page: null, totalPages: null });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const resp = await fetch(`${CONFIG.BASE_URL}/3/movie/top_rated?api_key=${CONFIG.API_KEY}&page=${page}`);
      const data = await resp.json();
      // const results = data.results.filter((arr) => arr.vote_count >= MINI_VOTE_COUNT);
      setData({ data: data.results, page: data.page, totalPages: data.total_pages });
    };
    getMovies();
  }, [page]);

  return (
    <>
      <HeroLanding data={data}></HeroLanding>
      <GridStyles>
        {data.data.map((value, index) => {
          return <Cards data={{ value }} key={index}></Cards>;
        })}
      </GridStyles>
      <PageNavigation page={page} setPage={setPage} totalPages={data.totalPages} />
    </>
  );
};

export default MovieGrid;
