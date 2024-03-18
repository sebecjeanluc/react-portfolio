import React from "react";
import { NavLink } from 'react-router-dom';
import Imageloader from '../Imageloader'

function Home(){
  return (
    <section id="home">
      <div className="layout--wrapper">
        <div className="subSection--wrapper">
          <img src="/images/pf_pic_BL.jpg" alt="Tak profile picture"/>
        </div>
        <div className="subSection--wrapper">
          <h3>TAK -uya- KAWAMURA's PORTFOLIO</h3>
          <h4>IT's ALL ABOUT STORY</h4>
          <p>Takuya Kawamura, a front-end developer with a keen eye for film and interactive media, has made a significant transition from admiring movie storytelling to mastering the digital realm. Recognizing the untapped potential of smartphones, Takuya co-founded a web service dedicated to innovative collaborative storytelling. His expertise lies in crafting user interfaces that seamlessly integrate aesthetics with functionality, aiming to revolutionize digital experiences through engaging narratives and interactive storytelling techniques.</p>
          <div className="contact-button__wrapper">
            <a href="https://drive.google.com/file/d/1FVink__AJ_bm9e18HHqOA5b5m1mt3gxm/view?usp=sharing" target="__blank" download>
          <button className="contact-button">CHECK TAK's RESUME</button></a>
          </div>
        </div>
      </div>
      <div className="layout--wrapper">
        <div className="subSection--wrapper">
          <NavLink to='/contact'>
            <div className="contact-button__wrapper square">
              <button className="contact-button">
                CONTACT HIM
              </button>
            </div>
          </NavLink>
        </div>
        <NavLink to='/project'>
          <Imageloader />
        </NavLink>
      </div>
      <section className="layout--wrapper three-column">
        <div className="three-column-item">
          <p>
            tkawamura11@gmail.com
          </p>
        </div>
        <div className="three-column-item">
          <p>
            (+44)078-6929-2628
          </p>
        </div>
        <div className="three-column-item column-img">
        </div>
      </section>
      {/* <section className="layout--wrapper three-column">
        <div className="three-column-item">
          <div>
            EMAIL: tkawamura11@gmail.com
            TEL: (+44)078-6929-2628
          </div>
        </div>
        <div className="three-column-item">
          <div></div>
        </div>
        <div className="three-column-item"></div>
      </section> */}
    </section>
  )
}
export default Home;
