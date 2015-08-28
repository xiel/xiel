// xiel development
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -     RESTART     -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');

//require modules
var path = require('path');
var express = require('express');

//init
var app = express();
var exphbs  = require('express-handlebars');

//add templating engine
app.engine('hbs', 
	exphbs({
		defaultLayout: 'default',
		extname: '.hbs'
	})
);
app.set('views', __dirname + '/views/pages');
app.set('view engine', 'hbs');

//serve resources statics
app.use( express.static( path.join(__dirname, '../prototype/_output') ) );

//route
app.get('/', function(req, res){
	res.render('index', {});
})

//contact form
app.get('/contactform', function(req, res){
	res.render('contactform', {});
})

app.post('/contactform', function(req, res){
	res.render('contactform', {});
})

// start server
var server = app.listen(62375, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at port: %s', port);
});