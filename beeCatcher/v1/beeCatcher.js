var canvas  = document.getElementById('canvas');
var context = canvas.getContext('2d'); 
var counter = document.getElementById('counter');
var timer   = document.getElementById('timer');
var raquet  = document.getElementById("raquet");
var bee     = document.getElementById("bee");

var radius           = 20;
var color            = "#0000ff";
var x                = 50;  // initial horizontal position
var y                = 50;  // initial vertical position
var vx               = 2;  // initial horizontal speed
var vy               = 2;  // initial vertical speed
var cameraWidth      = 100;
var cameraHeight     = 50;
var changeDirection  = 50;
var counterDirection = 0;
var horizontalSpeed  = 10;
var verticalSpeed    = 10;
var catched          = 0;
var time             = 60;
var lastMousePos;



window.onload = init; 
 
function init() {
  canvas.addEventListener('mousedown',stopAnim,false);
  canvas.addEventListener('mouseup',startAnim,false);  
  canvas.addEventListener('mousemove',function(evt) {
        var mousePos = getMousePos(canvas, evt);
		lastMousePos = mousePos;
		drawFrame(mousePos);
      }, false);
	  bee.width;
  startAnim();
};

function startAnim() {
	canvas.width = window.innerWidth-100;
	canvas.height = window.innerHeight-100;
	interval = setInterval(onEachStep, 1000/60); // 60 fps
}; 
 
function stopAnim() {
  clearInterval(interval);
  var flycached=false;
  console.log(flycached);
  checkCached(flycached);
  if (flycached===true)
	  paintCanvasRed();
  counter.innerHTML="Counter: " + catched;
}; 

function checkCached(flycached){
	var initialXCamera = lastMousePos.x - cameraWidth/2;
	var initialYCamera = lastMousePos.y - cameraHeight/2;
	var finalXCamera = initialXCamera + cameraWidth;
	var finalYCamera = initialYCamera + cameraHeight;
	
	if(x>initialXCamera && x<finalXCamera && y>initialYCamera && y<finalYCamera)
	{
		catched++;
		flycached=true;
	}
		
};

function paintCanvasRed(){
	console.log(flycached);
	with (context){
		fillStyle = "red";
		fillRect(0 ,0,canvas.width,canvas.height);
	}
}
 
function setDirection(){
	counterDirection=0;
	vx = (Math.random()-0.5)*horizontalSpeed; ; 
	vy = (Math.random()-0.5)*verticalSpeed;  	
};

function onEachStep() {
		if(counterDirection>changeDirection)
			setDirection();
		counterDirection++;
		//drawFrame(); //Draw the camera
		x += vx; // horizontal speed increases horizontal position 
		y += vy; // vertical speed increases vertical position
	 
		
		checkBounds();
		drawScreen();
		timeDown();

		//drawBall(); // draw the ball
		//drawFrame();
	
	//stopAnim();
};

function timeDown(){
	time=time - 0.016;
	timer.innerHTML="Time: " + Math.floor(time);
	if(time<=1)
	{
		stopAnim();
		canvas.removeEventListener('mouseup',startAnim,false); 
		canvas.removeEventListener('mousedown',stopAnim,false); 
	}
};


function checkBounds(){
	if (x > canvas.width-bee.width){ // if ball goes beyond canvas
		vx = -vx; // wrap it around 
	}
	if (x < 0){ // if ball goes beyond canvas
		vx = -vx; // wrap it around 
	}
	
	if (y > canvas.height - bee.height){ // if ball hits the ground
		vy = -vy; // then reverse and reduce its vertical speed
	}
	
	if (y < 0){ // if ball hits the ground
		vy = -vy; // then reverse and reduce its vertical speed
	}
};

function drawScreen() {
    with (context){
        clearRect(0, 0, canvas.width, canvas.height); 
        //fillStyle = color;
        //beginPath();
        //arc(x, y, radius, 0, 2*Math.PI, true);
		drawImage(bee,x,y);
        //closePath();
        //fill();
		//drawImage(raquet,lastMousePos.x - cameraWidth/2,lastMousePos.y - cameraHeight/2);
		fillStyle = color;
		strokeStyle = "blue";
        strokeRect(lastMousePos.x - cameraWidth/2,lastMousePos.y - cameraHeight/2,cameraWidth,cameraHeight);
    };
};
 
function drawBall() {
    with (context){
        clearRect(0, 0, canvas.width, canvas.height); 
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2*Math.PI, true);
        closePath();
        fill();
    };
};

function drawFrame(mousePos) {
    with (context){
		clearRect(0, 0, canvas.width, canvas.height); 
        fillStyle = color;
		strokeStyle = "blue";
        strokeRect(mousePos.x - cameraWidth/2,mousePos.y - cameraHeight/2,cameraWidth,cameraHeight);
		fillStyle = color;
        //beginPath();
        //arc(x, y, radius, 0, 2*Math.PI, true);
        //closePath();
        //fill();
		drawImage(bee,x,y);
    };
};

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
};