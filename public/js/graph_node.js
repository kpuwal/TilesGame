(function(exports){
  function Node(x,y, data) {
    this.data = data;
    this.pos_x = x;
    this.pos_y = y;
    this.node_color = 0;
    this.path = "";
    this.address = "";
    this.ancestor = "";
  }

  Node.prototype.assignPath = function(row,col) {
    this.path = this.data.keys[row][col];
  };

  Node.prototype.assignAddress = function(row, col) {
    this.address = this.data.values[row][col];
  };

  Node.prototype.assignAncestor = function(row, col) {
    this.ancestor = this.data.keys[row][col];
    this.ancestor = this.ancestor.slice(0,-1);
  };

  Node.prototype.update = function(row,col) {
    this.assignPath(row,col);
    this.assignAddress(row,col);
    this.assignAncestor(row, col);
  };

  exports.Node = Node;
})(this);
