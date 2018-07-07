import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({onHamburgerClick}) => {
  return (
    <nav className="l-header__navigation">
      <a onClick={onHamburgerClick} className="btn skin tertiary" href="javascript:void(0);">
        <FontAwesomeIcon icon="bars"/>
      </a>
    </nav>
  );
};
