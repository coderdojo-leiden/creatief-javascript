
// Dit wordt in het begin 1x uitgevoerd
function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(20)
  strokeWeight(1)

  aantalLijnen = 100
}


//--------------------------------------------------------------------

// Dit wordt steeds opnieuw uitgevoerd
function draw() {
  background('white')
  stroke('blue')
  noFill()

  // Hoe grote stapjes moeten we nemen zodat de lijnen
  // over de hele breedte komen?
  ruimteTussenLijnen = width / 2 / aantalLijnen

  // We gaan nu in een lus onze lijnen tekenen.
  aantalGetekend = 0
  while (aantalGetekend < aantalLijnen) {

    // Bepaal het eindpunt van de lijnen
    x = aantalGetekend * ruimteTussenLijnen

    // Teken de lijnen    
    line(0, 75, x, height);
    line(width / 2, height, width / 2 - x, 75);

    // Teken cirkels
    circle(width * 0.75, height / 2, aantalGetekend * 5)

    // Tel het aantal lijnen dat we getekend hebben,
    // zodat de lus uiteindelijk stopt.
    aantalGetekend = aantalGetekend + 1
  }

  // Toon de tekst
  noStroke()
  fill('black')
  text('We gebruiken een lus om lijnen en cirkels te tekenen.\n' +
    '(de gekke vormen die je ziet ontstaan heten Moirépatronen)', 20, 20, width, 100)
}

//--------------------------------------------------------------------

// Zorg dat ons canvas even groot blijft als ons venster
function windowResized() { resizeCanvas(windowWidth, windowHeight) }
