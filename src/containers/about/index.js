import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import Cookies from 'js-cookie';
import CustomInput from '../../components/customInput';
import CustomSelect from '../../components/customSelect';
import Meta from '../../components/meta';

class About extends React.Component {
  componentWillMount() {
    Cookies.set('test', 'Hello, this is cookies');
  }

  render() {
    const {
      url, apiUrl, date, options
    } = this.props;
    return (
      <Container>
        <Meta title="About Us" description="Ini adalah tentang kami, Modal Rakyat." />
        <h1>
          About Us
        </h1>
        <p>BASE URL from ENV: { url }</p>
        <p>API URL from ENV: { apiUrl }</p>
        <p>Current date and time: { date }</p>
        <p>Value set from Cookie: { Cookies.get('test') }</p>
        <CustomInput label="Username" id="username" type="text" />
        <CustomInput label="Password" id="password" type="password" value="abc" />
        <CustomSelect label="Pilih Opsi" id="select" options={options} />
      </Container>
    );
  }
}

const mapStateToProps = ({ about }) => ({
  options: about.options,
  url: about.url,
  apiUrl: about.apiUrl,
  date: about.date
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

About.defaultProps = {
  url: '',
  apiUrl: '',
  date: ''
};

About.propTypes = {
  options: PropTypes.array.isRequired,
  url: PropTypes.string,
  apiUrl: PropTypes.string,
  date: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
