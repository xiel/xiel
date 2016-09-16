var express = require('express');
var reCAPTCHA = require('recaptcha2');
var router = express.Router();

//mail requirements
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var htmlToText = require('nodemailer-html-to-text').htmlToText;
var auth = {};

try {
	auth = require('../auth');
} catch(err) { console.error('!!! missing auth file with smtpTransport config information'); }

//mail
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport(
	smtpTransport(auth.smtpTransport)
);

var recaptcha = new reCAPTCHA(auth.recaptcha);

//enable htmlToText
transporter.use('compile', htmlToText());

//contact form
router.get('/', function(req, res){
	res.render('contactform', {});
})

router.post('/', function(req, res){
	var fields = req.body || {};
	var errors = false;
	var sendMessage = false;

	var isAjax = 'ajax' in req.query ||  'ajax' in req.body || 'ajax' in req.params;
	var ajaxDependentLayout = isAjax ? false : 'default';

	//sanitize
	req.sanitize('name').stripLow(true);
	req.sanitize('name').trim();
	req.sanitize('email').stripLow(true);
	req.sanitize('email').trim();
	req.sanitize('message').stripLow(true);
	req.sanitize('message').trim();
	// req.sanitize('url').trim();

	req.sanitize('g-recaptcha-response').trim();

	//check fields
	req.assert('email', 'valid email address required').isEmail();
	req.assert('email', 'please provide your email address').notEmpty();
	req.assert('name', 'please provide your name').notEmpty();
	req.assert('message', 'please write a message').notEmpty();

	errors = req.validationErrors(true); //with true = mapped
	sendMessage = !errors;
	
	if(sendMessage === true){
		recaptcha.validate(fields['g-recaptcha-response'])
			.then(function(){
				// validated and secure
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
						layout: ajaxDependentLayout
					});
				});
			})
			.catch(function(errorCodes){
				// invalid
				errors = errors || {};
				errors.serverError = recaptcha.translateErrors(errorCodes)[0];
				sendMessage = false;

				res.render('contactform', {
					fields: fields,
					errors: errors,
					messageSent: sendMessage,
					layout: ajaxDependentLayout
				});
				console.log(recaptcha.translateErrors(errorCodes));// translate error codes to human readable text
			})
		;
		
	} else {
		res.render('contactform', {
			fields: fields,
			errors: errors,
			messageSent: sendMessage,
			layout: ajaxDependentLayout
		});
	}
});

module.exports = router;