const GROOTTE = 50;
//const COLOR_RED = color(255, 0, 0);

var x, y;

var sx, sy;

var volgMuis = true;

const ZWAARTEKRACHT = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = width / 2;
  sx = 0;
  sy = 0;
}

function draw() {
  background('white');
  noStroke()
  fill(volgMuis ? color('blue') : color('red'));
  ellipse(x, y, GROOTTE, GROOTTE);

  if (volgMuis) {
    sx += (mouseX - x) / 30;
    sy += (mouseY - y) / 30;
    sx *= 0.8;
    sy *= 0.8;
  } else {
    sy += ZWAARTEKRACHT;
    sx *= 0.99;
    sy *= 0.99;
    if (abs(sx) < 0.01)
        sx = 0;
    if (abs(sy) < 0.01)
        sy = 0;
    
  }
  
  x += sx;
  y += sy;
  
  //if (!volgMuis) {
    // Stuiter

    if (x < GROOTTE/2) {
      x = GROOTTE - x;
      sx = -sx;
    } else if (x > width - GROOTTE/2) {
      x = width - GROOTTE / 2;
      sx = -sx;
    }
    if (y < GROOTTE/2) {
      y = GROOTTE - y;
      sy = -sy * 0.6;
      sx *= 0.9;
      if (abs(sy) < 2)
        sy = 0;
    } else if (y > height - GROOTTE/2) {
      y = height - GROOTTE / 2;
      sy = -sy * 0.6;
      sx *= 0.9;
      if (abs(sy) < 2)
        sy = 0;
    }
  //}
  text(`${round(sx, 2)}, ${round(sy, 2)}`, x, y - GROOTTE)
}

function mouseClicked() {
  volgMuis = !volgMuis;
}