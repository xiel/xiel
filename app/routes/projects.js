var express = require('express');
var router = express.Router();
var minify = require('html-minifier').minify;

router.get('/', function(req, res){
	res.send('');
});

router.get('/:project/', function(req, res){
	var isAjax = 'ajax' in req.query ||  'ajax' in req.body || 'ajax' in req.params;
	var ajaxDependentLayout = isAjax ? false : 'default';

	res.render('projects/' + req.params.project, {
		layout: ajaxDependentLayout
	});
});

module.exports = router;