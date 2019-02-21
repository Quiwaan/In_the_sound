import React, { Component } from 'react';
import './App.css';
import Nav from './layout/Nav.js';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
