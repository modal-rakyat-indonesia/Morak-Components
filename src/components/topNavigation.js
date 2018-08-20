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
import { loginSuccess, logoutSuccess, changeLanguage } from '../actions/middleware';

class TopNavigation extends React.Component {
  componentWillMount() {
    const { changeLanguage } = this.props;
    changeLanguage('id');
  }

  render() {
    const {
      isNavbarOpen, toggleNavigation, authenticated,
      loginSuccess, logoutSuccess, lang, changeLanguage
    } = this.props;
    return (
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
                    {this.context.t('Logout')}
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
                    {this.context.t('Login')}
                  </Button>
                )
              }
            </NavItem>
            <NavItem>
              <NavLink>
                {this.context.t('Current language: {n}', { n: (lang === 'id' ? 'Indonesia' : 'English') })}
              </NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={() => changeLanguage(lang === 'id' ? 'en' : 'id')} color="info">
                {this.context.t('Change language')}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ home, auth, i18nState }) => ({
  isNavbarOpen: home.isNavbarOpen,
  authenticated: auth.authenticated,
  lang: i18nState.lang
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleNavigation,
  loginSuccess,
  logoutSuccess,
  changeLanguage
}, dispatch);

TopNavigation.contextTypes = {
  t: PropTypes.func.isRequired
};

TopNavigation.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  logoutSuccess: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavigation);
