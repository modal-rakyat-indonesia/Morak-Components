import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.dispatch(push('/'));
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.dispatch(push('/'));
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  RequireAuth.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(RequireAuth);
}
