var r = 5;
var grid, node;
var values = [];
var keys = [];

function drawGraph() {
  var myp5 = new p5(sketch, 'graph_canvas');
}

var sketch = function(graph) {
  var width = canvasWidth()*(r+1);
  var height = canvasHeight()*r;

  graph.setup = function() {
    graph.createCanvas(width+50, height);
    graph.stroke('#ffffff');
    graph.fill('#1d1d1d');
    graph.textSize(8);
    graph.node = new Node(1,1);
  };

  graph.draw = function() {
   graph.background(255);
   graph.push();
   graph.translate(50, 20);
   graph.text("depth",-35,-15,5,15);
   graph.text("-->",-12,-15,5,15);
   graph.node.update(1,2);
 };

 function Node(x,y,row,col) {
   this.pos_x = x;
   this.pos_y = y;
   this.ancestor = "";
   this.address = "";
 }

 Node.prototype.render = function(){
   graph.push();
   graph.fill('#1d1d1d');
   graph.stroke('#ffffff');
   graph.rect(graph.pos_x,graph.pos_y,r,r);
   graph.pop();
 };

 Node.prototype.assignAncestor = function(row,col) {
   this.ancestor = keys[row][col-1];
 };

 Node.prototype.assignAddress = function(row, col) {
   this.address = values[row][col];
 };

 Node.prototype.update = function(row,col) {
   this.assignAncestor(row,col);
   this.assignAddress(row,col);
   this.render();
 };

 var NodeGrid = function(x,y) {
   graph.x = x;
   graph.y = y;
   graph.nodes =[];
   graph.nodesData = searchedDataByKeys();
   graph.row = [];
 };

 NodeGrid.prototype.addNodes = function() {
   for (var i=0; i<graph.nodesData.length; i++) {
     graph.text(i,r*i+4,-15,5,8);
     for (var j=0; j< graph.nodesData[i]; j++){
       graph.nodes.push(new Node(graph.x*r*i, graph.y*j*r).render());
     }
   }
 };
};

function canvasWidth() {
  var getStats = document.getElementById('stats').value;
  var stats = JSON.parse(getStats);
  return stats[2];
}

function canvasHeight() {
  var data = searchedDataByKeys();
  searchedDataOrganised();
  return data.sort(function(a, b){ return b-a; })[0];
}

function searchedData() {
  var searched = document.getElementById('searched').value;
  searched = JSON.parse(searched);
  return searched;
}

function searchedDataByKeys() {
  var data = searchedData();
  var a = [];
  for (var i in data) {
    a.push(Object.keys(data[i]).length);
  }
  return a;
}

function searchedDataOrganised() {
  var data = searchedData();
  for (var i in data) {
    values.push(Object.values(data[i]));
    keys.push(Object.keys(data[i]));
  }
}

//  if(myp5.mouseX-50 > myp5.pos_x && myp5.mouseX-50 < myp5.pos_x+r && myp5.mouseY-20 > myp5.pos_y && myp5.mouseY-20 < myp5.pos_y+r) {
//    myp5.fill(51,151,251);
//  }

// return Object.keys(data).length;

// var arr2D = new Array(5).fill(new Array(3));
