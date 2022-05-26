
// Dit wordt in het begin 1x uitgevoerd
function setup() {
  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES) // Hoeken in graden

  // Kies een plek voor het dropje
  dropX = random(25, width - 25)  // kies getal tussen deze twee getallen
  dropY = random(25, height - 25)
}

// Dit wordt steeds opnieuw uitgevoerd
function draw() {

  background(240)

  tekenDrop(dropX, dropY)

  tekenSmiley(mouseX, mouseY)
}

// Teken een Engels dropje
function tekenDrop(x, y) {
  stroke('black')
  strokeWeight(1)
  fill('white')
  rect(x - 25, y - 25, 50, 50)
  fill('black')
  rect(x - 25, y - 15, 50, 10)
  rect(x - 25, y + 5, 50, 10)
  fill('yellow')
  rect(x - 25, y - 5, 50, 10)
}

function tekenSmiley(x, y) {
  // Hoofd
  stroke('black')
  strokeWeight(1)
  fill('yellow')
  circle(x, y, 140)
  
  // Mond
  noFill()
  stroke('black')
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

// Wanneer het venster van grootte verandert...
function windowResized() {
  // ...verander dan ons canvas mee!
  resizeCanvas(windowWidth, windowHeight)
}
