import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Nav from "./Nav";
import About from "./About";
import Cat from "./Cat";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cat" component={Cat} />
        </Switch>
      </div>
    </Router>
  );
}


const Home = () => {
  return(
  <div>
    <h1>Homepage</h1>
  </div>)
}

export default App;
