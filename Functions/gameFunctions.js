const chalk = require('chalk');

const buildCharacter = require('./createSaveDeleteCharacter');
const buildEnemy = require('./createSaveDeleteEnemy');

const player = {
	loadCharacter() {
		return buildCharacter.loadCharacter();
	},

	saveCharacter(character) {
		return buildCharacter.saveCharacter(character);
	},

	deleteCharacter() {
		return buildCharacter.deleteCharacter();
	},

	takeDamage(num) {
		const character = this.loadCharacter();
		character[0].hp = character[0].hp - num;
		console.log(chalk.red('Ouch you lost ' + num + ' hp'));
		console.log(chalk.red.inverse(character[0].hp + ' hp remaining'));
		this.saveCharacter(character);
	},

	drinkHealthPotion() {
		const character = this.loadCharacter();
		character[0].hp = character[0].hp + 20;
		console.log(chalk.green('That was one tasty health potion +20 hp'));
		console.log(chalk.green.inverse(character[0].hp + ' hp remaining'));
		this.saveCharacter(character);
	}
};

player.drinkHealthPotion();
