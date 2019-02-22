import React, { Component } from 'react';
import './App.css';
import Nav from './layout/Nav.js';
import Home from './Home.js';
import Description from './Description.js';
import Chart from './Chart';
import Icons from './Icon';
import Get_Involved from './Get_Involved';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <Home />
          <Description />
          <Chart />
          <Icons />
          <Get_Involved />
        </header>
      </div>
    );
  }
}

export default App;
