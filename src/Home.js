import React from 'react';
import video from './media/salmon.mp4';
import './App.css';
import Description from './Description.js';
import Chart from './Chart';
import Icons from './Icon';


const Home = () => {
  return(
    <div className="video_wrapper">
      <video id="video" width="100%" height="100%" loop autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support this video format.
      </video>
      <div className="overlay">
        <h2 className="heading">In the Sound</h2>
        <p>Some more information</p>
        <i className="material-icons down"><a href="/">keyboard_arrow_down</a></i>
      </div>
      <Description />
      <Chart />
      <Icons /> 
    </div>
  )
}


export default Home;