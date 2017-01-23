var Node = function(x,y) {
  myp5.pos_x = x;
  myp5.pos_y = y;

  Node.prototype.render = function(){
    myp5.push();
    myp5.fill('#1d1d1d');
    myp5.stroke('#ffffff');
    myp5.translate(myp5.pos_x, myp5.pos_y);
    myp5.rect(0,0,21,21);
    myp5.pop();
  }
 }
