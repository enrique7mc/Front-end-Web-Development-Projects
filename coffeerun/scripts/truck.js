(function (window) {
  'use strict';
  var App = window.App || {};

  var proto = {
    createOrder: function (order) {
      console.log('Adding order for ' + order.emailAddress);
      this.db.add(order.emailAddress, order);
    },
    deliverOrder: function (customerId) {
      console.log('delivering order for: ' + customerId);
      this.db.remove(customerId);
    },
    printOrders: function () {
      var customerIds = Object.keys(this.db.getAll());
      console.log('Truck #' + this.truckId + ' has pending orders');
      customerIds.forEach(function (id) {
        console.log(this.db.get(id));
      }.bind(this));
    }
  };

  function createTruck (truckId, db) {
    return Object.assign(Object.create(proto), {
      truckId: truckId,
      db: db
    });
  }

  App.createTruck = createTruck;
  window.App = App;
})(window);
