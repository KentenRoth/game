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

	increaseXP(num) {
		const character = this.loadCharacter();
		character[0].xp = character[0].xp + num;
		this.saveCharacter(character);
		if (character[0].xp >= 100) {
			this.levelUp();
		}
	},

	levelUp() {
		const character = this.loadCharacter();
		character[0].level = character[0].level + 1;
		character[0].xp = character[0].xp - 100;
		console.log(chalk.magenta('You just leveled Up!'));
		console.log(chalk.magenta.inverse(`Level ${character[0].level}`));
		this.saveCharacter(character);
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

const enemy = {
	loadEnemy() {
		return buildEnemy.loadEnemy();
	},

	saveEnemy(enemy) {
		return buildEnemy.saveEnemy(enemy);
	},

	deleteEnemy() {
		return buildEnemy.deleteEnemy();
	},

	takeDamage(num) {
		const enemy = this.loadEnemy();
		enemy[0].hp = enemy[0].hp - num;
		console.log(
			chalk.green('You dealt ' + num + ' damage to the ' + enemy[0].name)
		);
		console.log(
			chalk.green(
				enemy[0].name +
					' has ' +
					chalk.green.inverse(enemy[0].hp + ' hp remaining.')
			)
		);
		this.saveEnemy(enemy);
	}
};

player.increaseXP(60);
