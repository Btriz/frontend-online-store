import React from 'react';
import logo from '../img/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={ logo } alt="web cart" />
        <h3>SIGN IN</h3>
      </header>
    );
  }
}

export default Header;
