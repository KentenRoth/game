const enemy = require('../Functions/createSaveDeleteEnemy');

const world = {
	il1: {
		description:
			'There is ocean to the north and east.  You could follow the beach south or head west in the direction of the forest.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(this.description);
			console.log('optional directions: South or West');
			console.log(
				'There is a dragon fly here, but does not look like it wants to fight.'
			);
		}
	},

	il2: {
		description:
			'There is ocean to the east.  You can move along the beach by going north or, south or move west into the clearing that looks like it leads towards the mountains',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('MudCrab', 'crab');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
			console.log(
				'Is that a mudcrab?  Looks like its looking for some trouble'
			);
		}
	},

	il3: {
		description:
			'There is ocean to the east.  You can move along the beach by going north or south, or move west into the forest.',
		canMove: ['north', 'south', 'west'],
		playArea() {
			console.log(this.description);
			console.log('optional directions: North, South, or West');
			console.log(
				"Doesn't look like there is anythig around here looking for a fight."
			);
		}
	},
	il4: {
		description:
			'There is ocean to the east.  You can move along the beach by going north or south, or the forest is to the west.  This forest is starting to look sketchy.',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('MudCrab', 'crab');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
			console.log(
				'There is a mudcrab, but this one seems to be minding its own business.'
			);
		}
	},

	il5: {
		description:
			'There is ocean to the east and south.  You can follow the beach north.  To the West the beach ends and the sketchy forest ends at the rocky shore.',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Seagull', 'bird');
			console.log(this.description);
			console.log('optional directions: North, or West');
			console.log(
				"After watching this Seagull you're almost sure that it was the one that stole your ice cream last year."
			);
		}
	},

	il6: {
		description: 'This is part one.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(this.description);
			console.log('optional directions: South or West');
		}
	},

	il7: {
		// Starting Spot
		description: 'this is part two',
		canMove: ['north', 'south', 'west'],
		playArea() {
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il8: {
		description: 'this is part three',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},
	il9: {
		description: 'this is part four',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il10: {
		description: 'this is part five',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, or West');
		}
	},

	il11: {
		description: 'This is part one.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(this.description);
			console.log('optional directions: South or West');
		}
	},

	il12: {
		description: 'this is part two',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il13: {
		description: 'this is part three',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},
	il14: {
		description: 'this is part four',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il15: {
		description: 'this is part five',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, or West');
		}
	},

	il16: {
		description: 'This is part one.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(this.description);
			console.log('optional directions: South or West');
		}
	},

	il17: {
		description: 'this is part two',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il18: {
		description: 'this is part three',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},
	il19: {
		description: 'this is part four',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il20: {
		description: 'this is part five',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, or West');
		}
	},

	il21: {
		description: 'This is part one.',
		canMove: ['south', 'east'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(this.description);
			console.log('optional directions: South or East');
		}
	},

	il22: {
		description: 'this is part two',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il23: {
		description: 'this is part three',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},
	il24: {
		description: 'this is part four',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il25: {
		description: 'this is part five',
		canMove: ['north', 'east'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, or East');
		}
	}
};

module.exports = {
	world
};
