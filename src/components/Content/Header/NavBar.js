import React from 'react';
export const NavBar = () => {


  return (
    <React.Fragment>
      <nav class="navbar">
        <div className="navbar-nav">
          <label className="logo">Luis Angel</label>
          <label id="collapse-button" className="navbar-toggler" type="button">
            <span></span>
          </label>
          <ul className="nav-items">
            <li><a className="nav-link" href="#aboutme">Sobre mi</a></li>
            <li><a className="nav-link" href="#skills">Habilidades</a></li>
            <li><a className="nav-link" href="#projects-desktop">Proyectos</a></li>
            <li><a className="nav-link" href="#contact">Contactame</a></li>
          </ul>
        </div>
      </nav>
      <ul id="collapseNav" className="nav-items-collapse">
        <li><a href="#aboutme">Sobre mi</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects-desktop">Proyectos</a></li>
        <li><a href="#contact">Contactame</a></li>
      </ul>
    </React.Fragment>
  )
}
