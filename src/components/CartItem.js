import React from 'react';
import '../styles/CartItem.css';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <h2>{item.title}</h2>
      <p>${item.price} per night</p>
      <div className="cart-controls">
        <button onClick={() => onDecrease(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item)}>+</button>
        <button onClick={() => onRemove(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
