
var DataSave = require('../models/dataSave.js').DataSave;
var dataManager = new DataSave();

exports.home = function(req, res, next) {
  res.send("Welcome!  Please use my amazing API functionality")
};

exports.data = function(req, res, next) {
  res.send(dataManager.dataStore);
};

exports.set = function(req, res, next) {
  for (var key in req.query) {
    dataManager.addData(key, req.query[key]);
  };
  res.redirect('/data');
};

exports.get = function(req, res, next) {
  var thisKey = req.query.key;
  for (var i = 0; i < dataManager.dataStore.length; i++) {
    for (var key in dataManager.dataStore[i]) {
      if (key === thisKey) {
        res.send(dataManager.dataStore[i][thisKey]);
      }
    }
  }
};
