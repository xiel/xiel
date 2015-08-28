// xiel development
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -     RESTART     -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');

//require modules
var path = require('path');
var express = require('express');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');

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

//parse parameters out of (post) requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

//serve resources statics
app.use( express.static( path.join(__dirname, '../prototype/_output') ) );

//route
app.get('/', function(req, res){
	res.render('index', {});
})

//contact form
app.get('/contactform', function(req, res){
	console.log('get', req.body);
	res.render('contactform', {});
})

app.post('/contactform', function(req, res){
	var fields = req.body || {};
	console.log('post', req.body);

	console.log(fields.message);

	//sanitize
	req.sanitize('name').stripLow(true);
	req.sanitize('name').trim();
	req.sanitize('email').stripLow(true);
	req.sanitize('email').trim();
	req.sanitize('message').stripLow(true);
	req.sanitize('message').trim();

	//check fields
	req.assert('email', 'valid email address required').isEmail();
	req.assert('email', 'please provide your email address').notEmpty();
	req.assert('name', 'please provide your name').notEmpty();
	req.assert('message', 'please write a message').notEmpty();

	// var errors = req.validationErrors();
	var errors = req.validationErrors(true); //with true = mapped

	console.log(fields.message + "");

	console.log('errors:', errors);
	
	res.render('contactform', {
		fields: fields,
		errors: errors
		// ,layout: false
	});
})

// start server
var server = app.listen(62375, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at port: %s', port);
});