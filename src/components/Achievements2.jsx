import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GDSC from '../assets/images/gdsc-certificate4.png'
import CodeSprint from '../assets/images/codesprint.png'
import Nirmaan from '../assets/images/Nirmaan.png'
import Arcade from '../assets/images/Arcade.png'
import Facilitaor from '../assets/images/facilitator.png'

const Achievements2 = () => {
  const achievements = [
    {
      img: GDSC,
      tag: "GDSC Lead 2024-25",
      title: "Empowered 1000+ students through workshops, hackathons, and tech mentorship as a GDSC Lead",
      ref: "https://www.linkedin.com/posts/kaustubh-bhavsar_googlecloud-careerdevelopment-web3-activity-7215386411317813250-eaig?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtIomcBUvFTfcc5n0pce1vGaKVQAhS3Db8",
    },
    {
      img: CodeSprint,
      tag: "CodeSprint Rank 2",
      title: "Secured individual Rank 2 and Team Rank in CodeSprint Coding competition organised at Equilibrium MIT AOE",
      ref: "https://www.linkedin.com/posts/kaustubh-bhavsar_team-equilibrium-techfest-activity-7048230202937597952-6g9D?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtIomcBUvFTfcc5n0pce1vGaKVQAhS3Db8",
    },
    {
      img: Nirmaan,
      tag: "National Level Hackathon Winner",
      title: "Secured Rank 1 in Nirmaan- National Level Hackathon organised by GDSC MIT AOE at Equilibrium",
      ref: "https://www.linkedin.com/posts/kaustubh-bhavsar_google-developer-project-activity-7047237896826728448-gWX4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtIomcBUvFTfcc5n0pce1vGaKVQAhS3Db8",
    },
    {
      img: Arcade,
      tag: "Google Cloud Arcade Facilitator 2024",
      title: "Chosen to lead the 2024 cohort, helping users become #GoogleCloudReady and explore a cloud-first world",
      ref: "https://drive.google.com/file/d/1O1HebsNKLTihUfK61VwGqPHH0HAhSKxR/view?usp=sharing",
    },
    {
      img: Facilitaor,
      tag: "GCSJ and Gen AI 2024 Facilitator",
      title: "Achieved Tier 1 in GCSJ and Tier 2 in GEN AI Studey Jams as a Facilitator of this program ",
      ref: "https://www.linkedin.com/posts/kaustubh-bhavsar_googlecloud-gdsc-milestoneachieved-activity-7177913401388503041-hhtP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtIomcBUvFTfcc5n0pce1vGaKVQAhS3Db8",
    },
  ];

  return (
    <section className="section achievement" id="achievement">
      <div className="container">
        <div>
          <p className="section-subtitle">My Achievements</p>
        <h2 className="h2 section-title" id="achievement-title">Achievements That Showcase My Passion for Technology & Learning</h2>


        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 3 items on larger screens
          }}
          className="achievement-swiper"
        >
          {achievements.map((achievement, index) => (
            <SwiperSlide key={index}>
              <div className="achievement-card">
                <figure className="card-banner">
                  <a href={achievement.ref} target="_blank">
                    <img
                      src={achievement.img}
                      width="1181"
                      height="843"
                      loading="lazy"
                      alt={achievement.title}
                      className="img-cover"
                    />
                  </a>
                </figure>
                <a href="#" className="card-tag">
                  {achievement.tag}
                </a>
                <h3 className="card-title">
                  <a href="#">{achievement.title}</a>
                </h3>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Achievements2;