function drawGraph() {
  var sketch = function(graph) {
    var coordinates = canvasSize();
    var width = coordinates[0]*22;
    var height = coordinates[1]*22;
    var rect_x = 50;
    var rect_y = 12;

    graph.setup = function() {
      graph.createCanvas(width+50, height);
      graph.textSize(8);
    };

   graph.draw = function() {
     graph.background(255);

     graph.push();
      graph.translate(50, 20);
      graph.fill('#1d1d1d');
      graph.text("depth",-25,8,5,15);

      for (var i=0; i<coordinates[0]+1; i++) {
        graph.stroke('#ffffff');
        graph.rect(21*i,0,21,21);
        // graph.fill(51,151,251);
        graph.text(i,10+21*i-2,-15,5,15);
        graph.fill('#1d1d1d');
      }
     graph.pop();
   };
 };
   var myp5 = new p5(sketch, 'graph_canvas');
}

function canvasSize() {
  var getStats = document.getElementById('stats').value;
  var stats = JSON.parse(getStats);
  var width = stats[2];
  var height = Math.round(stats[1]/stats[2]);
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
