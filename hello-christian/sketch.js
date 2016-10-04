var ctracker;
var slider;
var img; // ear ring
var imgL; //left-eye
var imgR; //right-eye

function preload() {
  // load image
  img = loadImage("assets/earring.png");
  imgL = loadImage("assets/left-eye.png");
  imgR = loadImage("assets/right-eye.png");
}

function setup() {

  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);

  // setup canvas
  var cnv = createCanvas(400, 300);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  //slider = createSlider(0, 50, 10);
  //slider.position(0, 400);

  noStroke();
}

function draw() {
  clear();
  // get array of face marker positions [x, y] format
  
  var positions = ctracker.getCurrentPosition();
  for (var i = 0; i < positions.length; i++) {
//////////////////
    // draw eyes and earrings at each image point
    fill(map(positions[i][0], width * 0.33, width * 0.66, 0, 255), map(positions[i][1], height * 0.33, height * 0.66, 0, 255), 255);
    // draw ellipse at each position point
    //var val = slider.value();
    //rect(positions[27][0], positions[27][1], val, val);
    // rect(positions[32][0], positions[32][1], val, val);
    //image(imgL, positions[32][0] - 30, positions[32][1]) // left eye
    //image(imgR, positions[27][0] - 30, positions[27][1]) // right eye
    image(img, (positions[1][0] - 20), positions[1][1]) // left ear
    image(img, positions[13][0], positions[13][1]) // right ear
    

    // display image (img, x, y)  image(img, 0, 0); 

  }

}