import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';
import '../../assets/styles/Main.css';


const Main = () => {
return (
    <div>
    <div className="home-container">
      <video className="video-background" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/vid1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      <section className="hero">
        <div className='sanjay'>
          <h2 class="oooo">Book Your Slots!</h2><br/><br/>
          <h2 class="oooo">Keep Calm And Game On</h2><br/>
          <div className='muthu'>
            <Link to="/home"><button className="register">Get Started</button></Link>
          </div>
        </div>
      </section>
      <br/>
      
    </div>
    <Footer/>
    </div>
  );
};
export default Main;