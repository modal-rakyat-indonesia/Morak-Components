import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

const Navbar = ({ logo, sygnet }) => (
  <React.Fragment>
    <AppSidebarToggler className="d-lg-none" display="md" mobile />
    <AppNavbarBrand
      full={{
      src: logo, width: 140, height: 40, alt: 'Modal Rakyat'
      }}
      minimized={{
      src: sygnet, width: 30, height: 30, alt: 'Modal Rakyat'
      }}
    />
    <AppSidebarToggler className="d-md-down-none" display="lg" />
    <Nav className="d-md-down-none" navbar>
      <NavItem className="text-right">
        Modal Rakyat Style Guide
      </NavItem>
    </Nav>
    <Nav className="ml-auto" navbar>
      <AppHeaderDropdown direction="down" />
    </Nav>
  </React.Fragment>
);

Navbar.defaultProps = {
  logo: '/img/logo.svg',
  sygnet: '/img/logo_small.png'
};

Navbar.propTypes = {
  logo: PropTypes.string,
  sygnet: PropTypes.string
};

export default Navbar;
