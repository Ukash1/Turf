import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../assets/styles/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        email,
        password
      });

      setMessage(response.data);
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="illustration-section">
        <img src="https://assets-global.website-files.com/62b301157b5b9d4b40532e6d/64a5307d72accf6c43a85fbb_Group%20427322287.png" alt="Illustration" className="illustration" width="600px" height="600px"/>
      </div>
      <br/>
      <br/>
      <div className="welcome-section">
        <img src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" alt="Avatar" className="avatar" />
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="register-button">REGISTER</button>
          {message && <p>{message}</p>}
          <span>Already have an Account?<Link to="/login">Login</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Register;
