const {
	loadCharacter,
	createCharacter,
	deleteCharacter
} = require('../Functions/createSaveDeleteCharacter');
const {
	loadEnemy,
	saveEnemy,
	createEnemy,
	deleteEnemy
} = require('../Functions/createSaveDeleteEnemy');

const { player, badGuy, leveling } = require('../Functions/gameFunctions');

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

describe('Create Save Delete Enemy file', () => {
	it('should create a new bug enemy', () => {
		createEnemy('dragon fly', 'Bug');
		expect(loadEnemy()).toHaveProperty('name', 'dragon fly');
		expect(loadEnemy()).toHaveProperty('type', 'Bug');
		deleteEnemy();
	});
	it('should create a new frog enemy', () => {
		createEnemy('bull frog', 'Frog');
		expect(loadEnemy()).toHaveProperty('name', 'bull frog');
		expect(loadEnemy()).toHaveProperty('type', 'Frog');
		deleteEnemy();
	});
	it('should create a new from enemy', () => {
		createEnemy('racoon', 'Racoon');
		expect(loadEnemy()).toHaveProperty('name', 'racoon');
		expect(loadEnemy()).toHaveProperty('type', 'Racoon');
		deleteEnemy();
	});
	it('should create a new bird enemy', () => {
		createEnemy('crow', 'Bird');
		expect(loadEnemy()).toHaveProperty('name', 'crow');
		expect(loadEnemy()).toHaveProperty('type', 'Bird');
		deleteEnemy();
	});
	it('should create a new crab enemy', () => {
		createEnemy('mudcrab', 'Crab');
		expect(loadEnemy()).toHaveProperty('name', 'mudcrab');
		expect(loadEnemy()).toHaveProperty('type', 'Crab');
		deleteEnemy();
	});
	it('should create a new snake enemy', () => {
		createEnemy('bull snake', 'Snake');
		expect(loadEnemy()).toHaveProperty('name', 'bull snake');
		expect(loadEnemy()).toHaveProperty('type', 'Snake');
		deleteEnemy();
	});
	it('should create a new fox enemy', () => {
		createEnemy('fox', 'Fox');
		expect(loadEnemy()).toHaveProperty('name', 'fox');
		expect(loadEnemy()).toHaveProperty('type', 'Fox');
		deleteEnemy();
	});
	it('should create a new deer enemy', () => {
		createEnemy('Bambi', 'Deer');
		expect(loadEnemy()).toHaveProperty('name', 'Bambi');
		expect(loadEnemy()).toHaveProperty('type', 'Deer');
		deleteEnemy();
	});
	it('should create a new goat enemy', () => {
		createEnemy('billy goat', 'Goat');
		expect(loadEnemy()).toHaveProperty('name', 'billy goat');
		expect(loadEnemy()).toHaveProperty('type', 'Goat');
		deleteEnemy();
	});
	it('should create a new lion enemy', () => {
		createEnemy('mountain lion', 'Lion');
		expect(loadEnemy()).toHaveProperty('name', 'mountain lion');
		expect(loadEnemy()).toHaveProperty('type', 'Lion');
		deleteEnemy();
	});
	it('should create a new gator enemy', () => {
		createEnemy('gator', 'Gator');
		expect(loadEnemy()).toHaveProperty('name', 'gator');
		expect(loadEnemy()).toHaveProperty('type', 'Gator');
		deleteEnemy();
	});
	it('should create a new bigfoot enemy', () => {
		createEnemy('BigFoot', 'Bigfoot');
		expect(loadEnemy()).toHaveProperty('name', 'BigFoot');
		expect(loadEnemy()).toHaveProperty('type', 'Bigfoot');
		deleteEnemy();
	});
});

describe('player and badGuy functions', () => {
	it('should return a new hp after player takes damage', () => {
		createCharacter('Kent', 'Ninja');
		player.takeDamage(10);
		expect(loadCharacter()).toHaveProperty('hp', 90);
		deleteCharacter();
	});
	it('should return a new hp after enemy takes damage', () => {
		createEnemy('frog', 'Frog');
		badGuy.takeDamage(10);
		expect(loadEnemy()).toHaveProperty('hp', 25);
		deleteEnemy();
	});
});

describe('leveling functions', () => {
	it('should return return level 1', () => {
		createCharacter('Kent', 'Ninja');
		leveling.increaseXP(100);
		expect(loadCharacter()).toHaveProperty('level', 1);
		deleteCharacter();
	});
});
