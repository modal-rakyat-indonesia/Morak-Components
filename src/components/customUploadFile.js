import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCloudUploadAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import '../../node_modules/dropzone/dist/min/dropzone.min.css';
import '../styles/components/fileupload.scss';

class CustomUploadFile extends React.Component {
  componentWillMount() {
    this.setState({
      files: [],
      image: {}
    });
  }

  onDrop = (files) => {
    if (files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        this.setState({
          image: {
            src: reader.result,
            title: files[0].name
          }
        });
      };
      this.setState({
        files
      });
    }
  }

  removeFile = () => {
    this.setState({
      files: {}
    });
  }

  render() {
    const {
      type, title, content, filetypes
    } = this.props;
    const { files, image } = this.state;
    return (
      <div className="dropzone file-dropzone-custom">
        <Dropzone onDrop={this.onDrop} accept={filetypes}>
          <div
            className={`dropzone-content${image.src !== undefined ? ' finished' : ''}`}
          >
            {
            files.length > 0 ? (
              <div className="preview">
                <img src={image.src} alt={image.title} />
                <FontAwesomeIcon className="check" icon={faCheckCircle} size="lg" />
              </div>
            ) : (
              <div>
                {
                  type === 'image' ? (
                    <FontAwesomeIcon icon={faCamera} size="2x" />
                  ) : (
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                  )
                }
                <p className="title">{title}</p>
                <p className="content-text">{content}</p>
              </div>
            )
          }
          </div>
        </Dropzone>
        {
          files.length > 0 ? (
            <div className="remove" onClick={this.removeFile} role="presentation">
              <FontAwesomeIcon className="close" icon={faTimesCircle} />
            </div>
          ) : ''
        }
      </div>
    );
  }
}

CustomUploadFile.defaultProps = {
  type: 'file'
};

CustomUploadFile.propTypes = {
  filetypes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default CustomUploadFile;
