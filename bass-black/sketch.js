// “I believe the day will come when all God’s children
// from bass black to treble white, will be significant 
// on the Constitution’s keyboard.” 
// Martin Luther King Jr

// bass black plays a sound. lower the tone, the darker the pantone
// load image array? (ACTUALLY FUCK IT. LETS USE A GIF)

// preload sounds

function preload() {
  mySound = loadSound('snd/1.wav');
  mySound1 = loadSound('snd/2.wav')
  mySound2 = loadSound('snd/3.wav')
  mySound3 = loadSound('snd/4.wav')
  mySound4 = loadSound('snd/5.wav')
  mySound5 = loadSound('snd/6.wav')
  
}

// Preload functions that call sound

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

//}

function setup() {
  imgArr = loadGif("img/bass.gif"); // load a gif
  imgArr.pause(); // pause it
  imgFrame = loadImage("img/frame3.png") // shitty png of a polaroid
  //oscH
  createCanvas(700, 800);
}

// show image array
function draw() {
  background(0);
  if (imgArr.loaded()) {
    image(imgArr, 100, 75); // gif
    image(imgFrame, 0, 0);  // gif frame
}
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
    Hornsy5();
    console.log(key); // we have 6 possible values to send it, from 0 - 5
  } else if (key === 'g') {
    imgArr.frame(1);
    Hornsy4();
    console.log(key); // we have 6 possible values to send it, from 0 - 5;
  } else if (key === 'f') {
    imgArr.frame(2);
    Hornsy3();
    console.log(key); // we have 6 possible values to send it, from 0 - 5;
  } else if (key === 'd') {
    imgArr.frame(3);
    Hornsy2();
    console.log(key); // we have 6 possible values to send it, from 0 - 5;
  } else if (key === 's') {
    imgArr.frame(4);
    Hornsy1();
    console.log(key); // we have 6 possible values to send it, from 0 - 5;
  } else if (key === 'a') {
    imgArr.frame(5);
    Hornsy();
  }
}

// Now let's map each frame to a key from h to a that plays a sound
// (where h refers to the highest note melodically value and a the lowest)


// function soundTyped() {
//     if (key === 'h') {  // play doorbell if you hear smth
//       mySound.setVolume(0.1);
//       mySound.play();
//     console.log(key); // we have 6 possible values to send it, from 0 - 5
//   } else if (key === 'g') {
//     imgArr.frame(1);
//     console.log(nope); // we have 6 possible values to send it, from 0 - 5;
  // } else if (key === 'f') {
  //   imgArr.frame(2);
  //   console.log(key); // we have 6 possible values to send it, from 0 - 5;
  // } else if (key === 'd') {
  //   imgArr.frame(3);
  //   console.log(key); // we have 6 possible values to send it, from 0 - 5;
  // } else if (key === 's') {
  //   imgArr.frame(4);
  //   console.log(key); // we have 6 possible values to send it, from 0 - 5;
  // } else if (key === 's') {
  //   imgArr.frame(4);
  //   console.log(key); // we have 6 possible values to send it, from 0 - 5;
  // } else if (key === 'a') {
  //   imgArr.frame(5);
  // }
// }
// }
