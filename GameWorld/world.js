const char = require('../Functions/createSaveDeleteCharacter');
const enemy = require('../Functions/createSaveDeleteEnemy');
const play = require('../Functions/gameFunctions');

const character = char.loadCharacter();
const thing = () => {
	const position = character.location;
	return world[position].playArea();
};

const world = {
	il1: {
		description:
			'This is part one, optional directions are south and west.',
		playArea() {
			enemy.createEnemy('DraggonFly', 'bug');
			console.log(this.description);
			console.log('optional directions: South or West');
			return play.playGame.northEastCorner();
		}
	},

	il2: {
		description: 'this is part two'
	},

	il3: {
		description: 'this is part three'
	}
};

thing();

module.exports = {
	world
};
