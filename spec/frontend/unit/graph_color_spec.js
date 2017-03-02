"use strict";
describe("Color", function() {
  var subject, object, number;

  beforeEach(function() {
    subject = createColor(object, number);
    object = {
      pos_x: 0,
      pos_y: 0,
      node_color: 0,
      path: "D",
      address: "1,2,3,4,5,6,7,8,0"
    };
    number = 150;
  });

  describe("createColor", function() {
    it("creates new Color instance", function() {
      expect(subject).toBeDefined();
    });
  });

  describe("_calculateHue", function() {
    it("returns number for color hue", function() {
      expect(subject._calculateHue()).toBe(75);
    });
  });

  describe("#color", function() {
    it("updates node_color property", function() {
      var new_object = {
        pos_x: 0,
        pos_y: 0,
        node_color: [75, 255],
        path: "D",
        address: "1,2,3,4,5,6,7,8,0"
      };
      expect(subject.color()).toEqual(new_object);
    });
  });
});
