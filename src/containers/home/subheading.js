import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import {
  getJsonPlaceholder
} from '../../actions/home';
import CustomInput from '../../components/customInput';
import CustomSelect from '../../components/customSelect';

class Subheading extends React.Component {
  componentDidMount() {
    const { getJsonPlaceholder } = this.props;
    getJsonPlaceholder();
  }

  render() {
    const {
      data, options
    } = this.props;
    return (
      <Container>
        <CustomInput label="Username" id="username" type="text" />
        <CustomInput label="Password" id="password" type="password" value="abc" />
        <CustomSelect label="Pilih Opsi" id="select" options={options} />
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
  options: home.options
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getJsonPlaceholder
}, dispatch);


Subheading.propTypes = {
  data: PropTypes.array.isRequired,
  getJsonPlaceholder: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subheading);
