
var express = require('express');
const path = require('path');


var app = express();

app.use(express.static('dist'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(80);

console.log("Server running in port 80")