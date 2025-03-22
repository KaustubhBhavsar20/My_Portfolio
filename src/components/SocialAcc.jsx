import React from 'react'
import IMG1 from '../assets/images/logos/linkedin.png'
import IMG2 from '../assets/images/logos/insta.png'
import IMG3 from '../assets/images/logos/github2.png'
import IMG4 from '../assets/images/logos/twitter.png'

const SocialAcc = () => {
  return (
    <div className="social-logo-div">
        <a href="https://www.linkedin.com/in/kaustubh-bhavsar/" target="_blank"><img src={IMG1} alt="LinkedIN Logo" className="social-logos1" id="social-lgo" /></a>
        <a href="https://github.com/KaustubhBhavsar20" target="_blank"><img src={IMG3} alt="Github Logo" className="social-logos3" id="social-lgo" /></a>
        <a href="https://www.instagram.com/kaustubh_bhavsar7/" target="_blank"><img src={IMG2} alt="Insta Logo" className="social-logos2" id="social-lgo" /></a>
        <a href="https://x.com/Kaustubh_4742" target="_blank"><img src={IMG4} alt="Twitter Logo" className="social-logos2" id="social-lgo" /></a>
    </div>
  )
}

export default SocialAcc
