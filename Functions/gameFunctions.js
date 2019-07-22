const chalk = require('chalk');

const buildCharacter = require('./createSaveDeleteCharacter');
const buildEnemy = require('./createSaveDeleteEnemy');

// chalk.rgb(num,num,num)('words')
// chalk.hex(hexcode)('words)

loadCharacter = () => {
	return buildCharacter.loadCharacter();
};

loadEnemy = () => {
	return buildEnemy.loadEnemy();
};

const character = loadCharacter();
const enemy = loadEnemy();

// ********** Player Functions ********** \\

const player = {
	saveCharacter(character) {
		return buildCharacter.saveCharacter(character);
	},

	deleteCharacter() {
		return buildCharacter.deleteCharacter();
	},

	stats() {
		console.log('Name: ' + character.name);
		console.log('Class: ' + character.type);
		console.log('Level: ' + character.level);
		console.log('HP: ' + character.hp);
		console.log(
			'Weapon/Damage: ' + character.weapon + '/' + character.weaponDamage
		);
		console.log('Items: ', character.inventory);
	},

	takeDamage(num) {
		character.hp -= num;
		console.log(chalk.red('Ouch you lost ' + num + ' hp'));
		if (character.hp <= 0) {
			return death.playerDied();
		}
		console.log(chalk.red.inverse(character.hp + ' hp remaining'));

		return this.saveCharacter(character);
	}
};

// ********** Enemy Functions ********** \\

const badGuy = {
	saveEnemy(enemy) {
		return buildEnemy.saveEnemy(enemy);
	},

	deleteEnemy() {
		return buildEnemy.deleteEnemy();
	},

	takeDamage(num) {
		enemy.hp = enemy.hp - num;

		console.log(
			chalk.green('You dealt ' + num + ' damage to the ' + enemy.name)
		);
		if (enemy.hp <= 0) {
			return death.enemyDied();
		}

		console.log(
			chalk.green(
				enemy.name +
					' has ' +
					chalk.green.inverse(enemy.hp + ' hp remaining.')
			)
		);
		attack.enemyAttack();
		return this.saveEnemy(enemy);
	},
	stats() {
		let enemy = badGuy.loadEnemy();
		console.log('Name: ' + enemy.name);
		console.log('HP: ' + enemy.hp);
		console.log('Weapon/Damage: ' + enemy.weapon + '/' + enemy.damage);
	}
};

// ********** Attacking Functions ********** \\

const attack = {
	playerAttack() {
		const painDished = character.weaponDamage;
		const stealthShotNumber = Math.floor(Math.random() * 101);

		if (character.stealth >= stealthShotNumber) {
			const sneakPainDished = painDished * 2;
			console.log(chalk.green.inverse('Successful Sneak Attack'));
			return badGuy.takeDamage(sneakPainDished);
		}

		if (enemy.defense === 0 && enemy.dodge === 0) {
			return badGuy.takeDamage(painDished);
		}

		this.playerAttackMath();
	},

	enemyAttack() {
		const dodgeNumber = Math.floor(Math.random() * 101);
		const enemyDamageNumber = enemy.damage;
		const playerDefenseNumber = character.block / 100;

		if (dodgeNumber < character.dodge) {
			return console.log(
				chalk.green(
					`You dodge the incoming attack from the ${enemy.name}`
				)
			);
		}

		const damageDealt = (enemy.damage = Math.round(
			enemyDamageNumber - playerDefenseNumber * enemyDamageNumber
		));

		return player.takeDamage(damageDealt);
	},

	playerAttackMath() {
		const dodgeNumber = Math.floor(Math.random() * 101);
		const playerDamageNumber = character.weaponDamage;
		const enemyDefenseNumber = enemy.defense / 100;

		if (dodgeNumber < enemy.dodge) {
			console.log(
				chalk.yellow(
					`With some nifty moves the ${enemy.name} dodged your attack`
				)
			);
			return this.enemyAttack();
		}

		const damageDealt = (character.damage = Math.round(
			playerDamageNumber - enemyDefenseNumber * playerDamageNumber
		));
		return badGuy.takeDamage(damageDealt);
	}
};

// ********** Death Functions ********** \\

const death = {
	playerDied() {
		console.log(`The ${enemy.name} finished you off`);
		console.log('You will now have to create a new character');
		console.log('Next time keep a better eye on your HP!');
		player.deleteCharacter();
	},

	enemyDied() {
		console.log(`Congrats you killed the ${enemy.name}`);
		leveling.increaseXP(enemy.xpValue);
		badGuy.deleteEnemy();
	},

	itemDropOnDeath() {
		// TODO add in function to see if an item was dropped upon killing enemy
	}
};

// ********** Leveling Functions ********** \\

const leveling = {
	increaseXP(num) {
		character.xp += num;
		player.saveCharacter(character);
		if (character.xp >= 100) {
			this.levelUp();
		}
	},

	levelUp() {
		character.level++;
		character.xp -= 100;
		if (character.level % 3 === 0) {
			this.levelUpStats();
		}
		console.log(chalk.magenta('You just leveled Up!'));
		console.log(chalk.magenta.inverse(`Level ${character.level}`));
		return player.saveCharacter(character);
	},

	levelUpStats() {
		if (character.hp < character.maxHp) {
			character.hp += 5;
		}
		if (character.weaponDamage < character.maxWeaponDamage) {
			character.weaponDamage += 5;
		}
		if (character.stealth < character.maxStealth) {
			character.stealth += 5;
		}
		if (character.dodge < character.maxDodge) {
			character.dodge += 5;
		}
		if (character.block < character.maxBlock) {
			character.block += 5;
		}
	}
};

// ********** Inventory Management ********** \\

const inventory = {
	addItemToInventrory(item) {
		if (character.inventory.length > 4) {
			return console.log('You only have 5 inventory slots.');
		}
		character.inventory.push(item);
		return player.saveCharacter(character);
	},

	itemInInventory(item) {
		if (character.inventory.includes(item)) {
			if (item === 'health potion') {
				return this.drinkHealthPotion();
			}
			return this.dropItemFromInventory(item);
		}
		return console.log('Item not found in inventory');
	},

	dropItemFromInventory(item) {
		const index = character.inventory.indexOf(item);
		if (index > -1) {
			character.inventory.splice(index, 1);
			return player.saveCharacter(character);
		}
	},

	drinkHealthPotion() {
		character.hp += 20;
		console.log(chalk.green('That was one tasty health potion +20 hp'));
		console.log(chalk.green.inverse(character.hp + ' hp remaining'));
		return player.saveCharacter(character);
	}
};
