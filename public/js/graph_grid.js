(function(exports){
  var r = 2;
  var d = Math.pow(r,3);

  function NodeGrid(data) {
    this.data = data;
    this.nodesData = this.data.byKeys();
    this.nodes =[];
  };

  NodeGrid.prototype.addNodes = function(x,y,row,col) {
    for (var i=0; i<this.nodesData.length; i++) {
      for (var j=0; j< this.nodesData[i]; j++){
        node = new Node(x*r*i,y*j, this.data);
        node.update(row*i,col*j);
        this.nodes.push(node);
      }
    }
    return this.nodes;
  };
  exports.NodeGrid = NodeGrid;
})(this);
