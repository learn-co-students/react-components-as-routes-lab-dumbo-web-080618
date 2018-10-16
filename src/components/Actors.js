import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let actorsCard = actors.map((actor)=>{
    return (
      <div className="actor">
        {actor.name}
        {actor.movies.map((movie)=>{return <li>{movie}</li>})}
      </div>
    )
  })

  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsCard}
    </div>
  );
};

export default Actors;
