(function(exports) {
  "use strict"

  var r = 2;
  var d = Math.pow(r,3);
  var node;
  var nodes =[];

  function drawGraph() {
    var myp5 = new p5(sketch, 'graph_canvas');
  }

  var sketch = function(graph) {
    var data = getData();
    var width = data.canvasWidth()*(r*d);
    var height = data.canvasHeight()*(r*d/2);

    graph.setup = function() {
      graph.createCanvas(width+80, height+50);
      graph.frameRate(30);
      graph.colorMode(graph.HSB, 360);
      graph.noStroke();
      graph.fill('#1d1d1d');
      graph.textSize(8);

      graph.grid = new NodeGrid(data);
      graph.nodes = graph.grid.addNodes(d,d,1,1);
      nodes = Object.assign([], graph.nodes);
      colorRelatives(nodes);
      graph.drawNodes();
    };

    graph.drawNodes = function() {
     graph.push();
     graph.translate(60, 20);
     graph.text("depth",-40,-15,5,15);
     graph.text("-->",-17,-15,5,15);

     for(let j=0; j<data.keys.length; j++){ graph.text(j,d*r*j-2,-15,5,8); }
     for (let i=0; i<graph.nodes.length; i++) {
       graph.nodes[i].render(graph.nodes[i].node_color);
     }
    };

    Node.prototype.render = function(color){
      graph.push();
      graph.fill(color[0], 255, color[1]);
      graph.ellipse(this.pos_x,this.pos_y,d+r,d);
      graph.pop();
    };
  };

  exports.drawGraph = drawGraph;
})(this);
