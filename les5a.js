const readlineSync = require('readline-sync');

class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack() {
        return Math.floor(Math.random() * 5) + 3; // Willekeurige schade tussen 3 en 7
    }

    takeDamage(damage) {
        this.health -= damage;
    }

    isAlive() {
        return this.health > 0;
    }
}

class Monster {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack() {
        return Math.floor(Math.random() * 4) + 1; // Willekeurige schade tussen 1 en 4 voor het monster
    }

    takeDamage(damage) {
        this.health -= damage;
    }

    isAlive() {
        return this.health > 0;
    }
}

function getPlayerInput() {
    return readlineSync.question("Wat ga je doen? (Vechten of vluchten?)").toLowerCase();
}

function printStatus(player, monster) {
    console.log(`[systeem print] Je hebt ${player.health} HP.`);
    console.log(`[systeem print] ${monster.name} heeft ${monster.health} HP.`);
}

function battle(player, monster) {
    while (player.isAlive() && monster.isAlive()) {
        console.log(`[systeem print] Je komt een ${monster.name} tegen.`);
        printStatus(player, monster);

        const action = getPlayerInput();

        if (action === "vechten") {
            const playerDamage = player.attack();
            const monsterDamage = monster.attack();

            console.log(`[systeem print] ${player.name} zwaait zijn zwaard en doet ${playerDamage} schade.`);
            monster.takeDamage(playerDamage);

            console.log(`[systeem print] ${monster.name} valt aan en doet ${monsterDamage} schade.`);
            player.takeDamage(monsterDamage);
        } else if (action === "vluchten") {
            console.log(`[systeem print] ${player.name} rent weg van ${monster.name}.`);
            break;
        } else {
            console.log("[systeem print] Ongeldige actie. Kies opnieuw.");
        }
    }

    if (player.isAlive()) {
        console.log(`[systeem print] Je hebt ${monster.name} verslagen. Je wint!`);
    } else {
        console.log(`[systeem print] Je bent verslagen door ${monster.name}. Game over.`);
    }
}

// Voorbeeldgebruik:
const playerName = readlineSync.question("Geef je character een naam: ");
const player = new Character(playerName, 21);
const slime = new Monster("Slijm", 15);

battle(player, slime);
