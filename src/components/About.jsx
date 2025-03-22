import React from 'react'
import MyImg from '../assets/images/About5.jpg'
import MyImg2 from '../assets/images/Earphones5.png'
import ReactImg from '../assets/images/logos/React.png'

const About = () => {
  return (
    <div>
      <section className="section about" id="about">
        <div className="container">

          <figure className="about-banner">

            <img src={MyImg} width="800" height="652" loading="lazy" alt="Kaustubh's Photo"
              className="img-cover2"/>

            <img src={MyImg2} width="800" height="717" loading="lazy" alt="Ethan's Photo"
              className="abs-img"/>

            <div className="abs-icon abs-icon-1">
              <ion-icon name="logo-css3"></ion-icon>
            </div>

            <div className="abs-icon abs-icon-2">
              <ion-icon name="logo-javascript"></ion-icon>
            </div>

            <div className="abs-icon abs-icon-3">
              {/* <ion-icon name="logo-react"></ion-icon>"
              <img src={ReactImg} alt="React Logo" style={{height: "30%", width:"30%", padding:"5px"}}/> */}
              <div className="spin-logo-container">
                <img src={ReactImg} alt="React Logo" className="spin-logo" />
              </div>
            </div>
      
            

          </figure>

          <div className="about-content">

            <p className="section-subtitle">I'm a Developer</p>

            <h2 className="h2 section-title">I Develop Application that Help People</h2>

            <p className="section-text">
              {/* Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu
              fugiat nulla pariatu epteur sint occaecat cupidatat */}
              I’m a problem solver with strong DSA skills, having solved 300+ problems on LeetCode. 
              I have a solid foundation in Web Development and am currently exploring DevOps Technology. 
              Proficient in C++, Python, and Java, I enjoy tackling challenges on LeetCode, CodeChef, and GeeksforGeeks. 
            </p>

            <p className="section-text">
               With strong communication skills, I believe in collaborative environments and love building impactful solutions.
            </p>

            <a href="#portfolio" className="btn btn-primary blue">View Projects</a>

          </div>

        </div>
      </section>

    </div>
  )
}

export default About
