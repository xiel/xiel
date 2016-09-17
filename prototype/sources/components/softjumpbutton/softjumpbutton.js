(function (factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        factory();
    }
}(function () {
    'use strict';
    var rb = window.rb;

    var SoftScrollButton = rb.components.button.extend('softjumpbutton',
        /** @lends rb.components.softjumpbutton.prototype */
        {
            /**
             * @static
             * @property {Object} defaults
             * @property {String} defaults.target="" String that references the target element. Is processed by rb.elementFromStr.
             * @property {Boolean} defaults.preventDefault=true Whether the default click action should prevented.
             * @property {Boolean} defaults.focusTarget=false Whether target sohuld be focused after scrolling to it
             * @property {*} defaults.args=null Arguments to be used to invoke target method.
             */
            defaults: {
                target: '',
                args: null,
                switchedOff: false,
                preventDefault: true,
                focusTarget: false,
            },
            init: function (element, initialDefaults) {
                this._super(element, initialDefaults);
            },
            _onClick: function (e) {
                var args;
                this._super(e);

                if (this.options.switchedOff || this._preventClick || this.element.disabled) {
                    return;
                }

                var target = this.getTarget();

                if(target){
                	rb.$(target).scrollIntoView({
                		durationMax: 2000,
                		focus: this.options.focusTarget ? target : false,
                		hash: this.targetAttr
                	});

                	if(this.options.preventDefault){
                		e.preventDefault();
                	}
                }
            },
            /**
             * Returns the current target of the button
             * @returns {Element}
             */
            getTarget: function () {
            	var superReturn = this._super();

            	if(superReturn){
            		return superReturn;
            	}

                var target = this.element.getAttribute('href').replace('#', '');

                if (!this.target || (target != this.targetAttr)) {
                    this.targetAttr = target;
                    this.target = rb.elementFromStr(target, this.element)[0];
                }

                return this.target;
            },
        }
    );

    return SoftScrollButton;
}));