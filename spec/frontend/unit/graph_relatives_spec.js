"use strict"
describe("Relatives", function() {
  var node, ancestor, array, relative;

  beforeEach(function() {
    node = {
      pos_x: 0,
      pos_y: 0,
      node_color: 0,
      path: "DL",
      address: "1,2,3,4,5,6,7,8,0"
    };
    ancestor = {
      pos_x: 0,
      pos_y: 0,
      node_color: 0,
      path: "D",
      address: "1,2,3,4,5,6,7,8,0"
    };
    array = [ancestor, node];
  });

  describe("colorRelatives", function() {
    it("assigns color to relatives", function() {
      expect()
    });
  });

  describe("Relative", function() {
    describe("#findAncestor", function() {
      it("predicts ancestor node's path", function() {
        // spyOn(bar,'getSomeUrl').and.callFake(function(){});
        // expect(relative.findAncestor(node)).toEqual("D");
      });
    });
  });
});
