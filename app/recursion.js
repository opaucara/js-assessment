if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var stuffs = [];
    	for (var key in data) {
    		if (key === 'files') {
    			for (var i = 0; i < data[key].length; i++) {
    				if (typeof data[key][i] !== 'object'){
    					stuffs.push(data[key][i]);
    				}else {
    					stuffs = stuffs.concat(this.listFiles(data[key][i]));
    				}
    			}
    		}
    	}
    	return stuffs;
    },

    permute: function(arr) {

    }
  };
});
