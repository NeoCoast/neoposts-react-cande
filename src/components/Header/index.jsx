import React, { useState } from 'react';

import SideMenu from '../SideMenu/index';

import Neopost from '@assets/icons/neopost.svg';
import Email from '@assets/icons/email.svg';
import People from '@assets/icons/people.svg';
import HamburgerMenu from '@assets/icons/hamburger-menu.svg';
import './styles.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="header__container">
      <div className= "header__title-container">
        <img src={Neopost} alt="My Icon" className="header-icon" />
        <img src={HamburgerMenu} alt="Menu" className="header-icon header-icon-mobile" onClick={toggleMenu} />
        <p className="header__title">NEOPOST</p>
        <SideMenu isOpen={menuOpen} onClose={toggleMenu} />
      </div>
      <div className="header__options">
        <img src={Email} alt="Email Icon" className="header-icon" />
        <img src={People} alt="People Icon" className="header-icon" />
      </div>
    </div>
  );
};

export default Header;
