//Define global variables

var videoInput;
var ctracker;
var canvasInput;
var cc;

$(document).ready(function() {

  videoInput = document.getElementById('inputVideo');
  ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(videoInput);

// Hide videoInput

// document.getElementById("inputVideo").style.display="none";

// Wut?

// function positionLoop() {
//     requestAnimationFrame(positionLoop);
//     var positions = ctracker.getCurrentPosition();
//     // positions = [[x_0, y_0], [x_1,y_1], ... ]
//     // do something with the positions ...
//   }
//   positionLoop();

// drawn facial tracked model

  canvasInput = document.getElementById('drawCanvas');
  // alert(canvasInput);
  cc = canvasInput.getContext('2d');
  function drawLoop() {
    requestAnimationFrame(drawLoop);
    cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
    //cc.clearRect(20, 20, canvasInput.width+20, canvasInput.height+20);
    ctracker.draw(canvasInput);
  };
  drawLoop();

//   function draw(videoInput,canvasInput, canvasInput.width, canvasInput.height) {
//     if(videoInput.paused || videoInput.ended) return false;
//     canvasInput.drawImage(videoInput, 0, 0, canvasInput.width, canvasInput.height);
//     setTimeout(draw, 20, videoInput,canvasInput, canvasInput.width, canvasInput.height);
// }

});
