if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var fileNames = [];
    	for (var key in data) {
    		if (key === 'files') {
    			for (var i = 0; i < data[key].length; i++) {
    				if (typeof data[key][i] !== 'object'){
    					fileNames.push(data[key][i]);
    				}else {
    					fileNames = fileNames.concat(this.listFiles(data[key][i]));
    				}
    			}
    		}
    	}
    	return fileNames;
    },

    permute: function(arr) {
        var aPermutations = [];
        var index = 0;
        var firstDimArray = [];
        
        for (var i=0 ; i<arr.length ; i++) {
            firstDimArray = arr.slice(0);
            firstDimArray.splice(i, 1);
            for (var j = 0; j<firstDimArray.length ; j++){
                var secondDimArray = firstDimArray.slice(0);
                var firstCollection = [];
                var secondCollection = [];
                firstCollection.push(arr[i], secondDimArray[j]);
                secondCollection.push(arr[i], secondDimArray[j]);                
                secondDimArray.splice(j, 1);
                firstCollection.push(secondDimArray[0], secondDimArray[1]);
                secondCollection.push(secondDimArray[1], secondDimArray[0]);
                aPermutations[index] = firstCollection;
                aPermutations[index+1] = secondCollection;
                index+=2;
            }
        }
        return aPermutations;
    }
  };
});
