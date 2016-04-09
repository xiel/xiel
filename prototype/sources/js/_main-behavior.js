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
// __webpack_public_path__ = ASSETBASEPATH + 'js/';

// require('../../grunt/webpack/globloader!./glob.paths');

// require('../../grunt/webpack/lazyglobloader!./lazyglob.paths');

require('./modules/lazysizes-cfg');
require('../components/rb__childfx/rb__childfx');
require('../components/rb_scrolly/rb_scrolly');
require('../components/rb_itemscroller/rb_itemscroller');
require('../components/rb_panel/rb_panel');
require('../components/rb_projectview/rb_projectview');
require('../components/rb_form/rb_validate');

require('../components/softjumpbutton/softjumpbutton');
require('../components/ajaxform/ajaxform');

/* init after all modules are loaded or imports are configured. */
setTimeout(rb.life.init);





