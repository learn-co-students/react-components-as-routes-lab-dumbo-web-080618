import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => <div key={a.name}>{a.name}: {a.movies.join(', ')}</div>)}
    </div>
  );
};

export default Actors;
