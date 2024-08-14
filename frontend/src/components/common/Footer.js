import React from 'react';
import '../../assets/styles/Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Turf Splaz</h1><br></br>
          <p>
          Our mission is making it easier for everyone to play sports and increasing the utilisation of facilities as a result.
          </p><br></br>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp;9952367890</span>
            <span><i className="fas fa-envelope"></i> &nbsp;Turf Splaz@gmail.com</span>
          </div>
        </div>
        <div className="footer-section links">
          <h2 class="ol">Quick Links</h2>
          <br />
          <ul>
            <li><a href="#ContactUs"><Link to="/ContactUs">ContactUs</Link></a></li>
            <li><a href="#Feedback"><Link to="/Feedback">Feedback</Link></a></li>
            <li><a href="#Shop"><Link to="/Shop">Shop</Link></a></li>
            <li><a href="#About"><Link to="/About">About</Link></a></li>
            {/* <li><a href="#about-us">About</a></li> */}
          </ul>
        </div>

        <div className="footer-section social">
          <h2 class="ol">Social Media</h2>
          <br />
          <div className="social-links">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Turf Splaz | Designed by Turf Splaz
      </div>
    </footer>
  );
};

export default Footer;
