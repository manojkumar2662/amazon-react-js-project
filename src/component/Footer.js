import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#top" className="back-to-top">Back to top</a>
      </div>
      
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Amazon Science</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect with US</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <ul>
              <li><a href="#">Sell on Amazon</a></li>
              <li><a href="#">Sell under Amazon Accelerator</a></li>
              <li><a href="#">Protect and Build Your Brand</a></li>
              <li><a href="#">Amazon Global Selling</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Fulfilment by Amazon</a></li>
              <li><a href="#">Advertise Your Products</a></li>
              <li><a href="#">Amazon Pay on Merchants</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <ul>
              <li><a href="#">COVID-19 and Amazon</a></li>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Returns Centre</a></li>
              <li><a href="#">100% Purchase Protection</a></li>
              <li><a href="#">Amazon App Download</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-secondary">
        <div className="footer-secondary-content">
          <div className="footer-secondary-column">
            <h4>AbeBooks</h4>
            <p>Books, art<br />& collectibles</p>
          </div>
          
          <div className="footer-secondary-column">
            <h4>Amazon Web Services</h4>
            <p>Scalable Cloud<br />Computing Services</p>
          </div>
          
          <div className="footer-secondary-column">
            <h4>Audible</h4>
            <p>Download<br />Audio Books</p>
          </div>
          
          <div className="footer-secondary-column">
            <h4>DPReview</h4>
            <p>Digital<br />Photography</p>
          </div>
          
          <div className="footer-secondary-column">
            <h4>IMDb</h4>
            <p>Movies, TV<br />& Celebrities</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href="#">Conditions of Use & Sale</a></li>
          <li><a href="#">Privacy Notice</a></li>
          <li><a href="#">Interest-Based Ads</a></li>
        </ul>
        <p className="copyright">© 2023-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;