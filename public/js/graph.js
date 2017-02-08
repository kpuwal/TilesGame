var r = 2;
var d = Math.pow(r,3);
var grid;
var relative_path = "";
var relative_color = "";
var values = [];
var keys = [];
var colors = [];
var nodes =[];
var relatives = [];

function drawGraph() {
  var myp5 = new p5(graph, 'graph_canvas');
}

var graph = function(graph) {
  var width = canvasWidth()*(r*d);
  var height = canvasHeight()*(r*d/2);

  graph.setup = function() {
    graph.createCanvas(width+80, height+50);
    graph.frameRate(30);
    graph.colorMode(graph.HSB, 360);
    graph.noStroke();
    graph.fill('#1d1d1d');
    graph.textSize(8);

    graph.nodesData = searchedDataByKeys();
    graph.grid = new NodeGrid();
    graph.grid.addNodes(d,d,1,1);
    nodes = Object.assign([], graph.nodes);
    node = nodes.pop();
    findRelatives(node);
  };

  graph.draw = function() {
   graph.background('white');
   graph.push();
   graph.translate(50, 20);
   graph.text("depth",-35,-15,5,15);
   graph.text("-->",-12,-15,5,15);

   for(var j=0; j<keys.length; j++){ graph.text(j,d*r*j+4,-15,5,8); }
   for (var i=0; i<graph.nodes.length; i++) {
     graph.nodes[i].render(graph.nodes[i].node_color);
   }
 };

 function Node(x,y) {
   this.pos_x = x;
   this.pos_y = y;
   this.node_color = 0;
   this.path = "";
   this.address = "";
 }

 Node.prototype.render = function(color){
   graph.push();
  //  graph.stroke('white');
   graph.fill(color, 255,255);
   graph.rect(this.pos_x,this.pos_y,d+r,d);
   graph.pop();
 };

 Node.prototype.assignAncestor = function(row,col) {
   this.path = keys[row][col];
  //  if (this.path.length >= 2) {
  //    this.path = this.path.slice(0, -1);
  //  } else {
  //    this.path = "";
  //  }
 };

 // Node.prototype.assignColor = function() {
 //   this.node_color = Math.floor(Math.random()*255);
 // };


 Node.prototype.assignAddress = function(row, col) {
   this.address = values[row][col];
 };

 Node.prototype.update = function(row,col) {
   this.assignAncestor(row,col);
   this.assignAddress(row,col);
  //  this.assignColor();
 };

 var NodeGrid = function() {
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

function findRelatives(node) {
  var node_path = "";
  if (node.path === ""){
    for (var i=0;i<nodes.length;i++) {
      // assign maiin path color to each

    }
    // console.log(relatives);

  } else {
    console.log(isRelative);
    if (isRelative) {
      node.node_color = relative_color;
      node_path = node.path.slice(0,-1);
      relative = new Relative(node_path,node.node_color);
      relatives.push(relative);
      findRelatives(nodes.pop());

    } else {
      var node_color = Math.floor(Math.random()*255);
      node.node_color = node_color;
      node_path = node.path.slice(0,-1);
      relative = new Relative(node_path,node_color);
      relatives.push(relative);
      findRelatives(nodes.pop());
    }
  }
}

function isRelative(arr, path) {

    // let i = arr.length;
    // while (i--) {
    //   // console.log("===one round===");
    //   // console.log(arr[i].path);
    //   // console.log(path);
    //    if (arr[i].path === path) {
    //        return true;
    //    }
    // }
    // // console.log("===end===");
    // return false;


  for (var i=1; i<relatives.length; i++){
    rel = relatives[i].path;
    if (path == rel) {
      relative_path = relatives[i].path;
      relative_color = relatives[i].family_color;
      return true;
    } else {
      return false;
    }
  }
}


var Relative = function(path,family_color) {
  this.path = path;
  this.family_color = family_color;
};

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
