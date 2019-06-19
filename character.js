class Character {
	constructor(name, weapon, phrase) {
		this.name = name;
		this.weapon = weapon.toLowerCase();
		this.phrase = phrase;
	}

	battleCry() {
		if (this.weapon.includes('bow')) {
			return `Before screaming ${this.phrase}, ${this.name} draws their ${
				this.weapon
			} to line up a sneak attack.`;
		}

		if (this.weapon.includes('sword')) {
			return `As ${this.name} is running into battle they scream ${
				this.phrase
			} with their ${this.weapon} drawn.`;
		}

		return `${this.name} looks down at their ${
			this.weapon
		} in hand before yelling ${this.phrase} as they run into battle.`;
	}

	attack() {
		if (this.weapon.includes('bow')) {
			return `${
				this.name
			} lines up the shot, takes a deep breath and holds, then lets the arrow fly.`;
		}

		if (this.weapon.includes('sword')) {
			return `With a lunge ${this.name} slides their ${
				this.weapon
			} into the enemies side.`;
		}

		return `With ${this.weapon} in hand ${
			this.name
		} shrugs and tries to figure out how to use this thing.`;
	}
}

class Ninja extends Character {
	constructor(name, weapon, phrase) {
		super(name, weapon, phrase);
	}
}

const kent = new Ninja('Kent', 'Bow with diamond tipped arrows', 'AAAHHHHHH');
