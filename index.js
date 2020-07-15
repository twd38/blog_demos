const express = require('express');
const app = express();
var path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/styledadventures', (req, res) => {
  res.sendFile(path.join(__dirname + '/blogs/styledadventures.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);