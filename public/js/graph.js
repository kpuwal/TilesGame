var r = 2;
var d = Math.pow(r,3);
var grid;
var nodes =[];

function drawGraph() {
  var myp5 = new p5(graph, 'graph_canvas');
}

var graph = function(graph) {
  var data = getData();
  var width = data.canvasWidth()*(r*d);
  var height = data.canvasHeight()*(r*d/2);

  graph.setup = function() {
    graph.createCanvas(width+80, height+50);
    graph.frameRate(30);
    graph.colorMode(graph.HSB, 360);
    graph.noStroke();
    graph.fill('#1d1d1d');
    graph.textSize(8);

    graph.nodesData = data.byKeys();
    graph.grid = new NodeGrid();
    graph.grid.addNodes(d,d,1,1);
    nodes = Object.assign([], graph.nodes);
    colorRelatives(nodes);
  };

  graph.draw = function() {
   graph.background('white');
   graph.push();
   graph.translate(50, 20);
   graph.text("depth",-35,-15,5,15);
   graph.text("-->",-12,-15,5,15);

   for(let j=0; j<data.keys.length; j++){ graph.text(j,d*r*j+4,-15,5,8); }
   for (let i=0; i<graph.nodes.length; i++) {
     graph.nodes[i].render(graph.nodes[i].node_color);
   }
 };

 function Node(x,y) {
   this.pos_x = x;
   this.pos_y = y;
   this.node_color = 0;
   this.path = "";
   this.address = "";
 };

 Node.prototype.render = function(color){
   graph.push();
   graph.fill(color[0], 255, color[1]);
   graph.rect(this.pos_x,this.pos_y,d+r,d);
   graph.pop();
 };

 Node.prototype.assignAncestor = function(row,col) {
   this.path = data.keys[row][col];
 };

 Node.prototype.assignAddress = function(row, col) {
   this.address = data.values[row][col];
 };

 Node.prototype.update = function(row,col) {
   this.assignAncestor(row,col);
   this.assignAddress(row,col);
 };

 function NodeGrid() {
   graph.nodes =[];
 };

 NodeGrid.prototype.addNodes = function(x,y,row,col) {
   for (var i=0; i<graph.nodesData.length; i++) {
     for (var j=0; j< graph.nodesData[i]; j++){
       node = new Node(x*r*i,y*j);
       node.update(row*i,col*j);
       graph.nodes.push(node);
     }
   }
 };
};
