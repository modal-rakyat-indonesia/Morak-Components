// import { external } from 'jszip';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import moment from 'moment';

const exampleUrl = `https://develop-modalrakyat.s3.amazonaws.com/documents/3c5da7a0-e189-11e8-af26-c13ffa50b3bb.jpg?timestamp=${moment().format('X')}`;
// const exampleUrl = '/img/zip-test.jpg';

export const getFilesFromUrls = (urls) => {
  axios.get(exampleUrl, {
    responseType: 'blob'
  }).then((response) => {
    const blob = new Blob([response.data]);
    const zipfile = new JSZip();
    zipfile.file('test1.pdf', blob);
    zipfile.file('test2.pdf', blob);
    zipfile.file('test3.pdf', blob);
    zipfile.generateAsync({ type: 'blob' }).then((blob) => {
      saveAs(blob, 'result.zip');
    });
  });
};

export const returnZipFile = (files) => {

};

