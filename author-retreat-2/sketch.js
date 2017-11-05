var analyzer;
var mic;
var audioTriggerLow, audioTriggerHigh;

function preload() {
  // load image
  img = loadGif("assets/Talent.gif");
  img.pause();
}


function setup() {
  createCanvas(800 , 800);
// create an audio input instance and start listening
  mic = new p5.AudioIn();
  mic.start();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Record the value of the audio input "mic"
  analyzer.setInput(mic);
}

//load that volume slider image, my dudes

function draw() {
  background(255);
  //image(img, 0, 0);
  if (img.loaded()) {
    image(img, 40, 0, img.width/2, img.height/2);
    audioTriggerLow();
    printDB();
  }
}

// this function connects the volume of the microphone to a gif frame.

function audioTriggerLow() {
   if (img.loaded()) {
     // maps the audio amplitude values between 0 and .2 to gif frames
    var frame = int(map(analyzer.getLevel(), 0, .2, 0, .5*img.totalFrames()));
    img.frame(frame);
    // var db = frame-10;
    // print(db)
    // console.log(frame);
  }
}

function printDB() {
  var db = int(map(analyzer.getLevel(), 0, .2, 0, .5*img.totalFrames()));textSize(32);
  fill(0);
  text(db-10, width/2+40, height/2 - 45);
  text ("db", width/2+90, height/2 - 45);
  console.log(db);
}
