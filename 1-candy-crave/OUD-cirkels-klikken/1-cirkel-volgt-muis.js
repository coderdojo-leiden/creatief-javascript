// Dit wordt in het begin 1x uitgevoerd
function setup() {
  // Maak het "schildersdoek" ("canvas") waarop we gaan tekenen
  createCanvas(windowWidth, windowHeight)
  noStroke()
}

// Dit wordt steeds opnieuw uitgevoerd
function draw() {
  background('gray')

  fill('lightblue')
  circle(mouseX, mouseY, 140)
  
  fill('black')
  textSize(20)
  textAlign(CENTER)
  text('Hallo\nJavaScript!', mouseX, mouseY - 15)
}