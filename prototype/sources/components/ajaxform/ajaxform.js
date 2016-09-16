(function(factory) {
    if(typeof module == 'object' && module.exports){
        require('../../js/utils/rb_scrollintoview');
        require('../../js/utils/rb_serialize');

        module.exports = factory();
    } else {
        factory();
    }
}( function() {
    'use strict';

    var rb = window.rb;
    var $ = rb.$;

    var AjaxForm = rb.Component.extend('ajaxform', {

        defaults: {
            // scrollEasing: 'ease-in',
            // scrollDuration: 400,
            // animateError: true,
        },

        init: function(element){
            this._super(element);

            this.$element = $(element);

            this._getElements();

            if(window.grecaptcha){
                window.grecaptcha.render(this.query('.g-recaptcha'), {
                  'sitekey' : '6Ldm9ikTAAAAALIwOI7tCB8M1Ss9ARYc0XiOXQC5',
                  'theme' : 'dark'
                });
            }
        },

        events: {
            'submit:matches(form)': function (e) {
                this.submitViaAjax(e);
            },
        },

        submitViaAjax: function(e){
            var that = this;

            this.formSubmitPromise = this.ajax({
                url: this.form.action + '?ajax=true',
                data: $(this.form).serialize(),
                contentType: this.form.encoding
            });

            this.formSubmitPromise.then(function(data) {
                that.$element.after(data);

                that.$element.next().css({
                    'minHeight': that.$element.outerHeight() + 'px'
                });

                that.$element.remove();

            }, function(reason) {
                // on rejection
                console.error(reason);
            });

            e.preventDefault();
        },

        ajax: function (opts) {
            var that = this;

            return new Promise(function(resolve, reject){
                var xhr = new XMLHttpRequest();

                xhr.open('POST', opts.url);
                xhr.onreadystatechange = handler;

                xhr.setRequestHeader('Content-Type', opts.contentType || '');
                // xhr.setRequestHeader('Accept', opts.accept);

                xhr.responseType = opts.responseType || xhr.responseType;
                xhr.send(opts.data || null);

                function handler() {
                    if (this.readyState === this.DONE) {
                        if (this.status === 200) {
                            resolve(this.response);
                        } else {
                            reject(new Error('ajax: `' + opts.url + '` failed with status: [' + this.status + ']'));
                        }
                    }
                };
            });
        },

        _getElements: function () {
            this.form = this.query('form');
        },

         _switchOn: function () {
            this._super();
            var that = this;

            console.log('_switchOn');
        },
       
    });

    return AjaxForm;
}));
