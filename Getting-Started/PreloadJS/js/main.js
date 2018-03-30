/*
		Using PreloadJS	
*/
 function loadImage() {
        var preload = new createjs.LoadQueue();
        preload.addEventListener("fileload", handleFileComplete);
        preload.loadFile("preloadjs-bg-center.png");
      }

      function handleFileComplete(event) {
        document.body.appendChild(event.result);
      }