
// Dit wordt in het begin 1x uitgevoerd
function setup() {
  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES) // Hoeken in graden

  // Zet variabelen op juiste waarde
  tekstBovenaan = 'Eet de dropjes!'
  aantalGegeten = 0

  // Maak het eerste dropje
  maakDropje()

  // Stel dingen in die niet veranderen tijdens het spel
  textSize(40)
  textAlign(LEFT, TOP)
}

// Dit wordt steeds opnieuw uitgevoerd
function draw() {

  background(240)

  // Tekst bovenin
  noStroke()
  fill('black')
  text(tekstBovenaan, 20, 20)

  tekenDrop(dropX, dropY, dropSoort)

  tekenSmiley(mouseX, mouseY)

  // Is de speler dichtbij genoeg om het dropje op te eten?
  if (dist(dropX, dropY, mouseX, mouseY) < 50) {
    // Ja!
    aantalGegeten = aantalGegeten + 1
    tekstBovenaan = aantalGegeten + ' dropjes gegeten!'

    // Maak een nieuw dropje
    maakDropje()
  }
}

// Kies een type en plaats voor een Engels dropje
function maakDropje() {
  soortenDrop = ['roze met zwart', 'zwart met wit', 'laagjes']
  dropSoort = random(soortenDrop) // kies een van de drie opties
  dropX = random(25, width - 25)  // kies getal tussen deze twee getallen
  dropY = random(75, height - 25)
}

// Teken een Engels dropje
function tekenDrop(x, y, soort) {

  stroke('black')
  strokeWeight(1)

  if (soort == 'roze met zwart') {

    fill('pink')
    circle(x, y, 50)
    noStroke()
    fill('black')
    circle(x, y, 20)

  }
  
  if (soort == 'zwart met wit') {

    fill('black')
    circle(x, y, 40)
    noStroke()
    fill('white')
    circle(x, y, 32)

  }
  
  if (soort == 'laagjes') {

    fill('white')
    rect(x - 25, y - 25, 50, 50)
    noStroke()
    fill('black')
    rect(x - 25, y - 15, 50, 10)
    rect(x - 25, y + 5, 50, 10)
    fill('yellow')
    rect(x - 25, y - 5, 50, 10)

  }
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
