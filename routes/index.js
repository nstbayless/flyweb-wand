var express = require('express');
var router = express.Router();
var robot = require('robotjs');
var bmp = require('bmp-js');

/* GET home page. */
router.get('/', function(req, res) {
	var screensize = robot.getScreenSize();
	res.render('index', { title: 'Express', screenwidth: screensize.width, screenheight: screensize.height});
});

/* GET screenshot */
router.get(/\/screen(\/.*)?/, function(req, res) {
    var screen = robot.screen.capture();
    var enc = bmp.encode({data:screen.image,width:screen.width,height:screen.height});
    res.setHeader('Cache-Control', 'max-age=0, must-revalidate, no-store')
    res.send(enc.data, { 'Content-Type': 'image/gif' }, 200);
});

module.exports = router;
