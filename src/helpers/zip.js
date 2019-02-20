// import { external } from 'jszip';
// import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const exampleUrl = 'https://cors-anywhere.herokuapp.com/https://develop-modalrakyat.s3.amazonaws.com/documents/073e4540-2b6a-11e9-8d39-0ba82f87925c.jpg';
// const exampleUrl = '/img/zip-test.jpg';

export const getFilesFromUrls = (urls) => {
  fetch(exampleUrl).then((response) => {
    if (response.status === 200 || response.status === 0) {
      return Promise.resolve(response.blob());
    }
    return Promise.reject();
  })
    .then((zip) => {
      const zipfile = new JSZip();
      zipfile.file('1.jpg', zip);
      zipfile.file('2.jpg', zip);
      zipfile.file('3.jpg', zip);
      zipfile.generateAsync({ type: 'blob' }).then((blob) => {
        saveAs(blob, 'result.zip');
      });
    });
};

export const returnZipFile = (files) => {

};

