import React from 'react';
import ME from '../assets/Me.png';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <img src={ME}  className="about__me-image"/>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>1+ completed</small>
            </article>
          </div>
          <p>
              Greetings! I am a creative and enthusiastic web developer with a passion for delivering outstanding work that exceeds expectations. I have honed my skills in front-end and back-end development through various projects, challenges, and learning opportunities. I specialize in HTML, CSS, JavaScript, React, Next.js, Data Science, and Microsoft Dynamics 365 BC. I have a knack for creating beautiful, responsive websites that look and work great on any device. A lifelong learner, I am always seeking to expand my skills and stay current with the latest technologies and industry trends. I am a team player at heart and enjoy collaborating with others, but I also thrive when working independently on projects. If you're in search of a unique and driven web developer and Android developer, look no further. I am eager to take on new challenges and partner with you to bring your vision to reality. Let's make magic happen!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
