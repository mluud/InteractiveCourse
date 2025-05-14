import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="NavigationBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/meal/:id">Meal</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/notfound">NotFound</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
  
export default Navbar