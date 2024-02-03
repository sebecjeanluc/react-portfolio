import React from "react";
import { NavLink } from 'react-router-dom';

function Nav(){
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1 className="navbar-brand topName">
          <a href="/react-portfolio">TAK -uya- KAWAMURA</a></h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav__wrapper" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item nav-content">
              <NavLink to='/' exact='true' className={({ isActive}) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
            </li>
            <li className="nav-item nav-content">
              <NavLink to='/ProjectGallery' exact='true' className={({ isActive}) => isActive ? 'nav-link active' : 'nav-link'}>PROJECT-GALLERY</NavLink>
            </li>
            <li className="nav-item nav-content">
              <NavLink to='/Contact' exact='true' className={({ isActive}) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;
