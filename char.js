const fs = require('fs');
const chalk = require('chalk');
const charClass = require('./character');

const loadCharacter = () => {
	try {
		const charBuffer = fs.readFileSync('character.json');
		const charJSON = charBuffer.toString();
		return JSON.parse(charJSON);
	} catch (e) {
		return [];
	}
};

const saveCharacter = character => {
	const charJSON = JSON.stringify(character);
	fs.writeFileSync('character.json', charJSON);
};

const createCharacter = (name, type) => {
	const character = loadCharacter();
	if (character.length === 0 && type.toLowerCase() === 'ninja') {
		character.push(new charClass.Ninja(name));
		saveCharacter(character);
	} else if (character.length === 0 && type.toLowerCase() === 'warrior') {
		character.push(new charClass.Warrior(name));
		saveCharacter(character);
	} else if (character.length === 0 && type.toLowerCase() === 'viking') {
		character.push(new charClass.Viking(name));
		saveCharacter(character);
	} else {
		console.log('Only allowed to have 1 character');
	}
};

// createCharacter('Kent', 'Ninja');

const takeDamage = num => {
	const character = loadCharacter();
	character[0].hp = character[0].hp - num;
	console.log(chalk.red('Ouch you lost ' + num + 'hp'));
	console.log(chalk.red.inverse(character[0].hp + ' hp remaining'));
	saveCharacter(character);
};

const drinkHealthPotion = () => {
	const character = loadCharacter();
	character[0].hp = character[0].hp + 20;
	saveCharacter(character);
};

module.exports = {
	createCharacter,
	takeDamage,
	drinkHealthPotion
};
