import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
     <React.Fragment>
       <NavBar/>
       <Route path='/actors' render={Actors}/>
       <Route path='/directors' render={Directors}/>
       <Route path='/movies' render={Movies}/>
       <Route exact path="/" render={Home}/>
     </React.Fragment>
    </Router>
  );
};

export default App
