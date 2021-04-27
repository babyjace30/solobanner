(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"solobanner_atlas_1", frames: [[0,0,136,113],[0,115,136,113]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["solobanner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["solobanner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,1800);


(lib.visit_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Label
	this.text = new cjs.Text("VISIT", "normal 700 29px 'tk-apertura'", "#FFFFFF");
	this.text.lineHeight = 39;
	this.text.lineWidth = 76;
	this.text.parent = this;
	this.text.setTransform(-38.2,-11);
	if(!lib.properties.webfonts['tk-apertura']) {
		lib.webFontTxtInst['tk-apertura'] = lib.webFontTxtInst['tk-apertura'] || [];
		lib.webFontTxtInst['tk-apertura'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},3).wait(1));

	// Skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(4,1,1,3,true).p("AqJjHIUTAAQA8AAAAA8IAAEXQAAA8g8AAI0TAAQg8AAAAg8IAAkXQAAg8A8AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AqJDIQg8AAAAg8IAAkXQAAg8A8AAIUTAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(4,1,1,3,true).p("AqJjHIUTAAQA8AAAAA8IAAEXQAAA8g8AAI0TAAQg8AAAAg8IAAkXQAAg8A8AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AqJDIQg8AAAAg8IAAkXQAAg8A8AAIUTAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(4,1,1,3,true).p("AqJjHIUTAAQA8AAAAA8IAAEXQAAA8g8AAI0TAAQg8AAAAg8IAAkXQAAg8A8AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AqJDIQg8AAAAg8IAAkXQAAg8A8AAIUTAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-22,146,50);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-34.05,-28.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-28.2,68,56.5);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-34.05,-28.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-28.2,68,56.5);


(lib.Title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsyEIIgrgBIglgCIggACQgJABgLgCQgJgCAAgLIgCghIgCgHIgFgPQgBgGACgCQACgCAGAAIANABQAIgBAGgCIAGgBIAkgCQAPgBAHABQAJACAMgBIAVgCIAYgDIAYgDIAogCIA1gCQAFAAAKACIARABQAKABAGgBQAUgEAbgBIAuAAIBggBIAlABIA+gDIAdAAIA2ACQAOgDAXABQAaACAKgBIAPgCIASgBIAUABIAnACIAogDQAJAAAKABQAMACAYgGICigLIAggCIAPAAIAOgCQAOgDAXgCIAmgEIA/gEIDhgZIAhgCIBtgOIAjgEIAIAAQARACAYgIQAhgMANgCQASgCATgQQAJgGADgKIAHgPIgCgDIgIAEIgOAFQgKACgsAOQgFACgUADIgVABQgjADgWgNIgUgPQgJgEgDgDQgLgIgEgHQgMgTABgTIAAgnIACgrQABgMALAAIAcACQAFABABAHIACAbQAAATAEAJQACACAAAGQgBANANAMQADADAVALQACACAEgBIAcgCIADgBIAdgNQAQgIAKgJQAUgSACgYIAHgnQABgJAFgEQAEgEAJgBIAegEIACAAIAHgCQAEgBACACQAGAIACAJQACAIABARIAKBDIACAYQgBA0gDARIgKAcQgKAWgYAPQgWAOgPAEIgtAOIgQADQgmAFgTAGIgLACIgLABQgPgBggAEQg6AJgagBQgKAAgQABIgaACIgkAAQhCACggAEIggABQgvAFgJACQgdAFgPABIgZADIgYAEIhPAKIhYAGIgpAHQgqAIgtgBQgEgBgMADIgGABQgIgBgMACIgTADQgXADgLAAQgMAAgoAHIgTADIiOAEIhEADIhbACQgeAAgfADQgJABghAAIh0ADQgmgDgfADIgHABIgHgBgAufB/IgSjYIAAhRIAsgiIBegWIAyADIAjAOIALAIIALAhIgIAiIgxAyIg4AgIDhBsIAGAeIgMAMIg0AIIhsgyIh3gvIgHAUIAJBGIgIAhgAiqBzQAFgDABgFIABgJIgEh7IABg6QAAgIADgbIAEgLIADgLQAAgFAEgCIAPgFQAJgEAHAAIAEgBQAHgEALgCIATgCIALgEQAGgCAIAEQAGADAFABQAQACAKAJIAMAHQANAGAHAOQALATAAAVQAAAfgiAGQggAFgYAGQgGABgCACQgBADAAAHQACAUADASIAHAoQABAJAAAiQAAAHgJACQgxAKgSAAIgQAEIgFABQgHAAgFgGgACIBCIAGifIABgSIAAgLIABgGIAFgHIANABIA/gNQAHgBACAIIAAAIIAEA5QAFAcADA3IAFAjQABAHgBACQgCACgHACQgRAEgRAAQgHABgMAEQgLAEgJAAIgTADIgIABQgGgBAAgGgAnHA1IgQgBIgXgCQgaAAgRgVQgIgJgDgNQgBgJgDgJQgDgKACgaIABgGIAOggQAGgTAJgIIAHgHQAEgEAEgCIAWgLQANgFALAAQAHAAATgGQAHgBAKABIAQACIAGACQAPABABALQAIAGAIAQQACAEAKAGIAoASIAGACQAIABAOAHIAWAJIAEADIAVAVQAKAKAAASQAAANgOADQgSADgMgIQgLgGgNAEIgaAEQgJABgHAHIghAcQgLAJgVACIglAEIgPgBgAGRAhIAAgKQgDgEgCgGQgIg1AGgqQgBgWAEgrQAEgkACgJIAAAAQgBgKAHgIQAHgSAOgFIAHgDIABAAQAKgLAMAGIAFgBIATgCIAEgBIATAAQALAAAHACIAEABQARADANAEQAMADADAKQAEAJgFAKQgCAKgJACIAAAAQgRAKgfgCIgRAHQgHACgEAFIgFAKIgBAHQACAJAHAAIAQAAIAbgCQAGAAAFACIAHAAQAGAAAAAHIAAAbQAAAHgHAAIgIABQgFACgEAAIgCABIgKAEIgIACIgBgBIgJACIgEAAIACAAIgrADIgBAVIABA6IADARQACAHgBACIgGAGQgGAFgLABIgSAEIgLAEIgCABQgEAAgCgFgACsjAQgIgKAAgKIgBgOQgCgTAOgKIAJgHQAGgDAFABQAMAEAJAEQADABACAHIADAQIgDANQgJAWgIAHQgIAIgJAAQgJgBgGgJg");
	this.shape.setTransform(0.005,0.0025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-26.5,193.8,53);


// stage content:
(lib.solobanner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.visit.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('http://www.adobe.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Button
	this.visit = new lib.visit_btn();
	this.visit.name = "visit";
	this.visit.setTransform(383,32.05);
	this.visit._off = true;
	new cjs.ButtonHelper(this.visit, 0, 1, 2, false, new lib.visit_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.visit).wait(59).to({_off:false},0).wait(1));

	// Logo
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(-54.1,24.85);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(40.05,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance_1}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true,x:40.05,y:31.8},30).wait(1));

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsyEIIgrgBIglgCIggACQgJABgLgCQgJgCAAgLIgCghIgCgHIgFgPQgBgGACgCQACgCAGAAIANABQAIgBAGgCIAGgBIAkgCQAPgBAHABQAJACAMgBIAVgCIAYgDIAYgDIAogCIA1gCQAFAAAKACIARABQAKABAGgBQAUgEAbgBIAuAAIBggBIAlABIA+gDIAdAAIA2ACQAOgDAXABQAaACAKgBIAPgCIASgBIAUABIAnACIAogDQAJAAAKABQAMACAYgGICigLIAggCIAPAAIAOgCQAOgDAXgCIAmgEIA/gEIDhgZIAhgCIBtgOIAjgEIAIAAQARACAYgIQAhgMANgCQASgCATgQQAJgGADgKIAHgPIgCgDIgIAEIgOAFQgKACgsAOQgFACgUADIgVABQgjADgWgNIgUgPQgJgEgDgDQgLgIgEgHQgMgTABgTIAAgnIACgrQABgMALAAIAcACQAFABABAHIACAbQAAATAEAJQACACAAAGQgBANANAMQADADAVALQACACAEgBIAcgCIADgBIAdgNQAQgIAKgJQAUgSACgYIAHgnQABgJAFgEQAEgEAJgBIAegEIACAAIAHgCQAEgBACACQAGAIACAJQACAIABARIAKBDIACAYQgBA0gDARIgKAcQgKAWgYAPQgWAOgPAEIgtAOIgQADQgmAFgTAGIgLACIgLABQgPgBggAEQg6AJgagBQgKAAgQABIgaACIgkAAQhCACggAEIggABQgvAFgJACQgdAFgPABIgZADIgYAEIhPAKIhYAGIgpAHQgqAIgtgBQgEgBgMADIgGABQgIgBgMACIgTADQgXADgLAAQgMAAgoAHIgTADIiOAEIhEADIhbACQgeAAgfADQgJABghAAIh0ADQgmgDgfADIgHABIgHgBgAufB/IgSjYIAAhRIAsgiIBegWIAyADIAjAOIALAIIALAhIgIAiIgxAyIg4AgIDhBsIAGAeIgMAMIg0AIIhsgyIh3gvIgHAUIAJBGIgIAhgAiqBzQAFgDABgFIABgJIgEh7IABg6QAAgIADgbIAEgLIADgLQAAgFAEgCIAPgFQAJgEAHAAIAEgBQAHgEALgCIATgCIALgEQAGgCAIAEQAGADAFABQAQACAKAJIAMAHQANAGAHAOQALATAAAVQAAAfgiAGQggAFgYAGQgGABgCACQgBADAAAHQACAUADASIAHAoQABAJAAAiQAAAHgJACQgxAKgSAAIgQAEIgFABQgHAAgFgGgACIBCIAGifIABgSIAAgLIABgGIAFgHIANABIA/gNQAHgBACAIIAAAIIAEA5QAFAcADA3IAFAjQABAHgBACQgCACgHACQgRAEgRAAQgHABgMAEQgLAEgJAAIgTADIgIABQgGgBAAgGgAnHA1IgQgBIgXgCQgaAAgRgVQgIgJgDgNQgBgJgDgJQgDgKACgaIABgGIAOggQAGgTAJgIIAHgHQAEgEAEgCIAWgLQANgFALAAQAHAAATgGQAHgBAKABIAQACIAGACQAPABABALQAIAGAIAQQACAEAKAGIAoASIAGACQAIABAOAHIAWAJIAEADIAVAVQAKAKAAASQAAANgOADQgSADgMgIQgLgGgNAEIgaAEQgJABgHAHIghAcQgLAJgVACIglAEIgPgBgAGRAhIAAgKQgDgEgCgGQgIg1AGgqQgBgWAEgrQAEgkACgJIAAAAQgBgKAHgIQAHgSAOgFIAHgDIABAAQAKgLAMAGIAFgBIATgCIAEgBIATAAQALAAAHACIAEABQARADANAEQAMADADAKQAEAJgFAKQgCAKgJACIAAAAQgRAKgfgCIgRAHQgHACgEAFIgFAKIgBAHQACAJAHAAIAQAAIAbgCQAGAAAFACIAHAAQAGAAAAAHIAAAbQAAAHgHAAIgIABQgFACgEAAIgCABIgKAEIgIACIgBgBIgJACIgEAAIACAAIgrADIgBAVIABA6IADARQACAHgBACIgGAGQgGAFgLABIgSAEIgLAEIgCABQgEAAgCgFgACsjAQgIgKAAgKIgBgOQgCgTAOgKIAJgHQAGgDAFABQAMAEAJAEQADABACAHIADAQIgDANQgJAWgIAHQgIAIgJAAQgJgBgGgJg");
	this.shape.setTransform(593.505,26.5025);

	this.instance_2 = new lib.Title("synched",0);
	this.instance_2.setTransform(-116.9,33.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},25).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:192.5,y:26.5},25).wait(31));

	// Background
	this.instance_3 = new lib.Bitmap3();
	this.instance_3.setTransform(-20,-156,0.2109,0.2109);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(20.2,-126,670.1999999999999,349.6);
// library properties:
lib.properties = {
	id: 'A7B03B0A0FA0452DB586C036EA538B35',
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/solobanner_atlas_1.png", id:"solobanner_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A7B03B0A0FA0452DB586C036EA538B35'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;