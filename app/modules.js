if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
    	var myModule = function(str1, str2){
    		var me = {};
    		me.name = str1;
    		me.greeting = str2;
    		me.sayIt = function(){
    			return me.name + ', ' + me.greeting;
    		};
    		return me;
    	}();
    }
  };
});

