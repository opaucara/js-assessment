if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i=0 ; i <arr.length ; i++) {
            if (typeof arr[i] === 'number' ){
                sum+= arr[i];
            }
        }
        return sum;
    },

    remove : function(arr, item) {
        for (var i=0 ; i <arr.length ; i++) {
            if ( arr[i] === item) {
                arr.splice(i,1);
            }
        }
        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
        for (var i=0 ; i <arr.length ; i++) {
            while(arr[i] === item){
                arr.splice(i,1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0, item);
        return arr;
    },

    count : function(arr, item) {
        var counter = 0;
        for (var i=0 ; i <arr.length ; i++) {
            if ( arr[i] === item) {
                counter++;
            }
        }
        return counter;
    },

    duplicates : function(arr) {
        var repeated = [];
        for (var i=0 ; i <arr.length ; i++) {
            for (var j=(i+1) ; j <arr.length ; j++) {
                if ( arr[i] === arr[j]) {
                    repeated.push(arr[i]);
                }
            }
        }
        return repeated;
    },

    square : function(arr) {
        for (var i=0 ; i <arr.length ; i++) {
            if (typeof arr[i] === 'number' ){
                arr[i] = Math.pow(arr[i], 2);
            }
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var occurences = [];
        for (var i=0 ; i <arr.length ; i++) {
            if ( arr[i] === target) {
                occurences.push(i);
            }
        }
        return occurences;
    }
  };
});
