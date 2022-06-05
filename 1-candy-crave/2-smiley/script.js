
// Dit wordt in het begin 1x uitgevoerd
function setup() {

  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES) // hoeken in graden

}

//--------------------------------------------------------------------

// Dit wordt steeds opnieuw uitgevoerd
function draw() {

  background(240)

  tekenSmiley(mouseX, mouseY)

}

//--------------------------------------------------------------------

function tekenSmiley(x, y) {

  // Hoofd
  stroke('black')
  strokeWeight(1)
  fill('yellow')
  circle(x, y, 140)
  
  // Mond
  noFill()
  strokeWeight(4)
  arc(x, y, 90, 90, 0, 180)

  // Ogen
  strokeWeight(6)
  oogLinks = x - 22
  oogRechts = x + 22
  oogBoven = y - 30
  oogOnder = y - 10
  line(oogLinks, oogBoven, oogLinks, oogOnder)
  line(oogRechts, oogBoven, oogRechts, oogOnder)

}

//--------------------------------------------------------------------

// Wanneer het venster van grootte verandert...
function windowResized() {
  // ...verander dan ons canvas mee!
  resizeCanvas(windowWidth, windowHeight)

}

