// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];
  var str = '';
  // base case
  // number, boolean, null
  if (typeof obj === null || typeof obj === undefined) {
    return 'null';
  }
  if (typeof obj === 'number' ) { //|| typeof obj === 'boolean' || typeof obj === 'null'){
    return obj + '';
  } if (typeof obj === 'string') {
    return '"' + obj + '"';
  } if (Array.isArray(obj)) { // recursive call
    for ( var i = 0; i < obj.length; i++) {
      //var current=stringifyJSON(obj[i])
      result.push(obj[i]);
      console.log('result', result);
    }
    str = '[' + result + ']';
  }

  // recursion call
  return str;
};
