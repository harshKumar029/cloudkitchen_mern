import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Mycart from "../../screen/Mycart/Mycart"
import './nav.css';
// import Shoppingbag from "../../../public/assets/img/shopping-bag.png"

const Navbar = () => {
  const navigate = useNavigate();

  const handellogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login")
  }

  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

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
          {(localStorage.getItem("authToken")) ?
          <Link to="/">
          My Order
        </Link>
        :""
         }
        </ul>
      </div>
      {(!localStorage.getItem("authToken")) ?
        <div className="auth-buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/createuser">
            <button>Signup</button>
          </Link>
        </div>
        :
        <div className="auth-buttons">
          {isClicked ? (
              <Link className='bag' to="#" onClick={handleClick}>
                <img className='bag' src="/assets/img/shopping-bag.png" alt="Shopping Bag" />
              </Link>
            ) : (
              <>
              <button onClick={handleClick} style={{backgroundColor:"#ff0000"}}>close</button>
              <Mycart handleClick={handleClick}/>
              </>
            )}
          <Link to="/login" onClick={handellogout}>
            <button style={{backgroundColor:"#ff0000"}}>Logout</button>
          </Link>
        </div>
      }
    </nav>
  );
};

export default Navbar;
