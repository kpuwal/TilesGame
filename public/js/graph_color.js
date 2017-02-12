(function(exports){
  "use strict"

  function createColor(object, num) {
    var color = Object.create(Color);
    color._init(object, num);
    return color;
  };

  var Color = {
    _init: function(object, num) {
      this.object = object;
      this.hue = num;
    },

    _calculateHue: function() {
        this.hue = this.hue*0.5;
        return this.hue;
    },

    color: function() {
      if (this.hue !== 0) {
        this.object.node_color = [this._calculateHue(), 255];
      } else {
        this.object.node_color = [0, 0];
      }
      return this.object;
    }
  };
  exports.createColor = createColor;
})(this);
