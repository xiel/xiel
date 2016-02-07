(function (factory) {
    if (typeof module === 'object' && module.exports) {
        require('../rb_panel/rb_panel');
        // require('../../js/utils/rb_position');
        module.exports = factory();
    } else {
        factory();
    }
}(function () {
    'use strict';
    /* jshint eqnull: true */
    var rb = window.rb;
    var $ = rb.$;
    var life = rb.life;
    var components = rb.components;

    // var Position = rb.Position;

    components.panelgroup.extend('projectview',
        /** @lends rb.components.projectview.prototype */
        {
            /**
             * @static
             * @mixes rb.components.panelgroup.defaults
             * @property {Object} defaults Changed options compared to the panelgroup component. Go to {@link rb.components.panelgroup#defaults} for detailed option descriptions.
             * @property {Boolean}  defaults.toggle=false
             * @property {Number}  defaults.selectedIndex=0
             * @property {String}  defaults.animation='adaptHeight'
             */
            defaults: {
                selectedIndex: -1,
                toggle: false,
                animation: 'adaptHeight',
                preventDefault: true,
                panelComponentName: '{name}panel',
            },

            init: function (element, initialDefaults) {
                this._super(element, initialDefaults);

                console.log('projectview- - -  - - - - -', this, this.open);
            },

            selectIndex: function (index, options) {
                var component = this.getComponentByIndexOrDOM(index);

                console.log('selectIndex', index, options);

                return component && component.open(options);
            },

            deselectIndex: function (index, options) {
                var component = this.getComponentByIndexOrDOM(index);

                console.log('deselectIndex', index, options);

                return component && component.close(options);
            },

            panelChangeCB: function (panelComponent, action) {
                var start = +new Date();
                console.log('panelChangeCB', panelComponent, action, start);

                switch (action) {
                    case 'beforeopen':

                        // while(+new Date() - start < 1000) {
                        //     console.log('think', start);
                        // }

                        break;
                    case 'afteropen':
                    case 'afterclose':
                        this._updatePanelInformation();
                        this._triggerOnce();
                        break;
                }

                
            },

            _getElements: function () {
                var panels;
                var that = this;
                var options = this.options;

                var buttonWrapper = this.getElementsFromString(options.btnWrapperSel)[0];
                var itemWrapper = this.interpolateName(this.options.itemWrapper || '');

                var panelName = this.interpolateName(this.options.panelName);
                var jsPanelName = this.interpolateName(this.options.panelName, true);
                this.$panelWrapper = $(this.getElementsFromString(options.panelWrapperSel));

                var panelComponentName = this.interpolateName(this.options.panelComponentName);

                //check if there is a special sub-class panel for this component, if not, fall back to normal panel
                if(!(panelComponentName in rb.components)){
                    panelComponentName = 'panel';
                }

                console.log('rb.components', rb.components, rb.components.panel);
                console.log('panelName, jsPanelName', panelName, jsPanelName);
                console.log('panelComponentName:::::::', panelComponentName, panelComponentName in rb.components );

                this.$panels = $(this.getElementsFromString(options.panelSel, this.$panelWrapper.get(0))).each(function (index) {
                    var panel = life.create(this, rb.components[panelComponentName], {
                        jsName: jsPanelName,
                        name: panelName,
                        resetSwitchedOff: options.resetSwitchedOff,
                        setFocus: options.setFocus,
                        itemWrapper: itemWrapper,
                        closeOnEsc: options.closeOnEsc,
                    });

                    panel.group = that.element;
                    panel.groupComponent = that;
                });

                components.panel.prototype.name = 'panel';

                panels = this.$panels;

                this.$buttons = $(this.getElementsFromString(options.btnSel, buttonWrapper)).each(function (index) {
                    var btn = life.create(this, components.panelbutton, {
                        type: (options.toggle) ? 'toggle' : 'open',
                        preventDefault: options.preventDefault,
                    });
                    btn.setTarget(panels.get(index));
                });

                this.$groupButtons = $(this.getElementsFromString(options.groupBtnSel)).each(function (index) {
                    var btn = life.create(this, components.panelgroupbutton, {
                        preventDefault: options.preventDefault
                    });
                    btn.setTarget(that.element);
                });
            },

        }
    );

    components.panel.extend('projectviewpanel',
        /** @lends rb.components.projectview.prototype */
        {
            /**
             * @static
             * @mixes rb.Component.defaults
             * @property {Object} defaults
             * @property {String} defaults.animation='' Predefined animation: 'slide'. These should be combined with CSS transitions or animations.
             * @property {String} defaults.easing='' CSS Easing function for the animation.
             * @property {Number} defaults.duration=400 Duration of the animation.
             * @property {Boolean} defaults.setFocus=true Whether the component should set the focus on open.
             * @property {Boolean} defaults.closeOnOutsideClick=false Whether the component should be closed, if clicked outside the component.
             * @prop {Boolean} defaults.switchedOff=false Turns off panel.
             * @prop {Boolean} defaults.resetSwitchedOff=true Resets panel to initial state on reset switch.
             * @prop {Boolean} defaults.closeOnEsc=false Whether panel should be closed on esc key.
             * @prop {String} defaults.itemWrapper='' Wheter the closest itemWrapper should get the class `is-selected-within'.
             */
            // defaults: {
            //     animation: '', // || 'slide'
            //     duration: 400,
            //     easing: '',
            //     setFocus: true, // true || false
            //     closeOnOutsideClick: false,
            //     resetSwitchedOff: true,
            //     switchedOff: false,
            //     closeOnEsc: false,
            //     itemWrapper: '',
            // },

            init: function (element, initialDefaults) {
                this._super(element, initialDefaults);

                console.log('projectview-panel', this, this.open);
            },

            /**
             * Opens the panel
             * @param {Object} [options] Options are also dispatched with the event.detail property.
             * @param {Boolean} [options.animationPrevented] If `true` panel opens without animation.
             * @param {Boolean} [options.setFocus] Overrides the general `setFocus` option of the component instance.
             * @returns {boolean}
             * @example
             * //opens a panel without animation and without setting focus.
             * rb.$('.rb-panel').rbComponent().open({animationPrevented: true, setFocus: false});
             */
            open: function (options) {
                if (this.isOpen) {
                    return false;
                }
                var mainOpts = this.options;
                var changeEvent = this._trigger(this._beforeEvtName, options);

                console.log('projectview-panel OPEN!!!!!', options);

                if(!options){
                    options = {};
                }

                if (changeEvent.defaultPrevented) {
                    return false;
                }

                if (this.groupComponent) {
                    this.groupComponent.panelChangeCB(this, 'beforeopen');
                }

                clearTimeout(this._closeTimer);

                this.isOpen = true;
                this._handleAnimation(changeEvent);

                if (options.setFocus !== false && (mainOpts.setFocus || options.setFocus) && !options.focusElement) {
                    options.focusElement = this.getFocusElement();
                }

                if(options.focusElement && regInputs.test(options.focusElement.nodeName)){
                    this._opened._rbUnrafedFn.call(this, options);
                } else {
                    this._opened(options);
                }
                return true;
            },


        }
    );

    return components;
}));
