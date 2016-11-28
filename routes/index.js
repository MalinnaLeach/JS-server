var express = require('express');
var router = express.Router();
var dataStore = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  
});

router.get('/test', function(req, res, next) {
  res.send(dataStore);
});

router.get('/set', function(req, res, next) {
  res.send("testing");
  for (var key in req.query) {
    console.log(key);
  };
});

router.post('/get', function(req, res, next) {

});

router.get('/get', function(req, res, next) {
  res.send("hello world")
});



module.exports = router;
