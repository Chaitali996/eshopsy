import React from 'react';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import StoreIcon from '@material-ui/icons/Store';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <StoreIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">eShopsy</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingCartSharpIcon className="itemBasket" />
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
