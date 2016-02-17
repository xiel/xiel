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
    }, 10);

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
})(window);
