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

const badGuy = {
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
		let enemy = badGuy.loadEnemy();
		let painDished = character[0].weaponDamage;
		let stealthShotNumber = Math.floor(Math.random() * 101);

		if (character[0].stealth >= stealthShotNumber) {
			const sneakPainDished = painDished * 2;
			console.log(chalk.green.inverse('Successful Sneak Attack'));
			return badGuy.takeDamage(sneakPainDished);
		}

		if (enemy[0].defense === 0 && enemy[0].dodge === 0) {
			return badGuy.takeDamage(painDished);
		}

		this.playerAttackMath();
	},

	// enemyAttack() {
	// 	let enemy = this.loadEnemy();
	// 	let painDished = enemy[0].damage;
	// 	player.takeDamage(painDished);
	// },

	playerAttackMath() {
		let character = player.loadCharacter();
		let enemy = badGuy.loadEnemy();
		let dodgeNumber = Math.floor(Math.random() * 101);
		const playerDamageNumber = character[0].weaponDamage;
		const enemyDefenseNumber = enemy[0].defense / 100;

		if (dodgeNumber < enemy[0].dodge) {
			return console.log(
				chalk.yellow(
					`With some nifty moves the ${
						enemy[0].name
					} dodged your attack`
				)
			);
		}
		const damageDealt = (character[0].damage = Math.round(
			playerDamageNumber - enemyDefenseNumber * playerDamageNumber
		));
		return badGuy.takeDamage(damageDealt);
	}
};

attack.playerAttack();
