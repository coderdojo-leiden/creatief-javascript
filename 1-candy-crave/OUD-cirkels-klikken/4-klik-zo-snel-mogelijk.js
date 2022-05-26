
// VARIABELEN
// --------------

// Middelpunt van de cirkel
var cirkelX, cirkelY

// Hoe groot moet de cirkel zijn?
var cirkelGrootte

// En hoe groot de tekst in de cirkel?
var tekstGrootte

// Tekst voor in de cirkel
var tekst = 'Klik\nhier!'

// Hoe vaak is er geklikt?
var aantalKliks = 0

// Wanneer is het spel gestart?
// (in seconden)
var startTijd

// Is het spel nog bezig, of is het al afgelopen?
var spelBezig = true

// Gebeurtenissen
//--------------------------------------

// Wordt uitgevoerd als het programma start
function setup() {
  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  noStroke()

  // Bepaal het middelpunt van de cirkel
  // (midden van het scherm)
  cirkelX = width / 2
  cirkelY = height / 2
  cirkelGrootte = width / 5
  tekstGrootte = cirkelGrootte / 7

  // Onthoud wanneer we gestart zijn, zodat we weten wanneer 
  // het spel afgelopen is
  startTijd = millis() / 1000
}

// Wordt steeds opnieuw uitgevoerd
// (meestal 60x per seconde)
function draw() {
  
  // Zet de achtergrondkleur
  background('lightyellow')

  // Kijk hoe ver de muiscursor van het midden van de cirkel is
  var afstand = dist(mouseX, mouseY, cirkelX, cirkelY)

  // Zijn er 10 seconden voorbij? Dan is het spel afgelopen.
  var tijd = millis() / 1000 - startTijd
  if (tijd >= 10) {
    tijd = 10
    spelBezig = false
  }

  // Kies een kleur afhankelijk van de afstand
  var kleur = 'blue'
  if (muisInCirkel()) {
    // De muiscursor zit in de cirkel
    kleur = 'red'
  }

  fill(kleur)
  circle(cirkelX, cirkelY, cirkelGrootte)
  
  fill('white')
  textSize(tekstGrootte)
  textStyle(BOLD)
  textAlign(CENTER, CENTER)
  text(tekst, cirkelX, cirkelY)

  fill('black')
  //textSize(12)
  textStyle(NORMAL)
  textAlign(LEFT, TOP)
  text(round(tijd, 1) + 's', 10, 10)
}

// Wordt uitgevoerd wanneer de muis geklikt wordt
function mouseClicked() {
  if (muisInCirkel()) {
    aantalKliks = aantalKliks + 1
    tekst = 'Je hebt\n' + aantalKliks + 'x geklikt'
    verplaatsCirkel()
  }
}

// Hulpfuncties
//--------------------------------------

// Is het spel nog bezig en zit de muiscursor in de cirkel?
function muisInCirkel() {
  var afstand = dist(mouseX, mouseY, cirkelX, cirkelY)
  if (spelBezig && afstand < cirkelGrootte / 2)
    return true;
  else
    return false;
}

// Kies een nieuw middelpunt voor de cirkel
function verplaatsCirkel() {
  cirkelX = random(cirkelGrootte / 2, width - cirkelGrootte / 2)
  cirkelY = random(cirkelGrootte / 2, height - cirkelGrootte / 2)
}