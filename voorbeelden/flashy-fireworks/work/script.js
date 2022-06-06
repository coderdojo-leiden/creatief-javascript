
ZWAARTEKRACHT = 0.7

STIPPEN_PER_VUURPIJL = 40

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
      x: pijlX,
      y: pijlY,
      sx: random(-MAX_STIP_SNELHEID, MAX_STIP_SNELHEID),
      sy: random(-MAX_STIP_SNELHEID, MAX_STIP_SNELHEID),
      kleur: random(KLEUREN),
      helderheid: 255,
      twinkel: floor(random(10))
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
    stip.sy += ZWAARTEKRACHT
    stip.x += stip.sx
    stip.y += stip.sy
    stip.helderheid -= 2
    //stip.twinkel = stip.twinkel + 1

    if (stip.x < 0 || stip.x >= width || stip.y >= height) {
      // verwijder deze stip
      stippen.splice(i, 1)

      // i is nu al de volgende stip (omdat we de oude i net verwijderd hebben)
    } else {
      // Teken
      k = color(stip.kleur)
      a = stip.helderheid
      if (a < 0)
         a = 0
      k.setAlpha(a)
      fill(k) //stip.twinkel % 10 < 4 ? 'black' : k)
      circle(stip.x, stip.y, 10)

      // Ga verder met de volgende stip
      i += 1
    }

  }

}

function mouseClicked() {
  maakVuurpijl(mouseX, mouseY)
}