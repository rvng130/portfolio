import { NavLink } from 'react-router-dom';
import BlackRectangle from '../components/BlackRectangle.js';
import BeigeRectangle from '../components/BeigeRectangle.js';
import { useEffect, useState } from 'react';

import '../styles/menu.css'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClickable, setIsClickable] = useState(true);
  
    const handleClick = () => {
      setIsOpen(prevIsOpen => !prevIsOpen);
      if (isClickable) {
        setIsClickable(false);
        setTimeout(() => {
          setIsClickable(true);
        }, 600);
      }
    };
  
    const menuItems = [
      { id: 1, label: 'Home', path: '/' },
      { id: 2, label: 'Skills', path: '/skills' },
      { id: 3, label: 'Projects', path: '/projects' },
      { id: 4, label: 'About', path: '/about' },
      { id: 5, label: '?', path: '/mystery' },
      
    ];
  
    return (
      <div className={`rectangle-container ${isOpen ? 'reveal' : ''}`}>
        <div className="rectangle-container">
          <BlackRectangle />
          <BeigeRectangle />
        </div>
        <div
          className="menu-toggle"
          onClick={handleClick}
          style={{ pointerEvents: isClickable ? 'auto' : 'none' }}
        >
          Menu
        </div>
  
        {isOpen && (
          <div className="menu-items">
            {menuItems.map(item => (
              <NavLink
                key={item.id}
                to={item.path}
                className="menu-item"
                onClick={handleClick}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Menu;

