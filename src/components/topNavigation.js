import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Collapse, Navbar, Nav, NavItem,
  NavbarToggler, NavbarBrand, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { toggleNavigation } from '../actions/home';

export const TopNavigation = ({ isNavbarOpen, toggleNavigation }) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">
      <img src="/img/logo.svg" alt="Modal Rakyat" className="brand" />
    </NavbarBrand>
    <NavbarToggler onClick={toggleNavigation} />
    <Collapse isOpen={isNavbarOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about-us">
            About Us
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
);

const mapStateToProps = ({ home }) => ({
  isNavbarOpen: home.isNavbarOpen
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleNavigation
}, dispatch);

TopNavigation.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  toggleNavigation: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavigation);
