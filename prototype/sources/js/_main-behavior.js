window.BezierEasing = require('bezier-easing');

var ASSETBASEPATH = window.siteData && siteData.basePath || '';

//load dom or jQuery
require('rawblock/sources/js/libs/rb_$');
require('rawblock/sources/js/libs/rb_crucial');
require('rawblock/sources/js/libs/rb_main');

//if webpack is used:
// __webpack_public_path__ = ASSETBASEPATH + 'js/';
// require('../../grunt/webpack/globloader!./glob.paths');
// require('../../grunt/webpack/lazyglobloader!./lazyglob.paths');

require('lazysizes');
require('./modules/lazysizes-cfg');

require('rawblock/sources/components/rb__childfx/rb__childfx');
require('rawblock/sources/components/rb_scrolly/rb_scrolly');
require('rawblock/sources/components/rb_itemscroller/rb_itemscroller');
require('rawblock/sources/components/rb_panel/rb_panel');
require('rawblock/sources/components/rb_form/rb_validate'); 

require('../components/projectview/projectview');
require('../components/softjumpbutton/softjumpbutton');
require('../components/ajaxform/ajaxform');

/* init after all modules are loaded or imports are configured. */
setTimeout(function(){
	/* configuration */
	rb.isDebug = true;
	rb.live.autoStart = false;
	rb.live.init();

	document.addEventListener('lazyunveilread', function(e){
	    var container = e.target;
	    var module = container.getAttribute('data-module');

	    console.log('module', module, rb.getComponent(container, module) );

	    if(module) {
	        if(rb.getComponent){
	            rb.getComponent(container, module);
	        } else {
	            lazySizes.rAF(()=>{
	                container.classList.add('js-rb-live');
	            });
	        }
	    }
	});

	document.addEventListener('lazyunveil', function(e){
	    var container = e.target;
	    var module = container.getAttribute('data-module');

	    console.log('module', module, rb.getComponent(container, module) );

	    if(module) {
	        if(rb.getComponent){
	            rb.getComponent(container, module);
	        } else {
	            lazySizes.rAF(()=>{
	                container.classList.add('js-rb-live');
	            });
	        }
	    }
	});
});
