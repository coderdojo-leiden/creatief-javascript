
// Dit wordt in het begin 1x uitgevoerd
function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(20)
}

//--------------------------------------------------------------------

// Dit wordt steeds opnieuw uitgevoerd
function draw() {
  background('white')

  // Bepaal het midden van het scherm
  middenX = width / 2
  middenY = height / 2
  
  // Gebruik mouseX om een vulkleur te kiezen
  if (mouseX < middenX) {
    // Linkerhelft; maak de vorm geel
    kleur = 'yellow'
  } else {
    // Rechterhelft; maak de vorm rood
    kleur = 'red'
  }
  fill(kleur)
  stroke('black')

  // Gebruik mouseY om een vorm te kiezen
  if (mouseY < middenY) {
    // Boven; teken een cirkel
    circle(mouseX, mouseY, 140)
  } else {
    // Onder; teken een rechthoek
    rect(mouseX - 70, mouseY - 70, 140, 140)
  }

  // Teken lijnen door het midden
  stroke('gray')
  line(middenX, 0, middenX, height)
  line(0, middenY, width, middenY)

  // Toon instructies
  fill('black')
  noStroke()
  text('if (als...dan) bepaalt de vorm en kleur\n\n'+
    'Beweeg de muis! Links = geel, rechts = rood\n' +
    'Boven = cirkel, onder = rechthoek', 20, 40)

}

//--------------------------------------------------------------------

// Zorg dat ons canvas even groot blijft als ons venster
function windowResized() { resizeCanvas(windowWidth, windowHeight) }
