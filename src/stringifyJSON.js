// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var res = [];
	
	switch (typeof obj) {
		case 'number' :
			return String(obj);
		case 'null' :
			return String(obj);
		case 'boolean' :
			return String(obj);
		case 'string' :
			return "\"" + obj + "\"";
		case 'object' : 
			if (!obj) {
				return 'null';
			}
			if (Object.prototype.toString.apply(obj) === '[object Array]') {
                for (var i = 0; i < obj.length; i += 1) {
                    res[i] = (stringifyJSON(obj[i]) || 'null');
                }
                return "[" + res + "]";
            }
            else {
            	for (var j in obj) {
            		if (Object.prototype.hasOwnProperty.call(obj, j)) {
            			var key = stringifyJSON(j);
            			var value = stringifyJSON(obj[j])
            			if (value) {
            				res.push(key + ":" + value);
            			}
            		}
            	}
            }	
			return "{" + res + "}";
     }
};
