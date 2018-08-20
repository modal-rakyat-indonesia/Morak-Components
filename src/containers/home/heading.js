import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import { getJsonPlaceholder } from '../../actions/home';

const Heading = ({ getJsonPlaceholder }) => (
  <div>
    <Jumbotron>
      <h1 className="display-3">
        Modal Rakyat Style Guide
      </h1>
      <p className="lead">
        Gunakan menu di samping untuk melakukan navigasi ke kontrol yang diinginkan
      </p>
      <hr className="my-2" />
    </Jumbotron>
  </div>
);

const mapStateToProps = ({ home }) => ({
  count: home.count,
  isIncrementing: home.isIncrementing,
  isDecrementing: home.isDecrementing,
  data: home.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getJsonPlaceholder
}, dispatch);

Heading.propTypes = {
  getJsonPlaceholder: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heading);
