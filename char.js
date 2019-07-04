const fs = require('fs');
const chalk = require('chalk');

const createCharacter = (name, type) => {
	const character = loadCharacter();
	if (character.length === 0) {
		character.push({
			name,
			type,
			hp: 100,
			weapon: 'bow',
			weapon2: 'ninja stars',
			stealth: 10,
			dodge: 10,
			block: 0
		});
		saveCharacter(character);
	} else {
		console.log('You have already created a character');
	}
};

const lowerHP = num => {
	const character = loadCharacter();
	character[0].hp = character[0].hp - num;
	console.log(chalk.red('Ouch you lost ' + num + 'hp'));
	console.log(chalk.red.inverse(character[0].hp + ' hp remaining'));
	saveCharacter(character);
};

const drinkPotion = () => {
	const character = loadCharacter();
	character[0].hp = character[0].hp + 20;
	saveCharacter(character);
};

const saveCharacter = character => {
	const charJSON = JSON.stringify(character);
	fs.writeFileSync('character.json', charJSON);
};

const loadCharacter = () => {
	try {
		const charBuffer = fs.readFileSync('character.json');
		const charJSON = charBuffer.toString();
		return JSON.parse(charJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	createCharacter,
	lowerHP,
	drinkPotion
};
