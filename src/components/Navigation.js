import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default function Navigation ({isMobile, onHamburgerClick}) {
  return (
    <React.Fragment>
      {!isMobile ? <DesktopNavigation/> : <MobileNavigation onHamburgerClick={onHamburgerClick}/>}
    </React.Fragment>
  );
}
