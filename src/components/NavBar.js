import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        < NavLink to="/">
        <li>Home</li>
        </ NavLink >
        < NavLink to="/movies">
        <li>Movies</li>
        </ NavLink >
        < NavLink to="/directors">
        <li>Directors</li>
        </ NavLink >
        < NavLink to="/actors">
        <li>Actors</li>
        </ NavLink >
      </ul>
    </div>
  );
};

export default NavBar;
