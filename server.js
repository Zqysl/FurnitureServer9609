
var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(80);

console.log("Server running in port 80")