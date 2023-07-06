import React from 'react';
import '../styles/about.css';
import aboutImage from '../images/aboutme.jpg';
import cpuImage from '../images/cpu.png';

function About() {
  return (
    <div className="about-page">
      {/*Temp*/}
      <div className="container-about">
        <img className="about-image" src={aboutImage} alt="About" />
      </div>


      <div className="resume-link">
        <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noopener noreferrer">Click here to view my resume</a>
      </div>

      <div class="drawing-attribution">
        All drawings by Andrew Ishikawa
      </div>


    </div>
  );
}

export default About;
