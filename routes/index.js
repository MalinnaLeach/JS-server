var express = require('express');
var router = express.Router();
var _apiController = require('../controllers/_apiController');

/* GET home page. */
router.get('/', _apiController.home);

router.get('/data', _apiController.data);

router.get('/set', _apiController.set);

router.get('/get', _apiController.get);


module.exports = router;
