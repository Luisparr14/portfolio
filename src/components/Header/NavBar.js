import React from 'react';
export const NavBar = () => {


  return (
    <React.Fragment>
      <nav class="navbar">
        <div className="navbar-nav">
          <label className="logo">Luis Angel</label>
          <label id="collapse-button" className="navbar-toggler" type="button">
            <i class="fas fa-bars"></i>
          </label>
          <ul className="expand-nav">
            <li><a href="#aboutme">Sobre mi</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Proyectos</a></li>
            {/* <li><a href="#contact">Contact</a></li> Por insertar */}
          </ul>
        </div>
      </nav>
      <ul id="collapseNav" className="collapse-nav">
        <li><a href="#aboutme">Sobre mi</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
        {/* <li><a href="#contact">Contact</a></li> Por insertar */}
      </ul>
    </React.Fragment>
  )
}
