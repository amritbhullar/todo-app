var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
