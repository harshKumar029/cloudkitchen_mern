import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="fastfood-logo.png" alt="FastFood Logo" /> */}
        <Link to="/">
          <span>FastFood</span>
        </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
      </ul>
      </div>
      <div className="auth-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/createuser">
          <button>Signup</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
