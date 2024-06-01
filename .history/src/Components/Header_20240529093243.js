import React from 'react';
import CJLOGO from '../../images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CJLOGO} alt="CJ Logo" />
      </div>
    </div>
  );
};

export default Header;
