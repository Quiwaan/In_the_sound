import React from 'react';

const Nav = () => {
  return(
    <div className="main-layout">
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">In The Sound</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="badges.html">Analysis</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;