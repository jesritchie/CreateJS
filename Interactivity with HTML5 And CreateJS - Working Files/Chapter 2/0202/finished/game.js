if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.game = function() {
	this.initialize();

	// title
	this.title = new lib.title();
	this.title.setTransform(450,350,1,1,0,0,0,450,350);

	// gameOver
	this.gOver = new lib.gOver();
	this.gOver.setTransform(450,246,1,1,0,0,0,143,32);

	// game
	this.splat = new lib.splat();
	this.splat.setTransform(829,249.5,1,1,0,0,0,33.6,13.5);

	this.monster = new lib.Monster();
	this.monster.setTransform(175,488,1.75,1.75);

	this.instance = new lib.plant();
	this.instance.setTransform(115,588,1.41,1.41,0,0,0,1.1,0.1);

	this.instance_1 = new lib.plant();
	this.instance_1.setTransform(696.1,563,1.41,1.41,0,0,0,1.1,0.1);

	this.bird = new lib.bird();
	this.bird.setTransform(98,145.1,1.3,1.3,0,0,0,16.1,-15.6);

	this.egg = new lib.egg();
	this.egg.setTransform(829.1,171,1.5,1.5,0,0,0,18.1,21);

	this.nest = new lib.nest();
	this.nest.setTransform(449.5,505.5,1,1,0,0,0,87,55);

	this.score = new Text("0", "bold 37px Arial", "#003366");
	this.score.textBaseline = "top";
	this.score.lineHeight = 39;
	this.score.lineWidth = 86;
	this.score.setTransform(775,10);

	this.text = new Text("Score", "bold 37px Arial", "#003366");
	this.text.textBaseline = "top";
	this.text.lineHeight = 39;
	this.text.setTransform(640,10);

	// scenery
	this.instance_2 = new lib.plant();
	this.instance_2.setTransform(808,458,2.43,2.43,0,0,0,1,0.1);

	this.instance_3 = new lib.plant();
	this.instance_3.setTransform(746.1,416,1.41,1.41,0,0,0,1.1,0.1);

	this.instance_4 = new lib.plant();
	this.instance_4.setTransform(76.1,427,2.43,2.43,0,0,0,1.1,0.1);

	this.instance_5 = new lib.plant();
	this.instance_5.setTransform(672,462,1,1,0,0,0,1,0.1);

	this.ground = new lib.ground();
	this.ground.setTransform(450,470,1,1,0,0,0,450,50);

	this.instance_6 = new lib.cloud();
	this.instance_6.setTransform(691,220,1.017,1.017);

	this.instance_7 = new lib.cloud();
	this.instance_7.setTransform(93,173,1.017,1.017);

	this.instance_8 = new lib.cloud();
	this.instance_8.setTransform(783,110,1.718,1.718);

	this.instance_9 = new lib.hills();
	this.instance_9.setTransform(450,414,1,1,0,0,0,450,90);

	this.instance_10 = new lib.mountain();
	this.instance_10.setTransform(327,287,0.699,0.807);

	this.instance_11 = new lib.mountain();
	this.instance_11.setTransform(473,368,0.51,0.297);

	this.instance_12 = new lib.mountain();
	this.instance_12.setTransform(169,325,0.807,0.601);

	this.addChild(this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.ground,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.text,this.score,this.nest,this.egg,this.bird,this.instance_1,this.instance,this.monster,this.splat,this.gOver,this.title);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-35.1,0,954.4,623.1);


// symbols:
(lib.title = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.feet();
	this.instance.setTransform(514.4,315.4,5.32,5.32,35,0,0,13,14);

	this.instance_1 = new lib.feet();
	this.instance_1.setTransform(426.5,308.8,5.32,5.32,0,0,0,13,14);

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#f6eb5b","#d43a3e"],[0,1],241.9,-90.5,241.9,61.5).p("EArHgQnIiAAcQgdAHgnALQgkALgtAPIikBGQheArhSBEQggAcgaAhQguA4giBHQg3B6AGCwIAJBGQAHAxAiA8QAhA9A/A8QBBA+BrAyIBmA0QA9AhArAqQAuAwAHA5QAIBAg9BQQgaAhgkAgIhNBBQgfAagiAYQgUANgWAMIAMAVIBkCuIA7gsQAcgVAagTQBjhLBDhIQBZhaAvhSQAyhUAQhFQAPhFgDhCQgJhTgjhNQgohRhhgpIhIgiQgZgMgVgMQgTgMgRgMQgrgcggghQgkgkgMgsQgPg3APgyQAJgtAeglQAigpBKgVIAnD2IAFAmIDAgfIB3rwQhDAFg4AM").f("#000000").p("EAlMgG1QgPAyAPA3QAMAsAkAkQAgAhArAcQARAMATAMIAbioIgnj2QhKAVgiApQgeAlgJAt").p("Aesj+IhpG9QACADAGAFQA9A+BvAzIBlAzQA3AeAyAtQAqAvAKA8QAIAsgeA3QAigYAfgaIBNhBQAkggAaghQA9hQgIhAQgHg5gugwQgrgqg9ghIhmg0QhrgyhBg+Qg/g8ghg9Qgig8gHgx").p("EAiHALxIhMBBQgyApg6AiIBwDDIA7gtQCHhfBVhaQAmgmAegoQgaATgcAVIg7AsIhkiuQgeAhggAe").p("ALkrZIgPCLIBjPTICGyaIjaA8").p("AXasAIB7NpIBPuDIjKAa").p("AlkALIAaBZIEHhyIiPoOIiSIn").p("AsZo2IhsMlIDUhLIgEAxIBztaIjXBP").p("AgFEKInzD9IgkB7IEsiYIB1GeIDPhkIgwmCIgpiY").p("AvtP7IDDgeIA6jDIgTACIAzl4IqoFgIhK3cIilApIg9FCIAcJTICLCRQg1BUhGBFIAWHUIKplgIg0F3").p("AVrFJIgbjBIh3mqIiMI1ICRILIEthBIAsi3IhvAYIhWk8IgHBH").p("AJOJmIgJhWIkHxqIiKBCICKRcIgIAGIBtHYIFQhnIAoikIiNAqIg8j+IgEAj").p("EglKgJeQg5AlgwAvQhdBThNBxQhIBtgzB7Qg2CKgYB5QgcCFACCHQAACFAoB6QAVBLAmA0QAoA7A2ArQA3AuBGAUQBDAXBRgKQDDgVCthqQCfhgBjiNQgMAHgMAGQivBqjAAVQhSAKhDgVQhIgWg1guQg6gugkg5Qgng5gUhFQgkhxgEiOQgCiHAciEQAdiHAxh9QAzh7BIhtQAVgdAUgb").p("EgjFgBOIAJFhIDphCIAhinIggAIIgKm7QhXA9g/BdQgrA+goBj").lf(["#f6eb5b","#d43a3e"],[0,1],122.5,-90.5,122.5,61.5).p("EAgkgLtIBGkpIm2A3IgQDFIhPODIh7tpIgsk/InfCGIgRCkIiGSaIhjvTIgekuImRC8IAYBmIEHRqIANAzIA8D+ICNgqIDCg8IBwnIICMo1IB3GqIAiB6IBWE8IBvgYIC+gpIBOk+IBpm9IgJhGQgGiwA3h6QAihHAug4").lf(["#f6eb5b","#d43a3e"],[0,1],-22.5,-90.5,-22.5,61.5).p("ApCqFIhzNaIgbDPIgzF4IATgCICwgdIAkh7IAkh7IHzj9IApCYIBKEGIDIheIAIgGIiKxcIhAn+IqkEBIgSCQ").p("AjSocICPIOIkHByIg3AXIAdhwICSon").lf(["#f6eb5b","#d43a3e"],[0,1],-108.5,-90.5,-108.5,61.5).p("Aq1DVIAEgxIjUBLIkKBcIBD0mIl+BfIAICkIBKXcIKolgIAbjP").lf(["#f6eb5b","#d43a3e"],[0,1],-208.9,-90.5,-208.9,61.5).p("A+KurQg3ASgvAaQh6A7hfBZQhFA+g8BPQgUAbgVAdQhIBtgzB7QgxB9gdCHQgcCEACCHQAECOAkBxQAUBFAnA5QAkA5A6AuQA1AuBIAWQBDAVBSgKQDAgVCvhqQAMgGAMgHQBJgwA7g4QBGhFA1hUIiLiRIgIgJQh9CShuA4QhtA6hWgFQhVgFgwgxQgygygDhIQgKjDAriDQAKgbAIgZQAohjArg+QA/hdBXg9IAKG7IAggIIDJg4IBFlfIA9lCIA7ksQg/gIgxAGQgrADhNAOQhBANg1AU").f().s("#000000").ss(2,1,1,3).p("EArHgQnQA4gMBDgFIh3LwIjAAfIgFgm").p("EAnrgCnQAVAMAZAMIBIAiQBhApAoBRQAjBNAJBTQADBCgPBFQgQBFgyBUQgvBShZBaQhDBIhjBL").p("AdDC/IhOE+Ii+Ap").p("ARNETIhwHIIjCA8").p("AE2JKIjIBeIhKkG").p("AocKCIgkB7IiwAd").p("A54IQQg7A4hJAw").p("EglKgJeQA8hPBFg+QBfhZB6g7QAvgaA3gSQA1gUBBgNQBNgOArgDQAxgGA/AIIg7Es").p("A3CrYIgIikIF+hfIhDUmIEKhc").p("ApCqFIASiQIKkkBIBAH+").p("AE+paIgYhmIGRi8IAeEu").p("AO+sVIARikIHfiGIAsE/").p("AaksaIAQjFIG2g3IhGEpQAaghAggcQBShEBegrICkhGQAtgPAkgLQAngLAdgHICAgc").p("EAgkgLtQguA4giBHQg3B6AGCwIAJBGQAHAxAiA8QAhA9A/A8QBBA+BrAyIBmA0QA9AhArAqQAuAwAHA5QAIBAg9BQQgaAhgkAgIhNBBQgfAagiAY").p("EAjFAKyIBkCuIA7gsQAcgVAagT").p("EAnrgCnQgTgMgRgMQgrgcggghQgkgkgMgsQgPg3APgyQAJgtAeglQAigpBKgVIAnD2").p("AaksaIhPODIh7tp").p("AO+sVIiGSaIhjvT").p("AE+paIEHRqIANAzIA8D+ICNgq").p("ARNETICMo1IB3GqIAiB6IBWE8IBvgY").p("AdDC/IBpm9").p("ApCqFIhzNaIgbDPIgzF4IATgC").p("AocKCIAkh7IHzj9IApCY").p("AE2JKIAIgGIiKxc").p("AlkALICSonICPIOIkHByIg3AXIAdhw").cp().p("AuFDvIDUhLIgEAx").p("A3CrYIBKXcIKolg").p("A5nqvIg9FC").p("A6IDmICLCRQg1BUhGBF").p("AVQCIIAbDBIAHhH").p("EglKgJeQgUAbgVAdQhIBtgzB7QgxB9gdCHQgcCEACCHQAECOAkBxQAUBFAnA5QAkA5A6AuQA1AuBIAWQBDAVBSgKQDAgVCvhqQAMgGAMgH").p("A6IDmIgIgJQh9CShuA4QhtA6hWgFQhVgFgwgxQgygygDhIQgKjDAriDQAKgbAIgZQAohjArg+QA/hdBXg9IAKG7IAggIIDJg4IBFlf").s("#373535").ss(2,0,0,10).p("EAjFAKyIgMgVQAWgMAUgN");
	this.shape.setTransform(455.8,191.8);

	// Layer 2
	this.instance_2 = new lib.wing1();
	this.instance_2.setTransform(136.6,162.5,2.66,2.66,0,0,180,26,25.5);

	this.instance_3 = new lib.wing1();
	this.instance_3.setTransform(761.7,151.9,2.66,2.66,0,0,0,26,25.5);

	// Layer 4
	this.text = new Text("START", "bold 62px Arial", "#990000");
	this.text.textBaseline = "top";
	this.text.lineHeight = 64;
	this.text.lineWidth = 207;
	this.text.setTransform(351,475.5);

	this.button = new lib.button();
	this.button.setTransform(457,511,1,1,0,0,0,185,53);

	this.instance_4 = new lib.bg();
	this.instance_4.setTransform(450,350,1,1,0,0,0,450,350);

	this.addChild(this.instance_4,this.button,this.text,this.instance_3,this.instance_2,this.shape,this.instance_1,this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,900,600);


(lib.feet = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#cc3333").p("AAeiLIAABaIhPg8IAoBQIh4geQBWAtBCA0IACgDQBVBHgti8QgQgegTgb").f("#993333").p("AAXAmQA9AwAuA2QgOh8gzhiQAtC8hVhHIgCAD").f().s("#990033").ss(1,1,1,3).p("AAeiLQATAbAQAeQAzBiAOB8Qgug2g9gwQhCg0hWgtIB4AeIgohQIBPA8IAAha").cp();
	this.shape.setTransform(13,14);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,26,28);


(lib.wing1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#993333").p("AiHBPQB4jfETAVIiFhEQjHAehDDtIAEAD").f("#cc3333").p("AiLBMQBDjtDHgeIh9g/IkFDnIA8EWQAXhmAphKIgEgD").f().s("#990033").ss(1,1,1,3).p("AACj+IB9A/ICFBEQkTgVh4DfQgpBKgXBmIg8kWIEFjn").cp();
	this.shape.setTransform(26,25.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,51.9,51);


(lib.button = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#ff9900").p("AauoRMg1bAAAQiMAAAACMIAAMLQAACMCMAAMA1bAAAQCMAAAAiMIAAsLQAAiMiMAA").f().s("#990000").ss(4,1,1,3).p("AauoRQCMAAAACMIAAMLQAACMiMAAMg1bAAAQiMAAAAiMIAAsLQAAiMCMAAMA1bAAA").cp();
	this.shape.setTransform(185,53);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,370,106);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ccffff","#23a1a1"],[0,1],0,-301.8,0,301.9).p("EBGUgu3MiMnAAAMAAABdvMCMnAAAMAAAhdv").f();
	this.shape.setTransform(450,300);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,900,600);


(lib.gOver = function() {
	this.initialize();

	// Layer 1
	this.text = new Text("Game Over", "bold 52px Arial", "#003366");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 54;
	this.text.lineWidth = 286;
	this.text.setTransform(143,0);

	this.addChild(this.text);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,286,64);


(lib.splat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,sound:6},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		playSound("splat_1",0);
	}
	this.frame_21 = function() {
		this.gotoAndStop("idle");
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(6).call(this.frame_6).wait(15).call(this.frame_21).wait(1));

	// Layer 1
	this.instance = new lib.crushed();
	this.instance.setTransform(33.6,13.5,1,1,0,0,0,33.6,13.5);

	this.timeline.addTween(Tween.get(this.instance).wait(6).to({scaleY:1.83,y:24.8},15).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,67.2,27);


(lib.crushed = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#cccccc").p("AFHggQjNDEmOhYQASAKAWAJQAhAOAlAJQBLARBbAAQBdAABKgRQAmgJAhgOQBignAAg4QAAgQgJgPIAAgB").f("#ffffff").p("ACsh0QhMgShgAAQheAAhNASQgjAJgeAMQhjAoAAA3QAAArA7AhQGOBYDNjEQgVgjhEgcQgfgMgjgJ").p("ADDggQAAAhg8AXQg7AYhSAAQhTAAg8gYQgNgFgKgGQgjgTAAgaQAAgiA6gYQA8gXBTAAQBSAAA7AXQAEACADABQA1AXAAAg").f("#ffcc00").p("ACOhXQgbB5kfgVQAKAGANAFQA8AYBTAAQBSAAA7gYQA8gXAAghQAAggg1gX").f("#ffff00").p("ACHhaQg7gXhSAAQhTAAg8AXQg6AYAAAiQAAAaAjATQEfAVAbh5QgDgBgEgC").f().s("#999999").ss(1,1,1,3).p("AFHgfIAAAAQAJAPAAAQQAAA4hiAnQghAOgmAJQhKARhdAAQhbAAhLgRQglgJghgOQgWgJgSgKQg7ghAAgrQAAg3BjgoQAegMAjgJQBNgSBeAAQBgAABMASQAjAJAfAMQBEAcAVAj");
	this.shape.setTransform(33.6,13.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,67.2,27);


(lib.Monster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,walk:1},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(2));

	// monster
	this.instance = new lib.mHead();
	this.instance.setTransform(9.7,-8.7,1,1,0,0,0,24,12);

	this.instance_1 = new lib.arm();
	this.instance_1.setTransform(-6.1,7.7,1,1,0,0,0,-0.2,-0.1);

	this.instance_2 = new lib.body();
	this.instance_2.setTransform(2.2,15.2);

	this.instance_3 = new lib.foot();
	this.instance_3.setTransform(-2.7,31.9,1,1,8,0,0,0.5,1.2);

	this.instance_4 = new lib.foot();
	this.instance_4.setTransform(11.6,28.7,1,1,0,0,0,0.5,1.3);

	this.instance_5 = new lib.mWalk();
	this.instance_5.setTransform(0.4,13.7,1,1,0,0,0,3.6,14.7);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5}]},1).wait(1));

	// egg
	this.egg = new lib.mEgg();
	this.egg.setTransform(22.7,12.1,1,1,0,0,0,18.1,21);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.egg}]}).wait(2));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-32.3,-20.8,68.4,66.5);


(lib.mHead = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.closedMouth();
	this.instance.setTransform(31.7,15.1);

	this.instance_1 = new lib.eyes();
	this.instance_1.setTransform(23.8,11.3,1,1,0,0,0,-0.1,0.3);

	this.instance_2 = new lib.head();
	this.instance_2.setTransform(24,12.3);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,48.1,24.5);


(lib.closedMouth = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#006699").ss(1,1,1,3).p("AlIAzQEFixGNCA");
	this.shape.setTransform(-5,0.2,0.5,0.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-21.5,-2.4,33,5.2);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ACKgcQAEAPANANQAOANAPAEQAPAEAHgIQAIgHgEgOQgEgPgOgNQgNgOgPgEQgPgEgIAIQgIAIAFAO").p("ACPgkQgBgGADgEQADgDAHACQAHACAFAFQAGAGACAHQACAGgEADQgDAEgGgCQgHgCgGgGQgGgFgCgH").p("ACygPQgBgDABgBQACgCADABQADABACACQADADAAADQABACgBACQgCABgDAAQgCgBgDgDQgDgCAAgD").p("AiGg4QgUAFgRASQgSARgFATQgFAUAKAKQAKAKATgFQAUgFASgSQARgRAFgUQAGgTgLgKQgJgLgUAG").p("AiYgFQgBAEgDACQgEAEgDABQgEABgCgCQgCgCABgDQABgEADgDQAEgEADgBQAEgBACACQACACgBAE").p("AhrghQgDAJgHAIQgIAHgJADQgIACgFgEQgEgFACgIQADgJAHgIQAIgHAJgDQAIgCAFAEQAEAFgCAI").f("#ffffff").p("ACXgYQAGAGAHACQAGACADgEQAEgDgCgGQgCgHgGgGQgFgFgHgCQgHgCgDADQgDAEABAGQACAHAGAF").p("AC1gKQADADACABQADAAACgBQABgCgBgCQAAgDgDgDQgCgCgDgBQgDgBgCACQgBABABADQAAADADAC").p("AiZgLQgCgCgEABQgDABgEAEQgDADgBAEQgBADACACQACACAEgBQADgBAEgEQADgCABgEQABgEgCgC").p("AhtguQgFgEgIACQgJADgIAHQgHAIgDAJQgCAIAEAFQAFAEAIgCQAJgDAIgHQAHgIADgJQACgIgEgF").f().s("#006699").ss(1,1,1,3).p("AiyA7QAKAAAMgJ").p("AiyA7QgGAAgHgDQgHgEgDgFQgFgJgBgDQgDgIAAgI");

	this.shape_1 = new Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3).p("ACKgyIBOAk").p("ACKgyIA5A+").p("AhigsIhyAk").p("AhigsIhLA+").s("#006699").ss(1,1,1,3).p("Ai3A0QALAAALgJ").p("Ai3A0QgGAAgHgEQgHgEgDgEQgEgJgCgEQgDgHAAgJ");
	this.shape_1.setTransform(1.6,2.5);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#000000").p("ACKgcQAEAPANANQAOANAPAEQAPAEAHgIQAIgHgEgOQgEgPgOgNQgNgOgPgEQgPgEgIAIQgIAIAFAO").p("ACPgkQgBgGADgEQADgDAHACQAHACAFAFQAGAGACAHQACAGgEADQgDAEgGgCQgHgCgGgGQgGgFgCgH").p("ACygPQgBgDABgBQACgCADABQADABACACQADADAAADQABACgBACQgCABgDAAQgCgBgDgDQgDgCAAgD").p("AiGg4QgUAFgRASQgSARgFATQgFAUAKAKQAKAKATgFQAUgFASgSQARgRAFgUQAGgTgLgKQgJgLgUAG").p("AimgHQAEgEADgBQAEgBACACQACACgBAEQgBAEgDACQgEAEgDABQgEABgCgCQgCgCABgDQABgEADgD").p("AhtguQAEAFgCAIQgDAJgHAIQgIAHgJADQgIACgFgEQgEgFACgIQADgJAHgIQAIgHAJgDQAIgCAFAE").f("#ffffff").p("ACXgYQAGAGAHACQAGACADgEQAEgDgCgGQgCgHgGgGQgFgFgHgCQgHgCgDADQgDAEABAGQACAHAGAF").p("AC1gKQADADACABQADAAACgBQABgCgBgCQAAgDgDgDQgCgCgDgBQgDgBgCACQgBABABADQAAADADAC").p("AiqAAQgBADACACQACACAEgBQADgBAEgEQADgCABgEQABgEgCgCQgCgCgEABQgDABgEAEQgDADgBAE").p("Ah6gwQgJADgIAHQgHAIgDAJQgCAIAEAFQAFAEAIgCQAJgDAIgHQAHgIADgJQACgIgEgFQgFgEgIAC").f().s("#006699").ss(1,1,1,3).p("AiyA7QAKAAAMgJ").p("AiyA7QgGAAgHgDQgHgEgDgFQgFgJgBgDQgDgIAAgI");

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},59).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-21,-5.8,42.2,11.8);


(lib.head = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#00ccff").p("AijhXQhGAjgGA4QgFAzA4AhQAGAEAHADQAmASAwAHIAAgCQBUgHA5gTQCOgwgOh+QgEgCgFgDQhCghhcgBQgFgBgEAAQggAAgdAEIAAAAQgZADgWAGQggAIgbAO").p("AguhiQgFAEgJADQgIACgGgBQgHgBgBgEQgBgDAFgFQAFgEAJgCQAEgBAEAAQAEgBADABQAGABABADQABAEgFAE").f("#0066cc").p("AgqhqQgBgDgGgBQgDgBgEABQgEAAgEABQgJACgFAEQgFAFABADQABAEAHABQAGABAIgCQAJgDAFgEQAFgEgBgE").f("#0099cc").p("AC0hSQAOB+iOAwQg5AThUAHIAAACQAoAFAvgDQAfgDAdgEQBBgLAwgYQBGgjAAgwQAAgug9gh").f().s("#006699").ss(1,1,1,3).p("AijhXQAbgOAggIQAWgGAZgDIAAAAQAdgEAgAAQAEAAAFABQBcABBCAhQAFADAEACQA9AhAAAuQAAAwhGAjQgwAYhBAL").p("Ai8BYQg4ghAFgzQAGg4BGgj").p("AgqhqQABAEgFAEQgFAEgJADQgIACgGgBQgHgBgBgEQgBgDAFgFQAFgEAJgCQAEgBAEAAQAEgBADABQAGABABAD").cp();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-23.9,-12.2,48.1,24.5);


(lib.arm = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#00ccff").p("ACVhbIgSgsQgvA5g6AwQgIAGgGAFQAEADADAFQAHALgIAOQgHAPgQALQgRALgRADQgSAEgDgPQgFgPACgIQgRAGgZAIQgYAJgOATQgLARAPAeQABABAAABQACADACACIABgHQBbANBThJQACgCADgDQAkghAkgwIAEACQADgGACgGQALgWALgW").f("#0099cc").p("AB2glQgkAwgkAhQgDADgCACQhTBJhbgNIgBAHQAVAkBBgdQARgHAPgIQAggSAZgWQAFgEAFgFQADgBACgDQAogoAagyIgEgC").f("#0066cc").p("AATgLQgDgFgEgDQgjAYgoAPQgCAIAFAPQADAPASgEQARgDARgLQAQgLAHgPQAIgOgHgL").f().s("#006699").ss(1,1,1,3).p("ACVhbQgLAWgLAWQgCAGgDAGQgaAygoAoQgCADgDABQgFAFgFAEQgZAWggASQgPAIgRAHQhBAdgVgkQgCgCgCgDQAAgBgBgBQgPgeALgRQAOgTAYgJQAZgIARgGQAogPAjgYQAGgFAIgGQA6gwAvg5").p("AAMgTQAEADADAFQAHALgIAOQgHAPgQALQgRALgRADQgSAEgDgPQgFgPACgI");
	this.shape.setTransform(-11.4,9.3);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-26.3,-4.2,29.7,27.2);


(lib.body = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#00ccff").p("Ah2iYQhFBrgKA8QgCAJgBAIQgFA5AfAvQADAFADAEQAcAlAvADIAAgBQB3gmA6g/QBJhRgch6IACgDQgJgEgJgBQgCgKgBgJQgBgOgIgMQgEgHgHgDQgBgBAAAAQgBABAAAAQgCABgDABQgGACgGACQgBABgBAAQhvAqhEgSIgIAA").p("AiPhOQAEgFAHAAQAGABACAEQACAFgDAGQgDAHgIAEQgGADgHAAQgGAAgBgFQgBgEAEgGQAFgFAFgF").p("ABFhmQAHgIAKAAQAKABADAHQADAIgFAJQgFAKgKAGQgLAHgKgCQgKgBgCgGQgCgHAIgJQABgBACgCQAGgHAFgF").p("AA3hrQgEAFgDAFQgEAFgHAAQgGACgCgEQgDgDACgGQADgFAGgFQAHgEAGgBQAGgBACADQACADgFAG").p("AAKBJQgJAKgVAFQgUADgUAHQgVAHgFgNQgFgMAMgPQALgPAWgJQAVgIASADQASACAFAMQAFANgLAK").p("AhCByQALgBADAGQAEAFgIAJQgHAKgHAIQgGAIgMACQgLACgEgGQgFgGAEgJQAFgKAMgIQAKgIALgC").f("#0066cc").p("AiZhEQgEAGABAEQABAFAGAAQAHAAAGgDQAIgEADgHQADgGgCgFQgCgEgGgBQgHAAgEAFQgFAFgFAF").p("AA6haQgCACgBABQgIAJACAHQACAGAKABQAKACALgHQAKgGAFgKQAFgJgDgIQgDgHgKgBQgKAAgHAIQgFAFgGAH").p("AA6h0QgCgDgGABQgGABgHAEQgGAFgDAFQgCAGADADQACAEAGgCQAHAAAEgFQADgFAEgFQAFgGgCgD").p("AAQAyQgFgMgSgCQgSgDgVAIQgWAJgLAPQgMAPAFAMQAFANAVgHQAUgHAUgDQAVgFAJgKQALgKgFgN").p("AhXB8QgMAIgFAKQgEAJAFAGQAEAGALgCQAMgCAGgIQAHgIAHgKQAIgJgEgFQgDgGgLABQgLACgKAI").p("ABxBIQgJABgJAGQgEAEgDADQgDADgBAEQgEAHADAFQAFAEAIgBQAJgBAFgHQAEgGAGgHQAGgIgCgEQgDgEgIAB").f("#0099cc").p("ACBh4QAcB6hJBRQg6A/h3AmIAAABQASABAygEQAygEBBghQBBghAeg+QAfg9gag4QgMgYgUgQQgNgLgOgFIgCAD").p("AB8BLQACAEgGAIQgGAHgEAGQgFAHgJABQgIABgFgEQgDgFAEgHQABgEADgDQADgDAEgEQAJgGAJgBQAIgBADAE").f().s("#006699").ss(1,1,1,3).p("ABai3QAHADAEAHQAIAMABAOQABAJACAKQAJABAJAEQAOAFANALQAUAQAMAYQAaA4gfA9QgeA+hBAhQhBAhgyAEQgyAEgSgBQgvgDgcglQgDgEgDgFQgfgvAFg5QABgIACgJQAKg8BFhr").p("AiZhEQAFgFAFgFQAEgFAHAAQAGABACAEQACAFgDAGQgDAHgIAEQgGADgHAAQgGAAgBgFQgBgEAEgG").cp().p("AA6haQAGgHAFgFQAHgIAKAAQAKABADAHQADAIgFAJQgFAKgKAGQgLAHgKgCQgKgBgCgGQgCgHAIgJQABgBACgC").cp().p("AA6h0QACADgFAGQgEAFgDAFQgEAFgHAAQgGACgCgEQgDgDACgGQADgFAGgFQAHgEAGgBQAGgBACAD").cp().p("AAQAyQAFANgLAKQgJAKgVAFQgUADgUAHQgVAHgFgNQgFgMAMgPQALgPAWgJQAVgIASADQASACAFAM").cp().p("AhXB8QAKgIALgCQALgBADAGQAEAFgIAJQgHAKgHAIQgGAIgMACQgLACgEgGQgFgGAEgJQAFgKAMgI").cp().p("ABxBIQAIgBADAEQACAEgGAIQgGAHgEAGQgFAHgJABQgIABgFgEQgDgFAEgHQABgEADgDQADgDAEgEQAJgGAJgB").cp();
	this.shape.setTransform(0.6,-0.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-19.5,-18.9,40.4,37);


(lib.foot = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#00ccff").p("AhUgtQAGANAEAQQAHAhgTAuIACABQgBABgCABQAAAAgBABQgZAWAAASQABACAAABQAAAEABACQABADACACIABgBQBDAAAqgGQBcgOgYgtIAGgEQgFgBgFgCQgbgIghgCQgGAAgFAAQgJgBgIABIgCABIgZANQAKgXAAgNQABgMgCgHQgBgHgCgOQgBgNgLgSIgdAK").p("AgYAjIAAAEIACgBQgBAAgBgD").p("AAECGIgCgUIABAUQAAAAABAA").f("#0099cc").p("Ag3g3QALASABANQACAOABAHQACAHgBAMQAAANgKAXIAZgNIAAgEQAJgUACgTQABgFAAgFQgBgLgCgJQgLgwgSg1Ig8AKQgCAtAWAjIAdgK").p("AhsB5QAJALAXACQAhADAugDIgBgUQgqAGhDAAIgBAB").p("ABGA3QAYAthcAOIACAUQAvgDAggMQAggNgCgVQgCgUgjgOIgGAE").f().s("#006699").ss(1,1,1,3).p("AhKgQQgEgQgGgNQgWgjACgtIA8gKQASA1ALAwQACAJABALQAAAFgBAFQgCATgJAUQABADABAAQAIgBAJABQAFAAAGAAQAhACAbAIQAFACAFABQAjAOACAUQACAVggANQggAMgvAD").p("AADCGQguADghgDQgXgCgJgLQgCgCgBgDQgBgCAAgEQAAgBgBgCQAAgSAZgWQABgBAAgBQAAgBABgBQATgugHgh").p("AgWAmIgCAB");
	this.shape.setTransform(0,0.1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-11.3,-13.4,22.6,27.1);


(lib.mWalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// head
	this.instance = new lib.mHead();
	this.instance.setTransform(9.5,-4.3,1,1,3,0,0,24,12);

	this.timeline.addTween(Tween.get(this.instance).to({rotation:7,x:10.6,y:-2.7},1).to({rotation:-7.8,regY:12.1,x:8.7,y:-7.5},7).to({rotation:7,regY:12,x:10.6,y:-2.7},7).to({rotation:-7.8,regY:12.1,x:8.7,y:-7.5},7).to({rotation:1,regY:12,x:9.5,y:-4.3},5).wait(1));

	// armfront
	this.instance_1 = new lib.arm();
	this.instance_1.setTransform(-3.3,12.8,1,1,-96.4,0,0,-0.2,-0.2);

	this.timeline.addTween(Tween.get(this.instance_1).to({rotation:-51.3,y:8.8},7).to({rotation:23.5,regY:0,x:-2.3,y:11.9},7).to({rotation:-66.3,regX:0,x:-0.2,y:8.7},7).to({rotation:-91.9,regX:-0.1,x:-2.8,y:12.3},6).wait(1));

	// body
	this.instance_2 = new lib.body();
	this.instance_2.setTransform(2.2,20.2);

	this.timeline.addTween(Tween.get(this.instance_2).to({y:16.2},7).to({y:20.2},7).to({y:16.2},7).to({y:19.6},6).wait(1));

	// frontfoot
	this.instance_3 = new lib.foot();
	this.instance_3.setTransform(-14.7,31.4,1,1,60,0,0,0.5,1.3);

	this.timeline.addTween(Tween.get(this.instance_3).to({rotation:0,x:1.5,y:23.5},7).to({scaleX:1,scaleY:1,rotation:-68,regX:0.4,regY:1.4,x:20.5,y:25.6},7).to({scaleX:1,scaleY:1,rotation:4,regX:0.5,regY:1.3,x:6.5,y:32.4},7).to({scaleX:1,scaleY:1,rotation:0,regY:1.2,x:-11.4,y:31.6},6).wait(1));

	// backfoot
	this.instance_4 = new lib.foot();
	this.instance_4.setTransform(20.6,25.7,1,1,-68.1,0,0,0.5,1.3);

	this.timeline.addTween(Tween.get(this.instance_4).to({rotation:0,x:10.6,y:32.7},7).to({rotation:60,regX:0.6,regY:1.4,x:-14.7,y:31.1},7).to({rotation:0,regY:1.3,x:-0.4,y:23.3},7).to({scaleX:1,scaleY:1,rotation:-58.2,regX:0.5,regY:1.4,x:17.5,y:25.4},6).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-31.3,-17.7,67.5,64.7);


(lib.mEgg = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.egg();
	this.instance.setTransform(18,21,1,1,0,0,0,18,21);

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#00ccff").p("AgsguIAABKQAHAGAHAEQAJAFAJADQATAFAXgYQABgBACgBQABgCACgDIgIABQgHgkgVgfIgsAA").f("#0099cc").p("AAcAVIAIgBQAWgagfgoIgbAAQAVAfAHAk").f().s("#006699").ss(1,1,1,3).p("AAbguQAfAogWAaQgCADgBACQgCABgBABQgXAYgTgFQgJgDgJgFQgHgEgHgG");
	this.shape.setTransform(26.9,29.9);

	this.addChild(this.shape,this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(5.4,6.3,26,29.4);


(lib.egg = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#ccccff").p("AA2iCQgUgOgXgCQgygEgrBDQgrBEAAAvQAAAwAkAiQAUARAYAJIAAgDQAygGAfgXQgBgCAAgBQAAgEADgDQADgDAFAAQABAAACAAQACgCACgDQgHgGAAgXQAAgXAIgRQAKgQAKAAQACAAADABQABg4gahQ").f("#bfbfe5").p("ABPAGQAGACAEAIQAGAKACATQADATgEALQgDALgRAFQgQAFgHgGQgCADgCACQACABACACQADADAAAEQAAAEgDAEQgEACgDAAQgFAAgDgCQgCgDAAgCQgfAXgyAGIAAADQAVAHAYAAQA1AAAkghQAlgiAAgwQAAgvgfg/QgSgjgXgRQAaBQgBA4").f("#a198da").p("ABKAFQgKAAgKAQQgIARAAAXQAAAXAHAGQAHAGAQgFQARgFADgLQAEgLgDgTQgCgTgGgKQgEgIgGgCQgDgBgCAA").p("AAuBfQgFAAgDADQgDADAAAEQAAABABACQAAACACADQADACAFAAQADAAAEgCQADgEAAgEQAAgEgDgDQgCgCgCgBQgCAAgBAA").f().s("#9966cc").ss(1,1,1,3).p("AA2iCQAXARASAjQAfA/AAAvQAAAwglAiQgkAhg1AAQgYAAgVgHQgYgJgUgRQgkgiAAgwQAAgvArhEQArhDAyAEQAXACAUAO").cp();
	this.shape.setTransform(18,21);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(5.4,6.3,25.2,29.4);


(lib.plant = function() {
	this.initialize();

	// Layer 3
	this.shape = new Shape();
	this.shape.graphics.f("#4a8a54").p("ABkiXQAFATAHAbQAJhegSApQgCAEgBAD").p("ABThkQgDAMgEAOQg2j0gDBiQgBAxAJBhQhiirAPBHQADAPAHAVQAiAdA+A7QgUg0gGgbQgLg1BKCAQgCgZgCgV").p("ACChOIgJALQABAHACAGQADgNADgL").p("ACfgyQBtixhCBCIgxA5QgCAXgFAtIANgO").p("ADOgFICHhPQBEgihJBAQCChuhkAyIh4BHQgSASgWAU").p("ADShOQgOAZgWAjIBvhXQBuhuhXA9IhiBM").p("AF+gOQAmABioBRIAfAEQDXhqhjAPIgRAF").p("AEhCKQDugEhigUIhSgLQgvAChQAAIBFAh").p("ADRCLQgagHgfgJIAkAmQARAahog3QguAfgdAPQg6AgBYhNQg9AaglANQhJAZB9hFQhMAbgtALQhaAWCdhKQhpgDg5gEQhzgIDwgMQhugag2gRQhsghEUAwQhUgdgrgWQgIgEgGgDQj9gtBuA2QA5AdBxAnQlxhBCQAtQBJAWCSAjQlAAQCZALQBMAGCMADQjRBjB4geQA8gPBmgjQinBbBhghQAxgRBSgjQh2BnBOgqQAngVA9gpQCKBJgWgjIgxgyQESBLhAgqIh3g5QACgBADAB").p("AjjgMQASgHCAAYQgwgbgjgXQlYidBzBUQA1AoBxBC").p("AjWhkQA0ATB/A7Qg3gugYgbQgvgzCdBgQgKgMgJgLQABADABACQjhjVA2BVQAaArBIBVQjRiBA+BFQALANAQAP").f("#76b880").p("ABXg2QhKiAALA1QAGAbAUA0Qg+g7gigdQg4gvAZAnQAQAbAmAuQAJALAKAMQidhgAvAzQAYAbA3AuQh/g7g0gTQhAgXAyAkQAYASAoAYQAjAXAwAbQiAgYgSAHQgHAEAQAJQAGADAIAEQArAWBUAdQkUgwBsAhQA2ARBuAaQjwAMBzAIQA5AEBpADQidBKBagWQAtgLBMgbQh9BFBJgZQAlgNA9gaQhYBNA6ggQAdgPAugfQBoA3gRgaIgkgmQAfAJAaAHQCNAkgpgbIgUgKIhFghQBQAAAvgCQBkgFg6gMIhqgOIgfgEQCohRgmgBQgFAAgLABIh2AfQA5gsAfgcQBJhAhEAiIiHBPQAWgUASgSQCBh+hNA3IgNAJIhvBXQAWgjAOgZQAxhSgpApIg7BFIgNAOQAFgtACgXQABglgKAYQgGAOgIAZQgDALgDANQgCgGgBgHQgFgUgEgSQgHgbgFgTQgSg8gBAvQgBAZADAnQACAVACAZ").f();
	this.shape.setTransform(1,0.1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-44.7,-24.7,91.5,49.7);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// head
	this.shape = new Shape();
	this.shape.graphics.f("#993333").p("ABwiqQA+A0gXBGQABAMgFAQQgMApglAnQgkAkgnANQgDABgCACQhEA4hmBAQAAAAgBAAQgCACgDACQgWANgXANQgUAMgVANIABABQAWgJAWgIQAagKAYgKQJ6j+l1inQgBAAAAAAQgBgBgBAAQCYj8g3AVIiRDpIAzgB").f("#cc3333").p("AA9ipICRjpQgkAPiACHQgYAZgWAZQhTgXg6BgQADgBADAAQAbgFAPAhQARAfgHAxQgCAYgIAVQgHAVgMATQgYAjgbAEQgdAEgPggQgCgDgBgFQgBAEgBADQgGAdgGAfQgDAWgEAYQAAAAgBABQgGAvgHA1IAAABIAFAGQAVgNAUgMQAXgNAWgNQADgCACgCQABAAAAAAQBmhABEg4QACgCADgBQgDAAgEABQgqAMgWgXQgVgWALgrQALgpAngmQAlgoAsgLQArgLAUAWQAPAOAAAXQAXhGg+g0IgzAB").p("AjJCtQABACgCAEQgBABgBAAQgCACgCACQgFABgDAAQgDgBgBAAQgBgBgBgBQAAgDACgDQACgDAEgCQAFgCADABQAEAAABAD").p("AisC5QACADACACQAAACAAADQAAAAAAACQAAAAAAABQAAAEgDABQgBACgEgDQgBgBgBAAQgBgDgCgDQgBgCAAgBQAAgCAAgCIAAgBQAAgBABgBQAAgCACgBQACgBAEACQABABAAAB").f("#000000").p("AjOCqQgDgBgFACQgEACgCADQgCADAAADQABABABABQABAAADABQADAAAFgBQACgCACgCQABAAABgBQACgEgBgCQgBgDgEAA").p("AitC3QgEgCgCABQgCABAAACQgBABAAABIAAABQAAABAAABQAAABAAABQAAABABACQACADABADQABAAABABQAEADABgCQADgBAAgEQAAgBAAAAQAAgCAAAAQAAgDAAgCQgCgCgCgDQAAgBgBgB").p("ABJhgQgsALglAoQgnAmgLApQgLArAVAWQAWAXAqgMQAEgBADAAQAngNAkgkQAlgnAMgpQAFgQgBgMQAAgXgPgOQgUgWgrAL").p("ABtgIQgQAQgUAFQgTAFgJgKQgJgJAEgSQAGgTAQgRQASgRASgFQATgFAJAJQAKAKgFATQgGASgQAS").p("AAhAPQgDAJgGAHQgIAHgHACQgJADgCgFQgFgFACgHQADgIAFgHQAHgIAIgCQAJgCADAEQAFAFgCAH").p("AhhhmQgPghgbAFQgDAAgDABQgZAFgVAhQgYAmgGAvQgFAqAMAeQABAFACADQAPAgAdgEQAbgEAYgjQAMgTAHgVQAIgVACgYQAHgxgRgf").p("Ah8hnQAHAOgCAVQgDAUgLARQgKAQgMACQgMACgHgOQgHgOADgTQAAgCAAgBQADgVAKgQQAEgHAFgEQAGgGAIgBQALgBAHAO").p("AieAcQgCgFABgKQABgIAFgHQAEgGAGgBQAFgBADAHQADAEgCAKQgBAJgFAGQgEAHgFABQgFABgEgH").f("#ffffff").p("ACDgsQAFgTgKgKQgJgJgTAFQgSAFgSARQgQARgGATQgEASAJAJQAJAKATgFQAUgFAQgQQAQgSAGgS").p("AAeADQgDgEgJACQgIACgHAIQgFAHgDAIQgCAHAFAFQACAFAJgDQAHgCAIgHQAGgHADgJQACgHgFgF").p("AiOh0QgIABgGAGQgFAEgEAHQgKAQgDAVQAAABAAACQgDATAHAOQAHAOAMgCQAMgCAKgQQALgRADgUQACgVgHgOQgHgOgLAB").p("AiVAiQAFgBAEgHQAFgGABgJQACgKgDgEQgDgHgFABQgGABgEAGQgFAHgBAIQgBAKACAFQAEAHAFgB").f("#cc9966").p("Aj2EgQABgBABAAIgFgGIACAGIABAB").f("#a37445").p("Aj2EgIAAABQABgBACAAIgBgBQgBAAgBAB").f("#ffffcc").p("AjzEgQAIA5AkAkQgTg3ATg3QgWAIgWAJ").f("#ffff99").p("AjHF9QARARAXAMQgphYAzhHQgYAKgaAKQgTA3ATA3").f().s("#663333").ss(1,1,1,3).p("ADTmZIgFAH").p("AjzEgQgCAAgBABQgBAAgBABQgBgFAAgE").p("Aj0EfIABAB").p("Aj5EZIAFAG").p("Aj3EfQAAABgBACIACgC").s("#990033").ss(1,1,1,3).p("ADOmSQA3gViYD8QABAAABABQAAAAABAAQF1Cnp6D+QgzBHApBYQgXgMgRgRQgkgkgIg5").p("Aj5EYQAHg1AGgvQABgBAAAAQAEgYADgWQAGgfAGgdQABgDABgE").p("AiRiBQA6hgBTAXQAWgZAYgZQCAiHAkgP").p("AA9ipIAzgB").p("AjzEgQAWgJAWgIQAagKAYgK");
	this.shape.setTransform(-3.9,-23.9);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).wait(9));

	// egg
	this.egg = new lib.egg();
	this.egg.setTransform(8,14.1,1,1,45,0,0,18,21);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.egg}]}).wait(9));

	// feet
	this.instance = new lib.feet();
	this.instance.setTransform(14.1,11.1,1.2,1.2,0,0,0,13,14);

	this.instance_1 = new lib.feet();
	this.instance_1.setTransform(-3.3,19.6,1,1,0,0,0,13,14);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(9));

	// body
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#cc3333").p("AC5jGQABgPABgQQAEgsAIgsQhCAKhAAKQAAACgBACQArAVAlAoQATARAQATQAfAoAVAtQAEAMAFALIAAAAQAAAAAAAAQALgsAPguQgpgKgsgK").p("ACUjoQglgogrgVQgugWgzgBQgXAAgWAFQgrALgeAgQgwA8gGBGQgCAygCA4QgCAagJAYQgWA1gZA3QgtBjBWAyQAIAEAIAFQBwgWBcgpQBegrA6hQQAthAgDhSQgFhegphaQABABABgB").p("AD0hYIAAAAIAAABQAFAPAFAOQAKAfAEAdQAFgcAGggQgRgPgRgPIgBAA").f("#993333").p("ACUjoQgBABgBgBQApBaAFBeQADBSgtBAQg6BQheArQhcAphwAWQBZAeBZADQAzAGA0gQQBggeA6hUQASgbAJgfQAUhAgIhEIAAgBQgEgdgKgfQgFgOgFgPQgBAAABgBQgFgLgEgMQgVgtgfgoQgQgTgTgR").f().s("#990033").ss(1,1,1,3).p("AC5jGQAsAKApAKQgPAugLAsQAAAAAAAAIAAAAIABAAQARAPARAPQgGAggFAcIAAABQAIBEgUBAQgJAfgSAbQg6BUhgAeQg0AQgzgGQhZgDhZgeQgIgFgIgEQhWgyAthjQAZg3AWg1QAJgYACgaQACg4ACgyQAGhGAwg8QAeggArgLQAWgFAXAAQAzABAuAW").p("ABFkpQBAgKBCgKQgIAsgEAsQgBAQgBAP").p("ABEklQArAVAlAoQATARAQATQAfAoAVAtQAEAMAFAL").p("AEMACQgEgdgKgfQgFgOgFgPQgBAAABgB").p("AD0hXIAAAA").cp();
	this.shape_1.setTransform(9.2,-7);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_1}]}).wait(9));

	// wngs
	this.instance_2 = new lib.wing1();
	this.instance_2.setTransform(-19.3,-18.3,1,1,0,0,180,26,25.5);

	this.instance_3 = new lib.wing1();
	this.instance_3.setTransform(51.6,-18.3,1,1,0,0,0,26,25.5);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_3,p:{rotation:0,x:51.6,y:-18.3,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:25.5}},{t:this.instance_2,p:{skewX:0,skewY:180,x:-19.3,y:-18.3,scaleX:1,scaleY:1,regY:25.5,rotation:0}}]}).to({state:[{t:this.instance_3,p:{rotation:30,x:51.5,y:-8.2,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:25.5}},{t:this.instance_2,p:{skewX:-29.9,skewY:150,x:-19.2,y:-8.2,scaleX:1,scaleY:1,regY:25.5,rotation:0}}]},2).to({state:[{t:this.instance_3,p:{rotation:0,x:51.5,y:-12.3,scaleX:1.018,scaleY:1.055,skewX:151.7,skewY:-31.7,regY:25.6}},{t:this.instance_2,p:{skewX:-151.6,skewY:-148.1,x:-19.2,y:-12.3,scaleX:1.018,scaleY:1.055,regY:25.6,rotation:0}}]},2).to({state:[{t:this.instance_3,p:{rotation:0,x:51.6,y:6.6,scaleX:1,scaleY:1,skewX:180,skewY:0,regY:25.5}},{t:this.instance_2,p:{skewX:0,skewY:0,x:-19.3,y:6.6,scaleX:1,scaleY:1,regY:25.5,rotation:180}}]},2).to({state:[{t:this.instance_3,p:{rotation:0,x:51.5,y:-12.3,scaleX:1.018,scaleY:1.055,skewX:151.7,skewY:-31.7,regY:25.6}},{t:this.instance_2,p:{skewX:-151.6,skewY:-148.1,x:-19.2,y:-12.3,scaleX:1.018,scaleY:1.055,regY:25.6,rotation:0}}]},2).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-45.3,-64.9,122.9,98.5);


(lib.nest = function() {
	this.initialize();

	// nestFront
	this.shape = new Shape();
	this.shape.graphics.f("#c4936a").p("AEFASQgzgYgwgSQkDhhioB3QgeAUgZAbQAZgbAegUQiThxjkgRQgjgDgkAAQAkAAAjADIAAgDQgmgZgngvIAAFjQANAIAJAFQASADAdgDQA4gGA0gbQAzgcAVgQIAKgLIAmAjQAyAmA3AUQBGAbAfAAQAlAAAsggQAlgcAbgYIARgTQCqBdAWALQAaANANABQAaACAdgWQAbgUBeg8QAvgeApgbIBZAmQBcAoARAKQAZAQAJgCQAPgCAKgcQAIgXAKgdIAAkDQgOAJgXAKQggARgvAQQhLAaggAAQi5AKhCAdQhDAdgPASQAwASAzAY").f().s("#663333").ss(2,1,1,3).p("ACigYQAPgSBDgdQBCgdC5gKQAgAABLgaQAvgQAggRIgBAAIgbAK").p("AKpipQASgLANgK").p("AqAiEQDkARCTBxQCoh3EDBh").p("ACigYQAwASAzAY").p("AkJgCQgeAUgZAb").p("AqAiEQgjgDgkAA");
	this.shape.setTransform(81.4,68.5);

	// eggs
	this.egg5 = new lib.egg();
	this.egg5.setTransform(98.5,49.5,1.5,1.5,0,0,0,18.1,21);

	this.egg4 = new lib.egg();
	this.egg4.setTransform(56.5,50.5,1.5,1.5,0,0,0,18.1,21);

	this.egg3 = new lib.egg();
	this.egg3.setTransform(121.5,38.5,1.5,1.5,0,0,0,18.1,21);

	this.egg2 = new lib.egg();
	this.egg2.setTransform(79.5,21.6,1.5,1.5,0,0,0,18.1,21);

	this.egg1 = new lib.egg();
	this.egg1.setTransform(33.6,33.5,1.5,1.5,0,0,0,18.1,21);

	// nestBack
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#9a6d48").p("ARui9IgiBuIhShCIADA6QACBCAAAoQAAAzgLAUQgLATghAEQgfAEgsgIQgdgFgQgEQgKgDgGgCQgQgHgHAFQgGAFgCAMQgDANgNAhQgCAFgBAFQgLAdgIAXQgJAcgPACQgKACgZgQQgRgKhcgoIhZgmQgpAbgvAeQhdA8gcAUQgdAXgagDQgNgBgagNQgVgLirhdIgRATQgaAYgmAcQgsAgglAAQgfAAhGgbQg3gUgxgmIgngjIgKALQgVAQgzAcQg0Abg4AGQgdADgRgDQgKgFgMgIQgFgDgGgEQgBgBgDgCQAAAAgBAAQgWgQgVgRQgVgSgTgTQgmgmgagzQgNgagGgSIhMAjQhVAhgwgHQgwgGAAh5QAAgJAAgKQg5BdgTBdQgIAnAAAdQABAZAFAEQAHAIAjACQAgAAAkgEQAbgDAcgKIAWgJIgIArQgHAuAEAVQAEAaAYAFQAZAGAogVQAigRA3gZIAxgXIAZA1QANAYANAVQATAdASAVQAAAAAAABQAJAJAHAIQADADADACQAEAEADADQAVAUAWAOQADABABABQAVANANADQAXAAAfgGQA+gLAmgVIBSgsIA8AqQBDAtAmASQAuAUAYAAQAZgBAlgZQAfgUAngkIAiggIBEAlQBLAnAbASQAlAXARAEQAWAFAXgQIDniVIDnB0QAKgLALgRQAUgiADgfQAAgCABgDQADgcABgbIABgXIA4APQA+ARAZABQAfACAVgMQAZgQAAgiQAAgfADhfIAChZIBTBCQAKgiAEg2QAIhqgchhQgIgdgNga").p("AHmkqIhkAJIA9hCQgCgDgOgCQgcgEg9ADQg+AEhuAdQg3AOgqAOQgXgLhtghQhFgVgpAFQgUADgHAHIAsBCQgLgFgegJQg7gShdgRQhdgRhsAUQg3AKgjAOIAbAyIglAHQgnANgGAYQgHAYAQAiQAGALAGAJQADAFAEAEQABACABABQAEAFAEAFQAmAvAnAZIgBADQDkARCTBxQCoh3EDBgQAPgSBDgdQBCgcC6gKQAfAABLgaQAvgQAggRQAYgKAOgJQADgBADgDQAOgLAGgOQABgFABgFQAEgZgagWQgYgVgzgTIgugPIBHhIIheAAQgwAAhuAI").p("AqGHDQgDgDgEgEQgDgCgDgDQAHAGAGAG").f("#c4936a").p("AOnltQgbgKhKgJIhGgIIAegHQAjgKAPgLQA1ghiKgbQiJgcidARQhOAIgzAOIigAsQhPgihnghQjOhCh1AGQh1AHhYALQgsAGgUAEIBYBNIhNgDQhYABg3AYQg3AYg9ArQgeAVgTAQIBHAWIgZANQgfAQgfAWQhlBHhBBiQgIAMgHAMQAAAKAAAJQAAB5AwAGQAwAHBVghIBMgjQAGASANAaQAaAzAmAmQATATAVASQAVARAWAQQABAAAAAAQADACABABQAGAEAFADIAAljQgEgFgEgFQgBgBgBgCQgEgEgDgFQgGgJgGgLQgQgiAHgYQAGgYAngNIAlgHIgbgyQAjgOA3gKQBsgUBdARQBdARA7ASQAeAJALAFIgshCQAHgHAUgDQApgFBFAVQBtAhAXALQAqgOA3gOQBugdA+gEQA9gDAcAEQAOACACADIg9BCIBkgJQBugIAwAAIBeAAIhHBIIAuAPQAzATAYAVQAaAWgEAZQgBAFgBAFQgGAOgOALQgDADgDABIAAEDQABgFACgFQANghADgNQACgMAGgFQAHgFAQAHQAGACAKADQAQAEAdAFQAsAIAfgEQAhgEALgTQALgUAAgzQAAgogChCIgDg6IBSBCIAihuQgfhAg6gvQgygqg8gX").f().s("#663333").ss(2,1,1,3).p("ARui9QANAaAIAdQAcBhgIBqQgEA2gKAiIhThCIgCBZQgDBfAAAfQAAAigZAQQgVAMgfgCQgZgBg+gRIg4gPIgBAXQgBAbgDAcQgBADAAACQgDAfgUAiQgLARgKALIjnh0IjnCVQgXAQgWgFQgRgEglgXQgbgShLgnIhEglIgiAgQgnAkgfAUQglAZgZABQgYAAgugUQgmgShDgtIg8gqIhSAsQgmAVg+ALQgfAGgXAAQgNgDgVgNQgBgBgDgBQgWgOgVgU").p("AqTG3QgHgIgJgJQAAgBAAAAQgSgVgTgdQgNgVgNgYIgZg1IgxAXQg3AZgiARQgoAVgZgGQgYgFgEgaQgEgVAHguIAIgrIgWAJQgcAKgbADQgkAEggAAQgjgCgHgIQgFgEgBgZQAAgdAIgnQAThdA5hdQAHgMAIgMQBBhiBlhHQAfgWAfgQIAZgNIhHgWQATgQAegVQA9grA3gYQA3gYBYgBIBNADIhYhNQAUgEAsgGQBYgLB1gHQB1gGDOBCQBnAhBPAiICggsQAzgOBOgIQCdgRCJAcQCKAbg1AhQgPALgjAKIgeAHIBGAIQBKAJAbAKQA8AXAyAqQA6AvAfBA").p("AqTG3QADADADACQAEAEADAD");
	this.shape_1.setTransform(75,59);

	this.addChild(this.shape_1,this.egg1,this.egg2,this.egg3,this.egg4,this.egg5,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-42.6,-0.5,235.3,114.9);


(lib.ground = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#debe9f","#cbac8d"],[0,1],-0.8,-9.9,-0.8,-91.9).p("EBGUgODMiMnAAAIAAcHMCMnAAAIAA8H").p("EA/mAFyQg8AAgqgTQgrgTAAgbQAAgbArgTQAqgTA8AAQA8AAArATQAqATAAAbQAAAbgqATQgrATg8AA").p("EAtKgCzQg8AAgqgTQgrgTAAgbQAAgbArgTQAqgTA8AAQA8AAArATQAqATAAAbQAAAbgqATQgrATg8AA").p("EAwmAK/QgeAAgVgKQgVgJAAgOQAAgNAVgKQAVgJAeAAQAeAAAWAJQAVAKAAANQAAAOgVAJQgWAKgeAA").p("AUKA/QgeAAgVgKQgVgKAAgNQAAgNAVgKQAVgJAeAAQAeAAAVAJQAWAKAAANQAAANgWAKQgVAKgeAA").p("AZBC3QgVAKgeAAQgeAAgVgKQgVgKAAgNQAAgNAVgKQAVgJAeAAQAeAAAVAJQAWAKAAANQAAANgWAK").p("AylKDQgeAAgVgKQgWgJAAgOQAAgNAWgKQAVgJAeAAQAeAAAVAJQAVAKAAANQAAAOgVAJQgVAKgeAA").p("A+7inQgeAAgVgJQgWgKAAgNQAAgNAWgKQAVgKAeAAQAeAAAVAKQAVAKAAANQAAANgVAKQgVAJgeAA").p("EgongB1QgeAAgVgJQgWgKAAgNQAAgNAWgKQAVgKAeAAQAeAAAVAKQAVAKAAANQAAANgVAKQgVAJgeAA").p("EgjTgDlQg8AAgrgTQgqgTAAgbQAAgbAqgTQArgTA8AAQA8AAAqATQArATAAAbQAAAbgrATQgqATg8AA").p("A2fJHQgeAAgVgKQgWgJAAgOQAAgNAWgKQAVgJAeAAQAeAAAVAJQAVAKAAANQAAAOgVAJQgVAKgeAA").p("EhBiALBQAAgbAqgTQArgTA8AAQA8AAAqATQArATAAAbQAAAbgrATQgqATg8AAQg8AAgrgTQgqgTAAgb").f("#a67f58").p("EBBNAFfQAqgTAAgbQAAgbgqgTQgrgTg8AAQg8AAgqATQgrATAAAbQAAAbArATQAqATA8AAQA8AAArgT").p("EAuxgDGQAqgTAAgbQAAgbgqgTQgrgTg8AAQg8AAgqATQgrATAAAbQAAAbArATQAqATA8AAQA8AAArgT").p("EAxaAK1QAVgJAAgOQAAgNgVgKQgWgJgeAAQgeAAgVAJQgVAKAAANQAAAOAVAJQAVAKAeAAQAeAAAWgK").p("AU9A1QAWgKAAgNQAAgNgWgKQgVgJgeAAQgeAAgVAJQgVAKAAANQAAANAVAKQAVAKAeAAQAeAAAVgK").p("AZXCgQAAgNgWgKQgVgJgeAAQgeAAgVAJQgVAKAAANQAAANAVAKQAVAKAeAAQAeAAAVgKQAWgKAAgN").p("AxyJ5QAVgJAAgOQAAgNgVgKQgVgJgeAAQgeAAgVAJQgWAKAAANQAAAOAWAJQAVAKAeAAQAeAAAVgK").p("A+IiwQAVgKAAgNQAAgNgVgKQgVgKgeAAQgeAAgVAKQgWAKAAANQAAANAWAKQAVAJAeAAQAeAAAVgJ").p("Egn0gB+QAVgKAAgNQAAgNgVgKQgVgKgeAAQgeAAgVAKQgWAKAAANQAAANAWAKQAVAJAeAAQAeAAAVgJ").p("EghtgD4QArgTAAgbQAAgbgrgTQgqgTg8AAQg8AAgrATQgqATAAAbQAAAbAqATQArATA8AAQA8AAAqgT").p("A1sI9QAVgJAAgOQAAgNgVgKQgVgJgeAAQgeAAgVAJQgWAKAAANQAAAOAWAJQAVAKAeAAQAeAAAVgK").p("EhA4ALvQArATA8AAQA8AAAqgTQArgTAAgbQAAgbgrgTQgqgTg8AAQg8AAgrATQgqATAAAbQAAAbAqAT").f();
	this.shape.setTransform(450,90);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,900,180);


(lib.cloud = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#d3ebed").p("ABSioQg9g+haAAQhZAAhAA+QgpAqgPA2QgXgJggAAQhGAAgxAxQgxAxAABFQAABFAxAyQI7gYEnjQQgVgHgYAAQgmAAgfAUQgJgVgSgRQgmgmg2AAQgWAAgXAHQgPgvgngm").f("#c8dfe2").p("AHPAFQgWgWgbgKQknDQo7AYIAKAJIABABQAJAIAGACQAEAEAFACIMSAAQA4AAAmgmQAngnAAg3QAAg4gngm").f();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-50.1,-23,100.3,46.2);


(lib.hills = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#cbac8d").p("EBGUgM9Ug8PASKgVsgHMQ1unOwUgYQwUgYkWgqIAAXlMCMnAAAIAA57").f();
	this.shape.setTransform(450,97);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,14,900,166);


(lib.mountain = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.rf(["#ecfffb","#8cc6b7"],[0,1],28,-149.2,0,28,-149.2,145.5).p("AAA9EQkjAAjBD1QjCDzhwCwQhwCwi2FpQgnBNgmBcQAHBwBAAAQCagBFRnVQClLpFwACQFvgCD2rBQFPH6CiAAQBHAAAIiOQhBibhHiEQiDk3hripQhsipixjvQixjxkfAA").lf(["#92a278","#bec99e"],[0,1],-157.9,0,158,0).p("AQUkuQiiAAlPn6Qj2LBlvACQlwgCilrpQlRHViaABQhAAAgHhwQiLFYh8I4QibLNAAJpQAAA0ABA1MAxWAAAQAAg1AAg0QAApVi1rhQh5nwiblyQgICOhHAA").f();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-157.9,-186,316,372.1);