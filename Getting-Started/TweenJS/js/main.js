/*
		Using TweenJS	
*/

 function init() {
        var stage = new createjs.Stage("Canvas");
        var circle = new createjs.Shape();
        circle.graphics.beginFill("PaleGreen").drawCircle(0, 0, 75);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        createjs.Tween.get(circle, {loop: true})
		  //.to's  tell the object what to do and where to go
		  //also how long to take and what easing to use
          .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
          .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, y: 125}, 100)
          .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
          .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
		//Set how many times the stage refreshes per second
        createjs.Ticker.setFPS(60);
		//event listener for the Ticker class that will cause 
		//the stage refresh each time a tick is caught.
        createjs.Ticker.addEventListener("tick", stage);
}
