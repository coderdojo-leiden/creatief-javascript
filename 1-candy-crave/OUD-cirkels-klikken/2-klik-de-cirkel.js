
// Middelpunt van de cirkel
var cirkelX, cirkelY

// Hoe groot moet de cirkel zijn?
var cirkelGrootte = 140

// Tekst voor in de cirkel
var tekst = 'Klik\nhier!'

// Hoe vaak is er geklikt?
var aantalKliks = 0

// Dit wordt in het begin 1x uitgevoerd
function setup() {
  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  noStroke()

  // Bepaal het middelpunt van de cirkel
  // (midden van het scherm)
  cirkelX = width / 2
  cirkelY = height / 2
}

function muisInCirkel() {
  var afstand = dist(mouseX, mouseY, cirkelX, cirkelY)
  return afstand < cirkelGrootte / 2
}

// Dit wordt steeds opnieuw uitgevoerd
function draw() {
  background('lightyellow')

  // Kijk hoe ver de muiscursor van het midden van de cirkel is
  var afstand = dist(mouseX, mouseY, cirkelX, cirkelY)

  // Kies een kleur afhankelijk van de afstand
  var kleur = 'blue';
  if (muisInCirkel()) {
    // De muiscursor zit in de cirkel
    kleur = 'red'
  }

  fill(kleur)
  circle(cirkelX, cirkelY, cirkelGrootte)
  
  fill('white')
  textSize(22)
  textStyle(BOLD)
  textAlign(CENTER)
  text(tekst, cirkelX, cirkelY - 10)
}

function mouseClicked() {
  if (muisInCirkel()) {
    aantalKliks = aantalKliks + 1
    tekst = `Je hebt\n${aantalKliks}x geklikt`
  }
}