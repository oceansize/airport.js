"use strict";

(function(exports) {
  var CHANCE_OF_SUNNY_WEATHER = 70;

  exports.forecast = function() {
    return Math.floor(Math.random() * 100) + 1;
  };

  exports.isStormy = function() {
    return this.forecast() > CHANCE_OF_SUNNY_WEATHER;
  };

})(this.weather = {});
