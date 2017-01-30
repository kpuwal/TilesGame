var r = 5;
var grid = [];
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
    graph.nodesData = searchedDataByKeys();
    graph.grid = new NodeGrid();
    graph.grid.addNodes(1,1,1,1);
    console.log(graph.nodes[3]);
    console.log(keys);
    

  };

  graph.draw = function() {
   graph.background(255);
   graph.push();
   graph.translate(50, 20);
   graph.text("depth",-35,-15,5,15);
   graph.text("-->",-12,-15,5,15);

   for (var i=0; i<graph.nodes.length; i++) {
     graph.nodes[i].render();
   }


  //  graph.node.update(1,2);
  //  console.log(graph.node)
 };

 function Node(x,y) {
   this.pos_x = x;
   this.pos_y = y;
   this.ancestor = "";
   this.address = "";
 }

 Node.prototype.render = function(){
   graph.push();
   graph.fill('#1d1d1d');
   graph.stroke('#ffffff');
   graph.rect(this.pos_x,this.pos_y,r,r);
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
 };

 var NodeGrid = function() {
  //  graph.x = x;
  //  graph.y = y;
  //  graph.row = row;
  //  graph.col = col;
   graph.nodes =[];
 };

 NodeGrid.prototype.addNodes = function(x,y,row,col) {
  //  node = new Node(x,y,row,col);
  //  graph.nodes.push(node);
  //    console.log(node);


   for (var i=0; i<graph.nodesData.length; i++) {
     graph.text(i,r*i+4,-15,5,8);
     for (var j=0; j< graph.nodesData[i]; j++){
       node = new Node(x*r*i,y*j*r);
       node.update(row*i,col*j);

      // node.update(row,col);
       graph.nodes.push(node);
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


// if(graph.mouseX-100 > this.pos_x && graph.mouseX < this.pos_x+r && graph.mouseY-20 > this.pos_y && graph.mouseY < this.pos_y+r) {
//   graph.fill(51,151,251);
//  //  graph.ellipse(this.pos_x,this.pos_y, 4,4);
//
// }
