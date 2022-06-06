
// Dit wordt in het begin 1x uitgevoerd
function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(20)
  fill('black')
  noStroke()

  // Geef onze variabelen een waarde
  beeldjes = 0
  geklikt = 0
}

//--------------------------------------------------------------------

// Dit wordt steeds opnieuw uitgevoerd
// (60x per seconde)
function draw() {
  background('white')

  beeldjes = beeldjes + 1

  // Bepaal de tekst die we willen tonen
  toonTekst = 'De waardes van onze variabelen:\n\n'+
    '- beeldjes: ' + beeldjes + ' (hoe vaak draw() is uitgevoerd)\n' + 
    '- mouseX: ' + mouseX + ' (de muispositie)\n' + 
    '- mouseY: ' + mouseY + '\n' +
    '- geklikt: ' + geklikt + ' (hoe vaak je geklikt hebt)'

  // Toon de tekst
  text(toonTekst, 20, 40)

}

//--------------------------------------------------------------------

// Word aangeroepen als je de muis klikt
function mouseClicked() {
  geklikt = geklikt + 1
}

//--------------------------------------------------------------------

// Zorg dat ons canvas even groot blijft als ons venster
function windowResized() { resizeCanvas(windowWidth, windowHeight) }
