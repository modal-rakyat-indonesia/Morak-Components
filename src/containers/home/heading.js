import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getJsonPlaceholder } from '../../actions/home';

const Heading = ({ getJsonPlaceholder }) => (
  <div>
    <Jumbotron>
      <h1 className="display-3">
        Selamat datang di Modal Rakyat
      </h1>
      <p className="lead">
        Temukan pendanaan yang Anda inginkan
      </p>
      <hr className="my-2" />
      <p>
        Modal Rakyat terdaftar resmi dan diawasi langsung oleh OJK dan Kominfo
      </p>
      <p className="lead">
        <Button onClick={getJsonPlaceholder} color="primary">
          Mulai Pendanaan&nbsp;
          <FontAwesomeIcon icon="chevron-right" />
        </Button>
      </p>
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
