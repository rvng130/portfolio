import React from 'react';
import '../styles/about.css';
import TextScrambleComponent from '../components/TextScramble.js';
  // TextScramble component code here...


function About() {
  return (
    <div className="about-page">
      {/*Temp*/}
      
      <div className="container-about">
        <div className="text-about"><TextScrambleComponent /></div>
      </div>
    </div>
  );
}


export default About;
