const fs = require('fs');
const enemyClass = require('../Classes/enemyClass');

const loadEnemy = () => {
	try {
		const enemyBuffer = fs.readFileSync('../enemy.json');
		const enemyJSON = enemyBuffer.toString();
		return JSON.parse(enemyJSON);
	} catch (e) {
		return [];
	}
};

const saveEnemy = enemy => {
	const enemyJSON = JSON.stringify(enemy);
	fs.writeFileSync('../enemy.json', enemyJSON);
};

const createEnemy = (name, type) => {
	const enemy = loadEnemy();
	const lowerCaseType = type.toLowerCase();
	if (lowerCaseType === 'bug') {
		enemy.push(new enemyClass.Bug(name));
		return saveEnemy(enemy);
	}
	if (lowerCaseType === 'frog') {
		enemy.push(new enemyClass.Frog(name));
		return saveEnemy(enemy);
	}
	if (lowerCaseType === 'bird') {
		enemy.push(new enemyClass.Bird(name));
		return saveEnemy(enemy);
	}
	if (lowerCaseType === 'racoon') {
		enemy.push(new enemyClass.Racoon(name));
		return saveEnemy(enemy);
	}
	if (lowerCaseType === 'deer') {
		enemy.push(new enemyClass.Deer(name));
		return saveEnemy(enemy);
	}
	if (lowerCaseType === 'bigfoot') {
		enemy.push(new enemyClass.Bigfoot(name));
		return saveEnemy(enemy);
	}
};

// createEnemy('Skunk Ape', 'BigFoot');

const deleteEnemy = () => {
	let enemy = loadEnemy();
	enemy = [];
	saveEnemy(enemy);
};

module.exports = {
	createEnemy,
	deleteEnemy,
	loadEnemy,
	saveEnemy
};
