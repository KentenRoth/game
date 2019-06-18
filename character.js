class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
}

class Player extends Character {
	constructor(name, weapon) {
		super(name, weapon);
	}
	battleCry(phrase) {
		return `As ${
			this.name
		} is running into battle they scream ${phrase} with their ${
			this.weapon
		} drawn.`;
	}
	attack() {
		//TODO needs to have a HP system for damage depending on type of weapon
	}
}

const Kent = new Player('Kent', 'Bow');
