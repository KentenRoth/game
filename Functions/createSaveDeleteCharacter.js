const fs = require('fs');
const chalk = require('chalk');
const characterClass = require('../Classes/characterClass');

const loadCharacter = () => {
	try {
		const charBuffer = fs.readFileSync('../character.json');
		const charJSON = charBuffer.toString();
		return JSON.parse(charJSON);
	} catch (e) {
		return [];
	}
};

const saveCharacter = character => {
	const charJSON = JSON.stringify(character);
	fs.writeFileSync('../character.json', charJSON);
};

const createCharacter = (name, type) => {
	const character = loadCharacter();
	if (character.length === 0 && type.toLowerCase() === 'ninja') {
		character.push(new characterClass.Ninja(name));
		console.log(chalk.green.inverse('Character Created!'));
		return saveCharacter(character[0]);
	} else if (character.length === 0 && type.toLowerCase() === 'warrior') {
		character.push(new characterClass.Warrior(name));
		console.log(chalk.green.inverse('Character Created!'));
		return saveCharacter(character[0]);
	} else if (character.length === 0 && type.toLowerCase() === 'viking') {
		character.push(new characterClass.Viking(name));
		console.log(chalk.green.inverse('Character Created!'));
		return saveCharacter(character[0]);
	} else if (
		type.toLowerCase() !== 'ninja' &&
		type.toLowerCase() !== 'warrior' &&
		type.toLowerCase() !== 'viking'
	) {
		console.log(
			'The only types of characters are Ninja, Warrior, or Viking'
		);
	} else {
		console.log('Only allowed to have 1 character');
	}
};

const deleteCharacter = () => {
	let character = loadCharacter();
	character = [];
	return saveCharacter(character);
};

module.exports = {
	createCharacter,
	deleteCharacter,
	saveCharacter,
	loadCharacter
};
