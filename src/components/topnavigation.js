import React from 'react';
import {
  Collapse, Navbar, Nav, NavItem,
  NavbarToggler, NavbarBrand, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export const TopNavigation = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">
      <img src="/img/logo.svg" alt="Modal Rakyat" className="brand" />
    </NavbarBrand>
    <NavbarToggler />
    <Collapse navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/about/">
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
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

export default TopNavigation;
