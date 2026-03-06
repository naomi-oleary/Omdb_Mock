import React from 'react';
import Logo from '../assets/Logo.jpg';

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__row">
          <img src={ Logo } className="logo" />
        </div>
      </div>
    </>
  )
}

export default Footer;
