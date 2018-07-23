import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import {
  getJsonPlaceholder
} from '../../actions/home';
import LoadingSpinner from '../../components/loadingSpinner';

class Subheading extends React.Component {
  componentDidMount() {
    const { getJsonPlaceholder } = this.props;
    getJsonPlaceholder(true);
  }

  render() {
    const {
      data, isLoading
    } = this.props;
    return (
      <Container>
        <LoadingSpinner show={isLoading} />
        <ListGroup>
          {data.map(({ id, title, body }, index) => (
            <ListGroupItem key={id}>
              {id}
              .&nbsp;
              {title}
            </ListGroupItem>
          ))
          }
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  count: home.count,
  isIncrementing: home.isIncrementing,
  isDecrementing: home.isDecrementing,
  data: home.data,
  isLoading: home.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getJsonPlaceholder
}, dispatch);

Subheading.defaultProps = {
  isLoading: false
};

Subheading.propTypes = {
  data: PropTypes.array.isRequired,
  getJsonPlaceholder: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subheading);
