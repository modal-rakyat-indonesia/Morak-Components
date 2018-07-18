import React from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  getJsonPlaceholder
} from '../../actions/home';

class Home extends React.Component {
  componentDidMount() {
    const { getJsonPlaceholder } = this.props;
    getJsonPlaceholder();
  }

  render() {
    const {
      count, data, increment, decrement, isIncrementing, incrementAsync,
      decrementAsync, isDecrementing, changePage
    } = this.props;

    return (
      <div>
        <LoadingBar className="loading" />
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
        {data.map(({ id, title, body }, index) => (
          <p key={id}>
            {id}
            .&nbsp;
            {title}
          </p>
        )) }
      </div>
    );
  }
}


const mapStateToProps = ({ home }) => ({
  count: home.count,
  isIncrementing: home.isIncrementing,
  isDecrementing: home.isDecrementing,
  data: home.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  getJsonPlaceholder,
  changePage: () => push('/about-us')
}, dispatch);

Home.propTypes = {
  count: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  isIncrementing: PropTypes.bool.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
  changePage: PropTypes.func.isRequired,
  getJsonPlaceholder: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
