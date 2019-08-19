class Enemy {
	constructor(name, type, hp, weapon, defense, damage, dodge, xpValue) {
		this.name = name;
		this.type = type;
		this.hp = hp;
		this.weapon = weapon;
		this.defense = defense;
		this.damage = damage;
		this.dodge = dodge;
		this.xpValue = xpValue;
	}
}

class Bug extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Bug';
	hp = 20;
	weapon = 'Spit';
	defense = 0;
	damage = 2;
	dodge = 15;
	xpValue = 5;
}

class Frog extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Frog';
	hp = 35;
	weapon = 'Tounge';
	defense = 5;
	damage = 5;
	dodge = 15;
	xpValue = 8;
}

class Racoon extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Racoon';
	hp = 40;
	weapon = 'Claws';
	defense = 5;
	damage = 15;
	dodge = 20;
	xpValue = 12;
}

class Bird extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Bird';
	hp = 30;
	weapon = 'Beak';
	defense = 10;
	damage = 15;
	dodge = 20;
	xpValue = 12;
}

class Crab extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Crab';
	hp = 50;
	weapon = 'Claws';
	defense = 20;
	damage = 10;
	dodge = 5;
	xpValue = 18;
}

class Snake extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Snake';
	hp = 20;
	weapon = 'Bite';
	defense = 5;
	damage = 10;
	dodge = 45;
	xpValue = 10;
}

class Fox extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Fox';
	hp = 35;
	weapon = 'Claws';
	defense = 10;
	damage = 10;
	dodge = 45;
	xpValue = 15;
}

class Deer extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Deer';
	hp = 50;
	weapon = 'Antlers';
	defense = 20;
	damage = 10;
	dodge = 25;
	xpValue = 18;
}

class Goat extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Goat';
	hp = 65;
	weapon = 'Antlers';
	defense = 15;
	damage = 15;
	dodge = 30;
	xpValue = 22;
}

class Lion extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Lion';
	hp = 95;
	weapon = 'Claws';
	defense = 10;
	damage = 25;
	dodge = 45;
	xpValue = 30;
}

class Gator extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Gator';
	hp = 100;
	weapon = 'Teeth';
	defense = 25;
	damage = 35;
	dodge = 5;
	xpValue = 40;
}
// Need more animals
// Large Bird

// Need cave animals for dungeons
// Bat
// Salamander
// Bear

// Boss
class Bigfoot extends Enemy {
	constructor(name) {
		super(name);
		this.name = name;
	}
	name;
	type = 'Bigfoot';
	hp = 200;
	weapon = 'Fist';
	defense = 45;
	damage = 25;
	dodge = 50;
	xpValue = 50;
}

module.exports = {
	Bug,
	Frog,
	Bird,
	Racoon,
	Crab,
	Snake,
	Fox,
	Deer,
	Goat,
	Lion,
	Gator,
	Bigfoot
};
