// // import React from 'react';
// // import '../../assets/styles/SubmitWaste.css';

// // // Example image sources
// // import residentImage from '../../assets/images/Resident.jpg';
// // import commercialImage from '../../assets/images/Commercial.jpg';
// // import ewasteImage from '../../assets/images/ewaste.jpg';

// // const SubmitWaste = () => {
// //   return (
// //     <div id="submit-waste-section" className="categories-container">
// //       <div className="category-box">
// //         <div className="image-container">
// //           <img src={residentImage} alt="Resident" className="circle-image" />
// //         </div>
// //         <h3>Resident</h3>
// //         <p className="description">Manage your household waste efficiently and earn rewards by submitting recyclable materials.</p>
// //       </div>
// //       <div className="category-box">
// //         <div className="image-container">
// //           <img src={commercialImage} alt="Commercial" className="circle-image" />
// //         </div>
// //         <h3>Commercial</h3>
// //         <p className="description">Submit waste from commercial activities and help keep the environment clean while earning coins.</p>
// //       </div>
// //       <div className="category-box">
// //         <div className="image-container">
// //           <img src={ewasteImage} alt="E-Waste" className="circle-image" />
// //         </div>
// //         <h3>E-Waste</h3>
// //         <p className="description">Dispose of electronic waste responsibly and contribute to reducing e-waste pollution.</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SubmitWaste;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/styles/SubmitWaste.css';

// // Example image sources
// import residentImage from '../../assets/images/Resident.jpg';
// import commercialImage from '../../assets/images/Commercial.jpg';
// import ewasteImage from '../../assets/images/ewaste.jpg';

// const SubmitWaste = () => {
//   return (
//     <div id="submit-waste-section" className="categories-container">
//       <Link to="/resident" className="category-box">
//         <div className="image-container">
//           <img src={residentImage} alt="Resident" className="circle-image" />
//         </div>
//         <h3>Resident</h3>
//         <p className="description">Manage your household waste efficiently and earn rewards by submitting recyclable materials.</p>
//       </Link>
//       <Link to="/commercial" className="category-box">
//         <div className="image-container">
//           <img src={commercialImage} alt="Commercial" className="circle-image" />
//         </div>
//         <h3>Commercial</h3>
//         <p className="description">Submit waste from commercial activities and help keep the environment clean while earning coins.</p>
//       </Link>
//       <Link to="/ewaste" className="category-box">
//         <div className="image-container">
//           <img src={ewasteImage} alt="E-Waste" className="circle-image" />
//         </div>
//         <h3>E-Waste</h3>
//         <p className="description">Dispose of electronic waste responsibly and contribute to reducing e-waste pollution.</p>
//       </Link>
//     </div>
//   );
// };

// export default SubmitWaste;
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/SubmitWaste.css';

// Example image sources
import residentImage from '../../assets/images/aa.webp';
import commercialImage from '../../assets/images/ab.webp';
import ewasteImage from '../../assets/images/bad1.webp';

const SubmitWaste = () => {
  return (
    <div id="submit-waste-section" className="categories-container">
      <Link to="/football" className="category-box">
        <div className="image-container1">
          <img src={residentImage} alt="Resident" className="circle-image" />
        </div>
        <h3 className="category-title">FootBall</h3>
        <p className="description">FootBall is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms.</p>
      </Link>
      <Link to="/cricket" className="category-box">
        <div className="image-container1">
          <img src={commercialImage} alt="Commercial" className="circle-image" />
        </div>
        <h3 className="category-title">Cricket</h3>
        <p className="description">Cricket is a game played with a ball and bat by two sides of usually 11 players each on a large field centering upon two wickets each defended by a batsman. </p>
      </Link>
      <Link to="/batman" className="category-box">
        <div className="image-container1">
          <img src={ewasteImage} alt="E-Waste" className="circle-image" />
        </div>
        <h3 className="category-title">Badminton</h3>
        <p className="description">The game involves the two opponents hitting the shuttlecock over the net into the other person's side.Badminton is an indoor game that needs a lot of energy and is suitable for physical fitness.</p>
      </Link>
    </div>
  );
};

export default SubmitWaste;
