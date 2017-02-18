var analyzer;
var mic; 
var audioTriggerLow, audioTriggerHigh;

function preload() {
  // load image
  img = loadGif("assets/bubble-baby.gif");
  img.pause();
}


function setup() {
  createCanvas(750, 750);
  //song.loop();
  //nframes = img.totalFrames
  mic = new p5.AudioIn();
  mic.start();
  
  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mic);

  
}

function draw() {
  background(255);
  if (img.loaded()) {
    image(img, 125, height/2);
    audioTriggerLow()
    //img.pause();
  }
    // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  console.log(rms);
  // fill(127);
  // stroke(0);
  /// This maps amplitude intensity to different values using an if statement
  // if((rms > .01 && rms < .2 )) {
  //     console.log("a");
  //     //ellipse(width/2, height/2, 10+rms*200, 10+rms*200);
  //   } else  if ((rms > .25 && rms < .35 )) {
  //       console.log("b");
  //     // rect(width/2, height/2, 10+rms*200, 10+rms*200);
  //   } else if ((rms > .35 && rms < .4 )) {
  //       console.log("c")
  //     // triangle(300, 100, 320, 100, 310, rms+200);
  //   }
  // Draw an ellipse with size based on volume
  //ellipse(width/2, height/2, 10+rms*200, 10+rms*200);
}

function audioTriggerLow() {
   if (img.loaded()) {
    var frame = int(map(analyzer.getLevel(), 0, .2, 0, .5*img.totalFrames()));
    img.frame(frame);
  }
}

// function nextGif() {
//   if (img.loaded()) {
//     var frame = int(map(analyzer.getLevel(), 0, .2, 0, .5*img.totalFrames()));
//     img.frame(frame);
//   }
// }
