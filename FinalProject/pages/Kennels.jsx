import KennelCard from "../components/KennelCard";
import { Outlet, Link } from 'react-router-dom';

function Kennels(){
   
    return (
      <div>
      <h1>Kennels</h1>
        <nav>
          <ul>
            <li>
              <Link to="card">View the list of Kennels</Link>
            </li>
            <li>
              <Link to="contact">Contact a Kennel</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
}


export default Kennels