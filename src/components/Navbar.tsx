import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Logo.svg';
import cart from '../assets/Icon-cart.svg';
import user from '../assets/Icon-user.svg';
import search from '../assets/Icon-search.svg';

const Navbar: React.FC = () => (
  <>
    <div className="info-bar">
      NEW CUSTOMERS GET 15% OFF! USE CODE <span className="info-bar__code">WELCOME15</span>
    </div>
    <div className="info-bar-bottom"></div>
    <nav className="navbar page-width">
      <div className="navbar__left">
        <button className="nav-btn active">HOME</button>
        <button className="nav-btn">ABOUT</button>
        <button className="nav-btn">PRODUCTS</button>
      </div>
      <div className="navbar__center">
        <a href="/" className="navbar__logo">
          <span className="logo-icon">
            <img src={logo} alt="Logo" width={65} height={65} />
          </span>
        </a>
      </div>
      <div className="navbar__right">
        <button className="icon-btn">
          <span className="icon-cart">
            <img src={cart} alt="Cart" width={43} height={43} />
          </span>
        </button>
        <button className="icon-btn"><span className="icon-user">
          <img src={user} alt="User" width={43} height={43} />
        </span>
        </button>
        <button className="icon-btn">
          <span className="icon-search">
            <img src={search} alt="Search" width={43} height={43} />
          </span>
        </button>
      </div>
    </nav>
  </>
);

export default Navbar; 