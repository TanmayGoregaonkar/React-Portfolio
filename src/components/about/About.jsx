import React from "react";
import "./about.css";
import aboutme from "../../assests/aboutme.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";
import p2 from '../../assests/p2.jpeg'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={p2} alt="" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>Pursuing B.E (IT) in PICT,Pune</small>
            </article>

            <article className="about__card">
            <FiUsers className='about__icon'/>
              <h5>Experience/Current-role</h5>
              <small>Sophomore</small>
            </article>

            <article className="about__card">
            <VscNewFolder className='about__icon'/>
              <h5>Project</h5>
              <small><a href="https://lnkd.in/dMg4wE4t" target="_blank">DrawMyCode ~A DSA Visulizer</a></small>
              
            </article>
          </div>

          <p>Hello, I am Tanmay Goregaonkar and I am a web developer currently persuing my B.E (IT) at Pune Institute of Computer Technology,Pune. I live and studying in Pune, Maharashtra. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks). I enjoy coding and the challenge of learning something new everyday. </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
