//Using EaselJS.

  function init() {
    // Define a stage by creating a new Stage instance, 
	// passing in the canvas element's ID. 
	// This stage will hold all of the display objects and act as the 
	// visual container to the project.
	var stage = new createjs.Stage("demoCanvas");
	
	// Creating a shape. 
	// First, a new Shape instance. 
	// Then use shape's graphics API to give it color and bounds. 
	// Position it on the canvas with x and y coordinates, and add it to the stage.
	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//Finally, we need to update our stage to display the shape we just added.
	stage.update();
  }
