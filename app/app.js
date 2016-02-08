// xiel development
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -     RESTART     -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log( new Date() );

//require modules
var path = require('path');
var express = require('express');
var exphbs  = require('express-handlebars');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var htmlMinifyer = require('html-minifier').minify;
var compression = require('compression');
var grunt = require('grunt');

//get routers
var routes = require('./routes/index');
var contactform = require('./routes/contactform');
var projects = require('./routes/projects');

//init
var app = express();
var rootPath = function(pathFromRoot){
	return path.join( __dirname, pathFromRoot )
};

//add templating engine
var handlebarsConfig = {
	layoutsDir: rootPath('views/layouts/'),
	partialsDir: rootPath('views/partials/'),
	defaultLayout: 'default',
	extname: '.hbs',
	helpers: {
		includeraw: function(src){
			return new Handlebars.SafeString( grunt.file.read(src) );
		}
	}
};

var hbs = exphbs.create(handlebarsConfig);
var Handlebars = hbs.handlebars;

require('handlebars-helpers').register(hbs.handlebars, {});
app.engine('hbs', hbs.engine);

app.set('views', rootPath('views/pages') );
app.set('view engine', 'hbs');

// compress all requests
app.use( compression() );

//parse parameters out of (post) requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

//serve resources statics
app.use( express.static( rootPath('resources/') ) );
app.use( express.static( rootPath('../prototype/_output/') ) );
app.use( express.static( rootPath('../prototype/_dev/') ) );

//routes
app.use('/', routes);
app.use('/contactform', contactform);
app.use('/projects', projects);

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

// start server
var server = app.listen(62375, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at port: %s', port);
});