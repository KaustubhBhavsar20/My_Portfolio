import React from 'react'
import MyImage from '../assets/images/Me6.jpg'
import TypingEffect from './TypingEffect'
import SocialAcc from './SocialAcc'
const Home = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="container">

          <div className="hero-banner">

            <img src={MyImage} width="800" height="864" loading="lazy" alt="Kaustubh's Photo"
              className="img-cover2" />

            {/* <div className="elem elem-1">
              <p className="elem-title">12</p>

              <p className="elem-text">Years of Success</p>
            </div>

            <div className="elem elem-2">
              <p className="elem-title">800+</p>

              <p className="elem-text">Projects Completed</p>
            </div>

            <div className="elem elem-3">
              <ion-icon name="trophy"></ion-icon>
            </div>

            <img src="./assets/images/rotate-img.png" width="169" height="172" alt="I'm developer from New York"
              className="rotate-img" /> */}

          </div>

          <div className="hero-content">

            <h2 className="hero-title">
              <span>Hello I'm</span>
              <strong>Kaustubh Bhavsar</strong> And I'm a <span class="multiple-text"><TypingEffect/></span>
            </h2>

            <p className="hero-text">
              Passionate about coding, problem-solving, and building user-friendly solution
            </p>
            
            <SocialAcc/>
            

            <div className="btn-group">
              <a href="#contact" className="btn btn-primary blue">Contact Me</a>

              <a href="#about" className="btn">About Me</a>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Home
