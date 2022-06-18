[Creatief Coderen](../) » Vergelijk Scratch met JavaScript

# Vergelijk Scratch met JavaScript

Links zie je Scratch-blokjes en rechts hoe je hetzelfde doet in JavaScript.

<small>(voor sommige dingen zoals tekenen, muis en toetsenbord gebruiken we de [P5](https://p5js.org/) hulpfuncties).</small>

<table class='scratch'>
    <tr>
        <th>Scratch</th>
        <th>JavaScript</th>
    </tr>
    <!-- flag clicked -->
    <tr>
        <td><img alt='vlag-geklikt' src='images/flag-clicked.png' /></td>
<td>Zet code die 1x in het begin moet worden uitgevoerd in <code>setup()</code></td>
    </tr>
    <!-- repeat -->
    <tr>
        <td><img alt='herhaal' src='images/repeat.png' /></td>
<td>zet de code die je steeds wilt herhalen in <code>draw()</code></td>
    </tr>
    <!-- assignment -->
    <tr>
        <td><img style='max-width: 150px;' alt='zet variabele' src='images/assign.png' /></td>
<td><pre lang="javascript">score = 0</pre></td>
    </tr>
    <!-- if -->
    <tr>
        <td><img alt='als..dan' src='images/if.png' /></td>
<td><pre lang="javascript">if (x > 50) {
    x = 50
}</pre></td>
    </tr>
    <!-- if/else -->
    <tr>
        <td><img alt='als..dan..anders' src='images/if-else.png' /></td>
<td><pre lang="javascript">if (x > 50) {
    x = 50
} else {
    score = score + 1
}</pre></td>
    </tr>
    <!-- repeat N -->
    <tr>
        <td><img alt='herhaal tien keer' src='images/repeat-10.png' /></td>
<td><pre lang="javascript">tel = 0
while (tel < 10) {
  // (zet hier code die je 10x
  //  wilt uitvoeren)
  tel = tel + 1
}</pre></td>
    </tr>
    <!-- equals -->
    <tr>
        <td><img alt='is gelijk aan' src='images/equals.png' /></td>
<td><pre lang="javascript">x == 50</pre></td>
    </tr>
    <!-- AND -->
    <tr>
        <td><img style='max-width: 250px;' alt='en' src='images/and.png' /></td>
<td><pre lang="javascript">x == 0 && score > 100</pre></td>
    </tr>
    <!-- OR -->
    <tr>
        <td><img style='max-width: 250px;' alt='of' src='images/or.png' /></td>
<td><pre lang="javascript">x == 0 || score > 100</pre></td>
    </tr>
    <!-- not -->
    <tr>
        <td><img style='max-width: 250px;' alt='niet' src='images/not.png' /></td><td><pre lang="javascript">! (x == 0 || score > 100)</pre></td>
</tr>
    <!-- timer -->
    <tr>
        <td><img alt='klok' src='images/timer.png' /></td>
<td><pre lang="javascript">millis() / 1000</pre></td>
    </tr>
    <!-- string concatenate -->
    <tr>
        <td><img alt='tekst samenvoegen' src='images/concatenate.png' /></td>
<td><pre lang="javascript">'appel' + 'banaan'</pre></td>
    </tr>
    <!-- increment -->
    <tr>
        <td><img alt='variabele verhogen' src='images/increment.png' /></td>
<td><pre lang="javascript">score = score + 1</pre></td>
    </tr>
    <!-- key pressed -->
    <tr>
        <td><img alt='toets ingedrukt' src='images/key-pressed.png' /></td>
<td><pre lang="javascript">function keyPressed() {
  if (key == ' ') {
    // (zet hier wat er moet gebeuren 
    //  wanneer op spatie gedrukt wordt)
  }
  if (keyCode == UP_ARROW) {
    // (zet hier wat er moet gebeuren
    //  wanneer op pijltje omhoog 
    //  gedrukt wordt)
  }
}</pre></td>
    </tr>
    <!-- mouse clicked -->
    <tr>
        <td><img alt='muis geklikt' src='images/mouse-clicked.png' /></td>
<td><pre lang="javascript">function mouseClicked() {
    // (zet hier wat er moet gebeuren
    //  als de muisknop geklikt wordt)
}
</pre></td>
    </tr>
    <!-- mouseX, mouseY -->
    <tr>
        <td><img alt='mouseX' src='images/mouseX.png' /> <img alt='mouseY' src='images/mouseY.png' /></td>
<td><code>mouseX</code> / <code>mouseY</code></td>
    </tr>
    <!-- ask -->
    <tr>
        <td><img alt='vraag' src='images/prompt.png' /></td>
<td><pre lang="javascript">antwoord = prompt('Hoe heet je?')
</pre></td>
    </tr>
    <!-- random -->
    <tr>
        <td><img alt='willekeurig getal' src='images/random.png' /></td>
<td><pre lang="javascript">random(1, 10)
</pre></td>
    </tr>
    <!-- round -->
    <tr>
        <td><img style='max-width: 100px;' alt='afgerond' src='images/round.png' /></td>
<td><pre lang="javascript">round(x)</pre></td>
    </tr>
    <!-- string contains -->
    <tr>
        <td><img alt='tekst bevat' src='images/string-contains.png' /></td>
<td><pre lang="javascript">'appel'.contains(a)</pre></td>
    </tr>
    <!-- string index -->
    <tr>
        <td><img alt='letter in tekst' src='images/string-index.png' /></td>
<td><pre lang="javascript">'appel'[0]</pre></td>
    </tr>
    <!-- string length -->
    <tr>
        <td><img alt='lengte tekst' src='images/string-length.png' /></td>
<td><pre lang="javascript">'appel'.length</pre></td>
    </tr>
</table>

