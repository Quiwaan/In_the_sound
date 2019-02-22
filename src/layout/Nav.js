import React from 'react';
import Sound from '../media/sound.svg';


const Nav = () => {
  return(
    <div className="main-layout">
      <nav>
        <div class="nav-wrapper">
          <a href="/"><img src={Sound} className="brand-logo" /></a>
        </div>
      </nav>
    </div>
  )
}

export default Nav;