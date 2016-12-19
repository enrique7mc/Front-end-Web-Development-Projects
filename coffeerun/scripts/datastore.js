(function (window) {
  'use strict';
  var App = window.App || {};

  var data = {};

  var proto = {
    add: function (key, val) {
      data[key] = val;
    },
    get: function (key) {
      return data[key];
    },
    getAll: function () {
      return data;
    },
    remove: function (key) {
      delete data[key];
    }
  }

  function DataStoreFactory() {
    return Object.create(proto);
  }

  App.DataStoreFactory = DataStoreFactory;
  window.App = App;
})(window);
