(function(window){
    'use strict';
    var document = window.document;
    var ASSETBASEPATH = window.siteData && siteData.basePath || '';
    var docElem = document.documentElement;
    var asyncStylesheets = window.siteData && window.siteData.asyncStylesheets;
    var loadJs = function( src, ordered, cb ){
        var script = document.createElement( "script" );

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

       console.log(href, ss);
    
       document.head.appendChild(ss);
    
       return ss;
    };

    docElem.classList.remove('no-js');
    docElem.classList.add('js');

    //loadCss(ASSETBASEPATH + 'css/styles.async.css');

    setTimeout(function(){
        //loadJs(ASSETBASEPATH + 'js/_crucial-behavior.js', true);
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
    });

    //uncomment if you have crucial fonts placed above inline script
    if (document.fonts && document.fonts.forEach) {
       setTimeout(function () {
           document.fonts.forEach(function(font){
               font.load();
           });
       });
    }
})(window);
