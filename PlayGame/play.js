const play = require('../Functions/gameFunctions');

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const directionalOptions = {
	cannotGoNorth() {
		rl.on('line', input => {
			if (input.toLowercase() === 'north') {
				return console.log('cannot go North');
			}
		});
	},
	cannotGoEast() {
		rl.on('line', input => {
			if (input.toLowercase() === 'east') {
				return console.log('cannot go East');
			}
		});
	},
	cannotGoSouth() {
		rl.on('line', input => {
			if (input.toLowercase() === 'south') {
				return console.log('cannot go South');
			}
		});
	},
	cannotGoWest() {
		rl.on('line', input => {
			if (input.toLowercase() === 'west') {
				return console.log('cannot go west');
			}
		});
	},
	northEastCorner() {
		rl.on('line', input => {
			if (
				input.toLowercase() === 'north' ||
				input.toLowercase() === 'east'
			) {
				return console.log('you can only move to the South or West');
			}
		});
	},

	northWestCorner() {
		rl.on('line', input => {
			if (
				input.toLowercase() === 'north' ||
				input.toLowercase() === 'west'
			) {
				return console.log('you can only move South or East');
			}
		});
	},

	southEastCorner() {
		rl.on('line', input => {
			if (
				input.toLowercase() === 'south' ||
				input.toLowercase() === 'east'
			) {
				return console.log('you can only move South or West');
			}
		});
	},

	southWestCorner() {
		rl.on('line', input => {
			if (
				input.toLowercase() === 'south' ||
				input.toLowercase() === 'west'
			) {
				return console.log('you can only move South or East');
			}
		});
	}
};

// rl.question('What direction would you like to go? ', answer => {
// 	if (answer === 'west') {
// 		console.log(
// 			'There is an enemy here.  You can attack by typing attack, you can check his stats by typing stats, or you can go in a different direction by typing North.'
// 		);
// 		rl.on('line', input => {
// 			if (input === 'attack') {
// 				play.attack.playerAttack();
// 			}

// 			if (input === 'stats') {
// 				play.badGuy.stats();
// 			}

// 			if (input === 'north') {
// 				console.log('Went North');
// 			}

// 			if (input === 'exit') {
// 				rl.close();
// 			}
// 		});
// 	}
// });
