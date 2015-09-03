// xiel development
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -     RESTART     -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log( new Date() );

//require modules
var path = require('path');
var express = require('express');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');

//get routers
var routes = require('./routes/index');
var contactform = require('./routes/contactform');

//init
var app = express();
var exphbs  = require('express-handlebars');
var rootPath = function(pathFromRoot){
	console.log('rootPath', path.join( __dirname, pathFromRoot ) );
	return path.join( __dirname, pathFromRoot )
};

//add templating engine
app.engine('hbs',
	exphbs({
		layoutsDir: rootPath('views/layouts/'),
		partialsDir: rootPath('views/partials/'),
		defaultLayout: 'default',
		extname: '.hbs'
	})
);
app.set('views', rootPath('/views/pages') );
app.set('view engine', 'hbs');

//parse parameters out of (post) requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

//serve resources statics
app.use( express.static( rootPath('../prototype/_output') ) );

//routes
app.use('/', routes);
app.use('/contactform', contactform);

// start server
var server = app.listen(62375, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at port: %s', port);
});