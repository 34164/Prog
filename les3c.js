function calculateAge(geboorteJaar, geboorteMaand, geboorteDag) {
    const now = new Date();
    const birth = new Date(geboorteJaar, geboorteMaand - 1, geboorteDag); // Maanden zijn 0-11, dus verminder met 1.
    const milliseconds = now - birth;
    const millisecondsInOneYear = 1000 * 60 * 60 * 24 * 365.25; // Gemiddeld aantal milliseconden in een jaar (rekening houdend met schrikkeljaren).
  
    const leeftijdInJaren = Math.floor(milliseconds / millisecondsInOneYear);
    return leeftijdInJaren;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Welk jaar ben je geboren? ', (geboorteJaar) => {
    rl.question('Welke maand ben je geboren? ', (geboorteMaand) => {
      rl.question('Welke dag ben je geboren? ', (geboorteDag) => {
        const leeftijd = calculateAge(geboorteJaar, geboorteMaand, geboorteDag);
        console.log(`Je bent ${leeftijd} jaar oud`);
        rl.close();
      });
    });
  });
  