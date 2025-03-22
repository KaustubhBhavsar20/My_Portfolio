import React from 'react'
import SocialAcc from './SocialAcc'
import SocialAcc2 from './SocailAcc2'
// import BackGroundImg from '../assets/images/blackbg.png'
// import Colgate from '../assets/images/colgate.png'
// import SocialAcc from './SocialAcc'

const Contact = () => {
  return (
    <div>
        <section clas="section contact" id="contact">
        <div className="container">
        <p className="section-subtitle">Contact Me</p>
  
        <h2 className="h2 section-title">Feel free to reach out!</h2>

          <div className="contact-card" >

            <div className="wrapper">

              <ul className="contact-list">

                {/* <li className="contact-item">

                  <div className="contact-icon">
                    <ion-icon name="mail"></ion-icon>
                  </div>

                  <div>
                    <h3 className="contact-item-title">Email</h3>

                    <a href="mailto:kaustubhbhavsar2093@gmail.com"  className="contact-item-link">kaustubhbhavsar2093@gmail.com</a>
                  </div>

                </li> */}

                
                <li className="contact-item">

                  <div className="contact-icon">
                    <ion-icon name="call"></ion-icon>
                  </div>

                  <div>
                    <h3 className="contact-item-title">Phone/ Whatsapp</h3>

                    <a href="tel:+918799955650" className="contact-item-link">+91 8799955650</a>
                  </div>

                </li>
                
                <li className="contact-item">

                  <div className="contact-icon">
                    <ion-icon name="mail"></ion-icon>
                  </div>

                  <div>
                    <h3 className="contact-item-title">Email</h3>

                    <a href="mailto:kaustubhbhavsar2093@gmail.com" className="contact-item-link">kaustubhbhavsar2093@gmail.com</a>
                  </div>

                </li>
              </ul>

              <div className="social-wrapper">
                <SocialAcc />
                <SocialAcc2 />
              </div>


            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
