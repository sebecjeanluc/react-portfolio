import React from "react";
import { NavLink } from 'react-router-dom';
import LazyLoad from '../Imageloader';

function Project(){
  return (
    <section className="section__wrapper">
      <div className="section-title__wrapper">
        <h3>PROJECT</h3>
      </div>
      <div className="section-content__wrapper">
        <LazyLoad />
        <h4>WEB SERVICE</h4>
        <p>This website is under construction. It shows the part of design and mock-up coding for a cosmetic site.</p>
      </div>
      <div className="contact-button__wrapper arrow-right">
        <button className="contact-button">
        <NavLink to='/projectGallery'>PROJECT GALLERY</NavLink>
          </button>
      </div>
    </section>
  )
}
export default Project;
