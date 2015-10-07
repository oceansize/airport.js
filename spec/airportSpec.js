describe("Airport", function() {
  var airport;
  var fillAirport = function(airport) {
    for (i = 0; i < airport.DEFAULT_CAPACITY; i++) {
      airport.acceptPlane(plane);
    }
  };

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it("is empty on creation", function() {
    expect(airport.planesAvailable()).toEqual(0);
  });

  it("can accept a plane", function() {
    airport.acceptPlane(plane);
    expect(airport.planesAvailable()).toEqual(1);
  });

  it("accepting a plane grounds that plane", function() {
    airport.acceptPlane(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("has a default capacity", function() {
    expect(airport.DEFAULT_CAPACITY).toEqual(20);
  });

  it("can be full to capacity", function() {
    fillAirport(airport);
    expect(airport.isFull()).toBe(true);
  });

  it("will not accept a plane when hangar is full", function() {
    fillAirport(airport);
    expect(function() { airport.acceptPlane(plane) }).toThrowError("Airport is full");
  });
});



