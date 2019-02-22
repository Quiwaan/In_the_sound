import React, { Component } from 'react';
import './App.css';
import Nav from './layout/Nav.js';
import Home from './Home.js';
import Description from './Description.js';
import Chart from './Chart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <Home />
          <Description />
          <Chart />
        </header>
      </div>
    );
  }
}

export default App;
