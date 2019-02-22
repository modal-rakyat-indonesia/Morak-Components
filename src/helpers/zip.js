// import { external } from 'jszip';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const exampleUrl = 'https://develop-modalrakyat.s3.amazonaws.com/documents/cc7cfa90-365a-11e9-a862-5b18735e1091.jpg';
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

