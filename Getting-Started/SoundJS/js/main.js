/*
		Using SoundJS
*/

//sound ID's in the global scope for ease of access.
  var soundThunder = "Thunder";
  var soundPlane = "Plane";
  var soundLaser = "Laser";
//In the document head, access the Sound class and call the registerSound() method,
//passing in the path to our file and the ID that we want to be associated with it.
  function loadSound () {
	createjs.Sound.registerSound("./ThunderClap.mp3", soundThunder);
	createjs.Sound.registerSound("./AirplaneFly.mp3", soundPlane);
	createjs.Sound.registerSound("./LaserBeam.mp3", soundLaser);
  }
//To play the sound, call the play() method and pass in our soundThunder variable.
  function playThunder () {
	createjs.Sound.play(soundThunder);
  }
  function playPlane () {
	createjs.Sound.play(soundPlane);
  }
  function playLaser () {
	createjs.Sound.play(soundLaser);
  }
