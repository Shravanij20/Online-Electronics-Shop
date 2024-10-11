import React, { useState } from 'react';
import './Cart.css';

// ... (previous code)

// ... (previous code)

export default function Cart({ cart }) {
  const [bill, setBill] = useState(0);

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setBill(calculateBill(updatedCart));
  };



  const calculateBill = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='container'>
      <h2>Shopping Cart</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.img} alt="cart-img" />
                {item.name}
              </td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <h3>Total Bill: ${bill}</h3>
      </div>
    </div>
  );
}

