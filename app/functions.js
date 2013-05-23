if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj)
    },

    functionFunction : function(str) {
        return function(str2){
            return str + ', '+ str2;
        };
    },

    makeClosures : function(arr, fn) {
        var arrrr= [];
        for (var i = 0; i < arr.length; i++) {
            arrrr.push(fn(arr[i]));
        }
        return arrrr;
    },

    partial : function(fn, str1, str2) {
        return function(greeting){
            return fn(str1, str2, greeting);
        }
    },

    useArguments : function() {
        var sum = 0;
        for (var i = 0 ; i< arguments.length; i++) {
            sum += arguments[i];
        };
        return sum;
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
