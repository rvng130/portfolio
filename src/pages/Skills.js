import '../styles/skills.css';
import BlackRectangle from '../components/BlackRectangle.js';
import BeigeRectangle from '../components/BeigeRectangle.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Overlay from "../components/Overlay.js";

function Skills() {
  useEffect(() => {
    const linkList = document.querySelector('.link-list');
    linkList.classList.add('animate-waterfall');
  }, []);

 
   return (
    <div class="link-list-container">
      <div className="link-list">
        <ul>
          
        <li className="link-item">
            <a href="#">07 JAVA</a>
          </li>
        <li className="link-item">
            <a href="#">06 NODE.JS</a>
          </li>
        <li className="link-item">
            <a href="#">05 JAVASCRIPT</a>
          </li>
          <li className="link-item">
            <a href="#">04 PYTHON</a>
          </li>
          <li className="link-item">
            <a href="#">03 C</a>
          </li>
          <li className="link-item">
            <a href="#">02 RISC-V</a>
          </li>
          <li className="link-item">
            <a href="#">01 HTML/CSS</a>
          </li>
          <li className="link-item">
            <a href="#">ESPAÑOL</a>
          </li>
          <li className="link-item">
            <a href="#">日本語</a>
          </li>
          
        </ul>
   </div>
   <div class="skills-container">
  <h2>Skills</h2>
  <p>The flow of learning never ends.</p>
</div>

   </div>
  );
};


export default Skills;
