var express = require('express');
var router = express.Router();
var DataSave = require('../models/dataSave.js').DataSave;
var dataManager = new DataSave();

/* GET home page. */
router.get('/', function(req, res, next) {

});

router.get('/test', function(req, res, next) {
  res.send(dataManager.dataStore);
});

router.get('/set', function(req, res, next) {
  for (var key in req.query) {
    dataManager.addData(key, req.query[key]);
  };
  res.redirect('/test');
});

router.get('/get', function(req, res, next) {
  var response = req.query;
  var thisKey = response.key;
  for (var i = 0; i < dataManager.dataStore.length; i++) {
    for (var key in dataManager.dataStore[i]) {
      if (key === thisKey) {
        res.send(dataManager.dataStore[i][thisKey]);
      }
    }
  }
});


module.exports = router;
