// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];
  var str = '';
  // base cases

  if (typeof obj === null || typeof obj === undefined) {
    return 'null';
  } if (typeof obj === 'boolean') {
    return obj + '';
  }
  if (typeof obj === 'number' || typeof obj === 'null') {
    return obj + '';
  } if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (!obj) {
    return 'null';
  }
  if (Array.isArray(obj)) { // recursive call
    for ( var i = 0; i < obj.length; i++) {
      var current = stringifyJSON(obj[i]);
      result.push(current);
    }
    str = '[' + result + ']';
  } if (!Array.isArray(obj) && typeof obj === 'object') {
    // access keys
    for ( var keys in obj) {
      if (obj[keys] === 'undefined' || typeof obj[keys] === 'function') {
        return '{}';
      }
      str = '"' + keys + '":' + stringifyJSON(obj[keys]);
      result.push(str);
    }
    if (result.length === 0) {
      return '{}';
    }
    str = '{' + result + '}';

  } if (!obj) {
    return 'null';
  }
  // recursion call
  return str;
};
