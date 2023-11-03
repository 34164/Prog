class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack() {
        return Math.floor(Math.random() * 5) + 3; // Willekeurige schade tussen 3 en 7
    }
}

class Monster {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}

function fight(character, monster) {
    while (character.health > 0 && monster.health > 0) {
        const characterDamage = character.attack();
        const monsterDamage = Math.floor(Math.random() * 4) + 1; // Willekeurige schade tussen 1 en 4 voor het monster

        console.log(
            `${character.name} valt ${monster.name} aan en doet ${characterDamage} schade.`
        );
        monster.health -= characterDamage;

        console.log(
            `${monster.name} valt ${character.name} aan en doet ${monsterDamage} schade.`
        );
        character.health -= monsterDamage;
    }

    if (character.health <= 0) {
        console.log(`${character.name} is verslagen. ${monster.name} wint!`);
    } else {
        console.log(`${monster.name} is verslagen. ${character.name} wint!`);
    }
}

const player = new Character("Speler", 50);
const enemy = new Monster("Monster", 30);

console.log(`Welkom bij het spel! Je personage ${player.name} heeft ${player.health} gezondheid.`);
console.log(`Een angstaanjagend ${enemy.name} met ${enemy.health} gezondheid daagt je uit!`);

fight(player, enemy);
