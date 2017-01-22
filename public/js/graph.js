function drawGraph() {
  var sketch = function(graph) {
    var coordinates = canvasSize();
    var width = coordinates[0];
    var height = coordinates[1];
    var rect_x = 50;
    var rect_y = 12;

    graph.setup = function() {
      graph.createCanvas(width*3+50, height*3);
    };

   graph.draw = function() {
     graph.background(255);
     graph.fill("#1d1d1d");
     graph.stroke('#1d1d1d');
     graph.line(50,0,coordinates[1]-50,0);

     graph.stroke('#ffffff');

     for (var i=0; i<coordinates[1]; i++) {
       graph.rect(rect_x+21*i,rect_y,21,21);
       graph.rect(rect_x+21*i,rect_y,21,21);
     }
   };
 };
   var myp5 = new p5(sketch, 'graph_canvas');
}

function canvasSize() {
  var getStats = document.getElementById('stats').value;
  var stats = JSON.parse(getStats);
  var width = stats[2];
  var height = (stats[1]/stats[2]);
  var coordinates = [width, height];
  return coordinates;
}



// var canvas;
// var started = false;
//
// function setup() {
//   canvas = createCanvas(600, 400);
// canvas.parent('graph_canvas');
// noLoop();
// }
// function draw(){
//    if(started){
//      background('#fff');
//
//      ellipse(width/2, height/2, 100, 100);
//      ellipse(width/4, height/2, 50, 50);
//    }
// }
//
// function start(){
//    started = true;
//    loop();
// }
