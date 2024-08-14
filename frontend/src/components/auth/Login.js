import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/Login.css';

const adminCredentials = {
  email: 'ukashuki@gmail.com',
  password: 'sasikumar123'
};

const userCredentials = {
  email: 'user@gmail.com',
  password: 'user'
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === adminCredentials.email && password === adminCredentials.password) {
      setMessage('Login successful!');
      navigate('/admin'); // Redirect to admin page on successful login
     // Redirect to admin page on successful login
    } else if (email === userCredentials.email && password === userCredentials.password) {
      setMessage('Login successful!');
      navigate('/home'); // Redirect to user page on successful login
    } else {
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="illustration-section">
        <img 
          src="https://assets-global.website-files.com/62b301157b5b9d4b40532e6d/64a5307d72accf6c43a85fbb_Group%20427322287.png" 
          alt="Illustration" 
          className="illustration" 
          width="600px" 
          height="600px"
        />
      </div>
      <br/>
      <br/>
      <div className="welcome-section">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" 
          alt="Avatar" 
          className="avatar" 
        />
        <h2>WELCOME</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-container">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
          {message && <p>{message}</p>}
          <span>Don't have an Account?<Link to="/register">SignUp</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login;
