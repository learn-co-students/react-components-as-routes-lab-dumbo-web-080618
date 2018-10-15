import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {getDirectors(directors)}
    </div>
  );
}

const getDirectors = (directors) => {
  return directors.map(director => <div key={director.name}>
    <h2>{director.name}</h2>
    <h3>Movies</h3>
    {director.movies.map(movie => <p>{movie}</p>)}
  </div>)
}

export default Directors
