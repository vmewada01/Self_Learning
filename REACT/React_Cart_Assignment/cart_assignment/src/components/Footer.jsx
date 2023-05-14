// Footer.js
import "../App.css"
import img  from "../Images/logo.png"
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={img} alt="Logo" width="80px" style={{height: "80px"}}/>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          This ecommerce app is dedicated to providing the best online shopping experience. Browse our wide range of products, including electronics, fashion, home goods, and more. Shop with confidence and enjoy fast shipping and excellent customer service.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
