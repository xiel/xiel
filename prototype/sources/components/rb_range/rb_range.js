(function () {
    'use strict';
    /* jshint eqnull: true */
    var rb = window.rb;
    var $ = rb.$;
    var components = rb.components;

    if (!rb.i18n) {
        rb.i18n = {};
    }

    var Range = rb.Component.extend('range',
        /** @lends rb.components.range.prototype */
        {
            /**
             * @static
             * @prop {Object} defaults
             * @prop {Boolean} animate Whether component should set animation class `is-animate`. Animation has to be done in CSS.
             * @prop {String} axis='auto' Possible values: 'auto', 'horizontal', 'vertical'. ('auto' does not work, if we are in a display none wrapper and also adds some perf penalty)
             * @prop {String|Boolean} inputs='find(input)' input element(s) to combine with the range. String is processed by rb.elementsFromStr.
             * @prop {Number|Number[]} values=50 The initial/default value(s) of the range. Only if no inputs are found.
             * @prop {Number|String} step=1 Stepping for the range. Also allows the string 'any'.
             * @prop {Number} max=100 The maximum value of the range. If an input with a `data-max` or `max` attribute is found its this value is used.
             * @prop {Number} min=0 The minimum value of the range. If an associated input with a `data-max` or `max` attribute is found its value is used.
             * @prop {null|String|String[]} titles=null The title attribute for the thumb(s). (Only if no inputs with a title is found.)
             * @prop {null|String|String[]} labelIds=null The labelIds for the thumb(s). To be used with aria-labelledby. (Only if no inputs with a label are found.)
             * @prop {null|String|String[]} labels=null The labels for the thumb(s). To be used with aria-label. (Only if no inputs with a label are found.)
             */
            defaults: {
                animate: true,
                axis: 'auto',
                inputs: 'find(input)',
                values: 50,
                step: 1,
                max: 100,
                min: 0,
                titles: null,
                labelIds: null,
                labels: null,
            },
            statics: {
                horizontal: {
                    pos: 'left',
                    dim: 'width',
                    viewPos: 'x',
                    mousePos: 'clientX',
                },
                vertical: {
                    pos: 'bottom',
                    dim: 'height',
                    viewPos: 'y',
                    mousePos: 'clientY',
                },
                getNearestIndex: function (pos, array) {
                    var i, len, cur, tmp;
                    var index = -1;
                    for (i = 0, len = array.length; i < len; i++) {
                        tmp = Math.abs(pos - array[i]);
                        if (!cur || cur > tmp) {
                            index = i;
                            cur = tmp;
                        }
                    }
                    return index;
                },
                makeArray: function (array) {
                    if (!Array.isArray(array)) {
                        array = array != null ? [array] : [];
                    }
                    return array;
                }
            },
            /**
             * @constructs
             * @extends rb.Component
             * @classdesc Creates a range input control with one are more thumbs.
             *
             * @fires componentName#changed
             *
             *
             * @prop {Number[]} values Returns current values of the range control
             * @prop {$.CallbackObject} oninput
             * @prop {$.CallbackObject} oninput.add Adds a callback function.
             * @prop {$.CallbackObject} oninput.remove Removes a callback function.
             *
             *
             * @param element
             *
             * @example
             * <div class="rb-range js-rb-life" data-module="range" data-values="[0, 100]"></div>
             *
             * <!-- combined with visible input -->
             * <label for="range-1">range</label>
             * <input value="10" min="1" max="10" type="number" id="range-1" />
             * <div class="rb-range js-rb-life" data-module="range" data-inputs="range-1"></div>
             *
             * @example
             *
             * rb.$('.rb-range').rbComponent().oninput.add(function(index){
			 *      console.log('value changing', this.getValues(index));
			 * });
             *
             * rb.$('.rb-range').on('rangechanged', function(){
			 *      console.log('values changed', rb.$(this).rbComponent().getValues());
			 * });
             */
            init: function (element, initialDefaults) {
                this._super(element, initialDefaults);

                this.pos = [];

                this._origin = 'component';

                this.oninput = $.Callbacks();

                this._setThumbValues = rb.rAF(this._setThumbValues, {batch: true});
                this._setInputValues = rb.rAF(this._setInputValues, {batch: true});
                this._setActivateClass = rb.rAF(this._setActivateClass);
                this._setAnimateClass = rb.rAF(this._setAnimateClass);
                this.oninput.fireWith = rb.rAF(this.oninput.fireWith);
                this._generateMarkup = rb.rAF(this._generateMarkup);
                this._updateMinMax = rb.rAF(this._updateMinMax);

                this._updateOptions = rb.throttle(function () {
                    this.updateInputData();
                    this._setThumbValues();
                    this._updateMinMax();
                }, {simple: true, delay: 0});

                this._detectAxis();
                this._getOptionsByInputs();
                this._generateMarkup();

            },
            setOption: function (name, value) {
                this._super(name, value);

                if (name == 'max' || name == 'min' || name == 'step') {
                    this._updateOptions();
                } else if (name == 'inputs') {
                    this._getOptionsByInputs();
                    this._generateMarkup();
                }
            },
            /**
             * Returns values or values[index]
             * @param {Number} [index]
             * @returns {Number|Number[]}
             */
            getValues: function (index) {
                return (index == null) ? this.values : this.values[index];
            },
            /**
             * Set the value of a thumb (and associated input) in the range control.
             * @param {Number} value
             * @param {Number} [index=0]
             * @param {Boolean} [animate=false]
             */
            setValue: function (value, index, animate) {
                if (typeof index == 'boolean') {
                    animate = index;
                    index = 0;
                }
                if (animate == null) {
                    animate = this.options.animate;
                }
                index = index || 0;
                this._origin = 'external';
                this._setValue(this.constrainMinMax(value), index, animate);
                this._trigger({origin: 'external', index: index});
                this._origin = 'component';
            },
            /**
             * Sets the value of a thumb (and associated input) to the next higher value.
             * @param {Number} [factor]
             * @param {Number} [index=0]
             * @param {Boolean} [animate=false]
             */
            stepUp: function (factor, index, animate) {
                if (typeof index == 'boolean') {
                    animate = index;
                    index = 0;
                }
                if (!index) {
                    index = 0;
                }

                this._origin = 'external';
                this._doStep(factor, index, animate);
                this._trigger({origin: 'external', index: index});
                this._origin = 'component';
            },
            /**
             * Sets the value of a thumb (and associated input) to the next lower value.
             * @param {Number} [factor]
             * @param {Number} [index=0]
             * @param {Boolean} [animate=false]
             */
            stepDown: function (factor, index, animate) {
                if (!factor) {
                    factor = 1;
                }
                this.stepUp(factor * -1, index, animate);
            },
            /**
             * Parses a string to a number. Use `rb.i18n.parseNumber`, if available. Can be overridden.
             * @param {String|Number} number
             * @returns {Number}
             */
            parseNumber: function (string) {
                if (typeof string != 'number') {
                    if (rb.i18n.formatNumber) {
                        string = rb.i18n.parseNumber.apply(rb.i18n, arguments);
                    } else {
                        string = parseFloat(string);
                    }
                }
                return string;
            },
            /**
             * Formats a number to a string. Use `rb.i18n.formatNumber`, if available. Can be overridden.
             * @param {String|Number} number
             * @returns {Number}
             */
            formatNumber: function (number) {
                if (rb.i18n.formatNumber) {
                    number = rb.i18n.formatNumber.apply(rb.i18n, arguments);
                } else if (typeof number != 'string') {
                    number = number + '';
                }
                return number;
            },

            constrainMinMax: function (value) {
                var valModStep, alignValue;
                var step = this.options.step;
                if (value > this.max) {
                    value = this.max;
                } else if (value < this.min) {
                    value = this.min;
                } else if (this.options.step != 'any') {
                    valModStep = (value - this.min) % step;
                    alignValue = value - valModStep;

                    if (Math.abs(valModStep) * 2 >= step) {
                        alignValue += ( valModStep > 0 ) ? step : ( -step );
                    }
                    value = ((alignValue).toFixed(5)) * 1;
                }
                return value;
            },

            posToValue: function (pos) {
                var value = ((this.max - this.min) * (pos / 100)) + this.min;
                value = this.constrainMinMax(value);
                return value;
            },
            valueToPos: function (value) {
                var pos;
                value = this.constrainMinMax(this.parseNumber(value));
                pos = 100 * ((value - this.min) / (this.max - this.min));
                return pos;
            },
            updateInputData: function () {
                var options = this.options;

                this.max = null;
                this.min = null;
                this.step = null;

                if (this.inputs.length) {
                    this._parseInputsProperties();
                }

                if (this.max == null) {
                    this.max = options.max;
                }

                if (this.min == null) {
                    this.min = options.min;
                }

                if (this.step == null) {
                    this.step = options.min;
                }

                if (!this.values.length) {
                    this.values = Range.makeArray(options.values);
                }

                this._clacSteps();
            },
            _generateMarkup: function () {
                var $progress, list, tmp;
                var that = this;
                var $rail = $(document.createElement('span'));
                var progressClass = this.name + '-progress';
                var thumbClass = this.name + '-thumb';
                var tooltipClass = this.name + '-tooltip';
                var tooltipValueClass = tooltipClass + '-value';
                var trackClass = this.name + '-track';
                var handles = '<span class="' + thumbClass + '" role="slider" tabindex="0">' +
                        '<span class="' + tooltipClass + '"> ' +
                        '<span class="' + tooltipValueClass + '"></span>' +
                        '</span>' +
                        '</span>'
                    ;

                tmp = '<span class="' + progressClass + ' ' + progressClass + '-min"></span>';

                if (this.values.length > 1) {
                    tmp += '<span class="' + progressClass + ' ' + progressClass + '-max"></span>';
                }

                handles = tmp + handles.repeat(this.values.length);

                $rail.prop({
                    className: this.name + '-rail',
                    innerHTML: '<span class="' + trackClass + '">' + handles + '</span>'
                });

                this.track = $rail.find('.' + trackClass).get(0);

                this.thumbs = $rail.find('.' + thumbClass).get();
                this.tooltips = $rail.find('.' + tooltipValueClass).get();

                $progress = $rail.find('.' + progressClass);

                this.progressMin = $progress.get(0);
                this.progressMax = $progress.get(1);

                if (this.thumbs.length > 1) {
                    this.thumbs[0].setAttribute('aria-controls', this.getId(this.thumbs[1]));
                    this.thumbs[this.thumbs.length - 1].setAttribute('aria-controls', this.getId(this.thumbs[this.thumbs.length - 2]));
                }

                this._setupEvents();
                this._setThumbValues();
                this._updateMinMax();

                list = that.element.querySelector(that.name + '-list');
                if (list) {
                    that.track.appendChild(list);
                }

                this._addLabelTitles();

                that.$element.append($rail.get(0));
            },
            _addLabelTitles: function () {
                var that = this;
                var options = this.options;
                var titles = Range.makeArray(options.titles);
                var labelIds = Range.makeArray(options.labelIds);
                var labels = Range.makeArray(options.labels);

                if (this.inputs.length && !titles.length && !labelIds.length && !labels.length) {
                    this.inputs.forEach(function (input) {
                        var id = '';
                        var elem = input.labels && input.labels[0];
                        var title = input.title;

                        if (!('labels' in input) && input.id) {
                            elem = document.querySelector('label[for="' + input.id + '"]');
                        }

                        if (elem) {
                            id = that.getId(elem);
                        }

                        titles.push(title);
                        labelIds.push(id);
                    });
                }

                this.thumbs.forEach(function (thumb, index) {
                    if (titles[index]) {
                        thumb.title = titles[index];
                    }
                    if (labels[index]) {
                        thumb.setAttribute('aria-label', labels[index]);
                    }
                    if (labelIds[index]) {
                        thumb.setAttribute('aria-labelledby', labelIds[index]);
                    }
                });
            },
            _detectAxis: function () {
                this.axis = this.options.axis;
                if (this.axis == 'auto') {
                    this.axis = 'horizontal';
                    if (this.element.offsetHeight - 9 > this.element.offsetWidth) {
                        this.axis = 'vertical';
                    }
                }
                this.props = Range[this.axis];

                if (!this.props) {
                    this.log('unknown axis: ' + this.axis, this);
                }
            },
            _getOptionsByInputs: function () {

                var inputOpts = this.options.inputs;

                this.inputs = [];
                this.values = [];

                if (inputOpts) {
                    this.inputs = rb.elementFromStr(inputOpts, this.element);
                }
                this.updateInputData();
            },
            _updateMinMax: function () {
                $(this.thumbs).attr({
                    'aria-valuemax': this.max,
                    'aria-valuemin': this.min,
                });
            },
            _setActivateClass: function () {
                this.element.classList[this.isActivated ? 'add' : 'remove'](rb.statePrefix + 'active');
            },
            _activate: function (index) {
                if (!this.isActivated) {
                    this.isActivated = true;
                    if (index != null) {
                        $(this.thumbs[index]).stop();
                    }
                    this._setActivateClass();
                }
            },
            _deactivate: function (index) {
                if (this.isActivated) {
                    this.isActivated = false;
                    this._setActivateClass();

                    this._trigger({origin: 'component', index: index});
                }
            },
            _setAnimateClass: function () {
                this.element.classList[this.isAnimated ? 'add' : 'remove'](rb.statePrefix + 'animate');
            },
            _setAnimate: function (animate) {
                animate = !!animate;
                if (animate != this.isAnimated) {
                    this.isAnimated = animate;
                    this._setAnimateClass();
                }
            },
            _getNearestTumb: function (pos) {
                return Range.getNearestIndex(pos, this.pos);
            },
            _setupEvents: function () {
                var outerBox, notMoved, index;
                var that = this;

                this.$element.draggy('destroy');

                this.$element
                    .draggy({
                        vertical: this.axis == 'vertical',
                        horizontal: this.axis == 'horizontal',
                        start: function (draggy) {
                            var pos;
                            notMoved = true;
                            outerBox = that.track.getBoundingClientRect();
                            //y
                            pos = (draggy.curPos[that.props.viewPos] - outerBox[that.props.pos]) / outerBox[that.props.dim] * 100;

                            if (that.axis == 'vertical') {
                                pos *= -1;
                            }

                            index = that._getNearestTumb(pos);
                            that._setValue(that.posToValue(pos), index, that.options.animate);
                            that.setFocus(that.thumbs[index]);
                            that._activate(index);
                        },
                        move: function (draggy) {
                            var pos = (draggy.curPos[that.props.viewPos] - outerBox[that.props.pos]) / outerBox[that.props.dim] * 100;

                            if (that.axis == 'vertical') {
                                pos *= -1;
                            }

                            if (notMoved) {
                                $(that.thumbs[index]).stop();
                                notMoved = false;
                            }
                            that._setValue(that.posToValue(pos), index);
                        },
                        end: function () {
                            that._deactivate(index);
                        }
                    })
                ;

                $(this.inputs).each(function (index, input) {
                    var change = rb.throttle(function () {
                        var value = that.parseNumber(input.value);
                        if (!isNaN(value)) {
                            that._setValue(that.constrainMinMax(value), index, that.options.animate);
                        }
                    }, {delay: 99, simple: true});

                    $(input).on('change', change).on('input', change);
                });

                $(this.thumbs).each(function (index, thumb) {
                    $(thumb)
                        .on('keyup', function () {
                            that._deactivate(index);
                        })
                        .on('keydown', function (e) {
                            var step, value;
                            var code = e.keyCode;

                            if (code == 39 || code == 38) {
                                step = that.defaultStep;
                            } else if (code == 37 || code == 40) {
                                step = that.defaultStep * -1;
                            } else if (code == 33) {
                                step = that.largeStep;
                            } else if (code == 34) {
                                step = that.largeStep * -1;
                            } else if (code == 36) {
                                value = that.min;
                            } else if (code == 35) {
                                value = that.max;
                            }

                            if (step != null || value != null) {
                                e.preventDefault();
                                that._activate(index);
                                if (step != null) {
                                    that._doStep(step, index);
                                } else {
                                    that._setValue(value, index);
                                }
                            }
                        })
                    ;

                });
            },
            _handleInputProperties: function (input) {
                var value = this.parseNumber(input.value);
                var max = input.getAttribute('data-max') || input.getAttribute('max');
                var min = input.getAttribute('data-min') || input.getAttribute('min');
                var step = this.step == null && (input.getAttribute('data-step') || input.getAttribute('step'));

                if (max) {
                    max = parseFloat(max);
                    if (this.max == null || max > this.max) {
                        this.max = max;
                    }
                }

                if (min) {
                    min = parseFloat(min);
                    if (this.min == null || min < this.min) {
                        this.min = min;
                    }
                }

                if (step) {
                    this.step = step;
                }

                return value;
            },
            _parseInputsProperties: function () {
                this.values = this.inputs.map(this._handleInputProperties, this);
            },
            _doStep: function (factor, index, animate) {
                if (!factor) {
                    factor = 1;
                }
                this._setValue(this.constrainMinMax(this.getValues(index) + (this.defaultStepping * factor)), index, animate);
            },
            _setValue: function (value, index, animate) {
                var changed, beforeValue, afterValue;

                if (index == null) {
                    index = 0;
                }

                if (this.values[index] !== value) {
                    changed = true;
                    beforeValue = this.values[index - 1];
                    afterValue = this.values[index + 1];

                    if (beforeValue != null && beforeValue > value) {
                        this._setValue(value, index - 1, animate);
                    } else if (afterValue != null && afterValue < value) {
                        this._setValue(value, index + 1, animate);
                    }
                    this.values[index] = value;
                }

                if (changed) {
                    this._setAnimate(animate);
                    this._setThumbValues(index);
                    this._setInputValues(index);
                    this.oninput.fireWith(this, [index, this._origin]);
                }
            },
            _clacSteps: function () {
                var range = this.max - this.min;
                this.defaultStep = 1;

                this.defaultStepping = (this.options.step == 'any') ?
                    Math.min(1, range / 100) :
                    this.options.step;

                this.largeStep = Math.max(this.defaultStep * 2, range / this.defaultStep / 10);
            },

            _setThumbValue: function (thumb, index) {
                var value = this.values[index];
                var pos = this.valueToPos(value);
                var formatted = this.formatNumber(value);

                this.pos[index] = pos;
                thumb.style[this.props.pos] = pos + '%';
                thumb.setAttribute('aria-valuenow', value);
                thumb.setAttribute('aria-valuetext', this.formatNumber(value));
                this.tooltips[index].setAttribute('data-value', formatted);

                if (index === 0) {
                    this.progressMin.style[this.props.dim] = pos + '%';
                } else if (index == this.thumbs.length - 1 && this.progressMax) {
                    this.progressMax.style[this.props.dim] = (100 - pos) + '%';
                }

            },
            _setThumbValues: function (index) {

                if (index == null) {
                    this.thumbs.forEach(this._setThumbValue, this);
                } else if (this.thumbs[index]) {
                    this._setThumbValue(this.thumbs[index], index);
                }
            },
            _setInputValue: function (input, index) {
                var value = this.values[index];
                value = input.type == 'text' ?
                    this.formatNumber(this.values[index]) :
                    value
                ;
                if (value != input.value) {
                    input.value = value;
                }
            },
            _setInputValues: function (index) {
                if (index == null) {
                    this.inputs.forEach(this._setInputValue, this);
                } else if (this.inputs[index]) {
                    this._setInputValue(this.inputs[index], index);
                }
            },
        }
    );
})();
