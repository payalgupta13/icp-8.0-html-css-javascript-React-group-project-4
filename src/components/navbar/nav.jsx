import './nav.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <header>
      <div className="container">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: 'red',} : { color: 'black' }
          }className="nav"
        >
          Home
        </NavLink>
       
        <NavLink
          to="/Services"
          style={({ isActive }) =>
            isActive ? { color: 'red',  } : { color: 'black' }
          }className="nav"
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
 
            isActive ? { color: 'red',     } : { color: 'black' }
          
          }className="nav"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { color: 'red',  } : { color: 'black' }
          }className="nav"
        >
          Contact
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) =>
            isActive ? { color: 'red',  } : { color: 'black' }
          }className="nav"
        >
          Cart
        </NavLink>


      </div>
    </header>
  );
}

export default Footer;
