import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Navbottom from './component/navbottom';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import Footer from './component/Footer';
import './App.css';
import Header_slider from './component/Header_slider';  



// import Login from './component/Login';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Navbottom />

        <Header_slider />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

       
        <Footer /> {/* Add Footer here */}
        {/* <Login /> */}
      </div>
    </Router>
  );
}

export default App;
