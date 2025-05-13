import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/meal">Meal</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/notfound">NotFound</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}

export default Navbar