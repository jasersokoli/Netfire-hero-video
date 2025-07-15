import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => (
  <>
    <div className="info-bar">
      NEW CUSTOMERS GET 15% OFF! USE CODE <span className="info-bar__code">WELCOME15</span>
    </div>
    <nav className="navbar">
      <div className="navbar__left">
        <button className="nav-btn active">HOME</button>
        <button className="nav-btn">ABOUT</button>
        <button className="nav-btn">PRODUCTS</button>
      </div>
      <div className="navbar__center">
        <div className="navbar__logo">
          <span className="logo-icon" />
        </div>
      </div>
      <div className="navbar__right">
        <button className="icon-btn"><span className="icon-cart" /></button>
        <button className="icon-btn"><span className="icon-user" /></button>
        <button className="icon-btn"><span className="icon-search" /></button>
      </div>
    </nav>
  </>
);

export default Navbar; 