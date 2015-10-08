"use strict";

function Airport() {
  this.hangar = [];
  this.DEFAULT_CAPACITY = 20;
};

Airport.prototype.planesAvailable = function() {
  return this.hangar.length;
};

Airport.prototype.acceptPlane = function(plane) {
  if (this.isFull()) throw new Error("Airport is full")
  if (weather.isStormy()) throw new Error("It's too stormy to land")
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.releasePlane = function(plane) {
  if (weather.isStormy()) throw new Error("It's too stormy to take off")
  var hangarBay = this.hangar.indexOf(plane);
  this.hangar.splice(hangarBay, 1);
  plane.takeOff();
};

Airport.prototype.isFull = function() {
  return this.hangar.length === this.DEFAULT_CAPACITY;
};
