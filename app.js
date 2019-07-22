const yargs = require('yargs');
const char = require('./Functions/createSaveDeleteCharacter');
const readline = require('readline');

yargs.version('1.1.0');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What direction would you like to go? ', answer => {
	// TODO: Log the answer in a database
	if (answer === 'west') {
		console.log('We shall go West');
	}

	if (answer === 'north') {
		console.log('We shall go North');
	}

	rl.close();
});

yargs.command({
	command: 'create',
	describe: 'Create a new character.',
	builder: {
		name: {
			describe: 'The name of your character',
			demandOption: true,
			type: 'string'
		},
		type: {
			describe: 'What class is your character?',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		char.createCharacter(argv.name, argv.type);
	}
});

yargs.parse();
