import React from 'react';
import Fish from './media/fish.svg';
import Temp from './media/temp.svg';
import Warning from './media/warning.svg';


const Icons = () => {
  return(
    <div className="icons_all">
      <div className="icon">
        <img src={Fish} alt="fish_img" className="icon-circles" />
        <p>Something about fish</p>
      </div>
      <div className="icon">
        <img src={Temp} alt="temp_img" className="icon-circles" />
        <p>Something about temp</p>
      </div>
      <div className="icon">
        <img src={Warning} alt="warning_img" className="icon-circles" />
        <p>Something about pollution</p>
      </div>
    </div>
  )
}

export default Icons;