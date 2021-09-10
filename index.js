const Controller = require('./Controllers/controller');

const command = process.argv[2];
const params = process.argv.splice(3);

switch (command) {
	case 'query-1':
		Controller.showPoliticianPartyR();
		break;

	default:
		Controller.commandList();
		break;
}
