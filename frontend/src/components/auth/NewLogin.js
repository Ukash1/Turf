import React, { useState } from 'react';
import '../../assets/styles/NewLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/images/wee.jpg'; // Adjust path for relative location
import { Link, useNavigate } from 'react-router-dom';

function NewLogin({ isOpen, onClose, onOpenSignup }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      // Make API request to login endpoint
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if login was successful
      if (response.ok) {
        const user = await response.json();
        console.log('Login successful:', user);

        // Navigate to the main page after successful login
        navigate('/main');
        onClose();
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }

    // Reset form fields
    setFormData({ email: '', password: '' });
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // If the login dialog is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="login-dialog-overlay">
      <div className="login-dialog-container">
        <img src={image} alt="Field" className="login-dialog-image" />
        <div className="login-dialog-content">
          <div className="login-dialog-header">
            <h3 className="login-dialog-title">Login</h3>
            <FontAwesomeIcon
              icon={faTimes}
              className="login-dialog-close-icon"
              onClick={onClose}
            />
          </div>
          <form onSubmit={handleSubmit} className="login-dialog-form">
            <div className="login-dialog-input-group">
              <label htmlFor="email" className="login-dialog-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="login-dialog-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="login-dialog-input-group">
              <label htmlFor="password" className="login-dialog-label">Password</label>
              <div className="login-dialog-password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="login-dialog-input"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="login-dialog-eye-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            {error && <p className="login-dialog-error">{error}</p>}
            <button type="submit" className="login-dialog-button">Login</button>
            <div className="login-dialog-footer">
              <span>Don't have an account? </span>
              <Link to="#" className="login-dialog-link" onClick={() => {
                onClose();
                onOpenSignup();
              }}>
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLogin;