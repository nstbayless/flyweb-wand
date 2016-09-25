var express = require('express');
var router = express.Router();
var robot = require("robotjs");

/* GET home page. */
router.get('/', function(req, res, next) {
	var screensize = robot.getScreenSize();
	res.render('index', { title: 'Express', screenwidth: screensize.width, screenheight: screensize.height});
});

module.exports = router;
