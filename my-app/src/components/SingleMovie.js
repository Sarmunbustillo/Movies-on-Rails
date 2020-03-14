import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import CONFIG from '../config';

const SingleMovie = props => {
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
  console.log('MOVIE', movie);
  return (
    <div>
      <h1>{movie.title}</h1>
      <span>{movie.tagline}</span>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
    </div>
  );
};

export default SingleMovie;
