class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon.toLowerCase();
	}
}

class Player extends Character {
	constructor(name, weapon) {
		super(name, weapon);
	}
	battleCry(phrase) {
		if (this.weapon.includes('bow')) {
			return `Before screaming ${phrase}, ${this.name} draws their ${
				this.weapon
			} to line up a sneak attack`;
		}

		if (this.weapon.includes('sword')) {
			return `As ${
				this.name
			} is running into battle they scream ${phrase} with their ${
				this.weapon
			} drawn.`;
		}

		return `${this.name} looks down at their ${
			this.weapon
		} in hand before yelling ${phrase} as they run into battle.`;
	}

	attack() {
		//TODO needs to have a HP system for damage depending on type of weapon
	}
}

const Kent = new Player('Kent', 'Bow');
console.log(Kent.battleCry('AAAAHHHHH'));
