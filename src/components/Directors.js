import React from 'react';
import { directors } from '../data';

const MakeMovies = ({movies}) => {
  return movies.map(movie => <h3>{movie}</h3>)
}

const MakeDirectors = ({theTalent}) => {
  return theTalent.map(director => {
    return(
      <div className='director'>
        <h2>{director.name}</h2>
        <MakeMovies movies={director.movies} />
      </div>
    )
  })
}

const Directors = () => {
  return(
        <div>
          <h1>Directors Page</h1>
          <MakeDirectors theTalent={directors}/>
        </div>
  );
};

export default Directors
