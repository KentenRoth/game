const enemy = require('../Functions/createSaveDeleteEnemy');

const world = {
	il1: {
		description: 'This is part one.',
		canMove: 'northEastCorner',
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(this.description);
			console.log('optional directions: South or West');
		}
	},

	il2: {
		description: 'this is part two',
		canMove: 'cannotGoEast',
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
			return plays.playGame.cannotGoEast();
		}
	},

	il3: {
		description: 'this is part three',
		canMove: 'cannotGoEast',
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
		}
	},
	il4: {
		description: 'this is part four',
		canMove: 'cannotGoEast',
		playArea() {
			enemy.createEnemy('Dragon Fly', 'bug');
			console.log(this.description);
			console.log('optional directions: North, South, or West');
			return plays.playGame.cannotGoEast();
		}
	},

	il5: {
		description: 'this is part five',
		canMove: 'southEastCorner',
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
