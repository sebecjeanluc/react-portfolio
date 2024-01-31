import React from "react";
import { NavLink } from 'react-router-dom';
import Project from './Project'

function Home(){
  return (
    <section id="home">
      <div className="home__wrapper">
        <img src="./src/assets/images/pf_pic_BL.jpg" alt="Tak profile picture"/>
        <div className="home-title__wrapper">
          <h3>TAK -uya- KAWAMURA's PORTFOLIO</h3>
          <h4>IT's ALL ABOUT STORY</h4>
          <p>Takuya Kawamura, a front-end developer with a keen eye for film and interactive media, has made a significant transition from admiring movie storytelling to mastering the digital realm. Recognizing the untapped potential of smartphones, Takuya co-founded a web service dedicated to innovative collaborative storytelling. His expertise lies in crafting user interfaces that seamlessly integrate aesthetics with functionality, aiming to revolutionize digital experiences through engaging narratives and interactive storytelling techniques.</p>
          <div className="contact-button__wrapper">
            <a href="../src/assets/pdf/TakuyKawamuraResume2023EN-technicalResume.pdf" download>
          <button className="contact-button">RESUME DOWNLOAD</button></a>
          <div className="contact-button__wrapper">
            EMAIL: tkawamura11@gmail.com
          </div>
          </div>
        </div>
      </div>
      <div className="subSection__wrapper">
        <div className="contact-button__wrapper">
          <button className="contact-button">
          <NavLink to='/contact'>CONTACT HIM</NavLink>
            </button>
        </div>
      </div>
      <Project />
    </section>
  )
}
export default Home;
