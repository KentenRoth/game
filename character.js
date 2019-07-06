class Character {
	constructor(
		name,
		type,
		level,
		hp,
		weapon,
		weaponDamage,
		stealth,
		block,
		dodge,
		inventory,
		xp
	) {
		this.name = name;
		this.type = type;
		this.level = level;
		this.hp = hp;
		this.weapon = weapon;
		this.weaponDamage = weaponDamage;
		this.stealth = stealth;
		this.dodge = dodge;
		this.block = block;
		this.inventory = inventory;
		this.xp = xp;
	}
}

class Ninja extends Character {
	constructor(name) {
		super(name);
		this.name = name;
	}

	name;
	type = 'Ninja';
	level = 0;
	hp = 100;
	weapon = 'bow';
	weaponDamage = 10;
	stealth = 10;
	dodge = 10;
	block = 0;
	inventory = [];
	xp = 0;
}

class Warrior extends Character {
	constructor(name) {
		super(name);
		this.name = name;
	}

	name;
	type = 'Warrior';
	level = 0;
	hp = 150;
	weapon = 'Sword';
	weaponDamage = 10;
	stealth = 5;
	dodge = 5;
	block = 5;
	inventory = [];
	xp = 0;
}

class Viking extends Character {
	constructor(name) {
		super(name);
		this.name = name;
	}

	name;
	type = 'Viking';
	level = 0;
	hp = 200;
	weapon = 'Axe';
	weaponDamage = 10;
	stealth = 0;
	dodge = 0;
	block = 10;
	inventory = [];
	xp = 0;
}

module.exports = {
	Ninja,
	Warrior,
	Viking
};
