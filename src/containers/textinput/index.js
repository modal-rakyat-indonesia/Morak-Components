import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import CustomInput from '../../components/customInput';
import CustomSelect from '../../components/customSelect';
import Select2 from '../../components/customSelect2';

const fakeOptionsData = [
  {
    value: '1',
    label: 'Red'
  },
  {
    value: '2',
    label: 'Blue'
  },
  {
    value: '3',
    label: 'Green'
  },
  {
    value: '4',
    label: 'Yellow'
  },
  {
    value: '5',
    label: 'White'
  }
];

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(fakeOptionsData.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())));
  }, 1000);
};


class TextInput extends React.Component {
  render() {
    const {
      options
    } = this.props;
    return (
      <div>
        <h2>
          Text Input
        </h2>
        <p>This page contains Modal Rakyat standardized controls for text input and selection.</p>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6">
            <div className="section-title">
              <h4>Single Input</h4>
              <p>Contains single input, e.g. text or password</p>
            </div>
            <CustomInput label="Username" id="username" type="text" />
            <CustomInput label="Password" id="password" type="password" />
            <CustomInput label="Disabled" id="disabled-text" type="text" disabled />
          </Col>
          <Col xs="12" sm="12" md="12" lg="6">
            <div className="section-title">
              <h4>Dropdown Single/Multiple with Options</h4>
              <p>Multiple or single select dropdown with and without search function</p>
            </div>
            <CustomSelect label="Select An Option" id="select" options={options} />
            <CustomSelect label="Disabled" id="select" options={options} disabled />
            <div className="select-2">
              <Select2
                label="Choose A Color"
                loadOptions={loadOptions}
                disabled={false}
                onChange={this.onSelect2Change}
              />
              <Select2
                label="Choose A Color (Clearable)"
                loadOptions={loadOptions}
                clearable
              />
              <Select2
                label="Choose A Color (Disabled)"
                loadOptions={loadOptions}
                disabled
              />
              <Select2
                label="Choose A Color (Multiple)"
                loadOptions={loadOptions}
                values={[{
                  value: '1',
                  label: 'Red'
                }, {
                  value: '3',
                  label: 'Green'
                }
                ]}
                multi
              />
            </div>
          </Col>
        </Row>
      </div>
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
}, dispatch);

TextInput.defaultProps = {
};

TextInput.propTypes = {
  options: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
