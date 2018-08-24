import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomFileUpload from '../../components/customUploadFile';

class Upload extends React.Component {
  onComplete = (e) => {
    console.warn('success', e);
  }

  onUploadProgress = (e) => {
    console.warn('progress', e);
  }

  render() {
    return (
      <div>
        <h2>
      Upload File
        </h2>
        <p>This page contains Modal Rakyat standardized controls for upload control
         with drag-and-drop functionality.
        </p>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6">
            <p><strong>Basic File Upload</strong><br />
              <small>Contains basic uploader with customizable title, content,
                 and file type.
              </small>
            </p>
            <CustomFileUpload
              filetypes={['image/jpg', 'image/png', 'image/jpeg', 'image/gif', 'file/pdf']}
              type="image"
              title="Upload an image"
              content="Please upload an image with size less than 5 MB"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Upload;
