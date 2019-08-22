const play = require('../Functions/gameFunctions');
const buildCharacter = require('../Functions/createSaveDeleteCharacter');

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Are you ready to play? (yes or no) ', input => {
	const answer = input.toLowerCase();
	if (answer === 'yes') {
		const char = loadCharacter();
		if (char.name === undefined) {
			rl.question(
				'What would you like to name your character? ',
				name => {
					if (name.length >= 1) {
						rl.question(
							'What class would you like to be? (Ninja, Warrior, or Viking) ',
							classInput => {
								buildCharacter.createCharacter(
									name,
									classInput
								);
								game.directions();
							}
						);
					}
				}
			);
		} else {
			return game.directions();
		}
	}
	if (answer === 'no') {
		return rl.close();
	}
});

const game = {
	directions() {
		play.playGame.play();
		rl.on('line', input => {
			const action = input.toLowerCase();
			if (
				action === 'north' ||
				action === 'east' ||
				action === 'south' ||
				action === 'west'
			) {
				play.playGame.canWeMove(action);
			}
			if (action === 'attack') {
				const target = loadEnemy();
				if (target.name !== undefined) {
					return play.attack.playerAttack();
				} else {
					return console.log(
						'You spin around to do an epic attack, but there is nothing there.'
					);
				}
			}
			if (action === 'drink potion') {
				return play.inventory.itemInInventory('Health Potion');
			}

			if (action === 'my stats') {
				return play.player.stats();
			}

			if (action === 'enemy stats') {
				return play.badGuy.stats();
			}

			if (action === 'exit') {
				rl.close();
			}
		});
	}
};
