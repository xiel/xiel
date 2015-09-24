var express = require('express');
var router = express.Router();
var minify = require('html-minifier').minify;

router.get('/', function(req, res){
	res.render('index', {}, function(err, html){
		if(err) return console.error(err);

		var minifiedHTML = minify(html, {
			collapseWhitespace: true,
			preserveLineBreaks: true
		});

		return res.send(minifiedHTML);
	});
});

router.get('/impressum/', function(req, res){
	res.render('impressum', {});
});

module.exports = router;