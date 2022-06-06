
// Dit wordt in het begin 1x uitgevoerd
function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(20)
  noStroke()

  // Deze drie lijsten bevatten onze sterren:
  // hun positie x, y en hun snelheid
  sterX = []
  sterY = []
  sterSnelheid = []

  // Maak 100 sterren aan
  while (sterX.length < 300) {
    // Voeg een ster toe:
    // kies een willekeurige positie en snelheid
    sterX.push(random(0, width))
    sterY.push(random(0, height))
    sterSnelheid.push(random(1, 10))
  }
  
}


//--------------------------------------------------------------------

// Dit wordt steeds opnieuw uitgevoerd
function draw() {
  background('black')

  // We gaan nu in een lus een voor een onze sterren af.
  // Elke ster gaan we tekenen en verplaatsen.

  ster = 0 // nummer van de huidige ster
  while (ster < sterX.length) {

    // Haal de positie en snelheid van de huidige ster op
    x = sterX[ster]
    y = sterY[ster]
    snelheid = sterSnelheid[ster]

    // Kies een kleur (de snelste sterren zijn het helderst)
    kleur = snelheid * 25
    fill(color(kleur, kleur, kleur))

    // Teken de ster
    circle(x, y, 5, 5)

    // Verplaats de ster
    x = x + snelheid

    // Als de ster rechts van het scherm verdwijnt,
    // laat 'm dan links weer verschijnen
    if (x > width)
      x = 0

    // Zet de nieuwe positie terug in de lijst!
    // (anders zien we niets gebeuren)
    sterX[ster] = x

    // Ga door met de volgende ster
    ster = ster + 1
  }

  // Toon de tekst
  fill('white')
  text('We gebruiken lijsten om de positie en snelheid van onze sterren bij te houden', 20, 40, width, 100)
}

//--------------------------------------------------------------------

// Zorg dat ons canvas even groot blijft als ons venster
function windowResized() { resizeCanvas(windowWidth, windowHeight) }
