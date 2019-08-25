const {
	loadCharacter,
	createCharacter,
	deleteCharacter
} = require('../Functions/createSaveDeleteCharacter');
const {
	loadEnemy,
	saveEnemy,
	createEnemy,
	delteEnemy
} = require('../Functions/createSaveDeleteEnemy');

describe('Create Save Delete Character file', () => {
	it('should create a new Ninja character', () => {
		createCharacter('Kent', 'Ninja');
		expect(loadCharacter()).toHaveProperty('name', 'Kent');
		expect(loadCharacter()).toHaveProperty('type', 'Ninja');
		deleteCharacter();
	});
	it('shoud create a new Warrior Character', () => {
		createCharacter('Kent', 'Warrior');
		expect(loadCharacter()).toHaveProperty('name', 'Kent');
		expect(loadCharacter()).toHaveProperty('type', 'Warrior');
		deleteCharacter();
	});
	it('should create a new Viking Character', () => {
		createCharacter('Kent', 'Viking');
		expect(loadCharacter()).toHaveProperty('name', 'Kent');
		expect(loadCharacter()).toHaveProperty('type', 'Viking');
		deleteCharacter();
	});
});
