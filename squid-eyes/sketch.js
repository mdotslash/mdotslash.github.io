var ctracker;
var slider;
var img;

function preload() {
  // load image
  img = loadImage("assets/squid.png");
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
    // set the color of the ellipse based on position on screen
    fill(map(positions[i][0], width * 0.33, width * 0.66, 0, 255), map(positions[i][1], height * 0.33, height * 0.66, 0, 255), 255);
    // draw ellipse at each position point
    //var val = slider.value();
    //rect(positions[27][0], positions[27][1], val, val);
    // rect(positions[32][0], positions[32][1], val, val);
    image(img, positions[32][0]-10, positions[32][1]-10)
    image(img, positions[27][0]-10, positions[27][1]-10)

    // display image (img, x, y)  image(img, 0, 0); 

  }

}
