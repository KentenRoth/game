class Character {
	constructor(
		name,
		type,
		hp,
		weapon,
		weaponDamage,
		stealth,
		block,
		dodge,
		inventory
	) {
		this.name = name;
		this.type = type;
		this.hp = hp;
		this.weapon = weapon;
		this.weaponDamage = weaponDamage;
		this.stealth = stealth;
		this.dodge = dodge;
		this.block = block;
		this.inventory = inventory;
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
	inventory = [];
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
	inventory = [];
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
	inventory = [];
}

module.exports = {
	Ninja,
	Warrior,
	Viking
};
