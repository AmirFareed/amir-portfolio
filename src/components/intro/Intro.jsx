import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { FaGraduationCap } from 'react-icons/fa';
import img from '../../assets/Me.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Amir Fareed" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>Master of Science in Computer Science</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
          </div>
          <p>
          With over three years of experience, I am a skilled professional specializing in Research and Data Analysis, Web and Android Development, and Academic Writing. My expertise includes crafting high-quality content, developing cutting-edge applications, and enhancing data-driven insights. I seamlessly integrate technical proficiency with creative problem-solving to deliver robust solutions and compelling narratives.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
