import React from 'react';
import { directors } from '../data';

const renderDirector = (director) => {
  return(
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      Movies:
      <ul>
      {director.movies.map((movie) =>{
        return <li key={movie}>{movie}</li>
      })}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return renderDirector(director)
      })}
    </div>
  );
};

export default Directors
