import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {getMovies(movies)}
    </div>
  );
};

const getMovies = (movies) => {
  return movies.map(movie => 
    <div>
      <h2>{movie.title}</h2>
      <p>Running Time: {movie.time}</p>
      <h3>Genres:</h3>
      {movie.genres.map(genre => <p>{genre}</p>)}
    </div>)
}

export default Movies;
