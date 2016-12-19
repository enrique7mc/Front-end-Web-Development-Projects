(function (window) {
  'use strict';
  var App = window.App;
  var createTruck = App.createTruck;
  var createDataStore = App.createDataStore;

  var myTruck = createTruck('ncc-1701', createDataStore());
  window.myTruck = myTruck;
}(window));
