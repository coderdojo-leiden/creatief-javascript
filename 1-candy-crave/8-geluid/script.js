
function preload() {
  hap = loadSound('geluid/hap.mp3')
}

// Dit wordt in het begin 1x uitgevoerd
function setup() {
  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES) // hoeken in graden

  // Zet variabelen op juiste waarde
  tekstBovenaan = 'Klik om te beginnen!'
  aantalGegeten = 0
  
  // Het spel is nog niet begonnen (je moet eerst klikken)
  spelBezig = false
  starttijd = 0

  // Maak het eerste dropje
  maakDropje()

  // Stel tekstgrootte en uitlijning in
  textSize(40)
  textAlign(LEFT, TOP)

} // einde van setup()

//--------------------------------------------------------------------

// Dit wordt steeds opnieuw uitgevoerd
function draw() {

  background(240)

  // Tekst bovenin
  noStroke()
  fill('black')
  text(tekstBovenaan, 20, 20)

  // Hoe lang is het spel bezig?
  if (spelBezig) {

    tijd = millis() / 1000 - starttijd
    if (tijd < 10) {

      // Het spel is bezig. Toon score en tijd.
      tekstBovenaan = aantalGegeten + ' dropjes in ' + round(tijd, 1) + 
          ' seconden'

      // Is de speler dichtbij genoeg om het dropje op te eten?
      if (dist(dropX, dropY, mouseX, mouseY) < 50) {
        // Ja! Tel dropje en werk de tekst bij
        aantalGegeten = aantalGegeten + 1
        hap.play()

        // Maak een nieuw dropje
        maakDropje()
      }

      tekenDrop(dropX, dropY, dropSoort)
      
    } else {

      // Het spel is afgelopen. Toon de eindscore.
      tekstBovenaan = 'Je hebt in 10 seconden ' + aantalGegeten + 
          ' dropjes gegeten!\nGefeliciteerd!\n(klik om nog eens te spelen)'
      spelBezig = false // spel is niet meer bezig

    }

  }

  tekenSmiley(mouseX, mouseY)
  
} // einde van draw()

//--------------------------------------------------------------------

function maakDropje() {

  // Kies een soort Engelse drop
  soortenDrop = ['roze met zwart', 'zwart met wit', 'laagjes']
  dropSoort = random(soortenDrop) // kies een van de drie opties

  // Kies een plaats voor het dropje
  dropX = random(25, width - 25)  // kies getal tussen deze twee getallen
  dropY = random(75, height - 25)

} // einde van maakDropje()

//--------------------------------------------------------------------

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

} // einde van tekenDrop()

//--------------------------------------------------------------------

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

} // einde van tekenSmiley()

//--------------------------------------------------------------------

// Wanneer het venster van grootte verandert...
function windowResized() {
  // ...verander dan ons canvas mee!
  resizeCanvas(windowWidth, windowHeight)

} // einde van windowResized()

//--------------------------------------------------------------------

// Wanneer de muis geklikt wordt...
function mouseClicked() {
  if (!spelBezig) {
    // ...begin dan het spel en onthoud de begintijd
    spelBezig = true
    starttijd = millis() / 1000
  }

} // einde van mouseClicked()

