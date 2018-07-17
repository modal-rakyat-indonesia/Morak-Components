import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';

const Home = ({
  count, increment, decrement, isIncrementing, incrementAsync,
  decrementAsync, isDecrementing, changePage
}) => (
  <div>
    <h1>
      Home
    </h1>
    <p>
      Count:
      {count}
    </p>

    <p>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={incrementAsync} disabled={isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button type="button" onClick={decrement}>
        Decrementing
      </button>
      <button type="button" onClick={decrementAsync} disabled={isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button type="button" onClick={() => changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
);

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch);

Home.propTypes = {
  count: PropTypes.number.isRequired,
  isIncrementing: PropTypes.bool.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
  changePage: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
