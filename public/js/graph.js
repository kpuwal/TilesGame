var jsonData;
var jsonDataSearched = new Array();
var canvasHeight = new Array();
var node;

function drawGraph() {
  var sketch = function(graph) {
    var size = canvasSize();
    var width = size[0]*22;
    var height = size[1]*75;
    var x = 21;

    graph.setup = function() {
      graph.loadJSON('../temp.json', getData);
      graph.createCanvas(width+50, height);
      graph.stroke('#ffffff');
      graph.fill('#1d1d1d');
      graph.textSize(8);

    };

    graph.draw = function() {
     graph.background(255);
     if (jsonData) {
       graph.push();
        graph.translate(50, 20);
        graph.text("depth",-35,-15,5,15);
        graph.text("-->",-12,-15,5,15);

        for (var i=0; i<size[0]+1; i++) {
          graph.text(i,30*i,-15,5,15);
          for (var j=0; j<jsonDataSearched[i]; j++) {
            graph.node = new Node(i*21,j*21);
            graph.node.render();
          }
        }
       graph.pop();
     }
   };
 };
   var myp5 = new p5(sketch, 'graph_canvas');
}

var getData = function(data) {
  jsonData = data;
  for (i in jsonData) {
    jsonDataSearched.push(Object.keys(jsonData[i]).length);
  }
  jsonDataSearchedCopy = Object.assign([], jsonDataSearched);
  canvasHeight = jsonDataSearchedCopy.sort(function(a, b){return b-a})[0];
};

function canvasSize() {
  var getStats = document.getElementById('stats').value;
  var stats = JSON.parse(getStats);
  var width = stats[2];
  var height = Math.round(stats[1]/stats[2]);
  var size = [width, height];
  return size;
};
