if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {
    	var res = function(data){
    		return data;
    	};
    	$.getJSON(url).done(function(data){
            console.log(data.people);
        });

    	return $.when($.getJSON(url)).promise();
    }
  };
});
