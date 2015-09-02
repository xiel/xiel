( function( $ ) {
	var devmode = window.jspackager && window.jspackager.devmode;

	window.jspackager.devmode = true;

	var projectInit = {
		immediate: function() {

		}, //END: projectInit.immediate
		domReadyOnce: function() {

			startSkrollr();
			startBasicFormValidation();
			startMailForm();

		}, //END: projectInit.domReadyOnce
		everyDomReady: function( context ) {

		} //END: projectInit.everyDomReady
	};

	function startMailForm(){

		$(document).on('submit', '.contactform', function(e){
			var form = $(e.target);
			var section = form.closest('.section');

			e.preventDefault();

			$.ajax({
				url: form.attr('action'),
				type: form.attr('method') || 'POST',
				data: form.serialize()
			})
			.done(function(_data){
				var data = $(_data);
				var newSection = $('.section', data);
				section.replaceWith(newSection);
			})

			console.log(e);

			
		})

	}

	function startSkrollr(){
		//skrollr
		var s = skrollr.init({
			smoothScrolling: false,
			render: function(data) {
				// console.log(data.curTop);
			},
			mobileCheck: function() {
				return false
				// return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
			}
		});
	}

	function startBasicFormValidation(){
		$(document).on('blur', 'input, textarea', function(e){
			var input = $(e.target);
			var isValid = input.is(':valid');
			var fieldContainer = input.closest('.field');

			if(isValid){
				fieldContainer.removeClass('field--error');
			} else {
				fieldContainer.addClass('field--error');
			}
		})
	}

	// Avoid `console` errors in browsers that lack a console.
	( function() {
		var method;
		var noop = function() {
			window.jspackager && window.jspackager.devmode && console.log( arguments );
		};
		var methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = ( window.console = window.console || {} );

		while ( length-- ) {
			method = methods[ length ];

			// Only stub undefined methods.
			if ( !console[ method ] ) {
				console[ method ] = noop;
			}
		}
	}() );


	/* starters */
	projectInit.immediate();
	$( projectInit.domReadyOnce );
	$( function() {
		projectInit.everyDomReady( document );
	} );
	$( document ).on( 'dommodified', function( e ) {
		projectInit.everyDomReady( e.target );
	} );
} )( Zepto );
