import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';

function Nav(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const closeNav = (event) => {
      if(event.target.closest('.navbar-expand-lg')) return;
      setIsOpen(false);
    };

    if(isOpen){
      document.addEventListener('click', closeNav)
    }

    return()=>document.removeEventListener('click', closeNav);
  }, [isOpen]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1 className="navbar-brand topName">
          <a href="/">TAK -uya- KAWAMURA</a>
        </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse nav__wrapper ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item nav-content">
              <NavLink to='/' exact='true' className={({ isActive}) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
            </li>
            <li className="nav-item nav-content">
              <NavLink to='/Project' exact='true' className={({ isActive}) => isActive ? 'nav-link active' : 'nav-link'}>PROJECT</NavLink>
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
