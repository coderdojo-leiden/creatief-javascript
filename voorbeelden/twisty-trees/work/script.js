/* eslint-disable no-undef, no-unused-vars */

/*

Boom van Pythagoras, met vectoren

Nodig:
- if-else
- functies
- let
- coordinaatsysteem
- vector

 */

// Constantes die bepalen hoe de boom er uit ziet
// (worden hieronder gebruikt; experimenteer met verschillende waardes)
let LENGTE_STAM = 0.3 // hoe lang is de stam? (bijv 0.3 van de hoogte van het venster)
let TAK_KORTER = 0.7 // hoeveel korter is elke volgende tak? (bijv. 0.7 x zo kort)
let TAK_DUNNER = 0.7 // hoeveel dunner is elke volgende tak? (bijv. 0.7 x zo dun)
let TAK_HOEK = 45 // hoek tussen stam en takken (bijv. 45 graden)
let VERTAKKINGEN = 12 // hoe lang blijven we doorgaan met vertakken? (bijv. 12)
let WILLEKEURIGE_VARIATIE = true // willekeurige variatie of niet? (true of false)
let TEKEN_VANAF = 0 // vanaf welke diepte beginnen met tekenen? (bijv. 0)

// Bepaalt welke willekeurige waardes gekozen worden
// (klik om een andere boom te krijgen)
let beginwaardeRandom = 1234

// Wordt 1x aangeroepen als we het programma draaien
function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  noLoop()
}

// Wordt aangeroepen om onze boom te tekenen
function draw() {
  randomSeed(beginwaardeRandom)
  background(220, 220, 255)
  let stamStart = createVector(width / 2, height)
  let stamRichting = createVector(0, -LENGTE_STAM * height)
  let stamDikte = 30
  tekenBoom(stamStart, stamRichting, stamDikte, 0)
}

// Wordt uitgevoerd als we het venster groter of kleiner maken
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

// Als je klikt, gebruik dan een ander random seed en teken de boom opnieuw
function mousePressed() {
  beginwaardeRandom = millis()
  redraw()
}

// Willekeurige variatie op een nummer
// Geeft een nummer terug dat ietsje afwijkt van het nummer dat je erin stopt.
function varieer(n) {
  let variatie = 1
  if (WILLEKEURIGE_VARIATIE) {
    variatie = random() * 0.2 + 0.9
  }
  return n * variatie
}

// Maak een nieuwe tak (vector) op basis van de vorige tak (of de stam)
function maakTak(richting, isLinkerTak) {
  let tak = richting.copy()
  tak.mult(varieer(TAK_KORTER)) // maak tak korter
  let hoek = varieer(TAK_HOEK)
  if (isLinkerTak) {
    tak.rotate(-hoek) // roteer tak
  } else {
    tak.rotate(hoek) // roteer tak
  }
  return tak
}

// Teken de (rest van de) boom
function tekenBoom(start, richting, dikte, takNummer) {
  // Zet de lijnkleur: bruin voor stam en takken, groen voor blad
  let kleur
  if (takNummer > 7) {
    kleur = color(0, 200, 0)
  } else {
    kleur = color(96, 96, 0)
  }
  stroke(kleur)

  // Bereken waar de lijn moet eindigen
  let eind = start.copy().add(richting)

  // Teken de lijn met de juiste dikte
  if (takNummer >= TEKEN_VANAF) {
    strokeWeight(dikte);
    line(start.x, start.y, eind.x, eind.y)
  }

  // Waar beginnen de twee takken en hoe dik zijn ze?
  let takStart = eind // start waar deze lijn eindigt
  let takDikte = dikte * varieer(TAK_DUNNER)
  if (takDikte < 1) {
    takDikte = 1 // tak moet zichtbaar blijven
  }

  // Houd bij hoe "diep" we in de boom zitten?
  takNummer = takNummer + 1
  if (takNummer > VERTAKKINGEN) {
    // Kijk uit dat we niet oneindig doorgaan met tekenen
    return
  }

  // Roep de tekenBoom() functie opnieuw aan om de takken te tekenen
  let tak1 = maakTak(richting, true)
  tekenBoom(takStart, tak1, takDikte, takNummer)
  if (takNummer - 1 >= TEKEN_VANAF) {
    let tak2 = maakTak(richting, false)
    tekenBoom(takStart, tak2, takDikte, takNummer)
  }
}

