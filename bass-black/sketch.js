// “I believe the day will come when all God’s children
// from bass black to treble white, will be significant 
// on the Constitution’s keyboard.” 
// Martin Luther King Jr

// bass black plays a sound. lower the tone, the darker the pantone
// load image array? (ACTUALLY FUCK IT. LETS USE A GIF)

  //variables
  //quote/text
  
// var s = "'I believe the day will come when all God’s children from bass black to treble white,"
// var s2 = "will be significant on the Constitution’s keyboard.'"
// var q = "Martin Luther King Jr";
var inst = "Play me with 'a', 's', 'd', 'f', 'g'"
  
  
  
// preload sounds

function preload() {
  mySound = loadSound('snd/1.wav');
  mySound1 = loadSound('snd/2.wav')
  mySound2 = loadSound('snd/3.wav')
  mySound3 = loadSound('snd/4.wav')
  mySound4 = loadSound('snd/5.wav')
  mySound5 = loadSound('snd/6.wav')
}

function setup() {
  createCanvas(800, 800);
  

  //images etc
  imgArr = loadGif("img/bass.gif"); // load a gif
  imgArr.pause(); // pause it
  imgFrame = loadImage("img/frame.png") // shitty png of a polaroid
  
  //reverb trail setup
  reverb = new p5.Reverb();
  //mySound.connect(); // COnnect output to reverb
  
  // connect soundFile to reverb, process w/
  // 3 second reverbTime, decayRate of 2%
  reverb.process(mySound5, 1, 2);
  reverb.process(mySound4, 3, 2);
  reverb.process(mySound3, 3, 2);
  reverb.process(mySound2, 3, 2);
  reverb.process(mySound1, 3, 2);
  reverb.process(mySound, 5, 2);
  
}

// show image array
function draw() {
  background(255);
  
   // display gif
  if (imgArr.loaded()) {
    image(imgArr, 100, 175); // gif
    image(imgFrame, 0, 100);  // gif frame
}

// //text / quote display
  
  textSize(30);
  text(inst, 150, 75);
//   textSize(15);
//   text(s, 85,675);
//   text(s2, 85, 700)
//   textSize(25);
//   text(q, 85, 730);
  
 
}

// test frame scrub functionality

// function mouseMoved() {
//   if (imgArr.loaded()) {
//     var frame = int( map(mouseX, 0, width, 0, imgArr.totalFrames() ) );
//     imgArr.frame(frame);
//     console.log(frame); // we have 6 possible values to send it, from 0 - 5
//   }
// }

// Now let's map each frame to a button from h to a 
// (where h refers to the lightest Pantone value and a the lowest)
// to a gif frame.

function keyTyped() {
  if (key === 'h') {
    imgArr.frame(0);
    //Hornsy5();
    mySound5.play();
    console.log(key); // we have 6 possible values to send it, from 0 - 5
  } else if (key === 'g') {
    imgArr.frame(1);
    mySound4.play();
    //Hornsy4();
    console.log(key); // we have 6 possible values to send it, from 0 - 5;
  } else if (key === 'f') {
    imgArr.frame(2);
    mySound3.play();
    //Hornsy3();
    console.log(key); // we have 6 possible values to send it, from 0 - 5;
  } else if (key === 'd') {
    imgArr.frame(3);
    mySound2.play();
    //Hornsy2();
    console.log(key); // we have 6 possible values to send it, from 0 - 5;
  } else if (key === 's') {
    imgArr.frame(4);
    mySound1.play();
    //Hornsy1();
    console.log(key); // we have 6 possible values to send it, from 0 - 5;
  } else if (key === 'a') {
    imgArr.frame(5);
    mySound.play();
    console.log(key);
    //Hornsy();
  }
}

// Functions that call sound

function Hornsy() {
    mySound.setVolume(0.1);
    mySound.play();
}

function Hornsy1() {
    mySound1.setVolume(0.1);
    mySound1.play();
}

function Hornsy2() {
    mySound2.setVolume(0.1);
    mySound2.play();
}

function Hornsy3() {
    mySound3.setVolume(0.1);
    mySound3.play();
}

function Hornsy4() {
    mySound4.setVolume(0.1);
    mySound4.play();
}

function Hornsy5() {
    mySound5.setVolume(0.1);
    mySound5.play();
}
