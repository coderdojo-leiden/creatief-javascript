
SPELDUUR = 5

// Dit wordt in het begin 1x uitgevoerd
function setup() {
  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES) // Hoeken in graden

  // Zet variabelen op juiste waarde
  herstartSpel();

  // Stel dingen in die niet veranderen tijdens het spel
  textSize(40)
  textAlign(LEFT, TOP)
}

function herstartSpel() {
  tekstBovenaan = `Eet zoveel mogelijk dropjes in ${SPELDUUR} seconden!`
  aantalGegeten = 0
  spelBezig = true

  // Maak het eerste dropje
  maakDropje()
}

// Dit wordt steeds opnieuw uitgevoerd
function draw() {

  background(240)

  // Tekst bovenin
  noStroke()
  fill('black')
  text(tekstBovenaan, 20, 20)

  if (spelBezig)
    tekenDrop(dropX, dropY, dropSoort)

  tekenSmiley(mouseX, mouseY)

  // Is de speler dichtbij genoeg om het dropje op te eten?
  if (spelBezig && spelerRaaktDropje()) {
    // Ja!
    aantalGegeten = aantalGegeten + 1
    if (aantalGegeten == 1)
      startTijd = millis() / 1000

    // Maak een nieuw dropje
    maakDropje()
  }

  // Zijn er 10 seconden voorbij? Dan is het spel afgelopen.
  if (aantalGegeten > 0) {
    var tijd = millis() / 1000 - startTijd
    if (tijd >= SPELDUUR) {
      spelBezig = false

      // Vergelijk jouw score met de hoogste score
      hoogsteScore = getItem('hoogsteScore') || 0
      if (aantalGegeten >= hoogsteScore) {
        hoogsteScore = aantalGegeten
        storeItem('hoogsteScore', hoogsteScore)
      }
      if (aantalGegeten == hoogsteScore)
        noemHoogsteScore = `Dat is de hoogste score!`
      else
        noemHoogsteScore = `De hoogste score is: ${getItem('hoogsteScore')}`
      tekstBovenaan = 
        `Je hebt in ${SPELDUUR} seconden ${aantalGegeten} dropjes gegeten!\n` +
        `${noemHoogsteScore}\n` +
        `Klik om opnieuw te spelen.`
    } else {
      tekstBovenaan = `${aantalGegeten} dropjes in ${round(tijd, 1)} seconden`
    }
  }
}

function spelerRaaktDropje() {
  return dist(dropX, dropY, mouseX, mouseY) < 50
}

// Kies een type en plaats voor een Engels dropje
function maakDropje() {
  soortenDrop = ['roze met zwart', 'zwart met wit', 'laagjes']
  dropSoort = random(soortenDrop) // kies een van de drie opties
  do {
    dropX = random(25, width - 25)  // kies getal tussen deze twee getallen
    dropY = random(75, height - 25)
  } while (spelerRaaktDropje()); // ga door tot dropje los van speler staat
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

// Als de muis geklikt wordt...
function mouseClicked() {
  if (!spelBezig) {
    herstartSpel();
  }
}

// Als er een toets ingedrukt wordt...
function keyPressed() {
  if (key == 'h') {
    // Hoogste score weer op 0 zetten
    storeItem('hoogsteScore', 0)
  }
}
