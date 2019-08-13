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
		console.log(chalk.red('Name: ' + target.name));
		console.log(chalk.red('HP: ' + target.hp));
		console.log(
			chalk.red('Weapon/Damage: ' + target.weapon + '/' + target.damage)
		);
	}
};

// ********** Attacking Functions ********** \\

const attack = {
	playerAttack() {
		const char = loadCharacter();
		const target = loadEnemy();
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
					`With some nifty moves the ${
						target.name
					} dodged your attack`
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
		if (character.hp + 20 > character.maxHp) {
			console.log(
				chalk.green(`I didn't get the full use of that health potion`)
			);
			console.log(
				chalk.green.inverse(
					`I have reached my max hp of ${character.maxHp} hp`
				)
			);
			character.hp = character.maxHp;
			return this.dropItemFromInventory('health potion');
		}
		character.hp += 20;
		console.log(chalk.green('That was one tasty health potion +20 hp'));
		console.log(chalk.green.inverse(character.hp + ' hp remaining'));
		return this.dropItemFromInventory('health potion');
	}
};

// ********** Moving around the Map ********** \\
const moving = {
	gettingLocationNumber() {
		return parseInt(character.location.slice(2, character.location.length));
	},

	newLocationPosition(number) {
		const preFix = character.location.slice(0, 2);
		character.location = `${preFix}${number}`;
		player.saveCharacter(character);
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

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// ********** Play the Game ********** \\
const playGame = {
	play() {
		const gameTime = playTheGame.world[character.location];
		return gameTime.playArea();
	},

	canWeMove(input) {
		const array = playTheGame.world[character.location].canMove;
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
	},

	directions() {
		this.play();
		rl.on('line', input => {
			const action = input.toLowerCase();
			if (
				action === 'north' ||
				action === 'east' ||
				action === 'south' ||
				action === 'west'
			) {
				this.canWeMove(action);
			}
			if (action === 'attack') {
				const target = loadEnemy();
				if (target.name !== undefined) {
					return attack.playerAttack();
				} else {
					return console.log(
						'You spin around to do an epic attack, but there is nothing there.'
					);
				}
			}
			if (action === 'drink potion') {
				return inventory.itemInInventory('health potion');
			}

			if (action === 'my stats') {
				return player.stats();
			}

			if (action === 'enemy stats') {
				return badGuy.stats();
			}

			if (action === 'exit') {
				rl.close();
			}
		});
	}
};

playGame.directions();

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
