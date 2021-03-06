
// Dit wordt in het begin 1x uitgevoerd
function setup() {
  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES) // Hoeken in graden

  // Zet variabelen op juiste waarde
  tekstBovenaan = 'Eet alle dropjes!'
  aantalGegeten = 0
  spelBezig = true

  // Maak het eerste dropje
  maakDropje()
}

// Kies een type en plaats voor een Engels dropje
function maakDropje() {
  soortenDrop = [
    'roze met zwart', 
    'zwart met wit', 
    'laagjes'
  ]
  dropSoort = random(soortenDrop) // kies een van de drie opties
  dropX = random(25, width - 25)  // kies getal tussen deze twee getallen
  dropY = random(25, height - 25)
}

// Dit wordt steeds opnieuw uitgevoerd
function draw() {

  background(240)

  // Tekst bovenin
  noStroke()
  fill('black')
  textSize(40)
  textAlign(CENTER)
  text(tekstBovenaan, width / 2, 50)

  if (spelBezig)
    tekenDrop(dropX, dropY, dropSoort);

  tekenSmiley(mouseX, mouseY);

  // Is de speler dichtbij genoeg om het dropje op te eten?
  if (spelBezig && dist(dropX, dropY, mouseX, mouseY) < 50) {
    // Ja!
    aantalGegeten = aantalGegeten + 1
    if (aantalGegeten == 1)
      startTijd = millis() / 1000

    // Maak een nieuw dropje
    maakDropje();
  }

  // Zijn er 10 seconden voorbij? Dan is het spel afgelopen.
  if (aantalGegeten > 0) {
    var tijd = millis() / 1000 - startTijd
    if (tijd >= 10) {
      spelBezig = false
      tekstBovenaan = 'Je hebt in 10 seconden ' + aantalGegeten + 
        ' dropjes gegeten!\nGefeliciteerd!'
    } else {
      tekstBovenaan = aantalGegeten + ' dropjes in ' + 
          round(tijd, 1) + ' seconden'
    }
  }
  

}

// Teken een Engels dropje
function tekenDrop(x, y, soort) {

  stroke('black')
  strokeWeight(1)

  if (soort == 'roze met zwart') {

    fill( floor(x) % 2 == 0 ? 'pink' : 'orange')
    circle(x, y, 50)
    noStroke()
    fill('black')
    circle(x, y, 20)

  }
  
  if (soort == 'zwart met wit') {

    fill('black')
    circle(x, y, 50)
    noStroke()
    fill('white')
    circle(x, y, 35)

  }
  
  if (soort == 'laagjes') {

    fill('white')
    rect(x - 25, y - 25, 50, 50)
    fill('black')
    rect(x - 25, y - 15, 50, 10)
    rect(x - 25, y + 5, 50, 10)
    fill( ( floor(x) % 2 == 0) ? 'brown' : 'pink')
    rect(x - 25, y - 5, 50, 10)

  }
  
}

function tekenSmiley(x, y) {

  // Hoofd
  stroke('black')
  strokeWeight(1)
  fill('yellow')
  circle(x, y, 140)

  // Tong
  noStroke()
  fill('red')
  arc(x + 25, y + 25, 20, 20, 140, 320)
  fill('red')
  quad(x + 32, y + 18, x + 38, y + 24,
    x + 24, y + 38, x + 16, y + 30)
  
  // Mond
  noFill()
  stroke('black')
  strokeWeight(4)
  arc(x, y, 90, 90, 0, 180)

  // Ogen
  stroke('black')
  strokeWeight(6)
  oogLinks = x - 22;
  oogRechts = x + 22;
  oogBoven = y - 30;
  oogOnder = y - 10;
  line(oogLinks, oogBoven, oogLinks, oogOnder)
  line(oogRechts, oogBoven, oogRechts, oogOnder)
}

// Wanneer het venster van grootte verandert...
function windowResized() {
  // ...verander dan ons canvas mee!
  resizeCanvas(windowWidth, windowHeight)
}
