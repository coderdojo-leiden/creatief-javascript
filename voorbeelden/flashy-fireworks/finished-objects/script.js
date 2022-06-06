
ZWAARTEKRACHT = 0.7

STIPPEN_PER_VUURPIJL = 30

MAX_STIP_SNELHEID = 20

KLEUREN = ['yellow', 'lightred', 'lightblue', 'lightgreen', 'lightpurple']

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  // init lijsten
  stippen = []

  maakVuurpijl(width / 2, height / 2)

  noStroke()
}

function maakVuurpijl(pijlX, pijlY) {
  i = 0
  while (i < STIPPEN_PER_VUURPIJL) {
    // Maak een nieuwe stip
    nieuweStip = {
      posX: pijlX,
      posY: pijlY,
      snelX: random(-MAX_STIP_SNELHEID, MAX_STIP_SNELHEID),
      snelY: random(-MAX_STIP_SNELHEID, MAX_STIP_SNELHEID),
      kleur: random(KLEUREN)
    }

    // Voeg nieuwe stip toe aan de lijst met stippen
    stippen.push(nieuweStip);

    i++
  }
}

function draw() {

  background('black')

  // Verplaats en teken stippen
  i = 0
  while (i < stippen.length) {
    // Zoek de stip op
    stip = stippen[i]

    // Pas zwaartekracht toe
    stip.snelY += ZWAARTEKRACHT
    stip.posX += stip.snelX
    stip.posY += stip.snelY

    if (stip.posX < 0 || stip.posX >= width || stip.posY >= height) {
      // verwijder deze stip
      stippen.splice(i, 1)

      // i is nu al de volgende stip (omdat we de oude i net verwijderd hebben)
    } else {
      // Teken
      fill(stip.kleur)
      circle(stip.posX, stip.posY, 10)

      // Ga verder met de volgende stip
      i += 1
    }

  }

}

function mouseClicked() {
  maakVuurpijl(mouseX, mouseY)
}