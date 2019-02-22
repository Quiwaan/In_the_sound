import React from 'react';
import video from './media/salmon.mp4';
import './App.css';


const Home = () => {
  return(
    <div className="video_wrapper">
      <video id="video" width="100%" height="100%" loop autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support this video format.
      </video>
      <div className="overlay">
        <h1 className="main-on-top">Welcome</h1>
        <p className="main-on-top">Some more information</p>
        <i className="material-icons down"><a href="#">keyboard_arrow_down</a></i>
      </div>
    </div>
  )
}


export default Home;