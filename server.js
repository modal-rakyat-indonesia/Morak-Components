require('dotenv').config();

const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));
app.use('/css', express.static(path.join(__dirname, 'build/static/css')));
app.use('/js', express.static(path.join(__dirname, 'build/static/js')));
app.use('/img', express.static(path.join(__dirname, 'build/img')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/about-us', (request, response) => {
  response.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, (error) => {
  if (!error) {
    console.warn('==> ðŸŒŽ Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  }
});
