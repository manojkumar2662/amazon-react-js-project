import React from 'react';
import Product from './Product';
import './ProductList.css';

const ProductList = () => {
  // Sample products data
  const products = [
    {
      id: '1',
      title: 'Apple iPhone 13 (128GB) - Blue',
      price: 799.99,
      image: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg',
    },
    {
      id: '2',
      title: 'Sony WH-1000XM4 Wireless Noise ',
      price: 239.0,
      image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg',
    },
    {
        id: '3',
        title: 'Samsung Galaxy S21 Ultra 5G (128GB) ',
        price: 999.99,
        image: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=1024x1024&w=is&k=20&c=z7hbKSo0fj2HizIGN2HcLZvF9pTD2JimFPydNwCzPik=',
      },
      {
        id: '4',
        title: 'Mobile phone  similar to iphone ',
        price: 1199.99,
        image: 'https://media.istockphoto.com/id/1715008870/vector/mobile-phone-templates-similar-to-iphone-mockup.jpg?s=1024x1024&w=is&k=20&c=ww8rt_pdNJqHyUP46PKQ7IsmDdK9OfRaTtBpmUmZeBg=',
      },
      {
        id: '5',
        title: 'Smart watch, Apple, Wrist image.',
        price: 99.99,
        image: 'https://cdn.pixabay.com/photo/2015/09/09/02/03/clock-931027_1280.jpg',
      },
      {
        id: '6',
        title: 'Camera Canon Photography royalty-free ',
        price: 239.0,
        image: 'https://cdn.pixabay.com/photo/2019/11/09/14/28/camera-4613669_1280.jpg',
      },
      {
        id: '7',
        title: 'Yellow clothes isolated stock photo',
        price: 239.0,
        image: 'https://media.istockphoto.com/id/850788858/photo/yellow-clothes-isolated.jpg?s=1024x1024&w=is&k=20&c=ynuFzpSzlIjXMh3lLYFn-1id_TvSEatAFObXNZB7KoA=',
      },
      {
        id: '8',
        title: 'Blue clothes isolated stock photo',
        price: 239.0,
        image: 'https://media.istockphoto.com/id/1131090131/photo/blue-clothes-isolated.jpg?s=1024x1024&w=is&k=20&c=gxuIJ2cl1y_5CbxVlvPxCkOToMmf6Ybi2-ZwDEjr7cQ=',
      },
      {
        id: '9',
        title: 'Purple clothes isolated stock photo',
        price: 239.0,
        image: 'https://media.istockphoto.com/id/1131090119/photo/purple-clothes-isolated.jpg?s=2048x2048&w=is&k=20&c=SQDet385X4y2B84XtZzNWbUEuVC4rtLDM1LT7OpOlX8=',
      },
      {
        id: '6',
        title: 'Camera Canon Photography royalty-free ',
        price: 239.0,
        image: 'https://cdn.pixabay.com/photo/2019/11/09/14/28/camera-4613669_1280.jpg',
      },
      {
        id: '4',
        title: 'Mobile phone  similar to iphone ',
        price: 1199.99,
        image: 'https://media.istockphoto.com/id/1715008870/vector/mobile-phone-templates-similar-to-iphone-mockup.jpg?s=1024x1024&w=is&k=20&c=ww8rt_pdNJqHyUP46PKQ7IsmDdK9OfRaTtBpmUmZeBg=',
      },
      {
        id: '1',
        title: 'Apple iPhone 13 (128GB) - Blue',
        price: 799.99,
        image: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg',
      },
    // Add more products as needed
  ];

  return (
    <div className="productList">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
