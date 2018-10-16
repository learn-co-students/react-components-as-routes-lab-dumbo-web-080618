import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorsCard = directors.map((director)=>{
    return (
      <div className="actor">
        {director.name}
        {director.movies.map((movie)=>{return <li>{movie}</li>})}
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsCard}
    </div>
  );
}

export default Directors
