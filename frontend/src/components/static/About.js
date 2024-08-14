import React from 'react';
import '../static/About.css';
import Header1 from '../static/Header1';
import Footer from '../common/Footer';

const Feedback = () => {
  return (
    <div>
    <Header1/>
    <div className="about-us-container">
      <div className="section-container">
        <div className="text-container">
          <h2>Our Mission</h2>
          <p>At TurfSplaz, our mission is to transform the landscape of sports and recreation by providing top-quality turf solutions that enhance the playing experience, promote environmental sustainability, and support local communities. We aim to:</p>
          <ul>
            <li>Deliver premium, eco-friendly turf products tailored to diverse sports and recreational needs.</li>
            <li>Promote sustainable practices in turf management to reduce environmental impact.</li>
            <li>Enhance community sports facilities, making them accessible and enjoyable for all.</li>
            <li>Educate and support customers on the best practices for maintaining healthy and durable turf.</li>
            <li>Foster partnerships that contribute to the growth of local economies and sports initiatives.</li>
          </ul>
        </div>
        <div className="image-container mission-image">
          <img src="https://img.freepik.com/free-vector/illustration-business-mission_53876-26964.jpg" alt="Mission" />
        </div>
      </div>

      <div className="section-container">
        <div className="image-container vision-image">
          <img src="https://roland.ac.in/site/wp-content/uploads/2019/04/Vision.png" alt="Vision"   />
        </div>
        <div className="text-container">
          <h2>Our Vision</h2>
          <p>Our vision is to shape the future of sports and recreation by:</p>
          <ul>
            <li>Pioneering innovative turf technologies that set new standards in performance and sustainability.</li>
            <li>Expanding access to high-quality turf solutions for communities around the world.</li>
            <li>Leading the industry in environmental stewardship by promoting eco-friendly materials and practices.</li>
            <li>Enhancing the longevity and safety of sports surfaces, ensuring that athletes of all levels can perform at their best.</li>
            <li>Building strong, enduring partnerships with clients, communities, and stakeholders to foster shared growth and success.</li>
            
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};
export default Feedback;