import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

function Project(){
  const fadeIn = keyframes`
  from { opacity: 0}
  to { opacity: 1 }
  `;

  const FadeInOutImage = styled.img`
    animation: ${fadeIn} 3s ease-in-out;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation-fill-mode: forwards;
    transition: opacity 1.5s ease-in-out;
  `;

  const ImageContainer = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
  `;

  const images = [
    "/images/work/suiki_hp_resized.png",
    "/images/work/weatherboad.png",
    "/images/work/teambuilder.png",
    "/images/work/moodflix.png",
    "/images/work/onescene.png",
    "/images/work/pollu.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 3000);

      return () => clearTimeout(timer);
    }, [currentIndex]);

  return (
    <section className="section__wrapper">
      <div className="section-title__wrapper">
        <h3>PROJECT</h3>
      </div>
      <div className="section-content__wrapper">
        <ImageContainer>
          {images.map((src, index) => (
          <FadeInOutImage key={index} src={src} style={{display: currentIndex === index ? 'block' : 'none'}} />
        ))}
        </ImageContainer>
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
