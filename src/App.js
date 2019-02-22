import React, { Component } from 'react';
import './App.css';
import Nav from './layout/Nav.js';
import Home from './Home.js';
// import Get_Involved from './Get_Involved';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LearnMore from './LearnMore'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Home />
            <Route path="/learn_more" component={() => (<LearnMore />)} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
