"use strict";

function Plane() {
  this.isInFlight = true;
}

Plane.prototype.land = function() {
  this.isInFlight = false;
};

Plane.prototype.takeOff = function() {
  this.isInFlight = true;
};

Plane.prototype.isAirborne = function () {
  return this.isInFlight;
};
