"use strict";

function Plane() {
  this.isAirborne = true;
}

Plane.prototype.land = function() {
  this.isAirborne = false;
};

Plane.prototype.takeOff = function() {
  this.isAirborne = true;
};


