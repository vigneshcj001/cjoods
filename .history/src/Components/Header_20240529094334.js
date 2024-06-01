import React from 'react';
import CJLOGO from '../../images/logo.png';
import { useState } from "react";
import HeaderStyles from './HeaderStyles.css'
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CJLOGO} alt="CJ Logo" />
      </div>

      <div className='nav-bar-Container'>
        <ul className='nav-items'>
        <li key="home">Home</li>
          <li key="cjfoods">CJFoods</li>
          <li key="about">About Us</li>
          <li key="contact">Contact Us</li>
          <li key="cart">Cart</li>
          <button
            className="login-btn  "
            onClick={() => {
              setBtnLogin(btnLogin === "Login" ? "Logout" : "Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
