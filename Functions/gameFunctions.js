const chalk = require('chalk');
const readline = require('readline');

const playTheGame = require('../GameWorld/world');
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
		const char = loadCharacter();
		console.log(chalk.hex('#12b500')('Name: ' + char.name));
		console.log(chalk.hex('#12b500')('Class: ' + char.type));
		console.log(chalk.magenta('Level: ' + char.level));
		console.log(chalk.hex('#12b500')('HP: ' + char.hp));
		console.log(
			chalk.hex('#12b500')(
				'Weapon/Damage: ' + char.weapon + '/' + char.weaponDamage
			)
		);
		console.log(chalk.hex('#12b500')('Items: ', char.inventory));
	},

	takeDamage(num) {
		const char = loadCharacter();
		char.hp -= num;
		console.log(chalk.red('Ouch you lost ' + num + ' hp'));
		if (char.hp <= 0) {
			return death.playerDied();
		}
		console.log(chalk.red.inverse(char.hp + ' hp remaining'));

		return this.saveCharacter(char);
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
		const target = loadEnemy();
		target.hp = target.hp - num;

		console.log(
			chalk.green('You dealt ' + num + ' damage to the ' + target.name)
		);
		if (target.hp <= 0) {
			return death.enemyDied();
		}

		console.log(
			chalk.green(
				target.name +
					' has ' +
					chalk.green.inverse(target.hp + ' hp remaining.')
			)
		);
		attack.enemyAttack();
		return this.saveEnemy(target);
	},
	stats() {
		const target = loadEnemy();
		if (target.name === undefined) {
			return console.log(chalk.hex('#b50b02')('There is no enemy here.'));
		}
		console.log(chalk.hex('#b50b02')('Name: ' + target.name));
		console.log(chalk.hex('#b50b02')('HP: ' + target.hp));
		console.log(
			chalk.hex('#b50b02')(
				'Weapon/Damage: ' + target.weapon + '/' + target.damage
			)
		);
	}
};

// ********** Attacking Functions ********** \\

const attack = {
	playerAttack() {
		const char = loadCharacter();
		const target = loadEnemy();
		const painDished = char.weaponDamage;
		const stealthShotNumber = Math.floor(Math.random() * 101);

		if (character.stealth >= stealthShotNumber) {
			const sneakPainDished = painDished * 2;
			console.log(chalk.green.inverse('Successful Sneak Attack'));
			return badGuy.takeDamage(sneakPainDished);
		}

		if (target.defense === 0 && target.dodge === 0) {
			return badGuy.takeDamage(painDished);
		}

		this.playerAttackMath();
	},

	enemyAttack() {
		const char = loadCharacter();
		const target = loadEnemy();
		const dodgeNumber = Math.floor(Math.random() * 101);
		const enemyDamageNumber = target.damage;
		const playerDefenseNumber = char.block / 100;

		if (dodgeNumber < char.dodge) {
			return console.log(
				chalk.green(
					`You dodge the incoming attack from the ${target.name}`
				)
			);
		}

		const damageDealt = (target.damage = Math.round(
			enemyDamageNumber - playerDefenseNumber * enemyDamageNumber
		));

		return player.takeDamage(damageDealt);
	},

	playerAttackMath() {
		const char = loadCharacter();
		const target = loadEnemy();
		const dodgeNumber = Math.floor(Math.random() * 101);
		const playerDamageNumber = char.weaponDamage;
		const enemyDefenseNumber = target.defense / 100;

		if (dodgeNumber < target.dodge) {
			console.log(
				chalk.yellow(
					`With some nifty moves the ${target.name} dodged your attack`
				)
			);
			return this.enemyAttack();
		}

		const damageDealt = (char.damage = Math.round(
			playerDamageNumber - enemyDefenseNumber * playerDamageNumber
		));
		return badGuy.takeDamage(damageDealt);
	}
};

// ********** Death Functions ********** \\

const death = {
	playerDied() {
		const target = loadEnemy();
		console.log(`The ${target.name} finished you off`);
		console.log('You will now have to create a new character');
		console.log('Next time keep a better eye on your HP!');
		player.deleteCharacter();
	},

	enemyDied() {
		const target = loadEnemy();
		console.log(
			chalk.green.inverse(`Congrats you killed the ${target.name}`)
		);
		leveling.increaseXP(target.xpValue);
		this.itemDropOnDeath();
		badGuy.deleteEnemy();
	},

	itemDropOnDeath() {
		const target = loadEnemy();
		const dropOrNot = Math.floor(Math.random() * 10);
		if (dropOrNot < 4) {
			console.log(
				chalk.green(`The ${target.name} dropped a health potion`)
			);
			inventory.addItemToInventrory('Health Potion');
			return true;
		}
		return false;
	}
};

// ********** Leveling Functions ********** \\

const leveling = {
	increaseXP(num) {
		const char = loadCharacter();
		char.xp += num;
		player.saveCharacter(char);
		if (char.xp >= 100) {
			this.levelUp();
		}
	},

	levelUp() {
		const char = loadCharacter();
		char.level++;
		char.xp -= 100;
		if (char.level % 3 === 0) {
			this.levelUpStats();
		}
		console.log(chalk.magenta('You just leveled Up!'));
		console.log(chalk.magenta.inverse(`Level ${char.level}`));
		return player.saveCharacter(char);
	},

	levelUpStats() {
		const char = loadCharacter();
		if (char.hp < char.maxHp) {
			char.hp += 5;
		}
		if (char.weaponDamage < char.maxWeaponDamage) {
			char.weaponDamage += 5;
		}
		if (char.stealth < char.maxStealth) {
			char.stealth += 5;
		}
		if (char.dodge < char.maxDodge) {
			char.dodge += 5;
		}
		if (char.block < char.maxBlock) {
			char.block += 5;
		}
	}
};

// ********** Inventory Management ********** \\

const inventory = {
	addItemToInventrory(item) {
		const char = loadCharacter();
		if (char.inventory.length > 4) {
			return console.log('You only have 5 inventory slots.');
		}
		char.inventory.push(item);
		console.log(chalk.green(`${item} added to your inventory`));
		return player.saveCharacter(char);
	},

	itemInInventory(item) {
		const char = loadCharacter();
		if (char.inventory.includes(item)) {
			if (item === 'Health Potion') {
				return this.drinkHealthPotion();
			}
			return this.dropItemFromInventory(item);
		}

		return console.log('Item not found in inventory');
	},

	dropItemFromInventory(item) {
		const char = loadCharacter();
		const index = char.inventory.indexOf(item);
		if (index > -1) {
			char.inventory.splice(index, 1);
			return player.saveCharacter(char);
		}
	},

	drinkHealthPotion() {
		const char = loadCharacter();
		if (char.hp + 20 > char.maxHp) {
			console.log(
				chalk.green(`I didn't get the full use of that health potion`)
			);
			console.log(
				chalk.green.inverse(
					`I have reached my max hp of ${char.maxHp} hp`
				)
			);
			char.hp = char.maxHp;
			return this.dropItemFromInventory('Health Potion');
		}
		char.hp += 20;
		console.log(chalk.green('That was one tasty health potion +20 hp'));
		console.log(chalk.green.inverse(char.hp + ' hp remaining'));
		return this.dropItemFromInventory('Health Potion');
	}
};

// ********** Moving around the Map ********** \\
const moving = {
	gettingLocationNumber() {
		const char = loadCharacter();
		return parseInt(char.location.slice(2, char.location.length));
	},

	newLocationPosition(number) {
		const char = loadCharacter();
		const preFix = char.location.slice(0, 2);
		char.location = `${preFix}${number}`;
		player.saveCharacter(char);
		badGuy.deleteEnemy();
		playGame.play();
	},

	enterNEDungeon() {
		character.location = 'nw6';
		player.saveCharacter(character);
	},
	enterSEDungeon() {
		character.location = 'se6';
		player.saveCharacter(character);
	},
	enterSWDungeon() {
		character.location = 'sw6';
		player.saveCharacter(character);
	},
	enterNWDungeon() {
		character.location = 'nw6';
		player.saveCharacter(character);
	},

	goNorth() {
		let number = this.gettingLocationNumber();
		number -= 1;
		this.newLocationPosition(number);
	},
	goEast() {
		let number = this.gettingLocationNumber();
		number -= 5;
		this.newLocationPosition(number);
	},
	goSouth() {
		let number = this.gettingLocationNumber();
		number += 1;
		this.newLocationPosition(number);
	},
	goWest() {
		let number = this.gettingLocationNumber();
		number += 5;
		this.newLocationPosition(number);
	}
};

// ********** Play the Game ********** \\
const playGame = {
	play() {
		const char = loadCharacter();
		const gameTime = playTheGame.world[char.location];
		return gameTime.playArea();
	},

	canWeMove(input) {
		const char = loadCharacter();
		const array = playTheGame.world[char.location].canMove;
		if (array.includes(input) === false) {
			console.log(`You cannot go ${input}`);
			return false;
		}
		if (input === 'north') {
			return moving.goNorth();
		}
		if (input === 'east') {
			return moving.goEast();
		}
		if (input === 'south') {
			return moving.goSouth();
		}
		if (input === 'west') {
			return moving.goWest();
		}
	}
};

module.exports = {
	loadCharacter,
	loadEnemy,
	player,
	badGuy,
	attack,
	death,
	leveling,
	inventory,
	moving,
	playGame
};
