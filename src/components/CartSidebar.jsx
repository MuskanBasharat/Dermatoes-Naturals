import React from 'react';
import './CartSidebar.css';

function CartSidebar({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onOrderClick }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <p>Your cart is empty</p>
          </div>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <div className="item-price">Rs.{item.price} x {item.quantity}</div>
                <div className="item-total">Rs.{item.price * item.quantity}</div>
              </div>
              <div className="item-actions">
                <div className="quantity-controls">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button 
                  className="remove-button" 
                  onClick={() => onRemoveItem(item.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <p>Delivery Charges: Rs.300</p>
          <div className="cart-total">
            
            <span>Total:</span>
            <span>Rs.{totalAmount+300}</span>
          </div>
          <button className="order-button" onClick={onOrderClick}>
            Proceed to Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;