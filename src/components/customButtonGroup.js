import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class CustomButtonGroup extends React.Component {
  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {
      selectedValue, label, options, onSelectionClick, valid, errorMessage
    } = this.props;
    return (
      <div className="btn-groups">
        <div className="custom-btn-group" role="group" aria-label={label}>
          {
        options.map(option => (
          <button
            key={option.id}
            onClick={() => onSelectionClick(option.id)}
            className={`custom-btn btn-group btn large btn-outline${valid ? '' : ' error'}`}
          >
            {option.text}
            {selectedValue === option.id ? (
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
  errorMessage: 'Required field!'
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
  errorMessage: PropTypes.string
};

export default CustomButtonGroup;
