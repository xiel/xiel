(function($) {
	var devmode = window.jspackager && window.jspackager.devmode;
	var historyAPI = 'history' in window && window.history.pushState && window.history;

	if ( !window.jspackager.devmode && (location.host === 'xiel.local.de' || location.host.split('.').length === 4 ) ) {
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
			startSoftScroll();
			startToggleButtons();

			if(devmode){
				$(document).on('mousedown', function(e) {
					var startTime = +new Date();
					$(document).one('mouseup', function(e){
						if( (+new Date() - startTime) >= 1000){
							$(document.body).toggleClass('grid-visible');
							e.preventDefault();
						}
					});
				});
			}

			sssl('//' + (location.hostname || 'localhost') + ':35731/livereload.js?snipver=1', function() {});

		}, //END: projectInit.domReadyOnce
		everyDomReady: function(context) {

				startProjects(context);
				hideAndShowImages(context);

			} //END: projectInit.everyDomReady
	};

	function hideAndShowImages(context) {
		var mediaToShow = $('img', context);
		var mediaToLoad = mediaToShow.length;
		var withTimeout = false;

		mediaToShow.css({
			opacity: 0
		});
		mediaToShow.each(function() {
			var media = $(this);

			if (media.prop('complete')) {
				loaded();
				return
			}

			media.one('load', function() {
				loaded();
			});

			var loadTimeout = setTimeout(function() {
				withTimeout = true;
				loaded();
			}, 3000);

			function loaded() {
				clearTimeout(loadTimeout);
				mediaToLoad--;
				media.trigger('mediaLoaded');

				if (mediaToLoad < 1) {
					$(context).trigger('allMediaLoaded', [{
						withTimeout: withTimeout
					}]);
				}

				media.velocity({
					opacity: 1
				}, {
					duration: 1000
				});
			}
		});

		if (mediaToLoad < 1) {
			$(context).trigger('allMediaLoaded', [{
				withTimeout: withTimeout
			}]);
		}
	}

	function startProjects(context) {
		$('.section.projects', context).each(function() {
			var projectsSection = $(this);
			var activeSection = undefined;
			var slideWrapper = $('<div/>').addClass('project-slide-wrapper').insertAfter(projectsSection);
			var focusAfterClose;
			var scrollYBeforeOpen;

			if(historyAPI && historyAPI.state && historyAPI.state.projectLoaded){
				scrollYBeforeOpen = historyAPI.state.scrollYBeforeOpen;
				loadProject(historyAPI.state.projectLoaded, true);
			}

			$(window).on('popstate', function(e){
				if(historyAPI && historyAPI.state && historyAPI.state.projectLoaded){
					scrollYBeforeOpen = historyAPI.state.scrollYBeforeOpen;
					loadProject(historyAPI.state.projectLoaded, true);
				}
			});

			slideWrapper.on('click', '.close-btn', function(e) {
				closeSlideWrapper();
				e.preventDefault();
			});

			slideWrapper.on( 'keyup', function( e ) {
				var code = e.keyCode ? e.keyCode : e.which;
				if ( code === 27 && activeSection ) {
					closeSlideWrapper();
					e.preventDefault();
				}
			});

			projectsSection.on('click', 'a.project-teaser', function(e) {
				var link = $(this);
				focusAfterClose = link.parent();
				scrollYBeforeOpen = window.scrollY;

				e.preventDefault();
				loadProject( link.attr('href') );
			});

			function loadProject(href, viaHistory){

				$.ajax({
						url: href,
						data: {
							ajax: true
						}
					})
					.done(function(_data) {
						var data = $('<div/>').html(_data);
						var newSection = $('.section', data);

						if ( historyAPI && !viaHistory ){
							historyAPI.pushState({
								projectLoaded: href,
								scrollYBeforeOpen: scrollYBeforeOpen
							}, '', '#!'+href);
						}

						if (activeSection) {
							activeSection.remove();
							activeSection = undefined;
						} else {
							slideWrapper.css({
								height: 0
							});
						}

						activeSection = newSection;
						newSection.appendTo(slideWrapper).addClass('project--active');

						var newSectionHeight = newSection.height() || 1000;

						if(!viaHistory){
							softScrollTo(newSection);
						}

						newSection.on('allMediaLoaded', function(e) {
							slideWrapper
								.velocity("stop")
								.velocity({
									height: !viaHistory ? newSection.height() : 0
								}, {
									duration: Math.abs(slideWrapper.height() - newSection.height()) / 2,
									complete: function() {
										slideWrapper.css({ height: '' });
										focusFirstElementIn(newSection);
									}
								})
							;
						})

						newSection.trigger('dommodified');
					})
				;
			}

			function closeSlideWrapper(){
				if (!activeSection) {
					return false
				}

				if ( historyAPI ){
					historyAPI.pushState({}, '', location.href.replace(location.hash || '#', '') );
				}

				slideWrapper
					.velocity("stop")
					.velocity({
						height: 0
					}, {
						duration: slideWrapper.height() / 3,
						complete: function() {
							if (activeSection) {
								activeSection.remove();
								activeSection = undefined;
							}
						}
					})
				;

				setTimeout(function() {
					if(scrollYBeforeOpen){
						$('html').velocity("stop").velocity("scroll", {
							offset: scrollYBeforeOpen,
							duration: Math.abs(window.scrollY - scrollYBeforeOpen) / 2,
							mobileHA: false
						});
					}
					if(focusAfterClose){
						focusFirstElementIn(focusAfterClose);
					}
				}, 10);
			}
		});
	}

	function startBusyButtons() {
		$(document).on('submit', '.contactform', function(e) {
			var form = $(e.target);
			var busyButtons = $('button[data-busy-text]', form);

			busyButtons.each(function() {
				var btn = $(this);
				btn.data('text', btn.text());
				disable(btn);

				var btnTimeout = setTimeout(function() {
					reEnable(btn);
				}, 20 * 1000);

				form.one('submitDone', function() {
					clearTimeout(btnTimeout);
					reEnable(btn);
				});
			});
		});

		function disable(btn) {
			btn.addClass('btn--busy');
			btn.text(btn.data('busyText'));
			btn.prop('disabled', true);
		}

		function reEnable(btn) {
			btn.removeClass('btn--busy');
			btn.text(btn.data('text'));
			btn.prop('disabled', false);
		}
	}

	function startMailForm() {
		$(document).on('submit', '.contactform', function(e) {
			var form = $(e.target);
			var section = form.closest('.section');
			var serializedData = form.serialize() + '&ajax=' + (+new Date());
			var minHeight = section.height();

			$.ajax({
					url: form.attr('action'),
					type: form.attr('method') || 'POST',
					data: serializedData
				})
				.done(function(_data) {
					var data = $('<div/>').html(_data);
					var newSection = $('.section', data);
					section.replaceWith(newSection);
					newSection.css({
						minHeight: minHeight
					});
					newSection.trigger('dommodified');

					var invalidInputs = $('input:invalid, textarea:invalid', newSection).first();
					softScrollTo(invalidInputs.length ? invalidInputs : newSection);
					invalidInputs.focus();

				})
				.always(function() {
					form.trigger('submitDone');
				});

			e.preventDefault();
		})
	}

	function startSkrollr() {
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

	function startBasicFormValidation() {
		$(document).on('blur', 'input, textarea', function(e) {
			var input = $(e.target);
			var isValid = input.is(':valid');
			var fieldContainer = input.closest('.field');

			if (isValid) {
				fieldContainer.removeClass('field--error');
			} else {
				fieldContainer.addClass('field--error');
			}
		})
	}

	function startToggleButtons(){
		$(document).on('click', '.toggle-btn', function(e){
			var link = $(this);
			var selector = link.prop('hash') || link.attr('href')
			var target = $(selector).first();
			var hideClass = link.data('toggle') || 'toggle';
			if (!target.length) {
				return
			}

			slideToggle(target)
			target.toggleClass(hideClass);

			if(!target.hasClass(hideClass) && !isInView(target) ){
				softScrollTo(target, true)
			}

			if(!target.hasClass(hideClass)){
				focusFirstElementIn(target);
			}

			e.preventDefault();
		});
	}

	function focusFirstElementIn(_target){
		var target = $(_target);
		var elements = $('h1, h2, h2, h3, a, p, a', target);
		var elementToFocus = elements.first();
		var initialTabIndex = elementToFocus.prop('tabIndex');

		setTimeout(function(){
			if(initialTabIndex === undefined || initialTabIndex === -1 || initialTabIndex === false){
				elementToFocus.prop('tabindex', -1);

				elementToFocus.one('blur', function(){
					elementToFocus.prop('tabindex', initialTabIndex);
				});
			}

			elementToFocus.focus();
		}, 100);
	}

	function slideToggle(_target){
		var target = $(_target);
		var isClosed = target.data('slideClosed') || target.height() === 0;

		if(isClosed){
			slideOpen(target);
		} else {
			slideClose(target);
		}
	}

	function slideOpen(_target){
		var target = $(_target);
		var scrollHeight = target[0].scrollHeight;

		target.attr('data-slide-closed', false);
		target.velocity({ height: scrollHeight }, { duration: scrollHeight });
	}

	function slideClose(_target){
		var target = $(_target);
		var scrollHeight = target[0].scrollHeight;

		target.attr('data-slide-closed', true);
		target.velocity({ height: 0 }, { duration: scrollHeight });
	}

	function startSoftScroll() {
		$(document).on('click', 'a[data-jump]', function(e) {
			var link = $(this);
			var selector = link.data('jump') || link.prop('hash') || link.attr('href');
			var target = $(selector).first();
			if (!target.length) {
				return
			}
			softScrollTo(target, true);
			e.preventDefault();
		})
	}

	function isInView(_target){
		var target = $(_target);
		var windowHeight = window.innerHeight;
		var targetHeight = target.height() || target[0].scrollHeight;
		var offsetY = target.offset().top;
		var offsetYBottom = offsetY + targetHeight;
		var scrollPos = window.scrollY;
		var scrollPosBottom = window.scrollY + windowHeight;

		if( (offsetY >= scrollPos && offsetYBottom <= scrollPosBottom) || (targetHeight > windowHeight && scrollPos >= offsetY && scrollPosBottom <= offsetYBottom) ){
			return true
		} else {
			return false
		}
	}

	function softScrollTo(_target, intoView) {
		var target = $(_target).first();
		var duration = 0;
		var MIN_DURATION = 500;
		var MAX_DURATION = 3000;
		var newScrollPos = target.offset().top;

		if(intoView){
			var targetHeight = target.height() || target[0].scrollHeight;
			var windowHeight = window.innerHeight;

			//align bottom of element with bottom of window
			if(targetHeight < windowHeight){
				newScrollPos = newScrollPos - windowHeight + targetHeight;

				//center in viewport
				newScrollPos = newScrollPos + (windowHeight - targetHeight) / 2
			}
		}

		var scrollOffset = newScrollPos - window.scrollY;

		duration = Math.round(Math.abs(scrollOffset) * 0.7);
		duration = Math.max(MIN_DURATION, Math.min(MAX_DURATION, duration));

		$('html').velocity("stop").velocity("scroll", {
			offset: newScrollPos,
			duration: duration,
			mobileHA: false,
			complete: function() {
				// console.log('complete', target, scrollOffset, duration);
			}
		});
	}

	// Avoid `console` errors in browsers that lack a console.
	(function() {
		var method;
		var noop = function() {
			window.jspackager && window.jspackager.devmode && console.log(arguments);
		};
		var methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
			method = methods[length];

			// Only stub undefined methods.
			if (!console[method]) {
				console[method] = noop;
			}
		}
	}());


	/* starters */
	projectInit.immediate();
	$(projectInit.domReadyOnce);
	$(function() {
		projectInit.everyDomReady(document);
	});
	$(document).on('dommodified', function(e) {
		projectInit.everyDomReady(e.target);
	});
})(Zepto);
