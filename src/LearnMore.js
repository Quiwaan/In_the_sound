import React from 'react';
import Get_Involved from './Get_Involved';
import pollutants from './media/inthesound.pollutants.png';

const LearnMore = () => {
  return (
    <div>
      <img src={pollutants} alt="pollutants chart" className="pollutants-chart"/>
      <Get_Involved />
    </div>
  )
}

export default LearnMore;