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
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.isFull = function() {
  return this.hangar.length === this.DEFAULT_CAPACITY;
};
