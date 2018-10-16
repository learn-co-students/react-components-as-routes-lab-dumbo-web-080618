import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let moviesCards = movies.map((movie)=> {
    return (
      <div>
        <h2>{movie.title}</h2>
        {movie.time}
          <ul>
            {movie.genres.map((genre)=>(<li>{genre}</li>))}
          </ul>
      </div>
    )
    })
  return (
    <div>
      <h1>Movies Page</h1>
        {moviesCards}
    </div>
  );
};

export default Movies;
