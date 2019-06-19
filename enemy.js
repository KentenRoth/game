class Enemy {
	constructor(name, weapon, defense) {
		this.name = name;
		this.weapon = weapon;
		this.defense = defense;
	}

	block() {
		return `With a spin the ${this.name} puts its ${
			this.defense
		} to take some of the blow `;
	}

	returnAttack() {
		return `the ${
			this.name
		} is not happy with your attack, and begins to attack you with their ${
			this.weapon
		}`;
	}
}
