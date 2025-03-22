import React, {useState} from 'react'
import InternshipImg from '../assets/images/hero-bg.jpg'
import Colgate from '../assets/images/colgate.png'
// import ProjectPopUp from './ProjectPopUp'

const Internship = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
      <div>
        <section className="section experience" id="experience">
          <div className="container">
  
            <p className="section-subtitle">Experience</p>
  
            <h2 className="h2 section-title">My industry Works</h2>
  
            <p className="section-text">
                 Experience that shaped my skills and vision!
            </p>
  
            <ul className="portfolio-list">
  
              <li>
                <a href="#" className="portfolio-card" style={{ backgroundImage: `url(${InternshipImg})` }}>
                  <div className="card-content">
  
                    <p className="card-subtitle">Professional Experience</p>
  
                    <h3 className="h3 card-title">Full Stack Developer Intern at Colgate-Palmolive, Mumbai</h3>
  
                    {/* <span className="btn-link">
                      <span>View Details</span>
  
                      <ion-icon name="arrow-forward"></ion-icon>
                    </span> */}

                    <a href="https://www.linkedin.com/posts/kaustubh-bhavsar_internshipexperience-colgategsso-fullstackdeveloper-activity-7287017239520665601-_BRA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtIomcBUvFTfcc5n0pce1vGaKVQAhS3Db8" target="_blank" rel="noopener noreferrer" className="btn-link">
                        <span>View LinkedIn</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </a>

                    <img className="colgate_img" src={Colgate} alt="Kaustubh in Colgate office"/>
                  </div>
                </a>
              </li>
  
            </ul>
  
          </div>
  
          {/* PopUP Project Working Below */}
          {/* <div className="app-container"> */}
            {/* Anchor tag to open the popup */}
            {/* <a href="#" className="open-link" onClick={(e) => {
              e.preventDefault(); // Prevent page reload
              setShowPopup(true); */}
            {/* }}>
              Open Popup
            </a> */}
  
            {/* Render the popup only when showPopup is true */}
            {/* {showPopup && <ProjectPopUp onClose={() => setShowPopup(false)} />}
          </div> */}
        </section>
      </div>
    )
}

export default Internship




