require('lazysizes');
require('lazysizes/plugins/unveilhooks/ls.unveilhooks');

(function (window) {
    'use strict';

    window.lazySizesConfig = window.lazySizesConfig || {};
    window.lazySizesConfig.loadMode = 1;
    window.lazySizesConfig.expand = 0;
    window.lazySizesConfig.expFactor = 0;

    document.addEventListener('lazyunveilread', function(e){
        var container = e.target;
        var module = container.getAttribute('data-module');

        if(module) {
            if(rb.getComponent){
                rb.getComponent(container, module);
            } else {
                window.lazySizes.rAF(function(){
                    container.classList.add('js-rb-live');
                });
            }
        }
    });

})(window);