import React, { Component } from 'react';
import './App.css';
import Nav from './layout/Nav.js';
import Home from './Home.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LearnMore from './LearnMore'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={() => (<Home />)} />
            <Route path="/learn_more" component={() => (<LearnMore  />)} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
