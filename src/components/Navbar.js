import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="navbar-item">
          <Link to="/game">Home</Link>
        </li>
        <li className="navbar-item">
        <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;