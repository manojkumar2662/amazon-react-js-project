import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from '../context/StateProvider';
import location from '../../src/assets/location_icon.png';
// import dropdown from '../../src/assets/dropdown_icon.png';
import search from '../../src/assets/search_icon.png';



const Header = () => {
  const [{ cart }] = useStateValue();

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="nav-country">
          <img src={location} height="20" alt="Location Icon" />
          </div>
          

      {/* <div className="header__search">
        <input type="text" className="header__searchInput" />
       
      </div> */}
      <div className="nav-search">
          <div className="nav-search-category">
            <select name="category" id="category">
              <option value="all">All</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="tv">TV</option>
              <option value="fan">Fan</option>
            </select>
            {/* <img src={dropdown} height="12" alt="Dropdown Icon" /> */}
          </div>
          <input type="text" className="nav-search-input" placeholder="Search Amazon" />
          <img src={search} className="nav-search-icon" alt="Search Icon" />
        </div>
        

      <div className="header__nav">
        <Link to="/cart" className="header__link">
          <div className="header__optionCart">
            <span>Cart</span>
            <span className="header__cartCount">{cart?.length}</span>
          </div>
        </Link>
        <div className='sign'>
           <button className="header__sign" src="#"> Sign In</button> 
        </div>
        
      </div>
    </header>
  );
};

export default Header;
