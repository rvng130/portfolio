import { NavLink } from 'react-router-dom';
import BlackRectangle from '../components/BlackRectangle.js';
import BeigeRectangle from '../components/BeigeRectangle.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/menu.css';


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    setIsClicked(true);
    if (isClickable) {
      setIsClickable(false);
      setTimeout(() => {
        setIsClickable(true);
        setIsClicked(false);
      }, 600);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Skills', path: '/skills' },
    { id: 3, label: 'Projects', path: '/projects' },
    { id: 4, label: 'About', path: '/about' },
    { id: 5, label: '?', path: '/mystery' },
  ];

  const menuItems2 = [
    { id: 1, label: 'Soundcloud', path: 'https://soundcloud.com/this130' },
    { id: 2, label: 'Instagram', path: 'https://www.instagram.com/isnt130/' },
    { id: 3, label: 'Github', path: 'https://github.com/rvng130/' },
    { id: 4, label: 'LinkedIn', path: 'https://www.linkedin.com/in/andrew-ishikawa' },
    { id: 5, label: 'Contact Me', path: 'mailto:andrewishikawa360@gmail.com' },
  ];


  return (
    <div className={`rectangle-container ${isOpen ? 'reveal' : ''}`}>
      <div className={`rectangle-container ${isOpen ? 'reveal' : 'slide-up'}`}></div>
      <div className="rectangle-container">
        <BlackRectangle />
        <BeigeRectangle />
      </div>
      <div
        className={`menu-toggle ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
        style={{ pointerEvents: isClickable ? 'auto' : 'none' }}
      >
        Menu
      </div>

      {isOpen && (
         <div className={`menu-items ${isOpen ? 'reveal' : 'slide-down'}`}>
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


{isOpen && (
      <div className="menu-items2">
        {menuItems2.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            className="menu-item2"
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
