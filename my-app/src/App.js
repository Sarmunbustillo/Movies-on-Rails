import React, { useState, useEffect } from 'react';

import './App.css';
import CONFIG from './config';

const App = () => {
  useEffect(() => {
    const getMovies = async () => {
      const resp = await fetch(
        `${CONFIG.BASE_URL}/3/movie/popular?api_key=${CONFIG.API_KEY}`
      );
      const data = await resp.json();
      console.log(data);
    };

    getMovies();
  });

  // const display = () => {
  //   return data.map((movie, i) => {
  //     return <li key={i}>{data.results[1].title}</li>;
  //   });
  // };

  return (
    <div className="App">
      <h1>Hello Vietnam! This will compile</h1>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default App;
