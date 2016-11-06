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
    var pos = robot.getMousePos();
    var width = screen.width;
    var height = screen.height;
    var byps = screen.bytesPerPixel;
    var r=40;
    
    // draw ring about mouse position
    for (var x=pos.x-r;x<=pos.x+r;x++) {
        for (var y=pos.y-r;y<=pos.y+r;y++) {
            var i = (x+width*y)*byps;
            
            // check within image bounds
            if (x<0 || x >= width) {
                continue;
            } if (y<0 || y>= height) {
                continue;
            }
            
            //check on circle
            var dsq = (x-pos.x)*(x-pos.x)+(y-pos.y)*(y-pos.y);
            if (dsq > r*r) {
                continue;
            } if (dsq < r*r/2) {
                continue;
            }
            
            // set pixel colour
            screen.image[i]=255;
            screen.image[i+1]/=4;
            screen.image[i+2]/=4;
        }
    }
    
    // send image to client
    var enc = bmp.encode({data:screen.image,width:width,height:screen.height});
    
    //prevent caching to allow javascript refresh
    res.setHeader('Cache-Control', 'max-age=0, must-revalidate, no-store');
    res.send(enc.data, { 'Content-Type': 'image/gif' }, 200);
});

module.exports = router;
