( function( $ ) {
	"use strict";


	function create( obj ) {
		var F = function() {};
		F.prototype = obj;
		return new F();
	}

	function extend( sup, ext ) {
		var base = create( sup );
		ext = $.extend( {}, base, ext );
		ext.super = base;
		return ext;
	}


	// var requestFrame, cancelFrame;
	// var addRaf = function(){
	// 	requestFrame = window.requestAnimationFrame || function(cb){
	// 		return setTimeout(cb, 16);
	// 	};
	// 	cancelFrame = window.cancelAnimationFrame || window.clearTimeout
	// };
	// var perfresize = {
	// 	setup: function() {
	// 		addRaf();
	// 		$(addRaf);
	// 		$(this).on("resize", perfresize.handler);
	// 	},
	// 	teardown: function() {
	// 		$(this).off("resize", perfresize.handler);
	// 	},
	// 	handler: (function() {
	// 		var timer, frameId, context, args;
	// 		var dispatch = function() {
	// 			clearTimeout(timer);
	// 			cancelFrame(frameId);
	// 			args[0].type = 'perfresize';
	// 			$.event.dispatch.apply(context, args);
	// 		};
	// 		var requestDispatch = function(){
	// 			clearTimeout(timer);
	// 			cancelFrame(frameId);
	// 			frameId = requestFrame(dispatch);
	// 		};
	// 		return function() {
	// 			context = this;
	// 			args = arguments;
	// 			clearTimeout(timer);
	// 			cancelFrame(frameId);
	// 			timer = setTimeout(requestDispatch, 66);
	// 		};
	// 	})()
	// };

	// $.event.special.perfresize = perfresize;

	$.fn.touchClick = ( function() {
		var supportsTouchaction = ( 'touchAction' in document.documentElement.style );
		var addTouch = !supportsTouchaction && ( 'ontouchstart' in window ) && document.addEventListener;
		return function( target, handler ) {
			var touchData, touchEnd, touchStart, stopClick, allowClick;
			var runHandler = function() {
				if ( !stopClick ) {
					return handler.apply( this, arguments );
				}
			};
			if ( addTouch ) {
				allowClick = function() {
					stopClick = false;
				};
				touchEnd = function( e ) {
					var ret, touch;
					e = e.originalEvent || {};
					$( this ).off( 'touchend touchcancel', touchEnd );
					var changedTouches = e.changedTouches || e.touches;
					if ( e.type == 'touchcancel' || !touchData || !changedTouches || changedTouches.length != 1 ) {
						return;
					}

					touch = changedTouches[ 0 ];
					if ( Math.abs( touchData.x - touch.pageX ) > 40 || Math.abs( touchData.y - touch.pageY ) > 40 || Date.now() - touchData.now > 300 ) {
						return;
					}

					e.preventDefault();
					stopClick = true;
					setTimeout( allowClick, 400 );

					ret = handler.apply( this, arguments );

					return ret;
				};

				touchStart = function( e ) {
					var touch, elemTarget;
					if ( ( !e || e.touches.length != 1 ) ) {
						return;
					}
					touch = e.touches[ 0 ];
					elemTarget = target ? $( touch.target ).closest( target ) : $( this );
					if ( !elemTarget.length ) {
						return;
					}
					touchData = {
						x: touch.pageX,
						y: touch.pageY,
						now: Date.now()
					};

					elemTarget.on( 'touchend touchcancel', touchEnd );
				};

				this.each( function() {
					this.addEventListener( 'touchstart', touchStart, true );
				} );
			} else if ( supportsTouchaction ) {
				this.css( 'touch-action', 'manipulation' );
			}

			if ( $.isFunction( target ) ) {
				handler = target;
				target = false;
				this.on( 'click', runHandler );
			} else {
				this.on( 'click', target, runHandler );
			}
			return this;
		};
	} )();

	var pluginId = 0;
	var basePlugin = {
		_create: $.noop,
		defaults: {},
		destroy: function() {
			$( document ).off( this.evtns );
			$( window ).off( this.evtns );
		},
		log: function() {
			if ( window.console && ( this.options.debug || ( window.jspackager && jspackager.devmode ) ) ) {
				console.log.apply( console, arguments );
			}
		},
		error: function() {
			if ( window.console ) {
				if ( console.error ) {
					console.error.apply( console, arguments );
				} else {
					console.log.apply( console, arguments );
				}
			}
		},
		on: function( $dom, evt, sel, fn ) {
			$dom = $( $dom );
			evt += this.evtns;
			if ( $.isFunction( sel ) ) {
				fn = sel;
			}
			if ( !this.proxies[ fn.guid ] ) {
				fn = $.proxy( fn, this );
				this.proxies[ fn.guid ] = fn;
			} else {
				fn = this.proxies[ fn.guid ];
			}

			return $.fn.on.apply( $dom, [ evt, sel, fn ] );
		},
		off: function( $dom, evt, fn ) {
			$dom = $( $dom );
			evt += this.evtns;
			evt = [ evt ];
			if ( fn ) {
				evt.push( fn );
			}
			return $.fn.off.apply( $dom, evt );
		},
		trigger: function( evt, data ) {
			var eventName = evt;
			evt = $.Event( {
				target: this.$element[ 0 ],
				type: this.name + evt
			} );
			if ( $.isFunction( this.options[ eventName ] ) ) {
				this.options[ eventName ].call( this.$element[ 0 ], evt, data );
			}
			this.$element.trigger( evt, [ data ] );
			return evt;
		}
	};

	$.pluginFactory = function( obj ) {

		if ( !obj.extends ) {
			obj.extends = 'basePlugin';
		}

		obj = extend( $.pluginFactory[ obj.extends ], obj );


		$.pluginFactory[ obj.name ] = obj;

		$.fn[ obj.name ] = function( opts ) {
			var fn, args;
			var ret = this;

			if ( this[ 0 ] ) {

				if ( typeof opts != 'string' ) {
					opts = $.extend( {}, obj.defaults, opts );
				} else {
					fn = opts;
					args = Array.prototype.slice.call( arguments, 1 );
				}

				this.each( function() {
					var inst, elemOpts, i;
					var data = $( this ).data();

					if ( data[ obj.name ] ) {
						if ( fn && args ) {
							ret = data[ obj.name ][ fn ].apply( data[ obj.name ], args );
						} else {
							console.error( 'something bad happend' );
						}
						return false;
					} else {

						elemOpts = {};

						for ( i in opts ) {
							elemOpts[ i ] = ( i in data ) ? data[ i ] : opts[ i ];
						}

						inst = create( obj );

						pluginId++;
						inst.options = elemOpts;
						inst.$element = $( this );
						inst.evtns = '.' + obj.name + '.' + obj.name + pluginId;
						inst.proxies = {};

						inst.$element.on( 'remove', function() {
							inst.destroy();
						} );

						inst = $.data( this, obj.name, inst );
						inst._create();

						for ( i in elemOpts ) {
							if ( inst[ i ] && $.isFunction( inst[ i ] ) ) {
								inst[ i ]( elemOpts[ i ] );
							}
						}

						inst._created = true;
						inst.trigger( 'created' );
					}
				} );
			}
			return ret;
		};

		$.fn[ obj.name ].proto = obj;
	};

	$.pluginFactory.basePlugin = basePlugin;

	$.pluginFactory.mixin = function( name, ext ) {
		var prop;
		var orig = $.pluginFactory[ name ];
		if ( ext.defaults ) {
			orig.defauls = $.extend( true, orig.defaults, ext.defaults );
		}
		for ( prop in ext ) {
			if ( prop == 'defaults' ) {
				continue;
			}
			if ( $.isFunction( orig[ prop ] ) && $.isFunction( ext[ prop ] ) ) {
				( function( oldFn, newFn ) {
					orig[ prop ] = function() {
						oldFn[ prop ].apply( this, arguments );
						newFn[ prop ].apply( this, arguments );
					};
				} )( orig[ prop ], ext[ prop ] );
			} else {
				orig[ prop ] = ext[ prop ];
			}
		}
	};

	if ( !$.widget ) {
		( function() {
			var _cleanData = $.cleanData;
			$.cleanData = function( elems ) {
				if ( !$.widget ) {
					for ( var i = 0, elem;
						( elem = elems[ i ] ) != null; i++ ) {
						try {
							$( elem ).triggerHandler( "remove" );
						} catch ( e ) {}
					}
				}
				_cleanData( elems );
			};
		} )();
	}

} )( window.webshim && webshim.$ || window.jQuery || window.Zepto );
