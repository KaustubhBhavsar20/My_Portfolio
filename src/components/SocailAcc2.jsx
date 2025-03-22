import React from 'react'
import IMG1 from '../assets/images/logos/leetcode.png'
import IMG2 from '../assets/images/logos/codechef.png'
import IMG3 from '../assets/images/logos/gfg.png'
import IMG4 from '../assets/images/logos/hackerrank.png'

const SocialAcc2 = () => {
  return (
    <div className="social-logo-div">
        <a href="https://leetcode.com/u/Kaustubh_Bhavsar/" target="_blank"><img src={IMG1} alt="Leetcode Logo" className="social-logos1" id="social-lgo" /></a>
        <a href="https://www.geeksforgeeks.org/user/kaustubhbh828d/" target="_blank"><img src={IMG3} alt="GFG Logo" className="social-logos5" id="social-lgo" /></a>
        <a href="https://www.codechef.com/users/mitaoe_155" target="_blank"><img src={IMG2} alt="Codechef Logo" className="social-logos4" id="social-lgo" /></a>
        <a href="https://www.hackerrank.com/profile/kaustubhbhavsar1" target="_blank"><img src={IMG4} alt="Hackerrank Logo" className="social-logos2" id="social-lgo" /></a>
    </div>
  )
}

export default SocialAcc2
