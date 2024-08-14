import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UPIPayment.css';

const UPIPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
    upiPin: '',
    upiName: '',
    amount: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', formData);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="payment-container">
      <div className="payment-methods">
        <button
          className={paymentMethod === 'Credit Card' ? 'active' : ''}
          onClick={() => setPaymentMethod('Credit Card')}
        >
          Credit Card
        </button>
        <button
          className={paymentMethod === 'Paytm' ? 'active' : ''}
          onClick={() => setPaymentMethod('Paytm')}
        >
          Paytm
        </button>
        <button
          className={paymentMethod === 'Gpay' ? 'active' : ''}
          onClick={() => setPaymentMethod('Gpay')}
        >
          Gpay
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {paymentMethod === 'Credit Card' && (
          <>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full name (on the card)"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="expirationMonth"
                placeholder="MM"
                value={formData.expirationMonth}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="expirationYear"
                placeholder="YY"
                value={formData.expirationYear}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}

        {(paymentMethod === 'Paytm' || paymentMethod === 'Gpay') && (
          <>
            <div className="form-group">
              {/* <input
                type="text"
                name="upiid"
                placeholder="UPI ID"
                value={formData.upiPin}
                onChange={handleInputChange}
                required
              /> */}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="upiName"
                placeholder="Full name"
                value={formData.upiName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="confirm-button">
          Confirm
        </button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>&times;</span>
            <img src="https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif" alt="Success" className="popup-image"/>
            <p class="colorr">Payment Successful !!!</p>
            <p class="colorr">Your Slot is Booked.</p>
          </div>
        </div>
      )}
    </div>
    
  );
  
};

export default UPIPayment;