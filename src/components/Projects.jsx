import React, {useState} from 'react'
import Blue from '../assets/images/blue.jpeg'
import Healthcare3 from '../assets/images/Healthcare3.png'
import Colgate from '../assets/images/colgate.png'
// src\assets\images\colgate.png
import AlexaImg from '../assets/images/Alexa.png'
import PortFolioImg from '../assets/images/portfolio-4.jpg'
// import ProjectPopUp from './ProjectPopUp'


const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <section className="section portfolio" id="portfolio">
        <div className="container">

          <p className="section-subtitle">Projects</p>

          <h2 className="h2 section-title">My Amazing Works</h2>

          <p className="section-text">
              Explore my journey through these projects!
          </p>

          <ul className="portfolio-list">

            <li>
              <a href="https://youtu.be/63SR7Wcrj7Y?si=incbCH-jjguVJJq-" target="_blank" className="portfolio-card" style={{ backgroundImage: `url(${Healthcare3})` }}>
                <div className="card-content">

                  <p className="card-subtitle">Major Project</p>

                  <h3 className="h3 card-title">Healthcare Management using Blockchain</h3>

                  {/* <span className="btn-link">
                    <span>View Demo</span>

                    <ion-icon name="arrow-forward"></ion-icon>
                  </span> */}
                <a href="https://youtu.be/63SR7Wcrj7Y?si=incbCH-jjguVJJq-" target="_blank" rel="noopener noreferrer" className="btn-link">
                        <span>View Demo</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </a>
                </div>
              </a>
            </li>

            <li>
              <a href="/" className="portfolio-card" style={{ backgroundImage: `url(${PortFolioImg})` }}>
                <div className="card-content">

                  <p className="card-subtitle">Portfolio</p>

                  <h3 className="h3 card-title">Responsive Portfolio Website using React.js</h3>

                  {/* <span className="btn-link">
                    <span>View Project</span>

                    <ion-icon name="arrow-forward"></ion-icon>
                  </span> */}
                  <a href="/" rel="noopener noreferrer" className="btn-link">
                        <span>View Project</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </a>

                </div>
              </a>
            </li>

            <li>
              <a href="https://github.com/KaustubhBhavsar20/Alexa-Python" className="portfolio-card" style={{ backgroundImage: `url(${AlexaImg})` }}>
                <div className="card-content">

                  <p className="card-subtitle">Python Project</p>

                  <h3 className="h3 card-title">Cloning Alexa using Python</h3>

                  {/* <span className="btn-link">
                    <span>View Project</span>

                    <ion-icon name="arrow-forward"></ion-icon>
                  </span> */}
                    <a href="https://github.com/KaustubhBhavsar20/Alexa-Python" target="_blank" rel="noopener noreferrer" className="btn-link">
                        <span>View Project</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </a>

                </div>
              </a>
            </li>

            {/* <li>
              <a href="#" className="portfolio-card" style={{ backgroundImage: `url(${Blue})` }}>
                <div className="card-content">

                  <p className="card-subtitle">Details</p>

                  <h3 className="h3 card-title">Web Application for Desiverse</h3>

                  <span className="btn-link">
                    <span>View Project</span>

                    <ion-icon name="arrow-forward"></ion-icon>
                  </span>

                </div>
              </a>
            </li> */}

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

export default Projects
