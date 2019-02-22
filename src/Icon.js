import React from 'react';
import Fish from './media/fish.svg';
import Temp from './media/temp.svg';
import Warning from './media/warning.svg';


const Icons = () => {
  return(
    <div className="icons">
      <img src={Fish} alt="fish_img" className="icon-circles" />
      <img src={Temp} alt="temp_img" className="icon-circles" />
      <img src={Warning} alt="warning_img" className="icon-circles" />
    </div>
  )
}

export default Icons;