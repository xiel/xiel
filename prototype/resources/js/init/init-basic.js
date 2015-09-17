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
			startGridToggle();
			startSoftScroll();


			$(document).on('dblclick', function(e){
				$(document.body).toggle('grid-visible');
			});

		}, //END: projectInit.domReadyOnce
		everyDomReady: function( context ) {

			startProjects( context );
			hideAndShowImages( context );

		} //END: projectInit.everyDomReady
	};

	function hideAndShowImages(context) {
		var mediaToShow = $('img', context);
		var mediaToLoad = mediaToShow.length;
		var withTimeout = false;

		mediaToShow.css({opacity: 0});
		mediaToShow.each(function(){
			var media = $(this);

			if(media.prop('complete')){
				loaded();
				return
			}

			media.one('load', function(){
				loaded();
			});

			var loadTimeout = setTimeout(function(){
				withTimeout = true;
				loaded();
			}, 3000);

			function loaded(){
				clearTimeout(loadTimeout);
				mediaToLoad--;
				media.trigger('mediaLoaded');

				if(mediaToLoad < 1){
					$(context).trigger('allMediaLoaded', [{withTimeout: withTimeout}] );
				}

				media.velocity({ opacity: 1 }, {
					duration: 1000
				});
			}
		});

		if(mediaToLoad < 1){
			$(context).trigger('allMediaLoaded', [{withTimeout: withTimeout}] );
		}
	}

	function startProjects(context){

		$('.section.projects', context).each(function(){
			var projectsSection = $(this);
			var activeSection = undefined;
			var slideWrapper = $('<div/>').addClass('project-slide-wrapper').insertAfter(projectsSection);

			projectsSection.on('click', 'a.project-teaser', function(e){
				var link = $(this);
				var scrollYBeforeOpen = window.scrollY;

				e.preventDefault();

				$.ajax({
					url: link.attr('href'),
					data: { ajax: true }
				})
				.done(function(_data){
					var data = $('<div/>').html(_data);
					var newSection = $('.section', data);

					if(activeSection){
						activeSection.remove();
						activeSection = undefined;
					} else {
						slideWrapper.css({ height: 0 });
					}

					activeSection = newSection;
					newSection.appendTo(slideWrapper).addClass('project--active');
					
					var newSectionHeight = newSection.height() || 1000;

					softScrollTo(newSection);

					newSection.on('allMediaLoaded', function(e){
						slideWrapper
							.velocity("stop")
							.velocity({ height: newSection.height() }, { 
								duration: Math.abs( slideWrapper.height() - newSection.height() ) / 2,
								complete: function(){
									slideWrapper.css({ height: '' })
								}
							})
						;
					})

					newSection.trigger('dommodified');

					newSection.one('click', '.close-btn', function(e){
						if(!activeSection){ return false }
						slideWrapper
							.velocity("stop")
							.velocity({ height: 0 }, { 
								duration: slideWrapper.height() / 3,
								complete: function(){
									if(activeSection){
										activeSection.remove();
										activeSection = undefined;
									}
								}
							})
						;

						setTimeout(function(){
							$('html').velocity("stop").velocity("scroll", { 
								offset: scrollYBeforeOpen,
								duration: Math.abs( window.scrollY - scrollYBeforeOpen ) / 2
							});
						}, 10);

						e.preventDefault();
					});
				})

				e.preventDefault();
			});
		});
	}

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

	function startGridToggle(){
		$(document).on('dblclick', function(e){
			document.body.classList.toggle('grid-visible');
			e.preventDefault();
		});
	}

	function startSoftScroll(){
		// var slice = Array.prototype.slice;

		$(document).on('click', 'a[data-jump]', function(e){
			var link = $(this);
			var selector = link.data('jump') || link.prop('hash') || link.attr('href');
			var target = $(selector).first();
			
			if(!target.length){ return }

			softScrollTo(target);

			e.preventDefault();
		})
	}

	function softScrollTo(_target){
		var target = $(_target).first();
		var duration = 0;
		var MIN_DURATION = 500;
		var MAX_DURATION = 3000;

		var newScrollPos = target.offset().top;
		var offsetY =  newScrollPos - window.scrollY;

		duration = Math.round( Math.abs( offsetY ) * 0.6 );
		duration = Math.max( MIN_DURATION, Math.min( MAX_DURATION, duration ) );

		$('html').velocity("scroll", { 
			offset: newScrollPos,
			duration: duration,
			complete: function(){
				// console.log('complete', target, offsetY, duration);
			}
		});
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
