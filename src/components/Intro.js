import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../assets/img/me.jpg';
import CV from '../assets/OLIVIA_WONG_LEBENSLAUF.pdf';


export const Intro = () => {
  return (
    <section id="about">
      <h5>About Me</h5>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p> My career began as an Accountant. However, I discovered my true passion lies in Frontend Development. This led me to enroll in Le Wagon's Web Development bootcamp, where I acquired knowledge in software development fundamentals, front-end development, web design, databases, and app deployment from scratch. Leveraging seven years of experience in Accounting, I offer traits such as meticulousness, analytical thinking, and teamwork to my transition into the realm of junior front-end development. Commited to delivering high-quality web solutions through creativity, attention to detail, and problem-solving abilities.</p>
          <a href={CV} download className="vvs">
            Download CV
          </a>
          <a href="#connect" className="vvd">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
