const chalk = require('chalk');
const enemy = require('../Functions/createSaveDeleteEnemy');

const world = {
	il1: {
		description:
			'There is ocean to the north and east.  You could follow the beach south or head west in the direction of the forest.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('optional directions: South or West'));
			console.log(
				chalk.yellow(
					'There is a dragon fly here, but does not look like it wants to fight.'
				)
			);
		}
	},

	il2: {
		description:
			'There is ocean to the east.  You can move along the beach by going north or, south or move west into the clearing that looks like it leads towards the mountains',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('MudCrab', 'crab');
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan('optional directions: North, South, or West')
			);
			console.log(
				chalk.yellow(
					'Is that a mudcrab?  Looks like its looking for some trouble.  Maybe its hiding a sweetroll'
				)
			);
		}
	},

	il3: {
		description:
			'There is ocean to the east.  You can move along the beach by going north or south, or move west into the forest.',
		canMove: ['north', 'south', 'west'],
		playArea() {
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan('optional directions: North, South, or West')
			);
			console.log(
				chalk.yellow(
					"Doesn't look like there is anythig around here looking for a fight."
				)
			);
		}
	},
	il4: {
		description:
			'There is ocean to the east.  You can move along the beach by going north or south, or the forest is to the west.  This forest is starting to look sketchy.',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('MudCrab', 'crab');
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan('optional directions: North, South, or West')
			);
			console.log(
				chalk.yellow(
					'There is a mudcrab, but this one seems to be minding its own business.'
				)
			);
		}
	},

	il5: {
		description:
			'There is ocean to the east and south.  You can follow the beach north.  To the West the beach ends and the sketchy forest ends at the rocky shore.',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Seagull', 'bird');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('optional directions: North or West'));
			console.log(
				chalk.yellow(
					"After watching this Seagull you're almost sure that it was the one that stole your ice cream last year."
				)
			);
		}
	},

	il6: {
		description:
			'There is ocean to the north.  Through the trees you can see what looks like a beach to the east.  To the south there seems to be a clearing and to the west it looks like a mountain range.',
		canMove: ['south', 'east', 'west'],
		playArea() {
			enemy.createEnemy('Racoon', 'racoon');
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan('optional directions: South, East, or West')
			);
			console.log(
				chalk.yellow(
					"You notice a racoon hiding in the tree.  It doesn't look like it wants anything from you"
				)
			);
		}
	},

	il7: {
		// Starting Spot
		description:
			'From this clearing you have a good view.  There is a forest to the north, a sketchy looking forest to the south, the west looks to be a mountain range, and the east looks to be a nice little beach.',
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan('optional directions: North, East, South, or West')
			);
			console.log(chalk.yellow('You are alone in the clearing'));
		}
	},

	il8: {
		description:
			'To the North is looks to be a clearing.  To the south the forest looks to become even more dense.  To the west is a mountain range, and to the east is a beach and the ocean.',
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Raven', 'bird');
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan('optional directions: North, East, South, or West')
			);
			console.log(
				chalk.yellow(
					'You hear a squack.  After looking around you spot a raven.  That cannot be a good sign'
				)
			);
		}
	},
	il9: {
		description:
			"To the north the forest looks like it starts to thin.  To the south is the most sketch forest you've ever seen.  To the west there is a large mountain, and to the east there is a beach that leads to the ocean.",
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Racoon', 'racoon');
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan('optional directions: North, East, South, or West')
			);
			console.log(
				chalk.yellow(
					'You see a racoon.  This racoon is not happy to see you.'
				)
			);
		}
	},

	il10: {
		description:
			'The cliff that falls into the ocean stops the route to the south.  To the north is more of this sketchy forest.  The west is a climb to the edge of a mountain range, and to the east is what looks like a beautiful beach.',
		canMove: ['north', 'east', 'west'],
		playArea() {
			enemy.createEnemy('Bambi', 'deer');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, or West');
			console.log(
				chalk.yellow(
					"That deer.  You've seen him before.  Is that...Bambi?"
				)
			);
		}
	},

	il11: {
		description: 'This is part one.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: East, South, or West');
		}
	},

	il12: {
		description: 'this is part two',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, South, or West');
		}
	},

	il13: {
		description: 'this is part three',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, South, or West');
		}
	},
	il14: {
		description: 'this is part four',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, South, or West');
		}
	},

	il15: {
		description: 'this is part five',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, or West');
		}
	},

	il16: {
		description: 'This is part one.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: East, South, or West');
		}
	},

	il17: {
		description: 'this is part two',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, South, or West');
		}
	},

	il18: {
		description: 'this is part three',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, South, or West');
		}
	},
	il19: {
		description: 'this is part four',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, South, or West');
		}
	},

	il20: {
		description: 'this is part five',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, or West');
		}
	},

	il21: {
		description: 'This is part one.',
		canMove: ['south', 'east'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: East or South');
		}
	},

	il22: {
		description: 'this is part two',
		canMove: ['north', 'south', 'east'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, or South');
		}
	},

	il23: {
		description: 'this is part three',
		canMove: ['north', 'south', 'east'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, or South');
		}
	},
	il24: {
		description: 'this is part four',
		canMove: ['north', 'south', 'east'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, or South');
		}
	},

	il25: {
		description: 'this is part five',
		canMove: ['north', 'east'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North or East');
		}
	}
};

module.exports = {
	world
};
