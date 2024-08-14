import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import './TurfDetails.css';
const TurfDetails = () => {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  
  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };
  
  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (startTime >= endTime) {
      alert('End time must be later than start time');
      return;
    }
    // Navigate to the payment page
    navigate('/pay');
  };
  
  return (
    <div className="time-container1">
      <h1 className="ccccc">Book The Slot</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={handleNameChange} 
            required 
          />
        </div>
        <div className="form-group1">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            value={phone} 
            onChange={handlePhoneChange} 
            required 
          />
        </div>
        <div className="form-group1">
          <label htmlFor="date">Date:</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={handleDateChange} 
            required 
          />
        </div>
        <div className="form-group1">
          <label htmlFor="start-time">Start Time:</label>
          <input 
            type="time" 
            id="start-time" 
            value={startTime} 
            onChange={handleStartTimeChange} 
            required 
          />
        </div>
        <div className="form-group1">
          <label htmlFor="end-time">End Time:</label>
          <input 
            type="time" 
            id="end-time" 
            value={endTime} 
            onChange={handleEndTimeChange} 
            required 
          />
        </div>
        <button type="submit" className='buttonnn'>Book</button>
      </form>
      {/* Link to the payment page */}
      <Link to='/pay'>
        {/* <button className='button1'>Go to Payment</button> */}
      </Link>
    </div>
  );
};

export default TurfDetails;
