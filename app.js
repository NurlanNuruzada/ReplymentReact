const { Img } = require('./src/Vector.png');
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/healthz', (req, res) => res.send('Healthy'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);