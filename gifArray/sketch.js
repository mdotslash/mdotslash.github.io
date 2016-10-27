/// load humane images into an array
/// play the images as a gif

var imgArray; //
var r = [214, 225, 175, 203];
var g = [183, 129, 101, 159];
var b = [172, 139, 109, 161];
var s = "Use 'a', 's', 'd', 'f' to change the background to a pantone skin tone"
//mapping rgb to mouse movement
// var rMap = map(mouseX, 0, width, 214, 225);


// Preload that sucka!

function preload() {
  // create an animation from a sequence of numbered images
  imgArray = loadAnimation("img/dass-1.png", "img/dass-10.png");
}

function setup() {
  frameRate(5);
  createCanvas(1000, 1000);
}

//Background changes to match skin tone?

function draw() {
//   for (i = 0; i < 3 ; i++) { 
//     //console.log(i);
//       for (j = 2; j > -1 ; j--) { 
        // background(rMap, g[0], b[0]);
//         //console.log(i, j);
//       }
  // }
  animation(imgArray, width / 2, height / 2);
  
  ///Add text


  textSize(28);
  text(s, 100,100);
}


  // pantoneFlicker();
  // change background

 function keyTyped() {
      if (key === 'a') {
        background(r[0], g[0], b[0]);
    //background(r[i], g[i], b[i])
  }   else if (key === 's') {
        background(r[2], g[2], b[2]);
        console.log(r[2]);
  }   else if (key === 'd') {
        background(r[1], g[1], b[1]);
        console.log(r[1]);
  }   else if (key === 'f') {
        background(r[3], g[3], b[3]);
        console.log(r[3]);
    
  }
  
}