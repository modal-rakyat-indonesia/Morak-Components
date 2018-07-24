import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'reactstrap';
import Cookies from 'js-cookie';
import CustomInput from '../../components/customInput';
import CustomSelect from '../../components/customSelect';
import Meta from '../../components/meta';
import Notification from '../../components/notification';
import { showErrorNotification, showSuccessNotification } from '../../actions/about';

class About extends React.Component {
  componentWillMount() {
    Cookies.set('test', 'Hello, this is cookies');
  }

  render() {
    const {
      url, apiUrl, date, options, showErrorNotification, showSuccessNotification
    } = this.props;
    return (
      <Container>
        <Meta title="About Us" description="Ini adalah tentang kami, Modal Rakyat." />
        <Notification />
        <h1>
          About Us
        </h1>
        <p>BASE URL from ENV: { url }</p>
        <p>API URL from ENV: { apiUrl }</p>
        <p>Current date and time: { date }</p>
        <p>Value set from Cookie: { Cookies.get('test') }</p>
        <Container>
          <Row>
            <Button onClick={() => showSuccessNotification('Success', 'This is a success message')}>
            Toggle Success Notification
            </Button>
            <Button onClick={() => showErrorNotification('Error', 'This is error message with action', 'Got it!')}>
            Toggle Error Notification
            </Button>
          </Row>
        </Container>
        <br />
        <CustomInput label="Username" id="username" type="text" />
        <CustomInput label="Password" id="password" type="password" />
        <CustomSelect label="Pilih Opsi" id="select" options={options} />
      </Container>
    );
  }
}

const mapStateToProps = ({ about, auth }) => ({
  options: about.options,
  url: about.url,
  apiUrl: about.apiUrl,
  date: about.date,
  authenticated: auth.authenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({
  showErrorNotification,
  showSuccessNotification
}, dispatch);

About.defaultProps = {
  url: '',
  apiUrl: '',
  date: '',
  showErrorNotification: () => {
    console.warn('Function showErrorNotification is not implemented');
  },
  showSuccessNotification: () => {
    console.warn('Function showSuccessNotification is not implemented');
  }
};

About.propTypes = {
  options: PropTypes.array.isRequired,
  url: PropTypes.string,
  apiUrl: PropTypes.string,
  date: PropTypes.string,
  showErrorNotification: PropTypes.func,
  showSuccessNotification: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
