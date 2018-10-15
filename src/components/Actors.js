import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {getActors(actors)}
    </div>
  );
};

const getActors = (actors) => {
  return actors.map(actor => 
  <div key={actor.name} className="actor">
        <h1>{actor.name}</h1>
        {actor.movies.map(movie => {return (<p>{movie}</p>)})}
      </div>
  )
}

export default Actors;
