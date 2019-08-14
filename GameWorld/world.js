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
			console.log(chalk.cyan('To the West there is a small lake'));
			console.log(
				chalk.yellow('There are mountain lion tracks here....')
			);
		}
	},

	il16: {
		description: 'This valley has a great view of the mountains',
		canMove: ['east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Cardinal', 'Bird');
			console.log(chalk.cyan(this.description));
			console.log(chalk.gray('The Ocean is to the North'));
			console.log(chalk.cyan('To the East is the mountains'));
			console.log(chalk.cyan('To the South is a calm looking lake'));
			console.log(chalk.cyan('To the West is a rocky beach'));
			console.log(chalk.yellow('There are birds flying around'));
		}
	},

	il17: {
		description: 'This lake is rather calm and very large',
		canMove: ['north', 'east', 'south'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is a grassy valley'));
			console.log(chalk.cyan('To the East is the mountain range'));
			console.log(chalk.gray('To the South the grassy valley continues'));
			console.log(chalk.gray('To the West is a lake'));
			console.log(
				chalk.yellow('There are a lot of bugs around this lake')
			);
		}
	},

	il18: {
		description: 'You finally come to the south edge of this massive lake',
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Bull Frog', 'Frog');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is a lake'));
			console.log(chalk.cyan('To the East is the mountain range'));
			console.log(chalk.cyan('To the South the grassy valley contiues'));
			console.log(
				chalk.cyan('To the West is a river flushing into the ocean')
			);
			console.log(
				console.log('The distinct sounds of a bull frog ring out')
			);
		}
	},
	il19: {
		description:
			"The grassy is high and brittle.  Let's hope it there isn't a spark",
		canMove: ['north', 'east', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Bull Snake', 'Snake');
			console.log(chalk.cyan(this.description));
			console.log(
				chalk.cyan(
					'To the North the grassy continues to the edge of a lake'
				)
			);
			console.log(chalk.cyan('To the East is the mountain range'));
			console.log(chalk.cyan('To the South is a small lake'));
			console.log(
				chalk.cyan('To the West looks to be a swamp marsh area')
			);
			console.log(chalk.yellow('You hear something moving in the grass'));
		}
	},

	il20: {
		description:
			'There is a small lake that looks to be fed from the snow runoff',
		canMove: ['north', 'east', 'west'],
		playArea() {
			enemy.createEnemy('Bull Frog', 'Frog');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is grassy area'));
			console.log(chalk.cyan('To the East is the mountain range'));
			console.log(chalk.gray('To the South is the ocean'));
			console.log(chalk.cyan('To the West is a nasty looking swamp'));
		}
	},

	il21: {
		description:
			'The Beach on this side of the island is rather rocket, but the sunset is nice.',
		canMove: ['south', 'east'],
		playArea() {
			console.log(chalk.cyan(this.description));
			console.log(chalk.gray('To the North, and West is the ocean.'));
			console.log(chalk.cyan('To the East is grassy Valley'));
			console.log(chalk.cyan('To the South is more rocky beach'));
			console.log(
				chalk.yellow('There is nothing here but a beautiful sunset')
			);
		}
	},

	il22: {
		description: 'This beach has massive rocks, but still enjoyable.',
		canMove: ['north', 'south'],
		playArea() {
			enemy.createEnemy('Rock Crab', 'Crab');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is more rocky beach'));
			console.log(chalk.gray('To the East is a lake'));
			console.log(chalk.cyan('To the South is river delta'));
			console.log(chalk.gray('To the West is the ocean'));
			console.log(chalk.yellow("Let's go crab hunting."));
		}
	},

	il23: {
		description: 'This river has a strange stench',
		canMove: ['north', 'south', 'east'],
		playArea() {
			enemy.createEnemy('Bull Frog', 'Frog');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is the rocky beach'));
			console.log(chalk.cyan('To the East is edge of the massive lake'));
			console.log(chalk.cyan('To the South is a swamp'));
			console.log(chalk.gray('To the West is the ocean'));
			console.log(chalk.yellow('Bull Frogs are everywhere'));
		}
	},
	il24: {
		description: 'This swamp is extra creepy, and smells very bad.',
		canMove: ['north', 'south', 'east'],
		playArea() {
			enemy.createEnemy('Bull Snake', 'Snake');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is the river delta'));
			console.log(chalk.cyan('To the East is dry grassy area'));
			console.log(chalk.cyan('To the South is gross Swamp'));
			console.log(chalk.gray('To the West is the ocean'));
			console.log(chalk.yellow('There are signs of snakes everywhere'));
		}
	},

	il25: {
		description: "Shrek wouldn't even make his home in this swamp",
		canMove: ['north', 'east'],
		playArea() {
			enemy.createEnemy('Alligator', 'Gator');
			console.log(chalk.cyan(this.description));
			console.log(chalk.cyan('To the North is more swamp'));
			console.log(chalk.cyan('To the East is a small lake'));
			console.log(chalk.gray('To the South and West is the ocean'));
			console.log(chalk.yellow('Is that an.... Alligator??'));
		}
	}
};

module.exports = {
	world
};
