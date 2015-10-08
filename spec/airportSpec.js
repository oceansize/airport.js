describe("Airport", function() {

  var airport;
  var plane;
  var fullAirportMessage = "Airport is full";
  var weatherProhibitsLandingMessage = "It's too stormy to land";
  var weatherProhibitsTakeOffMessage = "It's too stormy to take off";

  var fillAirport = function(airport) {
    spyOn(weather, "isStormy").and.returnValue(false);
    for (i = 0; i < airport.DEFAULT_CAPACITY; i++) {
      airport.acceptPlane(plane);
    }
  };

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });

  it("is initially empty", function() {
    expect(airport.planesAvailable()).toEqual(0);
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
    expect(function() { airport.acceptPlane(plane) }).toThrowError(fullAirportMessage);
  });

  describe("when the weather is sunny", function() {

    beforeEach(function() {
      spyOn(weather, "isStormy").and.returnValue(false);
    });

    it("can accept a plane", function() {
      airport.acceptPlane(plane);
      expect(airport.planesAvailable()).toEqual(1);
    });

    it("accepting a plane grounds that plane", function() {
      airport.acceptPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it("can release a plane", function() {
      airport.acceptPlane(plane);
      airport.releasePlane(plane);
      expect(airport.planesAvailable()).toEqual(0);
    });

    it("releasing that plane means it's airborne", function() {
      airport.acceptPlane(plane);
      airport.releasePlane(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });
  });

  describe("when the weather is stormy", function() {

    beforeEach(function() {
      spyOn(weather, "isStormy").and.returnValue(true);
    });

    it("won't accept a plane", function() {
      expect(function() { airport.acceptPlane(plane) }).toThrowError(weatherProhibitsLandingMessage);
    });

    it("won't allow a plane to take off", function() {
      expect(function() { airport.releasePlane(plane) }).toThrowError(weatherProhibitsTakeOffMessage);
    });
  });
});

