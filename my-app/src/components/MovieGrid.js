import React, { useState, useEffect } from 'react';
import CONFIG from '../config';
import GridStyles from './Grid.js';
import Cards from './Card.js';
import styled from 'styled-components';

const MINI_VOTE_COUNT = 500;

const PagesContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(1, 1.5fr) 3fr;
  grid-template-areas: 'left-fill page-nav right-fill';
  grid-template-rows: 1fr;
  padding-bottom: 50px;
`;

const PageContainer = styled.div`
  grid-area: page-nav;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 7.5px;
  }
`;

const PageStyle = styled.p`
  :hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 5px;
  }
`;

const MovieGrid = (props) => {
  const [data, setData] = useState({ data: [], page: null });
  const pages = [1, 2, 3, 4, 5];

  const PagesRender = () =>
    pages.map((el) => {
      return <PageStyle key={el}>{el}</PageStyle>;
    });
  console.log(PagesRender);

  useEffect(() => {
    const getMovies = async () => {
      const resp = await fetch(`${CONFIG.BASE_URL}/3/movie/top_rated?api_key=${CONFIG.API_KEY}`);
      const data = await resp.json();
      console.log('THE DATA FOR SARMOOON', data);
      const results = data.results.filter((arr) => arr.vote_count >= MINI_VOTE_COUNT);
      setData({ data: results, page: data.page });
    };
    getMovies();
  }, []);

  return (
    <>
      <GridStyles>
        {data.data.map((value, index) => {
          return <Cards data={{ value }} key={index}></Cards>;
        })}
      </GridStyles>
      <PagesContainer>
        <PageContainer>
          <PagesRender />
        </PageContainer>
      </PagesContainer>
    </>
  );
};

export default MovieGrid;
