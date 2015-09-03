( function( $ ) {
	var devmode = window.jspackager && window.jspackager.devmode;

	if(location.host === 'xiel.local.de' && !window.jspackager.devmode){
		location.search += 'devmode';
	}

	var projectInit = {
		immediate: function() {

		}, //END: projectInit.immediate
		domReadyOnce: function() {

			startSkrollr();
			startBasicFormValidation();
			startBusyButtons();
			startMailForm();

		}, //END: projectInit.domReadyOnce
		everyDomReady: function( context ) {



		} //END: projectInit.everyDomReady
	};

	function startBusyButtons(){
		$(document).on('submit', '.contactform', function(e){
			var form = $(e.target);
			var busyButtons = $('button[data-busy-text]', form);

			busyButtons.each(function(){
				var btn = $(this);
				btn.data('text', btn.text());
				disable(btn);

				var btnTimeout = setTimeout(function(){
					reEnable(btn);
				}, 20 * 1000);

				form.one('submitDone', function(){
					clearTimeout(btnTimeout);
					reEnable(btn);
				});
			});
		});

		function disable(btn){
			btn.addClass('btn--busy');
			btn.text( btn.data('busyText') );
			btn.prop( 'disabled', true );
		}

		function reEnable(btn){
			btn.removeClass('btn--busy');
			btn.text( btn.data('text') );

			btn.prop( 'disabled', false );
		}
	}

	function startMailForm(){
		$(document).on('submit', '.contactform', function(e){
			var form = $(e.target);
			var section = form.closest('.section');
			var serializedData = form.serialize() + '&ajax=' + (+new Date());
			var minHeight = section.height();
			
			$.ajax({
				url: form.attr('action'),
				type: form.attr('method') || 'POST',
				data: serializedData
			})
			.done(function(_data){
				var data = $('<div/>').html(_data);
				var newSection = $('.section', data);
				section.replaceWith(newSection);
				newSection.css({ minHeight: minHeight });
				newSection.trigger('dommodified');
			})
			.always(function(){
				form.trigger('submitDone');
			});

			e.preventDefault();
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
