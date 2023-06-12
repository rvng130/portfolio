import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogoPicture = ({ altText }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`logo-position ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="logo-background"></div> {/* New background element */}
      <Link to="/">
        <img className="logo-animation" src={require("../images/mylogo.png")} alt={altText} />
      </Link>
    </div>
  );
};

export default LogoPicture;
