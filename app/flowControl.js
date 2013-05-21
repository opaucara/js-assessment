if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
      var result = this.getTypex(num);
      switch (result) {
        case 'divisible3': 
          return 'fizz';
          break;
        case 'divisible5': 
          return 'buzz';
          break;
        case 'divisible5&3': 
          return 'fizzbuzz';
          break;
        case 'hasNoNumber': 
          return false;
          break;
        case 'number': 
          return num;
          break;        
      }
    },
    getTypex : function(num){
      if ( num%3===0 && num%5===0 ) {
        return 'divisible5&3';
      }else if ( num%5===0 ){
        return 'divisible5';
      }else if (num%3===0){
        return 'divisible3';
      }else if (isNaN(num)){
        return 'hasNoNumber';
      }else {
        return 'number';
      }
    }
  };
});
