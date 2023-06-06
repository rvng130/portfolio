import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/game" activeClassName="active">Game</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;