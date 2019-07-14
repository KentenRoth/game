class Character {
	constructor(
		name,
		type,
		level,
		hp,
		weapon,
		weaponDamage,
		maxWeaponDamage,
		stealth,
		maxStealth,
		block,
		maxBlock,
		dodge,
		maxDodge,
		inventory,
		xp,
		location
	) {
		this.name = name;
		this.type = type;
		this.level = level;
		this.hp = hp;
		this.weapon = weapon;
		this.weaponDamage = weaponDamage;
		this.maxWeaponDamage = maxWeaponDamage;
		this.stealth = stealth;
		this.maxStealth = maxStealth;
		this.dodge = dodge;
		this.maxDodge = maxDodge;
		this.block = block;
		this.maxBlock = maxBlock;
		this.inventory = inventory;
		this.xp = xp;
		this.location = location;
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
	weapon = 'Bow';
	weaponDamage = 10;
	maxWeaponDamage = 50;
	stealth = 10;
	maxStealth = 75;
	dodge = 10;
	maxDodge = 50;
	block = 0;
	maxBlock = 20;
	inventory = [];
	xp = 0;
	location = 10;
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
	maxWeaponDamage = 50;
	stealth = 5;
	maxStealth = 40;
	dodge = 5;
	maxDodge = 40;
	block = 5;
	maxDodge = 40;
	inventory = [];
	xp = 0;
	location = 10;
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
	maxWeaponDamage = 50;
	stealth = 0;
	maxStealth = 10;
	dodge = 0;
	maxDodge = 50;
	block = 10;
	maxBlock = 60;
	inventory = [];
	xp = 0;
	location = 10;
}

module.exports = {
	Ninja,
	Warrior,
	Viking
};
