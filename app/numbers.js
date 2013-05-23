if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return parseInt(num.toString(2).substr(num.toString(2).length-bit, 1));
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var number = [num.toString(2)];
        var leadingZeros = Array( 9 - (num.toString(2).length) ).join("0");
        number.splice(0,0, leadingZeros);
        return number.join('');
    },

    multiply: function(a, b) {
        var aDecimalsLength = a.toString().split('.')[1] ? a.toString().split('.')[1].length:0;
        var bDecimalsLength = b.toString().split('.')[1] ? b.toString().split('.')[1].length:0;
        return parseFloat((a * b).toFixed(aDecimalsLength + bDecimalsLength));
    }
  };
});
