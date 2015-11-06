describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("is in-flight when created (for some bizarre reason)", function() {
    expect(plane.isAirborne()).toEqual(true);
  });

  it("can land", function() {
    plane.land();
    expect(plane.isAirborne()).toEqual(false);
  });

  it("can take off", function() {
    plane.land();
    plane.takeOff();
    expect(plane.isAirborne()).toEqual(true);
  });

});
