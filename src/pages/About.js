import React from 'react';
import '../styles/about.css';
import TextScrambleComponent from '../components/TextScramble.js';
import ProfilePicture from '../components/ProfilePicture.js';


function About() {
  return (
    <div className="about-page">
      {/*Temp*/}
      <ProfilePicture altText="Profile Picture" />
      <div className="container-about">
        <div className="text-about"><TextScrambleComponent /></div>
      </div>
    </div>
  );
}


export default About;
