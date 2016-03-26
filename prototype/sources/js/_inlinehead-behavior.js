(function(window){
	'use strict';
	var document = window.document;
	var ASSETBASEPATH = window.siteData && siteData.basePath || '';
	var docElem = document.documentElement;
	var asyncStylesheets = window.siteData && window.siteData.asyncStylesheets;
	var loadJs = function( src, ordered, cb ){
		var script = document.createElement( 'script' );

		if(cb){
			script.addEventListener('load', cb);
		}

		script.src = src;
		script.async = !ordered;
		document.head.appendChild(script);
		return script;
	};

	/* if you need async CSS */
	var loadCss = function( href, media, callback ){
		 var timer;
		 var ss = document.createElement('link');
		 var sheets = document.styleSheets;
	
		 var onLoad = function(){
			 setTimeout(onloadcssdefined);
			 ss.removeEventListener('load', onLoad);
		 };
		 var onloadcssdefined = function(){
			 var resolvedHref = ss.href;
			 var i = sheets.length;
			 while( i-- ){
				 if( sheets[ i ].href == resolvedHref ){
					 ss.media = media;
					 if(callback){
						 callback();
					 }
					 clearInterval(timer);
					 break;
				 }
			 }
		 };
	
		 media = media || 'all';
	
		 ss.rel = 'stylesheet';
	
		 timer = setInterval(onloadcssdefined, 19);
		 ss.addEventListener('load', onLoad);
	
		 ss.href = href;
	
		 ss.media = 'x';
	
		 document.head.appendChild(ss);
	
		 return ss;
	};

	docElem.classList.remove('no-js');
	docElem.classList.add('js');

	setTimeout(function(){
		loadJs(ASSETBASEPATH + 'js/_main-behavior.js', true);
	});

	setTimeout(function(){
		if(asyncStylesheets){
			asyncStylesheets.forEach(function(asyncStylesheet){
				if(typeof asyncStylesheet === 'string'){
					loadCss(asyncStylesheet);
				} else {
					loadCss(asyncStylesheet.href, asyncStylesheet.media, asyncStylesheet.callback);
				}
			});
		}
	}, 200);

	//start loading crucial fonts before evaluating stylesheet
	if (document.fonts && document.fonts.forEach) {
		 setTimeout(function () {
			 document.fonts.forEach(function(font){
				var latinRange = 'U+0-FF, U+131, U+152-153, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000';
				var defaultRange = 'U+0-10FFFF';

				 if(font.unicodeRange === latinRange || font.unicodeRange === defaultRange ) {
					font.load()
				 }
			 });
		 });
	}

	//tracking
	// (function(win_pag){
	// 	var _paq = win_pag  || [];
	// 	window._pag = _paq;
	// 	_paq.push(["setDomains", ["*.xiel.de"]]);
	// 	_paq.push(['trackPageView']);
	// 	_paq.push(['enableLinkTracking']);
	// 	_paq.push(['setSiteId', 2]);
	// 	setTimeout(function(){
	// 	loadJs('//piwik.xiel.de/piwik.js');
	// 	}, 200);
	// }(window._paq));

	setTimeout(function startTracking() {
		//start tracking
		var _paq = window._paq || [];
		window._paq = _paq;

		_paq.push(["setCookieDomain", "*.xiel.de"]);
		_paq.push(['trackPageView']);
		_paq.push(['enableLinkTracking']);

		(function() {
			var u = "//piwik.xiel.de/";
			_paq.push(['setTrackerUrl', u + 'piwik.php']);
			_paq.push(['setSiteId', 2]);
			var d = document,
				g = d.createElement('script'),
				s = d.getElementsByTagName('script')[0];
			g.type = 'text/javascript';
			g.async = true;
			g.defer = true;
			g.src = u + 'piwik.js';
			s.parentNode.insertBefore(g, s);
		})();
	}, 300);
})(window);
