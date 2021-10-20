import React from 'react';
export const NavBar = () => {


  return (
    <React.Fragment>
      <nav class="navbar">
        <div>
          <label className="logo">Luis Angel</label>
        </div>
        <label id="collapse-button" className="navbar-toggler" type="button">
          <i class="fas fa-bars"></i>
        </label>
      </nav>
      <ul id="collapseNav" className="">
        <li><a href="#aboutme">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </React.Fragment>
  )
}
