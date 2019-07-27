const yargs = require('yargs');
const char = require('../Functions/createSaveDeleteCharacter');

yargs.version('1.1.0');

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
