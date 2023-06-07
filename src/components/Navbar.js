import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/skills" activeClassName="active">Skills</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/mystery" activeClassName="active">???</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;