# Candy Capture (Creatief Coderen in JavaScript)

JavaScript is een programmeertaal die vooral door websites gebruikt wordt. Het is een van de populairste programmeertalen ter wereld.

Je kunt van alles met JavaScript-code, maar vandaag gaan we leren hoe je een simpel spelletje kunt maken.


## Open het voorbeeldproject

Er zijn twee manieren om het voorbeeldproject te openen en aan de slag te gaan.

### Bewerken in de browser (Replit)

De makkelijkste manier is om het project te [openen op replit.com](https://replit.com/@JanNiestadt/Creatief-Coderen-1-Candy-Capture#script.js).

Je hebt hiervoor wel een (gratis) account nodig. Als je die nog niet hebt: klik op **Sign up** (inschrijven) rechtsboven. Je moet dan een gebruikersnaam en een wachtwoord kiezen en je e-mailadres opgeven. Je ontvangt een mailtje en moet klikken op een link in dat mailtje om je account te activeren.

Als je ingelogd bent, klik dan op de blauwe **Fork repl** knop rechtsboven. Je kunt nu zelf aan de slag in een kopie van het voorbeeldproject.

Wanneer je het programma wilt uitvoeren klik je op de groene knop **Run** (uitvoeren) bovenin het scherm.


### Bewerken met een teksteditor zoals Kladblok

Als je geen account kunt of wilt maken op replit.com, kun je ook gewoon in een teksteditor zoals Kladblok of [Notepad++](https://notepad-plus-plus.org/downloads/) werken.

[Download](https://github.com/) het voorbeeldproject (@@@LINK), pak het zipbestand uit op een handige plaats (bijvoorbeeld het bureaublad) en open `index.html` in de browser. Om het programma te bewerken, open je `script.js` in je teksteditor.

Elke keer als je een wijzing maakt, sla het het script op (Ctrl+S), ga je naar de browser en herlaad je de pagina.


## Je eerste JavaScript-programma

Bekijk het bestand `script.js` en voer het uit. Beweeg de muiscursor over het venster. Als het goed is, zie je een groene cirkel die de muiscursor volgt.

Begrijp je hoe dit programma werkt? Nee? Laten we kijken of we erachter kunnen komen. Verderop vind je ook een lijst waarin alle termen staan uitgelegd.


### Probeer iets uit!

Als je het programma verandert, zie je vanzelf hoe het werkt. Als je iets hebt veranderd, druk dan steeds op "Run" om het programma uit te voeren.


Wat je bijvoorbeeld kunt proberen:
- Zet twee schuine strepen `//` voor een van de regels, dus bijvoorbeeld: `//noStroke()`. De regel wordt grijs. Klik nu weer op Run.<br>Wat is er anders geworden? Probeer dit ook bij andere regels. Wat denk je dat `//` aan het begin van de regel doet?
- Probeer andere getallen bij `textSize(20)` of `circle(mouseX, mouseY, 140)`. En probeer eens `textAlign(LEFT)` of `textAlign(RIGHT)`.
- Probeer andere kleuren bij `background('gray')`, of de regels met `fill(...)`, bijvoorbeeld `'purple'` (paars) of `'green'` (groen). Meer (Engelse) kleurnamen vind je [hier](https://www.w3schools.com/tags/ref_colornames.asp).
- Verander de tekst in de laatste regel.<br>Wat denk je dat `\n` betekent? Haal 'm eens weg, of zet er een extra zodat er `'Hallo\n\nJavaScript'` staat!
- Maak van `mouseY - 15` op de laatste regel eens `mouseY - 50` of `mouseY + 50`. Wat gebeurt er nu? En wat als je `(mouseX, mouseY)` vervangt door `(width-mouseX, height-mouseY)`?
- Wat gebeurt er als je `mouseX` weghaalt en vervangt door een getal, bijvoorbeeld `200`? Probeer dit ook met `mouseY`. Wat denk je dat `mouseX` en `mouseY` betekenen?
- Werkt het programma nog als je `mouseX` verandert in `mousex` (dus met een kleine letter `x`)?
- Wat kun je zelf nog bedenken om te veranderen aan het programma?

**Foutje?** Als iets ongedaan wilt maken, gebruik dan Ctrl+Z (houd Ctrl ingedrukt en druk (een paar keer) op Z).


## Meer tekenen

Je begrijpt het programma nu een beetje. Laten we nu kijken of we de cirkel wat meer karakter kunnen geven, door ogen en een mond te tekenen.

Natuurlijk kun jij er zelf van maken wat je leuk vindt, door bijvoorbeeld oortjes en snorharen toe te voegen, of hoorns, of een slurf.

Maar eerst gaan we een functie (`function`) maken die ons gezicht tekent. Het is handig om tekenopdrachten die bij elkaar horen in een functie te verzamelen; die kun je dan bijvoorbeeld meerdere keren uitvoeren, zoals we zometeen zullen doen.

Voeg dit toe aan je code:

```javascript
function tekenSmiley(x, y) {
  // Hoofd
  stroke('black')
  strokeWeight(1)
  fill('yellow')
  circle(x, y, 140)
  
  // Mond
  noFill()
  strokeWeight(4)
  arc(x, y, 90, 90, 0, 180)

  // Ogen
  strokeWeight(6)
  oogLinks = x - 22
  oogRechts = x + 22
  oogBoven = y - 30
  oogOnder = y - 10
  line(oogLinks, oogBoven, oogLinks, oogOnder)
  line(oogRechts, oogBoven, oogRechts, oogOnder)
}
```

Pas de functie `draw()` aan zodat die er zo uitziet:

```javascript
function draw() {
  background(240)
  tekenSmiley(mouseX, mouseY)
}
```

Onze functie `tekenSmiley`, krijgt een `x` en `y` waarde aangeleverd. De waardes die een functie aangeleverd krijgt heten ook wel *parameters*.

Probeer het programma uit. Zie je de smiley? Begrijp je hoe deze getekend wordt?

### Probeer iets uit!

Probeer te veranderen hoe het gezichtje getekend wordt:

- Wat doen `stroke` en `strokeWeight` denk je? Pas de kleurnaam en de getallen eens aan, klik "Run" en kijk wat er verandert.
- Wat doet de `arc` functie? Waarom staat er `noFill()` vlak voor de `arc` functie gebruikt wordt? Wat als je `noFill()` uitschakelt (zet er `//` voor)? Wijzig ook eens de parameters `0, 180` eens en kijk wat er gebeurt.
- Hoe worden de ogen getekend? Waarvoor dienen de 4 regels die de variabelen `oogLinks`, `oogRechts`, etc. zetten? Ze worden weer gebruikt in de twee `line` regels; begrijp je hoe het werkt?
- Wat wil jij nog veranderen aan het gezicht? Een neus, andere ogen, oren, snorharen of een hoedje?<br>**TIP:** Als je een driehoek wilt tekenen, gebruik dan <nobr>`triangle(x, y, x + 10, y + 10, x - 10, y + 10)`</nobr>. Zet wel eerst de juiste `fill('kleur')`, anders zie je de driehoek misschien niet tegen de achtergrond.

Pas de functie `draw()` nu nog eens aan:

```javascript
function draw() {
  background(240)
  tekenSmiley(mouseX, mouseY)
  tekenSmiley(mouseX + 140, mouseY)
  tekenSmiley(mouseX, mouseY - 140)
}
```

Wat gebeurt er nu? Snap je hoe dat komt? En snap je nu waarom het handig kan zijn om sommige opdrachten te verzamelen in een `function`?

Verwijder de twee extra `tekenSmiley` regels nu weer.


## Engelse drop!

Als we een spel willen maken, hebben we wel een doel nodig. Bijvoorbeeld om zo veel mogelijk Engelse drop te eten.

Laten we eerst een functie maken die een Engels dropje tekent:

```javascript
function tekenDrop(x, y) {
  stroke('black')
  strokeWeight(1)
  fill('white')
  rect(x - 25, y - 25, 50, 50)
  fill('black')
  rect(x - 25, y - 15, 50, 10)
  rect(x - 25, y + 5, 50, 10)
  fill('yellow')
  rect(x - 25, y - 5, 50, 10)
}
```

We gebruiken hier de functie `rect(x, y, breedte, hoogte)` die een rechthoek tekent. Dit is maar 1 soort Engelse drop, maar verderop gaan we nog andere soorten toevoegen. Natuurlijk kun je nu al zelf een ander soort dropje tekenen als je wilt. Of heel iets anders.

Nu willen we dat het dropje op een willekeurige plek op het scherm verschijnt. Een willekeurig getal kiezen kan met de `random(min, max)` functie. Deze functie kiest een getal tussen de twee getallen die je opgeeft.

Zet deze regels aan het eind van de `setup()` functie (maar wel binnen de `{ }`):

```javascript
  // Kies een plek voor het dropje
  dropX = random(25, width - 25)
  dropY = random(25, height - 25)
```

We kiezen een positie voor het dropje door twee getallen te kiezen: `dropX`, het aantal pixels (schermpunten) van links, en `dropY`, het aantal pixels van boven. We gebruiken hierbij `width` en `height`; dit staat voor de breedte en hoogte van ons venster. Zo zorgen we dat het dropje niet buiten het venster terechtkomt.

Natuurlijk moeten we het dropje wel tekenen, anders zien we niets. Zet deze regel aan het eind van de `draw()` functie:

```javascript
  tekenDrop(dropX, dropY)
```

Probeer het programma uit. Zie je het dropje?

Als je de muiscursor over het dropje beweegt, staat het gezicht dan *voor* of *achter* het dropje? Hoe zou je ervoor kunnen zorgen dat het gezicht altijd over het dropje heen getekend wordt? Denk aan de volgorde waarin ze getekend worden.

Nu hebben we een dropje, maar hoe eten we het op?


## (Dr)opeten

We willen dat het dropje opgegeten wordt zodra de speler (dus de muiscursor) er dichtbij komt. Dan moet er een nieuw dropje geplaatst worden, zodat we kunnen blijven dooreten.

Hiervoor hebben we de `if` instructie nodig, die een stukje code alleen uitvoert als aan een bepaalde voorwaarde voldaan is.

De voorwaarde is hier: "de speler (muiscursor) is dicht bij het dropje". We bepalen dit met de `dist(x1, x2, y1, y2)` functie die de afstand tussen twee punten berekent.

Voeg deze regels toe aan het eind van de `draw()` functie:

```javascript
  // Is de speler dichtbij genoeg om het dropje op te eten?
  if (dist(dropX, dropY, mouseX, mouseY) < 50) {
    // Ja! Maak een nieuw dropje
    dropX = random(25, width - 25)
    dropY = random(75, height - 25)
  }
```

Begrijp je wat hier gebeurt? `<` is het "kleiner dan" teken, dus er staat eigenlijk "afstand tussen dropje en muiscursor is kleiner dan 50 pixels". Alleen als dat waar is, worden de volgende twee regels (tussen de `{` en `}`) uitgevoerd.

Probeer het maar uit! Als het goed is, verschijnt er nu een nieuw dropje zodra de speler dichtbij genoeg komt op het dropje op te eten.

Bij het kiezen van het nieuwe dropje gebruiken we dezelfde twee regels als we al in `setup()` hebben staan:

```javascript
  dropX = random(25, width - 25)
  dropY = random(75, height - 25)
```

Als je op meerdere plekken dezelfde code hebt staan, is het meestal verstandig om deze code te verplaatsen naar een nieuwe functie, en die functie op meerdere plekken aan te roepen. Als je de code dan wilt veranderen, hoeft dat maar op 1 plek.

Kun jij een functie `maakDropje` maken en die in zowel `setup` als in `draw` aanroepen?


## Instructies tonen

Laten we verder bovenin het venster een boodschap tonen, zodat spelers weten wat de bedoeling is.

Voeg deze regels toe in `draw()`, net onder de `background` regel:

```javascript
  // Tekst bovenin
  noStroke()
  fill('black')
  text('Eet de dropjes!', 20, 20)
```

## Meer variatie

We hebben een hoop vitaminen en mineralen nodig om gezond te blijven. Het is dus verstandig om veel verschillende soorten Engelse drop te eten!<sup>*</sup> Laten we er meer toevoegen!
<br><small><i>( <sup>\*</sup>ouders hebben het altijd over groenten en fruit, maar wat weten die er nou van?)</i></small>

Stel dat we 2 soorten Engelse drop willen. Voeg twee regels toe aan de `maakDropje` functie die een willekeurige soort kiest:

```javascript
  soortenDrop = ['zwart met wit', 'laagjes']
  dropSoort = random(soortenDrop) // kies een van de drie opties
```

Op de eerste regel geef je een lijst van 2 soorten dropjes. Op de tweede regel kies je een willekeurige soort uit die lijst.<br><small>(In latere opdrachten zullen we veel meer met lijsten gaan doen)</small>

Nu moeten we zorgen dat we verschillende dropjes tekenen. Hiervoor gebruiken we weer de `if` instructie, ditmaal om te checken of een variabele (`dropSoort`) een waarde heeft (bijvoorbeeld `'zwart met wit'`). Let op dat vergelijken gebeurt met *twee* isgelijktekens! (`==`)

Pas de `tekenDrop` functie aan zoals hieronder staat (let op, er is een parameter `soort` bijgekomen). Of je kunt natuurlijk je eigen variaties tekenen.

```javascript
function tekenDrop(x, y, soort) {
  stroke('black')
  strokeWeight(1)
  if (soort == 'zwart met wit') {
    fill('black')
    circle(x, y, 40)
    noStroke()
    fill('white')
    circle(x, y, 32)
  }
  if (soort == 'laagjes') {
    fill('white')
    rect(x - 25, y - 25, 50, 50)
    noStroke()
    fill('black')
    rect(x - 25, y - 15, 50, 10)
    rect(x - 25, y + 5, 50, 10)
    fill('yellow')
    rect(x - 25, y - 5, 50, 10)
  }
}
```

Omdat er een derde parameter, `soort`, bijgekomen is, moeten we de aanroep van de functie in `draw()` ook aanpassen:

```javascript
  tekenDrop(dropX, dropY, dropSoort)
```

Probeer het maar uit. Zie je allebei de soorten dropjes voorbij komen?

Kun je zelf nog een derde soort toevoegen?

Laten we nu gaan bijhouden hoeveel dropjes je gegeten hebt.


## (Dr)optellen

Om de telling bij te houden, hebben we een variabele `aantalGegeten` nodig. Ook willen we de tekst in beeld aanpassen zodra je dropjes eet, om het aantal te tonen.

Voeg deze regels toe aan `setup()`:

```javascript
  tekstBovenaan = 'Eet de dropjes!'
  aantalGegeten = 0
```

En pas in `draw()` de regel die de tekst toont aan:

```javascript
  text(tekstBovenaan, 20, 20)
```

Zodra je een dropje eet, moeten we `aantalGegeten` verhogen en de tekst bijwerken:

```javascript
    aantalGegeten = aantalGegeten + 1
    tekstBovenaan = aantalGegeten + ' dropjes gegeten!'
```

Kun je bovenstaande twee regels op de juiste plek zetten?

Als je 1 dropje gegeten hebt, staat er toch "dropjes", terwijl het er maar 1 is. Als je wilt, kun je in dat geval een andere tekst tonen, bijvoorbeeld "Lekker dropje, zijn er nog meer?". Dit kun je doen door een `if` instructie toe te voegen na de twee regels hierboven.


## Eet zo snel mogelijk!

Veel drop eten is niet echt een uitdaging als je er zo lang over kan doen als je wilt. Dus laten we zorgen dat een speler 10 seconden heeft om zo veel mogelijk dropjes te eten.

De functie `millis()` bepaalt het aantal milliseconden (er gaan 1000 milliseconden in 1 seconde) sinds het programma gestart is. We willen dat de tijd pas start als de speler het eerste snoepje eet. Voeg daarom deze regel toe na de regel die `aantalGegeten` met 1 verhoogt:

```javascript
    if (aantalGegeten == 1) {
      startTijd = millis() / 1000
    }
```

Aan het eind van de `draw()` functie tonen we de score en hoe lang we bezig zijn:

```javascript
  if (aantalGegeten > 0) {
    tijd = millis() / 1000 - startTijd
    tekstBovenaan = aantalGegeten + ' dropjes in ' + 
        round(tijd, 1) + ' seconden'
  }
```





## Lijst van functies, variabelen en termen

Hier zie je alle functies die we hier gebruikt hebben.

Als we het hebben over positie `50, 100` betekent dat: 50 pixels van links en 100 pixels van boven.

Wil je zelf op zoek naar meer functies (en kun je een beetje Engels)? Kijk dan [hier](https://p5js.org/reference/).

| **Functie-aanroep**      | **Wat doet het?**                                      |
|--------------------------|--------------------------------------------------------|
| `background('gray')` of<br>`background(240)`     | Geef het hele canvas een grijze achtergrond (je kunt een [kleurnaam](https://www.w3schools.com/tags/ref_colornames.asp) gebruiken, of een grijswaarde van 0 t/m 255) |
| `createCanvas(windowWidth, windowHeight)` | Maak een canvas zo groot als het venster |
| `circle(50, 100, 40)`    | Teken een cirkel met grootte `40` met als middelpunt `50, 100` |
| `draw()`                 | Alles wat je in deze functie doet, wordt steeds opnieuw uitgevoerd |
| `fill('blue')`           | Teken vormen met blauwe invulling                      |
| `function`               | Gebruik je om een functie te maken: een stukje code dat 1 ding doet en dat je vanaf meerdere plekken in je code kunt uitvoeren |
| `height`                 | Deze variabele is altijd gelijk aan de hoogte van het canvas |
| `mouseX`, `mouseY`       | De positie van de muiscursor (in pixels van links en van boven) |
| `noStroke()`             | Teken vormen zonder lijnen eromheen                    |
| `noFill()`               | Teken vormen zonder invulling                          |
| `rect(10, 20, 30, 40)`               | Teken een rechthoek met linkerbovenhoek `10,20` die `30` breed en `40` hoog is |
| `setup()`                | Alles wat je in deze functie doet, wordt in het begin 1x uitgevoerd |
| `stroke('red')`          | Gebruik rood als lijnkleur om vormen heen |
| `text('Hallo', 50, 100)` | Schrijf `Hallo` op positie `50, 100`  |
| `textAlign(LEFT)`        | Tekst links uitlijnen (of RIGHT=rechts, CENTER=midden) |
| `textSize(10)`           | Zet tekstgrootte op 10                                 |
| `triangle(0, 0, 10, 10, 0, 10)`               | Teken een driehoek met als hoekpunten `0,0`, `10,10` en `0,10` |
| `width`                  | Deze variabele is altijd gelijk aan de breedte van het canvas |
| `windowWidth/Height`     | Grootte van het venster (meestal gelijk aan canvasgrootte, `width/height`) |
