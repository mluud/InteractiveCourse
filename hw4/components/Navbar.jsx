import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="s
          /DogsToAdopt" className="nav-link">Adopt a dog</Link>
        </li>
        <li className="nav-item">
          <Link to="/Kennels" className="nav-link">Kennels</Link>
        </li>
        <li className="nav-item">
          <Link to="/LogIn" className="nav-link">Log In</Link>
        </li>
        <li className="nav-item">
          <Link to="/NotFound" className="nav-link">Not Found</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

/*   <Route path="../pages/DogsToAdopt" element={<DogsToAdopt/>} />
            <Route path="../pages/Kennels" element={<Kennels/>} />
            <Route path="../pages/LogIn" element={<LogIn/>} />
            <Route path="../pages/NotFound" element={<DogsToAdopt/>} /> */