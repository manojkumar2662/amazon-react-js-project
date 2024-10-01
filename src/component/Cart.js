import React from 'react';
import './Cart.css';
import { useStateValue } from '../context/StateProvider';

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart__item">
            <img src={item.image} alt={item.title} className="cart__image" />
            <div className="cart__details">
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
