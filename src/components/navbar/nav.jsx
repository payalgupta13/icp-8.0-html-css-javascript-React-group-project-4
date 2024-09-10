import './nav.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <header className='header'>
      <div className="nav-container">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: 'white',} : { color: 'grey' }
          }className="nav"
        >
          Home
        </NavLink>
       
        <NavLink
          to="/Services"
          style={({ isActive }) =>
            isActive ? { color: 'white',  } : { color: 'grey' }
          }className="nav"
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
 
            isActive ? { color: 'white',     } : { color: 'grey' }
          
          }className="nav"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { color: 'white',  } : { color: 'grey' }
          }className="nav"
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) =>
            isActive ? { color: 'white',  } : { color: 'grey' }
          }className="nav"
        >
          Blog
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) =>
            isActive ? { color: 'white',  } : { color: 'grey' }
          }className="nav"
        >
          Cart
        </NavLink>


      </div>
    </header>
  );
}

export default Footer;
