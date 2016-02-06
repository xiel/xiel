window.BezierEasing = require('bezier-easing');

var ASSETBASEPATH = window.siteData && siteData.basePath || '';
//load dom or jQuery
require('./libs/rb_$');

require('./libs/rb_crucial');

require('./libs/rb_main');

/* configuration */
rb.isDebug = true;
rb.life.autoStart = false;

//if webpack is used:
__webpack_public_path__ = ASSETBASEPATH + 'js/';

require('./utils/rb_pubsub');
require('../../grunt/webpack/globloader!./glob.paths');

(function(addImportHook){
    addImportHook(function(moduleName){
        //declare a map of module name -> paths
        moduleName = 'rb_' + moduleName;
        moduleName += '/' + moduleName;
        require(['../components/' + moduleName +'.lazy.js']);
    });
})(rb.life.addImportHook);


/* init after all modules are loaded or imports are configured. */
setTimeout(rb.life.init);





