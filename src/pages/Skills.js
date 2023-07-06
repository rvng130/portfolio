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
  const [itemDetails, setItemDetails] = useState({
    '08 Relevant Classes': `This skill page is all of the related programming knowledge that I have acquired so far into my computer science career. 
     Some of these were learned as early as my second year of high-school. 
     This specific page lists all of the computer science related courses that I have taken so far. \n
\n
    Data Structures and Algorithms (Java and Python) [CSE2050] \n
    Object Oriented Design [CSE2050] \n
    Discrete Systems\n
    Linear Algebra \n
    Computer Architecture \n
    Systems Programming \n
    Intro to Cybersecurity 
    Algorithms and complexity(3500)`,

    '07 JAVA': `This was the first programming language that i was introduced to in high school. 
    I have a total skill level of about three years with this language. 
    I learned how build and use data structures with this language in class along even up to sorting 
    binary trees and using recursion with a application to the real world. Apart from that
    I also created fun projects such as a tic tac toe and battleship game using this in combination with java FX. 
    `,

    '06 NODE.JS': `Fairly new to this technology but i’ve become more familiar and accustomed with it 
    as I used it extensively to create this personal website.
     It made the entire process of creating this more efficient and scalable. 
     To sum up, I’ve used Node JS purely for its simplified page content generation. 
     Combined this with React. Js`,

    '05 JAVASCRIPT': `I have a year of experience with javascript so far,
     using it in combination to build websites to execute animations 
     and control the flow of the content. I’ve also used it within my 
     cybersecurity class to create a website that would record password keystrokes
      and post it to a txt file. `,

    '04 PYTHON': `The simplicity of this programming language and large amount of packages allows it
     for writing script code and thats what i’ve used it for the most often. Most notably, using it to
      make cybersecurity scripts for example a random ware  demonstration, a virus which infected other
       python scripts in the same directory and attached itself to the rest of the files, a script that
        would use image text recognition to select the answers to a multiple choice question. One of the
         most versatile languages that i have about 3 year’s experience with it so far. `,

    '03 C': `I have about a year of experience with this language, I’ve used it to learn about system-level 
    programming, process management and small scale concurrency with multi-threaded programming. 
    Special attention will be devoted to proficiency with memory management and debugging facilities
     both in a sequential and parallel setting.`,

    '02 RISC-V': `Structure and operation of digital systems and computers. 
    Instruction sets and assembly language. Integer and floating-point arithmetic.
     Machine organization, control and data paths, pipeline, and the memory hierarchy.`,
    '01 HTML/CSS': 'yes',
    'ESPAÑOL': 'i am fluent',
    '日本語': 'i am learning',
  });

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
            <a href="#" onClick={() => handleItemClick('08 Relevant Classes')}>08 REL. CLASS</a>
          </li>

        <li className="link-item">
            <a href="#" onClick={() => handleItemClick('07 JAVA')}>07 JAVA</a>
          </li>
          <li className="link-item">
            <a href="#" onClick={() => handleItemClick('06 NODE.JS')}>06 NODE.JS</a>
          </li>

        <li className="link-item">
        <a href="#" onClick={() => handleItemClick('05 JAVASCRIPT')}>05 JAVASCRIPT</a>
          </li>
          <li className="link-item">
          <a href="#" onClick={() => handleItemClick('04 PYTHON')}>04 PYTHON</a>
          </li>
          <li className="link-item">
          <a href="#" onClick={() => handleItemClick('03 C')}>03 C</a>
          </li>
          <li className="link-item">
          <a href="#" onClick={() => handleItemClick('02 RISC-V')}>02 RISC-V</a>
          </li>
          <li className="link-item">
          <a href="#" onClick={() => handleItemClick('01 HTML/CSS')}>01 HTML/CSS</a>
          </li>
          <li className="link-item">
          <a href="#" onClick={() => handleItemClick('ESPAÑOL')}>ESPAÑOL</a>
          </li>
          <li className="link-item">
          <a href="#" onClick={() => handleItemClick('日本語')}>日本語</a>
          </li>
          
        </ul>
   </div>

   <div class="skills-container">
        <Drawing2 />
      </div>

      {showOverlay && selectedItem && (
        <Overlay onClose={handleClose}>
          <div className="selected-item-container">
            <h2>{selectedItem}</h2>
            <p>{itemDetails[selectedItem]}</p>
          </div>
        </Overlay>
      )}
    </div>
  );
}

export default Skills;
