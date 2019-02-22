import React from 'react';
import Fish from './media/fish.svg';
import Temp from './media/temp.svg';
import Warning from './media/warning.svg';
import { Link } from 'react-router-dom';


const Icons = () => {
  return(
    <div>
      <h4>What are the factors?</h4> 
      <p className="content">With the steadily declining salmon population, it means our beloved orcas, seagulls, seals, and other animals that rely on the Chinook salmon for food are directly affected. Orcas....</p>
      <div className="icons_all">
        <div className="icon">
          <img src={Fish} alt="fish_img" className="icon-circles" />
          <p>Sea Levels</p>
        </div>
        <div className="icon">
          <img src={Temp} alt="temp_img" className="icon-circles" />
          <p>Water Temperature</p>
        </div>
        <div className="icon">
          <img src={Warning} alt="warning_img" className="icon-circles" />
          <p>Pollution</p>
        </div>
      </div>
        <p className="learn-more-link"><Link to="/learn_more">Learn More</Link></p>
    </div>
  )
}

export default Icons;