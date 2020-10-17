// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  console.log(body);
  var result = [];

  // check if current element has the target className -> push intobody
  var getElement = function(body) {
    if (body.classList && body.classList.contains(className)) {
      result.push(body);
    }
    // check with childnode
    if (body.childNodes) {
      //recursive call
      for ( var i = 0; i < body.childNodes.length; i++) {
        var current = body.childNodes[i];
        getElement(current);
      }
    }
  };
  getElement(body);

  return result;
};

