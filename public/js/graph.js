var r = 15;
var node;

function drawGraph() {
  var myp5 = new p5(sketch, 'graph_canvas');
} //end of drawGraph function

var sketch = function(graph) {
  var width = canvasWidth()*(r+1);
  var height = canvasHeight()*r;

  graph.setup = function() {
    graph.createCanvas(width+50, height);
    graph.stroke('#ffffff');
    graph.fill('#1d1d1d');
    graph.textSize(8);

  };

  graph.draw = function() {
   graph.background(255);
   graph.push();
   graph.translate(50, 20);
   graph.text("depth",-35,-15,5,15);
   graph.text("-->",-12,-15,5,15);
   for (var i=0; i<5+1; i++) {
     graph.text(i,r*i+4,-15,5,15);
     for (var j=0; j<5; j++) {
      new Node(i*r,j*r).render();
     }
   }
 };

 var Node = function(x,y) {
   graph.pos_x = x;
   graph.pos_y = y;
 };

 Node.prototype.render = function(){
   graph.push();
   graph.fill('#1d1d1d');
   graph.stroke('#ffffff');
   graph.translate(graph.pos_x, graph.pos_y);
   graph.rect(0,0,21,21);
   graph.pop();
 };

};
//  var Node = function(x,y) {
//    graph.pos_x = x;
//    graph.pos_y = y;
//   //  this.father = [];
//   //  this.address = [];
//   graph.render = function(){
//     push();
//     translate(pos_x, pos_y);
//     rect(0,0,r,r);
//     console.log("hey");
//     pop();
// }

//}

// var NodeGrid = function(x,y) {
//   myp5.nodes = [];
//
//   NodeGrid.prototype.addNodes = function() {
//
//    //  myp5.nodes.push(new Node())
//   }
// }





function canvasWidth() {
  var getStats = document.getElementById('stats').value;
  var stats = JSON.parse(getStats);
  return stats[2];
}

function canvasHeight() {
  var searched = document.getElementById('searched').value;
  var jSearched = JSON.parse(searched);
  var a = [];

  for (i in jSearched) {
    a.push(Object.keys(jSearched[i]).length);
  }
  return a.sort(function(a, b){return b-a})[0];
}


//  if(myp5.mouseX-50 > myp5.pos_x && myp5.mouseX-50 < myp5.pos_x+r && myp5.mouseY-20 > myp5.pos_y && myp5.mouseY-20 < myp5.pos_y+r) {
//    myp5.fill(51,151,251);
//  }
