import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class CustomButtonGroup extends React.Component {
  componentWillMount() {
    this.setState({
      valid: this.props.valid
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.valid !== nextProps.valid) {
      this.setState({
        valid: nextProps.valid
      });
    }
  }

  render() {
    const {
      selectedValue, label, options, onSelectionClick, errorMessage, disabled
    } = this.props;
    const { valid } = this.state;
    return (
      <div className="btn-groups">
        <div className="custom-btn-group" role="group" aria-label={label}>
          {
        options.map(option => (
          <button
            key={option.id}
            onClick={() => {
              this.setState({
                valid: true
              });
              onSelectionClick(option.id);
            }
            }
            className={`custom-btn btn-group btn large btn-outline${valid ? '' : ' error'}`}
            disabled={disabled}
          >
            {option.text}
            {selectedValue === option.id && !disabled ? (
              <div className="btn-group-check">
                <div className="btn-group-check-container">
                  <FontAwesomeIcon icon={faCheckCircle} size="sm" />
                </div>
              </div>
            ) : ''}
          </button>
        ))
      }
        </div>
        {
        valid ? '' : (
          <span className="error-msg">
            {errorMessage}
          </span>
        )
      }
      </div>
    );
  }
}

CustomButtonGroup.defaultProps = {
  valid: true,
  errorMessage: 'Required field!',
  disabled: false
};

CustomButtonGroup.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onSelectionClick: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool
};

export default CustomButtonGroup;
