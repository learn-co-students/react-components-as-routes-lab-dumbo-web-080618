import React from 'react';
import { movies } from '../data';

const renderMovie = (movie) => {
  return(
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      Genres:
      <ul>
      {movie.genres.map((genre) =>{
        return <li key={genre}>{genre}</li>
      })}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return renderMovie(movie)
      })}
    </div>
  );
};

export default Movies;
