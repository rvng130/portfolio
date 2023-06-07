import '../styles/skills.css';
import BlackRectangle from '../components/BlackRectangle.js';
import BeigeRectangle from '../components/BeigeRectangle.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
function Skills() {


  const location = useLocation();
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReveal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

   return (
    <div className={`blog-page ${reveal ? 'reveal' : ''}`}>
      <div className="rectangle-container">
        <div className="black-rectangle"></div>
        <div className="beige-rectangle"></div>
      </div>
      <div className="link-list">
        <ul>
        <li className="link-item">
            <a href="#">06 RISC-V</a>
          </li>
        <li className="link-item">
            <a href="#">05 NODE.JS</a>
          </li>
        <li className="link-item">
            <a href="#">04 JAVASCRIPT</a>
          </li>
          <li className="link-item">
            <a href="#">04 HTML/CSS</a>
          </li>
          <li className="link-item">
            <a href="#">03 C</a>
          </li>
          <li className="link-item">
            <a href="#">02 PYTHON</a>
          </li>
          <li className="link-item">
            <a href="#">01 JAVA</a>
          </li>
          <li className="link-item">
            <a href="#">ESPAÑOL</a>
          </li>
          <li className="link-item">
            <a href="#">日本語</a>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
      {/* Rest of your blog content */}
    </div>
  );
};


export default Skills;
