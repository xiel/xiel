// xiel development
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -     RESTART     -  -  -  -  -  -  -  -  -  -  -  -  -');
console.log('-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -');

//require modules
var express = require('express');

//init
var app = express();
var exphbs  = require('express-handlebars');

//add templating engine
app.engine('hbs', 
	exphbs({
		// layoutsDir: __dirname + '/views/layouts',
		// partialsDir: __dirname + '/views/partials',
		defaultLayout: 'default',
		extname: '.hbs'
	})
);
app.set('views', __dirname + '/views/pages');
app.set('view engine', 'hbs');

//route
app.get('/', function(req, res){
	res.render('index', {});
})

// start server
var server = app.listen(62375, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at port: %s', port);
});