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
	if (enemy.name === undefined) {
		enemy.push(new enemyClass[type](name));
		return saveEnemy(enemy[0]);

		// if (lowerCaseType === 'bug') {
		// 	enemy.push(new enemyClass.Bug(name));
		// 	return saveEnemy(enemy[0]);
		// }
		// if (lowerCaseType === 'frog') {
		// 	enemy.push(new enemyClass.Frog(name));
		// 	return saveEnemy(enemy[0]);
		// }
		// if (lowerCaseType === 'bird') {
		// 	enemy.push(new enemyClass.Bird(name));
		// 	return saveEnemy(enemy[0]);
		// }
		// if (lowerCaseType === 'racoon') {
		// 	enemy.push(new enemyClass.Racoon(name));
		// 	return saveEnemy(enemy[0]);
		// }
		// if (lowerCaseType === 'crab') {
		// 	enemy.push(new enemyClass.Crab(name));
		// 	return saveEnemy(enemy[0]);
		// }
		// if (lowerCaseType === 'deer') {
		// 	enemy.push(new enemyClass.Deer(name));
		// 	return saveEnemy(enemy[0]);
		// }
		// if (lowerCaseType === 'goat') {
		// 	enemy.push(new enemyClass.Goat(name));
		// 	return saveEnemy(enemy[0]);
		// }
		// if (lowerCaseType === 'lion') {
		// 	enemy.push(new enemyClass.Lion(name));
		// 	return saveEnemy(enemy[0]);
		// }
		// if (lowerCaseType === 'bigfoot') {
		// 	enemy.push(new enemyClass.Bigfoot(name));
		// 	return saveEnemy(enemy[0]);
		// }
	}
};

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
