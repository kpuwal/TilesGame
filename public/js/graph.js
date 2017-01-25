var r = 15;
var grid;

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
    grid = new NodeGrid();
  };

  graph.draw = function() {
   graph.background(255);
   graph.push();
   graph.translate(50, 20);
   graph.text("depth",-35,-15,5,15);
   graph.text("-->",-12,-15,5,15);
   grid.addNodes();
   grid.render();
  //  console.log(grid);
  //  for (var i=0; i<5+1; i++) {
  //    graph.text(i,r*i+4,-15,5,15);
  //    for (var j=0; j<5; j++) {
  //     new Node(i*r,j*r).render();
  //    }
  //  }

 };

 var Node = function(x,y) {
   graph.pos_x = x;
   graph.pos_y = y;
   graph.ancestor = [];
   graph.address = [];
 };

 Node.prototype.render = function(){
   graph.push();
   graph.fill('#1d1d1d');
   graph.stroke('#ffffff');
   graph.rect(graph.pos_x,graph.pos_y,21,21);
   graph.pop();
 };

 Node.prototype.assignAncestor = function() {
   // assign ancestor from searched data
 };

 Node.prototype.assignAddress = function() {
   // assign address from searched data
 };

 Node.prototype.update = function() {
   graph.render();
   graph.assignAncestor();
   graph.assignAddress();
 };

 var NodeGrid = function(x,y) {
   graph.x = x;
   graph.y = y;
   graph.nodes =[];
   graph.nodesData = searchedDataByKeys();
 };

 NodeGrid.prototype.addNodes = function() {
  //  console.log(graph.nodesData);


  // [ [1], [1,1,1], ...]




  for (var i=0; i<graph.nodesData.length; i++) {
    graph.text(i,r*i+4,-15,5,8);
    for (var j=0; j<graph.nodesData[i]; j++) {
     graph.nodes.push(new Node(i*r,j*r));
    }
  }
console.log(graph.nodes[0]);
console.log(graph.nodes[1]);

 };

 NodeGrid.prototype.render = function() {
   for (var i=0; i<graph.nodesData.length; i++) {
    //  for (var j=0; j<graph.nodesData.length; j++) {
       graph.nodes[i].render();
    //  }
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
  return data.sort(function(a, b){ return b-a; })[0];
}

function searchedData() {
  var searched = document.getElementById('searched').value;
  searched = JSON.parse(searched);
  return searched;
}


//  if(myp5.mouseX-50 > myp5.pos_x && myp5.mouseX-50 < myp5.pos_x+r && myp5.mouseY-20 > myp5.pos_y && myp5.mouseY-20 < myp5.pos_y+r) {
//    myp5.fill(51,151,251);
//  }

function searchedDataByKeys() {
  var data = searchedData();
  var a = [];
  for (var i in data) {
    a.push(Object.keys(data[i]).length);
  }
  return a;
}

// return Object.keys(data).length;
