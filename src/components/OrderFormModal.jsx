import React, { useState } from 'react';
import './OrderFormModel.css'

function OrderFormModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '', // will store only digits after +92
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove non-digit characters
      let digits = value.replace(/\D/g, "");

      // Limit to max 10 digits
      if (digits.length > 10) {
        digits = digits.slice(0, 10);
      }

      setFormData(prev => ({
        ...prev,
        phone: digits
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      phone: `+92${formData.phone}` // Final phone number with prefix
    });
  };

  return (
    <div className="order-form-overlay">
      <div className="order-form-modal">
        <h3>Order Details</h3>
        
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input">
              <span className="prefix">+92</span>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength="10"
                pattern="[0-9]{10}"
                placeholder="0000000000"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Full Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Send Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderFormModal;
