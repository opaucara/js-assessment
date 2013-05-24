if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var dfd = new $.Deferred();
        dfd.resolve(value);
        return dfd.promise();
    },

    manipulateRemoteData : function(url) {
        var dfd = new $.Deferred();
        $.getJSON(url).done(function(data){
            data.people.sort(function(a,b){
                return a.name>b.name;
            });
            var res = $.map( data.people, function(val, i) {
              return val.name;
            });
            dfd.resolve(res);
        });
    	return dfd.promise();
    }
  };
});
