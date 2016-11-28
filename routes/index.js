var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/set', function(req, res, next) {
  res.render("hello")
});

router.get('/get', function(req, res, next) {
  res.render("hello world")
});



module.exports = router;
