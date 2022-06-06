
// Dit wordt in het begin 1x uitgevoerd
function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(20)
  strokeWeight(3)
}

//--------------------------------------------------------------------

// Tekent een vorm met drie rechthoeken
function tekenVorm(x, y, kleur) {
  stroke(kleur)
  rect(x - 100, y -  50, 200, 100)
  rect(x -  75, y -  75, 150, 150)
  rect(x -  50, y - 100, 100, 200)
}

//--------------------------------------------------------------------

// Dit wordt steeds opnieuw uitgevoerd
function draw() {
  background('white')
  noFill()

  // Teken onze vorm in verschillende kleuren op
  // verschillende plekken
  tekenVorm(150, 200, 'green')
  tekenVorm(450, 250, 'blue')
  tekenVorm(300, 450, 'red')
  tekenVorm(mouseX, mouseY, 'black')

  // Toon de tekst
  fill('black')
  noStroke()
  text('Met onze tekenVorm() functie kunnen we makkelijk ' +
      'dezelfde vorm meerdere keren tekenen', 20, 40, width, 100)
}

//--------------------------------------------------------------------

// Zorg dat ons canvas even groot blijft als ons venster
function windowResized() { resizeCanvas(windowWidth, windowHeight) }
