import '../styles/skills.css';
import BlackRectangle from '../components/BlackRectangle.js';
import BeigeRectangle from '../components/BeigeRectangle.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Overlay from "../components/Overlay.js";
import Drawing2 from '../components/Drawing2';

function Skills() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    const linkList = document.querySelector('.link-list');
    linkList.classList.add('animate-waterfall');
  }, []);

   return (
    <div class="link-list-container">
      <div className="link-list">
        <ul>
          
        <li className="link-item">
            <a href="#" onClick={() => handleItemClick('09 Relevant Classes')}>09 REL. CLASS</a>
          </li>

        <li className="link-item">
            <a href="#" onClick={() => handleItemClick('07 JAVA')}>07 JAVA</a>
          </li>
          <li className="link-item">
            <a href="#" onClick={() => handleItemClick('06 NODE.JS')}>06 NODE.JS</a>
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

   <div class="skills-container"><Drawing2 /></div>
   

{showOverlay && (
        <Overlay onClose={handleClose}>
         <div className="selected-item-container">
            <h2>{selectedItem}</h2>
            <p>Item details or content here.</p>
          </div>
        </Overlay>
      )}




   </div>
  );
};


export default Skills;
