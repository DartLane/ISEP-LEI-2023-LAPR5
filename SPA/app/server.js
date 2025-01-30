//Class server.js heroku with express
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/app/index.html'));
}, function(err) {
    console.log(err);
});

app.listen(port);
console.log('Server started on port ' + port);

