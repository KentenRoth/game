const enemy = require('../Functions/createSaveDeleteEnemy');

const world = {
	il1: {
		description: 'This is part one.',
		canMove: ['south', 'west'],
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(this.description);
			console.log('optional directions: South or West');
		}
	},

	il2: {
		description: 'this is part two',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il3: {
		description: 'this is part three',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},
	il4: {
		description: 'this is part four',
		canMove: ['north', 'south', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},

	il5: {
		description: 'this is part five',
		canMove: ['north', 'west'],
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, or West');
		}
	}
};

module.exports = {
	world
};
