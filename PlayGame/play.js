const play = require('../Functions/gameFunctions');

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What direction would you like to go? ', answer => {
	if (answer === 'west') {
		console.log(
			'There is an enemy here.  You can attack by typing attack, you can check his stats by typing stats, or you can go in a different direction by typing North.'
		);
		rl.on('line', input => {
			if (input === 'attack') {
				play.attack.playerAttack();
			}

			if (input === 'stats') {
				play.badGuy.stats();
			}

			if (input === 'north') {
				console.log('Went North');
			}

			if (input === 'exit') {
				rl.close();
			}
		});
	}
});
