(function(exports){
  "use strict";

  function colorRelatives(nodes) {
      if (nodes.length !== 0) {
        var node = nodes.pop();
        node = relative.assignColor(node);
        findRelatives(node, nodes);
      }
  };

  function filter(object, ancestorObj, array) {
    var current = array.filter(function(object){
      return object.path === ancestorObj;
    });

    if (current.length !== 0) {
      current = current.pop();
      relative.passColor(object, current);
      return current;
    } else {
      colorRelatives(array);
    }
  };

  function findRelatives(object, array) {
    if (typeof object === "object" && object.path.length !== 0) {
      var ancestor = relative.findAncestor(object);
      var filtered = filter(object, ancestor, array);
      relative.remove(filtered, array);
      findRelatives(filtered, array);
    } else {
      colorRelatives(array);
    }
  };

  var relative = {
    findAncestor: function(object) {
      return object.path.slice(0,-1);
    },

    assignColor: function(object) {
      var ind = hueCounter();
      var new_object = createColor(object, ind).color();
      return new_object;
    },

    passColor: function(object, ancestorObj) {
      ancestorObj.node_color = object.node_color;
    },

    remove: function(object, array) {
      var indx = array.indexOf(object);
      array.splice(indx,1);
      return array;
    },
  };

  var hueCounter = (function() {
    var count = 0;
    return function() {
      return count++
    };
  })();

  exports.colorRelatives = colorRelatives;
})(this);
