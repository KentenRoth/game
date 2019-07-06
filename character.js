class Character {
	constructor(name, type, hp, weapon, weaponDamage, stealth, block, dodge) {
		this.name = name;
		this.type = type;
		this.hp = hp;
		this.weapon = weapon;
		this.weaponDamage = weaponDamage;
		this.stealth = stealth;
		this.dodge = dodge;
		this.block = block;
	}
}

class Ninja extends Character {
	constructor(name) {
		super(name);
		this.name = name;
	}

	name;
	type = 'Ninja';
	hp = 100;
	weapon = 'bow';
	weaponDamage = 10;
	stealth = 10;
	dodge = 10;
	block = 0;

	battleCry() {
		return console.log('do something');
	}
}

class Warrior extends Character {
	constructor(name) {
		super(name);
		this.name = name;
	}

	name;
	type = 'Warrior';
	hp = 150;
	weapon = 'Sword';
	weaponDamage = 10;
	stealth = 5;
	dodge = 5;
	block = 5;
}

class Viking extends Character {
	constructor(name) {
		super(name);
		this.name = name;
	}

	name;
	type = 'Viking';
	hp = 200;
	weapon = 'Axe';
	weaponDamage = 10;
	stealth = 0;
	dodge = 0;
	block = 10;
}

module.exports = {
	Ninja,
	Warrior,
	Viking
};
