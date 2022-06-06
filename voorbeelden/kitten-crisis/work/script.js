
//----------------------------------------------------------

// Een aantal vaste waardes

// Hoe snel komen de druppels (in het begin)?
DRUPPELSNELHEID = 2

// Hoe lang duurt het om op te drogen (per druppel)?
DROOGTIJD = 5

// Hoe nat moet een kitten worden voor het spel over is?
DOORWEEKT = 20

// Aantal pixels van links tot eerste kitten
RUIMTE_LINKS = 60

//----------------------------------------------------------

// Hier laden we plaatjes, geluiden en het lettertype
function preload() {
  // Plaatjes
  plaatjeDroog = loadImage('assets/kitten-droog.png')
  plaatjeNat = loadImage('assets/kitten-nat.png')
  plaatjeDruppel = loadImage('assets/waterdruppel.png')
  plaatjeAchtergrond = loadImage('assets/grasveld.jpg')

  // Lettertype titel
  letterTypeLemonJelly = loadFont('assets/LemonJelly.ttf')

  // Geluiden
  miauw = loadSound('assets/miauw.mp3')
  splash = loadSound('assets/splash.mp3')
}

//----------------------------------------------------------

// Dit wordt in het begin 1x uitgevoerd
function setup() {
  createCanvas(windowWidth, windowHeight)
  textAlign(CENTER, TOP)
    
  // Afstand tussen de kittens
  AFSTAND = width / 3
  KITTEN_Y = height - 150

  // Maak de kittens
  kittens = []
  i = 0
  while (i < 3) {
    nieuweKitten = {
      positie: i,
      nat: false,
      droogTijd: 0,
    }
    
    kittens.push(nieuweKitten)
    
    i = i + 1
  }
  
  moeilijkheid = 1
  verloren = false
  score = 0
  
  // Maak eerste druppel
  druppels = []
  voegDruppelToe()
  
}

//----------------------------------------------------------

function voegDruppelToe() {
  // Boven welke kitten?
  k = random([0, 1, 2])
  l = String.fromCharCode(random(65, 65 + 25))
  
  nieuweDruppel = {
    positie: k,
    y: 50,
    letter: l,
    actief: true
  }
  druppels.push(nieuweDruppel)
  volgendeDruppelTijd = random(DRUPPELSNELHEID) / moeilijkheid
}

//----------------------------------------------------------

// Dit wordt steeds opnieuw uitgevoerd
function draw() {

  tekenAchtergrond()

  doeDruppels()
  doeKittens()
}

//----------------------------------------------------------

// Teken achtegrondplaatje, titel en score
function tekenAchtergrond() {

  // Achtergrondplaatje
  image(plaatjeAchtergrond, 0, 0)

  // Titel
  noStroke()
  fill('white')
  textSize(60)
  textFont(letterTypeLemonJelly)
  text('Kitten Crisis', width / 2, 10)

  // Score
  textFont('Arial')
  textAlign(RIGHT, TOP)
  text(score, width - 10, 10)

}

//----------------------------------------------------------

// Teken druppels, verplaats ze en kijk of ze de kittens raken
function doeDruppels() {
  // Stel alles in voor de druppels
  noStroke()
  fill('black')
  textAlign(CENTER, TOP)
  textSize(50)
  textFont('Arial')
  
  actieveDruppels = []
  for (druppel of druppels) {
    tekenDruppel(druppel)
    
    // Verplaats de druppels en kijk of ze de kitten al raken
    if (!verloren) {

      // Druppel valt een stukje
      druppel.y = druppel.y + 2

      // Raakt druppel de kitten?
      if (druppel.actief && druppel.y > KITTEN_Y) {
        miauw.play()                       // speel geluid
        druppel.actief = false             // druppel niet meer tonen
        kitten = kittens[druppel.positie]  // welke kitten hebben we geraakt?
        kitten.nat = true                  // zet kitten op nat (als dat nog niet zo was)
        kitten.droogTijd = kitten.droogTijd + DROOGTIJD // kitten wordt natter
        if (kitten.droogTijd > DOORWEEKT) { // als de kitten doorweekt is...
          verloren = true                   // ...hebben we verloren
          splash.play()
        }
      }
    }
    if (druppel.actief) {
      actieveDruppels.push(druppel)
    }
  }
  druppels = actieveDruppels

  // Voeg telkens een druppel toe
  volgendeDruppelTijd = volgendeDruppelTijd - 1/60
  if (!verloren && volgendeDruppelTijd < 0) {
    voegDruppelToe()
  }
}

//----------------------------------------------------------

// Teken de kittens en laat ze langzaam opdrogen
function doeKittens() {
  for (kitten of kittens) {
    tekenKitten(kitten)

    // Zorg dat kittens langzaam opdrogen
    if (kitten.nat && !verloren) {
      kitten.droogTijd = kitten.droogTijd - 1/60
      if (kitten.droogTijd < 0) {
        kitten.nat = false
      }
    }
  }
}

//----------------------------------------------------------

// Kijk of we de letter van een druppel hebben ingetikt
function keyPressed() {
  for (druppel of druppels) {
    if (druppel.actief && druppel.letter == key.toUpperCase()) {

      // Ja, goeie letter! Score omhoog en druppel verdwijnt.
      score = score + 1
      druppel.actief = false

      // Zorg dat druppels steeds een beetje sneller gaan
      moeilijkheid = moeilijkheid + 0.02

      // Spring uit de lus, zodat meerdere druppels met dezelfde
      // letter niet tegelijk verdwijnen (je moet deze letter dan
      // meerdere keren typen)
      break
    }
  }
}

//----------------------------------------------------------

// Teken een druppel met een letter er in
function tekenDruppel(druppel) {
  if (!druppel.actief)
    return;
  
  x = RUIMTE_LINKS + druppel.positie * AFSTAND + 30
  
  // Druppel
  image(plaatjeDruppel, x, druppel.y)
  
  // Letter
  text(druppel.letter, x + 6, druppel.y + 60, plaatjeDruppel.width)
}

//----------------------------------------------------------

// Teken een droge of natte kitten (evt. met de droogtijd erboven)
function tekenKitten(kitten) {
  x = RUIMTE_LINKS + kitten.positie * AFSTAND;
  
  if (kitten.nat) {
    plaatje = plaatjeNat
  } else {
    plaatje = plaatjeDroog
  }
    
  image(plaatje, x, KITTEN_Y)
  
  if (kitten.nat) {
    // Toon de "droogtijd" boven de kitten
    textAlign(CENTER, BOTTOM)
    fill('yellow')
    tekst = round(kitten.droogTijd + 0.5)
    if (kitten.droogTijd > 20) {
      tekst = 'Doorweekt!'
    }
    text(tekst, x + plaatjeNat.width / 2, KITTEN_Y - 10)
  }
}

//----------------------------------------------------------

// Wanneer het venster van grootte verandert...
function windowResized() {
  // ...verander dan ons canvas mee!
  resizeCanvas(windowWidth, windowHeight)
    
  // Afstand tussen de kittens
  AFSTAND = width / 3
  KITTEN_Y = height - 150
}
