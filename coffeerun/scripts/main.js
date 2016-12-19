(function (window) {
  'use strics';
  var App = window.App;
  var Truck = App.Truck;
  var DataStoreFactory = App.DataStoreFactory;

  var myTruck = new Truck('ncc-1701', DataStoreFactory());
  window.myTruck = myTruck;
}(window));
