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

    var cleanupCSS = function () {
        var css = {display: ''};

        if (!this.style.height.startsWith('0')) {
            css.height = '';
            css.overflow = '';
        }

        $(this).css(css);
    };

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
                multiple: false,
                toggle: true,
                animation: 'adaptHeight', // 'adaptHeight' || 'slide'
                easing: '',
                duration: 400,
                closeOnFocusout: false,
                selectedIndex: -1,
                adjustScroll: true, //true || false
                setFocus: true,
                switchedOff: false,
                resetSwitchedOff: true,
                panelName: '{name}-panel',
                panelSel: 'find(.{name}-panel)',
                btnSel: 'find(.{name}-btn)',
                groupBtnSel: 'find(.{name}-ctrl-btn)',
                panelWrapperSel: 'find(.{name}-panel-wrapper):0',
                btnWrapperSel: 'find(.{name}-btn-wrapper):0',
                itemWrapper: '',

                //special options compared to panelgroup
                panelComponentName: '{name}panel',
                preventDefault: true,
                closeOnEsc: true,
            },

            init: function (element, initialDefaults) {
                var that = this;

                this._super(element, initialDefaults);

                // setTimeout(function(){
                //     console.log('projectview', that);
                //     console.log('rb.components', rb.components);
                //     console.log('this.selectedIndexes', that.selectedIndexes);
                //     console.log('this.selectedItems', that.selectedItems);
                // });
            },

            _handleAnimation: function(animationData){
                if(animationData.animation == 'slide' && animationData.panel.isOpen){
                    this.adjustScroll(animationData.panel, animationData.options);
                } else if(animationData.animation == 'adaptHeight' && animationData.panel.isOpen){
                    this.animateWrapper(animationData.panel.element);
                } else if(animationData.animation == 'adaptHeight') {
                    this.animateWrapper();
                }

                //scroll into view
                // var panelWrapper = this.$panelWrapper.get(0);
                // if(false && panelWrapper.scrollIntoViewIfNeeded){
                //     panelWrapper.scrollIntoViewIfNeeded(true);
                // } else if(panelWrapper.scrollIntoView){
                //     panelWrapper.scrollIntoView({behavior: "smooth"});
                // }
            },

            animateWrapper: function (openedPanel) {
                var end;

                var that = this;
                var panels = this.$panels.get();
                var curIndex = -1;
                var panelWrapper = this.$panelWrapper.get(0);
                var nextIndex = panels.indexOf(openedPanel);
                var closingPanels = [];

                var start = panelWrapper.offsetHeight;

                this.$panelWrapper.stop();

                panelWrapper.style.height = 'auto';

                this.selectedItems.forEach(function (panel) {
                    panel.style.display = 'none';
                    curIndex = panels.indexOf(panel);
                    closingPanels.push(panel);
                });

                if(openedPanel) {
                    openedPanel.style.display = 'block';
                    openedPanel.style.position = 'relative';
                }

                end = panelWrapper.offsetHeight;

                this.selectedItems.forEach(function (panel) {
                    panel.style.display = '';
                });

                if(openedPanel) {
                    openedPanel.style.display = '';
                    openedPanel.style.position = '';
                }

                $(closingPanels).addClass(rb.statePrefix + 'closing');

                this.$panelWrapper
                    .attr({'data-direction': nextIndex > curIndex ? 'up' : 'down'})
                    .css({
                        overflow: 'hidden',
                        height: start + 'px'
                    })
                    .animate({height: end}, {
                        duration: this.options.duration,
                        easing: this.options.easing,
                        always: function () {
                            that.$panels.removeClass(rb.statePrefix + 'closing');
                            that.$panelWrapper
                                .removeClass(rb.statePrefix + 'fx')
                                .attr({'data-direction': ''})
                            ;
                            cleanupCSS.call(this);
                        }
                    })
                    .addClass(rb.statePrefix + 'fx')
                ;

            },

            //initialize panels with given panelComponentName or default panel component
            _getElements: function () {
                var panels;
                var that = this;
                var options = this.options;

                var buttonWrapper = this.getElementsFromString(options.btnWrapperSel)[0];
                var itemWrapper = this.interpolateName(this.options.itemWrapper || '');

                var panelName = this.interpolateName(this.options.panelName);
                var jsPanelName = this.interpolateName(this.options.panelName, true);
                this.$panelWrapper = $(this.getElementsFromString(options.panelWrapperSel));

                var panelComponentName = this.interpolateName(this.options.panelComponentName || 'panel');

                //check if there is a special sub-class panel for this component, if not, fall back to normal panel
                if(!(panelComponentName in rb.components)){
                    console.warn('projectview | did not found given panelComponentName in rb.components', panelComponentName);
                    panelComponentName = 'panel';
                }

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

                components.panel.prototype.name = panelComponentName;

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
            defaults: {
                animation: '', // || 'slide'
                duration: 400,
                easing: '',
                setFocus: true, // true || false
                closeOnOutsideClick: false,
                resetSwitchedOff: true,
                switchedOff: false,
                closeOnEsc: true,
                itemWrapper: '',
            },

            init: function (element, initialDefaults) {
                this._super(element, initialDefaults);

                // console.log('projectviewpanel', this);
                // console.log('element, button', this.element, this.buttonComponent);

                // if(this.buttonComponent && this.buttonComponent.element){
                //     this.loadPanelContent();
                // }
            },

            loadPanelContent: function(){
                var that = this;

                if(!(this.buttonComponent && this.buttonComponent.element)){
                    return false
                }

                var buttonElement = this.buttonComponent.element;
                var buttonHref = buttonElement.href;

                console.log('href', buttonHref);

                if(buttonHref && buttonHref !== '#'){
                    this.panelAjaxContent = ajax(buttonHref + '?ajax=true');

                    this.panelAjaxContent.then(function(data) {
                        // on fulfillment
                        console.log('NEW DATA!!!', that);
                        that.$element.html(data);

                    }, function(reason) {
                        // on rejection
                        console.log(reason);
                    });
                }

                function ajax(url) {
                    return new Promise(function(resolve, reject){
                        var xhr = new XMLHttpRequest();

                        xhr.open('GET', url);
                        xhr.onreadystatechange = handler;
                        // xhr.responseType = 'json';
                        // xhr.setRequestHeader('Accept', 'application/json');
                        xhr.send();

                        function handler() {
                            if (this.readyState === this.DONE) {
                                if (this.status === 200) {
                                    resolve(this.response);
                                } else {
                                    reject(new Error('ajax: `' + url + '` failed with status: [' + this.status + ']'));
                                }
                            }
                        };
                    });
                }
            },

            _switchOn: function () {
                // console.log('_switchOn projectviewpanel', this.buttonComponent);

                if (this.isOpen) {
                    this.element.classList.add(rb.statePrefix + 'open');
                }

                this.element.classList.remove(rb.statePrefix + 'switched-off');

                this.element.setAttribute('aria-hidden', '' + (!this.isOpen));

                this.$element.attr({'role': this._role || 'group', tabindex: '-1'});

                if(this.buttonComponent) {
                    this.loadPanelContent();
                }
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
