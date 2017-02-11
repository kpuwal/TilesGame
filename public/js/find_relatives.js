// "use strict";

(function(exports){
  var path_color;

  function findRelatives(nodes) {
      breakme: if (nodes.length !== 0) {
        var node = nodes.pop();
        node = relatives.assignColor(node);
        relatives.findFamily(node, nodes);
      } else {
        return nodes;
      }
  };

  var relatives = {
    filter: function(object, ancestorObj, array) {
      var current = array.filter(function(object){
        return object.path === ancestorObj;
      });

      if (current.length !== 0) {
        current = current.pop();
        this.passColor(object, current);
        return current;
      } else {
        findRelatives(array);
      }
    },

    findAncestor: function(object) {
      return object.path.slice(0,-1);
    },

    assignColor: function(object) {
      object.node_color = Math.floor(Math.random()*255);
      return object;
    },

    passColor: function(object, ancestor) {
      ancestor.node_color = object.node_color;
    },

    remove: function(object, array) {
      var indx = array.indexOf(object);
      array.splice(indx,1);
      return array;
    },

    findFamily: function(object, array) {
      if (typeof object === "object" && object.path.length !== 0) {
        var ancestor = relatives.findAncestor(object);
        var filtered = relatives.filter(object, ancestor, array);
        relatives.remove(filtered, array);
        this.findFamily(filtered, array);
      } else {
        findRelatives(array);
      }
    }
  }

  exports.findRelatives = findRelatives;
})(this);


// Relative object
(function(exports){
  function createRelative(node) {
    var relative = Object.create(Relative);
    relative._init(node);
    return relative;
  }

  var Relative = {
    _init: function(node) {
      this.path = node.path.slice(0,-1);
      this.family_color = node.node_color;
    },

    createColor: function() {
      this.family_color = Math.floor(Math.random()*255);
    }
  }
  exports.createRelative = createRelative;
})(this);
