import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dogs-to-adopt"> Dogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/kennels">Kennels</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;