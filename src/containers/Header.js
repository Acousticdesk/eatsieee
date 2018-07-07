import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { changeWindowSize, toggleMobileSideMenu } from '../modules/ui/actions';
import { MOBILE_SCREEN_PX } from '../enums';

class Header extends Component {

  static getViewportWidth() {
    return document.documentElement.clientWidth;
  }

  onHamburgerClick = (e) => {
    e.stopPropagation();
    this.props.toggleMobileSideMenu();
  };

  isMobileNavigation() {
    return this.props.windowSize < MOBILE_SCREEN_PX;
  }

  onWindowResize = () => {
    const viewportWidth = Header.getViewportWidth();

    if (viewportWidth !== this.props.windowSize) {
      this.props.changeWindowSize(viewportWidth);
    }

    console.warn(
      'Window resize callback is being triggered. Width: ',
      viewportWidth,
      'Make sure, that the event should not be unregistered.'
    );
  };

  componentDidMount() {
    if (!this.props.windowSize) {
      this.props.changeWindowSize(Header.getViewportWidth());
    }

    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render () {
    return (
      <header className="l-header">
        <Logo/>
        <Navigation onHamburgerClick={this.onHamburgerClick} isMobile={this.isMobileNavigation()}/>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  windowSize: state.ui.windowSize
});

const mapDispatchToProps = (dispatch) => bindActionCreators({changeWindowSize, toggleMobileSideMenu}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
