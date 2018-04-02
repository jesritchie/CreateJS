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
	//Face circle
	circle.graphics.beginFill("Pink").drawCircle(100, 100, 200);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//Color in some
	circle.graphics.beginFill("RGB(222,223,228)").drawCircle(100, 100, 190);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//Smile
	circle.graphics.beginFill("White").drawCircle(100, 100, 100);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//Cover some of circle to a make smile
	circle.graphics.beginFill("RGB(222,223,228)").drawCircle(100, 80, 100);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//left eye
	circle.graphics.beginFill("Brown").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//left cover
	circle.graphics.beginFill("RGB(222,223,228)").drawCircle(0, 10, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//Right eye
	circle.graphics.beginFill("Brown").drawCircle(200, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//Right eye cover
	circle.graphics.beginFill("RGB(222,223,228)").drawCircle(200, 10, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//nose
	circle.graphics.beginFill("Pink").drawCircle(100, 50, 10);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	//nose
	//Finally, we need to update our stage to display the shape we just added.
	stage.update();
  }
