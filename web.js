var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var file = fs.createReadStream('./index.html');
var text;
file.on('data', function(data_){
	console.log("data:", data_.toString());
	text = data_.toString('utf-8');
});

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
