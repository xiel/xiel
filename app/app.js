// xiel development
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -     RESTART     -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');

//require modules
var express = require('express');

//init
var app = express();

//route
app.get('/', function(req, res){
	res.send('...');
})

// start server
var server = app.listen(62375, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at port: %s', port);
});