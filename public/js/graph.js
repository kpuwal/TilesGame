var r = 15;

function drawGraph() {
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
      //  for (var i=0; i<size[0]+1; i++) {
      //    graph.text(i,r*i+4,-15,5,15);
      //    for (var j=0; j<jsonDataSearched[i]; j++) {
      //     new Node(i*r,j*r).render();
      //    }
      //  }
       graph.pop();
       var node = new Node(10,10);
       graph.node.render();
   };

   function mousePressed() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}
 }

 var myp5 = new p5(sketch, 'graph_canvas');

 var Node = function(x,y) {
   myp5.pos_x = x.copy();
   myp5.pos_y = y.copy();
   myp5.father = [];
   myp5.address = [];

   Node.prototype.render = function(){
     myp5.push();
     myp5.translate(myp5.pos_x, myp5.pos_y);
     myp5.rect(0,0,r,r);
     myp5.pop();
   }
 };

 var NodeGrid = function(x,y) {
   myp5.nodes = [];

   NodeGrid.prototype.addNodes = function() {

    //  myp5.nodes.push(new Node())
   }
 }

}; //end of drawGraph function

function canvasWidth() {
  var getStats = document.getElementById('stats').value;
  var stats = JSON.parse(getStats);
  return stats[2];
};

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
