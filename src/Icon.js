import React from 'react';
import Fish from './media/fish.svg';
import Temp from './media/temp.svg';
import Warning from './media/warning.svg';
import { Link } from 'react-router-dom';


const Icons = () => {
  return(
    <div>
      <h4 className="heading-2"><strong>What are the factors?</strong></h4> 
      <div className="content">
        <p>When water temperatures are too high Salmons waste energy they need to make the long journey upstream to mating grounds. In addition, high temperatures lead to depleted oxygen and a lower amount of energy in the food chain.
        </p>
        <p>Rising sea levels lead to a decline of estuary habitats that effect the Salmons’ ability to migrate upstream. It also creates alteration in the food-web that disrupts the balance of the ecosystem.</p>
        <p>Pollutants in the water increase pre-spawn mortality and contribute to lower levels of oxygen and increased food web disruption.</p>
      </div>
      <div className="icons_all">
        <div className="icon">
          <img src={Temp} alt="temp_img" className="icon-circles" />
          <p>Water Temp</p>
        </div>
        <div className="icon">
          <img src={Fish} alt="fish_img" className="icon-circles" />
          <p>Sea Levels</p>
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