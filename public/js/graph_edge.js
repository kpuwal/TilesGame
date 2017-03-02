(function(exports){
  "use strict"

  function edge(node) {
    if (node.color === [0,0]){
      return graph.vertex(node.pos_x, node.pos_y);
    }
  }
  exports.edge = edge;
})(this);
