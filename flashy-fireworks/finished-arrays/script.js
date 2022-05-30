
ZWAARTEKRACHT = 0.7

STIPPEN_PER_VUURPIJL = 30

MAX_STIP_SNELHEID = 20

KLEUREN = ['yellow', 'lightred', 'lightblue', 'lightgreen', 'lightpurple']

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  // init lijsten
  posX = []
  posY = []
  snelX = []
  snelY = []
  kleur = []

  maakVuurpijl(width / 2, height / 2)

  noStroke()
}

function maakVuurpijl(pijlX, pijlY) {
  i = 0
  while (i < STIPPEN_PER_VUURPIJL) {
    // Zet stip op juiste plek
    posX.push(pijlX)
    posY.push(pijlY)

    // Geef stip een snelheid
    snelX.push(random(-MAX_STIP_SNELHEID, MAX_STIP_SNELHEID))
    snelY.push(random(-MAX_STIP_SNELHEID, MAX_STIP_SNELHEID))

    // Kies een kleur
    kleur.push(random(KLEUREN))

    // Onthoud hoeveel stippen we hebben gemaakt
    i++
  }
}

function draw() {
  background('black')

  // Verplaats en teken stippen
  i = 0
  while (i < posX.length) {
    // Pas zwaartekracht toe
    snelY[i] += ZWAARTEKRACHT
    posX[i] += snelX[i]
    posY[i] += snelY[i]

    if (posX[i] < 0 || posX[i] >= width || posY >= height) {
      // verwijder
      posX.splice(i, 1)
      posY.splice(i, 1)
      snelX.splice(i, 1)
      snelY.splice(i, 1)
      kleur.splice(i, 1)

      // i is nu al de volgende stip (omdat we de oude i net verwijderd hebben)
    } else {
      // Teken
      fill(kleur[i])
      circle(posX[i], posY[i], 10)

      // Ga verder met de volgende stip
      i++
    }

  }
}

function mouseClicked() {
  maakVuurpijl(mouseX, mouseY)
}