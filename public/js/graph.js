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
      graph.renderEdges();

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

    var findEdges = function() {
      var arr =[];
      if (graph.nodes.length > 0) {
        for (let i=graph.nodes.length-1; i>0; i--) {
          var current = graph.nodes[i];
          if (current.node_color[0] === 0 && current.node_color[0] === 0) {
            arr.push(current);
          };
        }
      }
      console.log(arr);
      return arr;
    };

    graph.renderEdges = function() {
      graph.push();
      graph.strokeWeight(1);
      graph.stroke('black');

      for (let i=0; i<findEdges().length-1; i++) {
        var x1 = findEdges()[i].pos_x;
        var y1 = findEdges()[i].pos_y;
        var x2 = findEdges()[i+1].pos_x;
        var y2 = findEdges()[i+1].pos_y;
        graph.line(x1, y1, x2, y2);
      }
      graph.pop();
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
