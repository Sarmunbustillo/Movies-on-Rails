import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Card';
import CONFIG from './config';
import GridStyles from './components/Grid';

const App = () => {
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
    <div className="App">
      <h1>Movie on Rails</h1>
      <GridStyles>
        {data.data.map((value, index) => {
          return <Cards data={{ value }} key={index}></Cards>;
        })}
      </GridStyles>
    </div>
  );
};

export default App;
