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
