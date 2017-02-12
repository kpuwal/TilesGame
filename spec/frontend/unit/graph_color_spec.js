"use strict";
describe("Color", function() {
  var subject;

  beforeEach(function() {
    subject = createColor();
  });

  describe("createColor", function() {
    it("should create new Color instance", function() {
        expect(subject).toBeDefined();
    });
    
  });
});
