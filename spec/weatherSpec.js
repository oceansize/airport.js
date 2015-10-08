describe("Weather", function() {

  it("returns a random weather status", function(){
    expect( weather.isStormy() ).toEqual(jasmine.any(Boolean));
  });
});
