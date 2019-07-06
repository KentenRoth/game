class Enemy {
	constructor(name, hp, weapon, defense, damage, dodge) {
		this.name = name;
		this.hp = hp;
		this.weapon = weapon;
		this.defense = defense;
		this.damage = damage;
		this.dodge = dodge;
	}
}

class Bug extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	hp = 20;
	weapon = 'Spit';
	defense = 0;
	damage = 2;
	dodge = 5;
}

class Frog extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	hp = 35;
	weapon = 'Tounge';
	defense = 0;
	damage = 5;
	dodge = 5;
}

class Racoon extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	hp = 40;
	weapon = 'claws';
	defense = 0;
	damage = 15;
	dodge = 10;
}

class Bird extends Enemy {
	onstructor(name) {
		super(name);
		this.name = name;
	}
	name;
	hp = 30;
	weapon = 'Beak';
	defense = 0;
	damage = 15;
	dodge = 20;
}

class Deer extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	hp = 50;
	weapon = 'Antlers';
	defense = 4;
	damage = 10;
	dodge = 3;
}

// Boss
class Bigfoot extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	hp = 200;
	weapon = 'Fist';
	defense = 35;
	damage = 25;
	dodge = 40;
}

module.exports = {
	Bug,
	Frog,
	Bird,
	Racoon,
	Deer,
	Bigfoot
};
