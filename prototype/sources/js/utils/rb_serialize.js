(function (factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        factory();
    }
}(function () {
    'use strict';

    var regHash = /^#/;
    var $ = rb.$ || window.jQuery;

    var serializeDefaults = {
        includeDisabled: false,
        fieldTypeExcludes: ['file', 'reset', 'submit', 'button', 'fieldset']
    }

    /**
     * A jQuery/rb.$ plugin to serialize the form data into a string
     * 
     * @function external:"jQuery.fn".serialize
     * 
     * @param options {object} chose which fields should ne included
     * @param options.includeDisabled=false {Boolean} option to include disabled fields
     * @param options.fieldTypeExcludes {Array of Strings} which fields should be ignored
     *
     * @returns {String} serialized form data
     */

    $.fn.serialize = function (options) {
        var serializedToString;
        var serializedToArray;

        var elem = this.get(0);
        var opts = Object.assign({}, serializeDefaults, options);

        if(!elem){
            return this;
        }

        serializedToArray = this.serializeArray(options);
        serializedToString = serializedToArray.map(function(field){
          return encode(field.name, field.value)
        }).join('&');

        return serializedToString;
    };


    /**
     * A jQuery/rb.$ plugin to serialize the form data into an array
     * 
     * @function external:"jQuery.fn".serializeArray
     * 
     * @param options {object} chose which fields should ne included
     * @param options.includeDisabled=false {Boolean} option to include disabled fields
     * @param options.fieldTypeExcludes {Array of Strings} which fields should be ignored
     *
     * @returns {Array} serialized form data as Array of name / value pairs
     */
    $.fn.serializeArray = function(options) {
        var formElements;
        var serializedToArray;

        var elem = this.get(0);
        var opts = Object.assign({}, serializeDefaults, options);

        if(!elem){
            return this;
        }

        formElements = elem.elements;

        serializedToArray = [].map.call(formElements, function(field){
            var fieldSerialized = [];

            //check if field is acceptable
            if(!field.name || opts.fieldTypeExcludes.indexOf(field.type) > -1 || (!opts.includeDisabled && field.disabled) ){
                return
            }

            //add values of fields
            if ( field.type === 'select-multiple') {
                [].forEach.call(field.options, function(o) {
                    if ( o.selected) {
                      fieldSerialized.push({ name: field.name, value: o.value });
                    }
                });
            } else if ( !isCheckable(field) || (isCheckable(field) && field.checked) )  {
                fieldSerialized.push({ name: field.name, value: field.value });
            }
            
            return fieldSerialized;
        }).reduce(function(a, b){
            return a.concat(b || []);
        }, []);

        return serializedToArray;
    }

    function encode(name, value) {
        return encodeURIComponent(name) + '=' + encodeURIComponent(value).replace(/%20/g, '+');
    }

    function isCheckable(field){
      return field.type === 'radio' || field.type === 'checkbox';
    }

    return $.fn.serialize;
}));
