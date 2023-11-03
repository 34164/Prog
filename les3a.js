function shuffleWord(woordDatGeschudtMoetWorden) {
    let characters = woordDatGeschudtMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudWoord = characters.join('');
    return geschudWoord;
  }
  
  // Roep de functie 3 keer aan met verschillende woorden
  const woord1 = "hallo";
  const woord2 = "wereld";
  const woord3 = "marvel";
  
  const geschud1 = shuffleWord(woord1);
  const geschud2 = shuffleWord(woord2);
  const geschud3 = shuffleWord(woord3);
  
  console.log(`Origineel: ${woord1}, Geschud: ${geschud1}`);
  console.log(`Origineel: ${woord2}, Geschud: ${geschud2}`);
  console.log(`Origineel: ${woord3}, Geschud: ${geschud3}`);
  