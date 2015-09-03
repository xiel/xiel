var express = require('express');
var router = express.Router();

//mail requirements
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var htmlToText = require('nodemailer-html-to-text').htmlToText;

//mail
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport(
	smtpTransport({
		host: 'shaula.uberspace.de',
		port: 587,
		secure: false,
		auth: {
			user: 'noreply@xiel.de',
			pass: 'NoRe6234834xiel'
		}
	})
);
//enable htmlToText
transporter.use('compile', htmlToText());

//contact form
router.get('/', function(req, res){
	console.log('get', req.body);
	res.render('contactform', {});
})

router.post('/', function(req, res){
	var fields = req.body || {};
	var errors = false;
	var sendMessage = false;

	//sanitize
	req.sanitize('name').stripLow(true);
	req.sanitize('name').trim();
	req.sanitize('email').stripLow(true);
	req.sanitize('email').trim();
	req.sanitize('message').stripLow(true);
	req.sanitize('message').trim();
	req.sanitize('url').trim();

	//check fields
	req.assert('email', 'valid email address required').isEmail();
	req.assert('email', 'please provide your email address').notEmpty();
	req.assert('name', 'please provide your name').notEmpty();
	req.assert('message', 'please write a message').notEmpty();

	errors = req.validationErrors(true); //with true = mapped
	sendMessage = !errors;

	//check honey pot
	if(fields.url) {
		sendMessage = false;
		errors = errors || {};
		errors.serverError = { response: ' ' };
	}

	if(sendMessage === true){
		// setup e-mail data with unicode symbols
		var mailOptions = {
			from: 'Contactform XIEL.de <noreply@xiel.de>', // sender address
			replyTo: fields.name + ' <'+ fields.email +'>',
			to: 'felix@xiel.de', // list of receivers
			subject: fields.name + ' via contactform', // Subject line
			text: fields.message // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(mailingError, info){
			if(mailingError) {
				errors = errors || {};
				errors.serverError = mailingError;
				console.log( errors );
				sendMessage = false;
			}

			res.render('contactform', {
				fields: fields,
				errors: errors,
				messageSent: sendMessage,
				layout: !fields.ajax
			});
		});
	} else {
		res.render('contactform', {
			fields: fields,
			errors: errors,
			messageSent: sendMessage,
			layout: !fields.ajax
		});
	}
});

module.exports = router;