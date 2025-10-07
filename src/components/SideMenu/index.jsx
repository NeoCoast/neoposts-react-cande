import React from 'react';
import PropTypes from 'prop-types';

import ProfileContent from '../Profile-content';

import './index.scss';

const SideMenu = ({ isOpen, onClose }) => (
  <>
    {isOpen && (
      <div
        className="side-menu__overlay"
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onClose();
          }
        }}
        aria-label="Close menu"
      ></div>
    )}

    <div className={`side-menu ${isOpen ? 'side-menu--open' : ''}`}>
      <ProfileContent />
    </div>
  </>
);

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SideMenu;
