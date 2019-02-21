import React from 'react';
import video from './video/salmon.mp4';

const Home = () => {
  return(
    <div>
      <video id="video_wrapper" width="100%" height="auto" type="video/mp4" loop autoPlay>
        <source src={video} type="video/mp4" />
            Your browser does not support this video format.
      </video>
    </div>
  )
}


export default Home;