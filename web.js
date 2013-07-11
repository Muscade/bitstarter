var express = require('express');
var fs = require("fs");
var filename = 'index.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var output = fs.readFileSync(filename, 'utf-8');
    response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
