import React from 'react';
import { actors } from '../data';


const MakeMovies = ({movies}) => {
  return movies.map(movie => <h3>{movie}</h3>)
}

const MakeActors = ({theTalent}) => {
  return theTalent.map(actor => {
    return(
      <div className='actor'>
        <h2>{actor.name}</h2>
        <MakeMovies movies={actor.movies} />
      </div>
    )
  })
}

const Actors = () => {
  return(
        <div>
          <h1>Actors Page</h1>
          <MakeActors theTalent={actors}/>
        </div>
  );
};

export default Actors;
