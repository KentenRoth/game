const chalk = require('chalk');
const enemy = require('../Functions/createSaveDeleteEnemy');

const world = {
	il1: {
		description:
			"It's peacful here.  The waves are crashing calmly onto the beach.",
		canMove: ['south', 'west'],
		playArea() {
			console.log(chalk.cyan(this.description));
			console.log(chalk.gray('North and East is the ocean.'));
			console.log(chalk.cyan('Follow the beach to the South'));
			console.log(chalk.cyan('There is a forest to the West'));
			console.log(chalk.yellow('You are alone on the beach.'));
		}
	},

	il2: {
		description: "It's peacful along the beach.",
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('MudCrab', 'Crab');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('Follow the beach to the North or South'));
			console.log(chalk.gray('The ocean is to the East'));
			console.log(chalk.cyan('There looks to be a clearing to the West'));
			console.log(
				chalk.cyan('optional directions: North, South, or West')
			);
			console.log(
				chalk.yellow('Is that a mudcrab?  Does it have a sweetroll?')
			);
		}
	},

	il3: {
		description:
			"The sand is warm and if it wasn't for these darn birds you would be alone",
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Seagull', 'Bird');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('to the North and South is beach'));
			console.log(chalk.gray('The ocean is to the East'));
			console.log(chalk.cyan('To the West is brush and a forest'));
			console.log(
				chalk.yellow(
					'Why wont this seagull give you some peace and quite?'
				)
			);
		}
	},
	il4: {
		description: 'If only you had a beach towel right now.',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('MudCrab', 'Crab');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('to the North and South is beach'));
			console.log(chalk.gray('The ocean is to the East'));
			console.log(
				chalk.cyan('The forest to the West is looking sketchy')
			);
			console.log(chalk.yellow('The mudcrab looks confused'));
		}
	},

	il5: {
		description: 'The view out into the ocean is beautiful.',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Seagull', 'Bird');
			console.log(chalk.cyan(this.description));
			console.log('To the North is more beach');
			console.log(chalk.gray('The ocean is to the East and South'));
			console.log(
				chalk.cyan('To the West the forest looks dense and dark')
			);
			console.log(
				chalk.yellow(
					"After watching this Seagull you're almost sure that it was the one that stole your ice cream last year."
				)
			);
		}
	},

	il6: {
		description: 'The sun is shining through the leaves of the trees.',
		canMove: ['south', 'east', 'west'],
		playArea() {
			enemy.createEnemy('Racoon', 'Racoon');
			console.log(chalk.cyan(this.description));
			console.log(chalk.gray('The Ocean is to the North'));
			console.log(chalk.cyan('To the East looks to be a beach'));
			console.log(chalk.cyan('To the South there is a clearing'));
			console.log(chalk.cyan('To the West is a mountain range'));
			console.log(
				chalk.yellow('You notice a racoon hiding in the tree.')
			);
		}
	},

	il7: {
		// Starting Spot
		description:
			'This clearing is calm, but gives you a sense you should push on.',
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is a small forest'));
			console.log(chalk.cyan('To the East is a beach'));
			console.log(chalk.cyan('To the South is a thicker forest'));
			console.log(chalk.cyan('To the West is the mountains'));
			console.log(chalk.yellow('You are alone in the clearing'));
		}
	},

	il8: {
		description:
			"The forest has a lot of poison ivy.  Let's avoid that if possible",
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Raven', 'Bird');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is a clearing'));
			console.log(chalk.cyan('To the East is a beach'));
			console.log(
				chalk.cyan('To the South the forest becomes more dense')
			);
			console.log(chalk.cyan('To the West is the mountains'));
			console.log(
				chalk.yellow(
					'You hear a squack.  After looking around you spot a raven.'
				)
			);
		}
	},
	il9: {
		description:
			'The air feels heavy.  Maybe this is not the best forest to visit.',
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Racoon', 'Racoon');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North the forest looks to clear'));
			console.log(chalk.cyan('To the East is a beach'));
			console.log(
				chalk.cyan('To the South the forest looks very sketchy')
			);
			console.log(chalk.cyan('To the West is the mountains'));
			console.log(
				chalk.yellow(
					'You see a racoon.  This racoon is not happy to see you.'
				)
			);
		}
	},

	il10: {
		description:
			"The air is thick and very little sun is cutting through the leaves.  Let's get out of here.",
		canMove: ['north', 'east', 'west'],
		playArea() {
			enemy.createEnemy('Bambi', 'Deer');
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan('To the North the forest looks less sketchy.')
			);
			console.log(chalk.cyan('To the East is a beach'));
			console.log(chalk.gray('To the South is the ocean'));
			console.log(
				chalk.cyan('To the West is a steep climb into the mountains')
			);
			console.log(
				chalk.yellow(
					"That deer.  You've seen him before.  Is that...Bambi?"
				)
			);
		}
	},

	il11: {
		description:
			'You can feel slightly tired after the elevation climb.  There is a steep cliff that drops into the ocean.',
		canMove: ['east', 'south', 'west'],
		playArea() {
			console.log(chalk.cyan(this.description));
			console.log(chalk.gray('To the North is the ocean'));
			console.log(chalk.cyan('To the East is a small forest'));
			console.log(
				chalk.cyan('To the South is a steep climb into the mountains')
			);
			console.log(
				chalk.cyan(
					'To the West is a valley with the ocean in the distance'
				)
			);
			console.log(chalk.yellow("It's peacful with a great view"));
		}
	},

	il12: {
		description:
			'There is some snow on the ground.  The air is starting to thin at this elevation',
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Red Fox', 'Fox');
			console.log(chalk.cyan('To the North there is a decent'));
			console.log(chalk.cyan('To the East is a clearing in the valley'));
			console.log(chalk.cyan('To the South the mountains continue'));
			console.log(chalk.cyan('To the West there is a nice looking lake'));
			console.log(chalk.yellow('Is that a fox?'));
		}
	},

	il13: {
		description:
			'This looks to be the highest point of the range.  You can see the whole island from here.',
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Billy Goat', 'Goat');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is more mountains'));
			console.log(chalk.cyan('To the East is a forest'));
			console.log(chalk.cyan('To the South is more mountains'));
			console.log(chalk.cyan('To the West there a grassy valley'));
			console.log(
				chalk.yellow("That goat things it's ontop of the world also")
			);
		}
	},
	il14: {
		description:
			'These snow packed mountains are beautiful, but very cold.',
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is the peak of the range'));
			console.log(
				chalk.cyan('To the East is forest the looks dark and thick')
			);
			console.log(chalk.cyan('To the South the mountains continue'));
			console.log(chalk.cyan('To the West there is a grassy valley'));
			console.log(
				chalk.yellow("You're alone on this part of the mountain")
			);
		}
	},

	il15: {
		description:
			'This is super sketchy.  There is sheer cliff that drops into the ocean.',
		canMove: ['north', 'east', 'west'],
		playArea() {
			enemy.createEnemy('Mountain Lion', 'Lion');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North there is a decent'));
			console.log(chalk.cyan('To the East is a clearing in the valley'));
			console.log(chalk.cyan('To the South the mountains continue'));
			console.log(chalk.cyan('To the West there is a nice looking lake'));
			console.log(
				chalk.yellow('There are mountain lion tracks here....')
			);
		}
	},

	il16: {
		description: 'This is part one.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(chalk.cyan('The Ocean is to the North'));
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
			console.log(chalk.cyan('The ocean is to the South'));
			console.log(chalk.cyan(this.description));
			console.log('optional directions: North, East, or West');
		}
	},

	il21: {
		description: 'This is part one.',
		canMove: ['south', 'east'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(chalk.cyan('The Ocean is to the North and West'));
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
			console.log(chalk.cyan('The ocean is to the South and West'));
			console.log('optional directions: North or East');
		}
	}
};

module.exports = {
	world
};
