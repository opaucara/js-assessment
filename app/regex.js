if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var obj = new RegExp('\\d+', 'gi');
        return obj.exec(str)!==null ? true : false;
    },

    containsRepeatingLetter : function(str) {
        var obj = new RegExp('(\\D)\\1+', 'gi');
        return obj.exec(str)!==null ? true : false;
    },

    endsWithVowel : function(str) {
        var obj = new RegExp('[aeiou]$', 'i');
        return obj.exec(str)!==null ? true : false;
    },

    captureThreeNumbers : function(str) {
        var obj = new RegExp('\\d{3}', 'ig');
        var match = obj.exec(str);
        return match!==null ? match[0] : false;
    },

    matchesPattern : function(str) {
        var obj = new RegExp('^\\d{3}-\\d{3}-\\d{4}$');
        return obj.exec(str)!==null ? true : false;
    },
    isUSD : function(str) {
        var obj = new RegExp('^\\$');
        return obj.exec(str)!==null ? true : false;
    }
  };
});
