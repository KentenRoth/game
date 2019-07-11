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
		let character = this.loadCharacter();
		character[0].xp = character[0].xp + num;
		this.saveCharacter(character);
		if (character[0].xp >= 100) {
			this.levelUp();
		}
	},

	levelUp() {
		let character = this.loadCharacter();
		character[0].level = character[0].level + 1;
		character[0].xp = character[0].xp - 100;
		console.log(chalk.magenta('You just leveled Up!'));
		console.log(chalk.magenta.inverse(`Level ${character[0].level}`));
		return this.saveCharacter(character);
	},

	stats() {
		let character = this.loadCharacter();
		console.log('Name: ' + character[0].name);
		console.log('Class: ' + character[0].type);
		console.log('Level: ' + character[0].level);
		console.log('HP: ' + character[0].hp);
		console.log(
			'Weapon/Damage: ' +
				character[0].weapon +
				'/' +
				character[0].weaponDamage
		);
		console.log('Items: ', character[0].inventory);
	},

	takeDamage(num) {
		let character = this.loadCharacter();
		character[0].hp = character[0].hp - num;
		console.log(chalk.red('Ouch you lost ' + num + ' hp'));
		console.log(chalk.red.inverse(character[0].hp + ' hp remaining'));
		return this.saveCharacter(character);
	},

	drinkHealthPotion() {
		let character = this.loadCharacter();
		character[0].hp = character[0].hp + 20;
		console.log(chalk.green('That was one tasty health potion +20 hp'));
		console.log(chalk.green.inverse(character[0].hp + ' hp remaining'));
		return this.saveCharacter(character);
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

	attack() {
		let enemy = this.loadEnemy();
		let painDished = enemy[0].damage;
		player.takeDamage(painDished);
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
		return this.saveEnemy(enemy);
	}
};

const attack = {
	playerAttack() {
		let character = player.loadCharacter();
		let badGuy = enemy.loadEnemy();
		let painDished = character[0].weaponDamage;

		if (badGuy[0].defense === 0 && badGuy[0].dodge === 0) {
			return enemy.takeDamage(painDished);
		}
		this.attackMath();
	},
	// enemyAttack() {
	// 	let enemy = this.loadEnemy();
	// 	let painDished = enemy[0].damage;
	// 	player.takeDamage(painDished);
	// },

	attackMath() {
		let character = player.loadCharacter();
		let badGuy = enemy.loadEnemy();
		let defenseNumber = Math.floor(Math.random() * 101);
		let dodgeNumber = Math.floor(Math.random() * 101);

		if (dodgeNumber < badGuy[0].dodge) {
			console.log(
				chalk.yellow(
					`With some nifty moves the ${
						badGuy[0].name
					} dodged your attack`
				)
			);
		}
	}
};

attack.playerAttack();
