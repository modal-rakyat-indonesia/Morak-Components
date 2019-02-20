import React from 'react';
import CustomButton from '../../components/customButton';

class ZipDownloader extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <div>
        <h2>
        ZIP Downloader
        </h2>
        <p>This page contains Modal Rakyat standardized function to download files in a ZIP. Try the demo by clicking the Download button.
        </p>
        <CustomButton type="primary">
          Download All
        </CustomButton>
      </div>
    );
  }
}

export default ZipDownloader;
