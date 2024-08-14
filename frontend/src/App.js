import "./App.css";
import Commercial from "./components/user/Commercial";
import ConvertCoins from "./components/user/ConvertCoins";
import EWaste from "./components/user/EWaste";
import Home from "./components/static/Home";
import Login from "./components/auth/Login";
import MySubmission from "./components/user/MySubmissions";
import Navbar from "./components/common/Navbar";
import Profile from "./components/user/Profile";
import React, { useState } from "react";
import Register from "./components/auth/Register";
import Resident from "./components/user/Resident";
import Shop from "./components/user/Shop";
import SubmitWaste from "./components/user/SubmitWaste";
import ViewCoins from "./components/user/ViewCoins";
import Cricket from "./components/user/Cricket";
import Main from "./components/static/Main";
import TurfDetails from "./components/user/TurfDetails";
import upi from "./components/user/UPIPayment";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Football from "./components/user/Football";
import Batminton from "./components/user/Badminton";
import UPIPayment from "./components/user/UPIPayment";
import Feedback from "./components/user/Feedback";
import ContactUs from "./components/user/ContactUs";
import About from "./components/static/About";
import TurfManagement from "./components/user/TurfManagement";
import UserManagement from "./components/user/user";

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';
// import Home from './components/static/Home';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import Profile from './components/user/Profile';
// import ViewCoins from './components/user/ViewCoins';
// import ConvertCoins from './components/user/ConvertCoins';
// import Shop from './components/user/Shop';
// import MySubmission from './components/user/MySubmissions';
// import SubmitWaste from './components/user/SubmitWaste';
// import Navbar from './components/common/Navbar';
// import Resident from './components/user/Resident';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for login state
//   const location = useLocation();

//   // Determine if Navbar should be shown based on the current route
//   const showNavbar = !['/login', '/register'].includes(location.pathname);

//   return (
//     <div>
//       {showNavbar && <Navbar isLoggedIn={isLoggedIn} />}
//       <div className="app-content">
//         <Routes>
//           <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />   
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/my-coins" element={<ViewCoins />} />
//           <Route path="/convert-coins" element={<ConvertCoins />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/mysubmission" element={<MySubmission />} />
//           <Route path="/submitwaste" element={<SubmitWaste />} />
//           <Route path="/resident" component={<Resident></Resident>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for login state
  const location = useLocation();

  // Determine if Navbar should be shown based on the current route
  const showNavbar = !['/login', '/register'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar isLoggedIn={isLoggedIn} />}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />   
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/detail" element={<TurfDetails />} />
          <Route path="/upi" element={<TurfDetails />} />
          <Route path="/my-coins" element={<ViewCoins totalCoins={100} transactions={[
            { date: '2023-07-28', amount: 10, type: 'Completed Challenge' },
            { date: '2023-07-27', amount: 20, type: 'Submitted Solution' },
            { date: '2023-07-26', amount: 30, type: 'Reviewed Code' },
            { date: '2023-07-25', amount: 40, type: 'Daily Login Bonus' },
            { date: '2023-07-24', amount: 50, type: 'Shared Solution' }
          ]} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mysubmission" element={<MySubmission />} />
          <Route path="/submitwaste" element={<SubmitWaste />} />
          <Route path="/resident" element={<Resident />} />
          <Route path="/commercial" element={<Commercial></Commercial>} />
          <Route path="/ewaste" element={<EWaste></EWaste>} />
          <Route path="/football"element={<Football/>} />
          <Route path="/batman"element={<Batminton/>} />
          <Route path="/pay"element={<UPIPayment/>} />
          <Route path="/feedback"element={<Feedback/>} />
          <Route path="/ContactUs"element={<ContactUs/>} />
          <Route path="/About"element={<About/>} />
          <Route path="/admin"element={<TurfManagement/>} />
          <Route path="/user"element={<UserManagement/>} />
        </Routes>
        {/* <TurfManagement/> */}
      </div>
    </div>
  );
};

export default App;