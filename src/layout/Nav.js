import React from 'react';
import Salmon from '../media/salmon.png';

const Nav = () => {
  return(
    <div className="main-layout">
      <nav>
        <div class="nav-wrapper">
          <a href="/"><img src={Salmon} alt="salmon-logo" className="brand-logo" /></a>
        </div>
      </nav>
    </div>
  )
}

export default Nav;