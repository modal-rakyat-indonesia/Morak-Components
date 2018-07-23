import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import CustomInput from '../../components/customInput';
import CustomSelect from '../../components/customSelect';

const About = ({ url, apiUrl, options }) => (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        About Us
      </title>
      <meta name="description" content="This is description of the website" />
    </Helmet>
    <h1>
      About Us
    </h1>
    <p>BASE URL from ENV: { url }</p>
    <p>API URL from ENV: { apiUrl }</p>
    <CustomInput label="Username" id="username" type="text" />
    <CustomInput label="Password" id="password" type="password" value="abc" />
    <CustomSelect label="Pilih Opsi" id="select" options={options} />
  </Container>
);

const mapStateToProps = ({ about }) => ({
  options: about.options,
  url: about.url,
  apiUrl: about.apiUrl
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

About.defaultProps = {
  url: '',
  apiUrl: ''
};

About.propTypes = {
  options: PropTypes.array.isRequired,
  url: PropTypes.string,
  apiUrl: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
