import React from 'react';
import '../../assets/styles/HowItWorks.css'; // Ensure this CSS file exists
import hiw from '../../assets/images/img2.jpeg';

const HowItWorks = () => {
  return (
    <div id="what-we-do" className="how-it-works">
      <div className="content-container">
        <img 
          src={hiw}
          alt="Recycling Process" 
          className="how-it-works-image" 
        />
        <div className="text-container">
          <h2 className="section-title">What is Turf?</h2>
          <p className="section-description">
           A surface layer of land consisting of grass and the earth in which its roots grow.the surface layer of land on which grass is growing, consisting of the grass and the soil in which its roots grow, or a piece of this that is cut from the ground and is usually rectangular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
