
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

  noStroke()
  fill('lightgreen')
  circle(mouseX, mouseY, 140)

}

//--------------------------------------------------------------------

// Wanneer het venster van grootte verandert...
function windowResized() {
  // ...verander dan ons canvas mee!
  resizeCanvas(windowWidth, windowHeight)

}

