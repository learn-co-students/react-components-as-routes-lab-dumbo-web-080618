import React from 'react';
import { movies } from '../data';

const MakeMovies = ({movies}) => {
  return movies.map(movie => <h3>{movie}</h3>)
}

const MakeDirectors = ({theThing}) => {
  return theThing.map(movie => {
    return(
      <div className='movie'>
        <h2>{movie.name}</h2>
        <h2>{movie.time}</h2>
        <h2>{movie.metascore}</h2>
        <MakeMovies movies={movie.genres} />
      </div>
    )
  })
}

const Movies = () => {
  return(
        <div>
          <h1>Movies Page</h1>
          <MakeDirectors theThing={movies}/>
        </div>
  );
};

export default Movies;
