import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';
const Navbar = ({ isLoggedIn }) => {
  const handleScroll = (event, id) => { 
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar">
      <div className="title">
      Turf Splaz
      </div>
      <ul className="nav-items">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        {isLoggedIn ? (
          <>
            <li><a href="#what-we-do" onClick={(e) => handleScroll(e, 'what-we-do')}>How It Works</a></li>
            {/* <li><Link to="/about">About Us</Link></li> */}
            <li><Link to="/contactus">Contact Us</Link></li>
          </>
        ) : (
          <>
            <li className="dropdown">
              {/* <Link to="/my-coins">Coins</Link> */}
              <div className="dropdown-content">
                <Link to="/mycoins">My Coins</Link>
                <Link to="/convertcoins">Convert Coins</Link>
              </div>
            </li>
            <li><Link to="/shop">Shop</Link></li>
            {/* <li><Link to="">About</Link></li> */}
            {/* <li><Link to="">Contact</Link></li> */}
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ContactUs">ContactUs</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/profile"><i className="fas fa-user"></i></Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;