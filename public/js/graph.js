function generateGraph() {
  var canvas = document.createElement('canvas')
  canvas.id = "graph";
  canvas.width = 224;
  canvas.height = 268;
  canvas.style.zIndex = 8;
  canvas.style.position = "absolute";
  canvas.style.border = "1px solid #1d1d1d";
  canvas.style.margin = '50px';
  document.body.appendChild(canvas);
  getGraphData();

}

function getGraphData() {
  var visited = document.getElementById('visited').value;
  var searched = document.getElementById('searched').value;
  var serchedData = JSON.parse(searched);
  var visitedData = JSON.parse(visited);
  console.log("hello data")
}
