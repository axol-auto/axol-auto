const express = require('express');
const path = require('path');

const app = express();

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
