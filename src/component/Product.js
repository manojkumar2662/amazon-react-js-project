import React from 'react';
import './Product.css';
import { useStateValue } from '../context/StateProvider';

const Product = ({ id, title, image, price }) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt={title} />

      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
