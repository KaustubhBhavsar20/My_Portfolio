import React, { useEffect, useRef } from "react";
import ReactImg from "../assets/images/logos/React.png"; 
import Img2 from "../assets/images/speaker.jpg"; 
import HTMLImg from "../assets/images/logos/html.png"
import CSSImg from "../assets/images/logos/css3.png"
import JSImg from "../assets/images/logos/javascript.png"
import MySQLImg from "../assets/images/logos/MySQL.png"
import MongoImg from "../assets/images/logos/MongoDB.png"
import NodeImg from "../assets/images/logos/Node.png"
import CppImg from "../assets/images/logos/cpp.png"
import PythonImg from "../assets/images/logos/python.png"
import CImg from "../assets/images/logos/c.png"
import JavaImg from "../assets/images/logos/java.png"
import GitImg from "../assets/images/logos/git.png"
import GithubImg from '../assets/images/logos/github2.png'
// import GithubImg from "../assets/images/logos/github.png"
import MVCImg from "../assets/images/logos/mvc.png"
import ApiImg from "../assets/images/logos/api.png"
import BlockchainImg from "../assets/images/logos/blockchain.png"
import AiImg from "../assets/images/logos/ai.png"
import MlImg from "../assets/images/logos/ml.png"
import DSImg from  "../assets/images/logos/ds.png"
import OopsImg from  "../assets/images/logos/oops.png"
import JqueryImg from  "../assets/images/logos/jquery.png"
import LeaderImg from  "../assets/images/logos/speaker.jpg"

const skillsData = [
  { name: "HTML", img: HTMLImg },
  { name: "CSS", img: CSSImg },
  { name: "JavaScript", img: JSImg },
  { name: "React.js", img: ReactImg },
  { name: "MySQL", img: MySQLImg },
  { name: "MongoDB", img: MongoImg },
  { name: "Node.js", img: NodeImg },
  { name: "C++", img: CppImg },
  { name: "Python", img: PythonImg },
  { name: "C", img: CImg },
  { name: "Java", img: JavaImg },
  { name: "Git", img: GitImg },
  { name: "Github", img: GithubImg },
  { name: "Spring MVC", img: MVCImg },
  { name: "Blockchain", img: BlockchainImg },
  { name: "Rest API's", img: ApiImg },
  { name: "Artificial Intelligence", img: AiImg },
  { name: "Machine Learning", img: MlImg },
  { name: "Data Structures", img: DSImg },
  { name: "OOPS", img: OopsImg },
  { name: "JQuery", img: JqueryImg },
  { name: "Leadership", img: LeaderImg },
];

const Skills = () => {

  const skillsRef = useRef(null);

  useEffect(() => {
    const list = skillsRef.current;
    if (list) {
      // Clone items to create infinite effect
      const clone = list.innerHTML;
      list.innerHTML += clone;
    }
  }, []);


  return (
    <div>
      <section className="section skills" id="skills">
        <div className="container">

          <p className="section-subtitle">My Skills</p>

          <h2 className="h2 section-title">I Develop Skills Regularly</h2>

          <p className="section-text">
               Continuously improving and mastering new skills to stay ahead in the tech world!
          </p>

        <div className="skills-container">
              <div className="skills-wrapper" ref={skillsRef}>
                {skillsData.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <img src={skill.img} alt={skill.name} className="skill-logo" />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Skills
