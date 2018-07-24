import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Collapse, Navbar, Nav, NavItem,
  NavbarToggler, NavbarBrand, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Button
} from 'reactstrap';
import { toggleNavigation } from '../actions/home';
import { loginSuccess, logoutSuccess } from '../actions/middleware';

export const TopNavigation = ({
  isNavbarOpen, toggleNavigation, authenticated,
  loginSuccess, logoutSuccess
}) => (
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
        <NavItem>
          {
            authenticated ? (
              <Button onClick={logoutSuccess} color="danger">
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => {
                loginSuccess({
                  id: 0, name: 'Theo'
                });
              }}
                color="success"
              >
                Login
              </Button>
            )
          }
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

const mapStateToProps = ({ home, auth }) => ({
  isNavbarOpen: home.isNavbarOpen,
  authenticated: auth.authenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleNavigation,
  loginSuccess,
  logoutSuccess
}, dispatch);

TopNavigation.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  logoutSuccess: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavigation);
