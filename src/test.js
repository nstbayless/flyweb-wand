//tests the robot api

var robot = require("robotjs");

module.exports = function () {
	console.log('moving');
	console.log(robot.getMousePos())
	robot.setMouseDelay(1);
	var screensize = robot.getScreenSize();
	var width = screensize.width;
	var height = screensize.height/2;
	
	for (var x = 0; x < width; x++)
	{
		y = height * Math.sin((3.1418 * x) / width) + height;
		robot.moveMouse(x, y);
	}

}
