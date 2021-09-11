const Controller = require('./Controllers/controller');

const command = process.argv[2];
const params = process.argv.splice(3);

switch (command) {
	case 'query-1':
		Controller.showPoliticianPartyR();
		break;

	case 'query-2':
		Controller.showVoteForAdam();
		break;

	case 'add':
		Controller.addPolitician(params);
		break;

	default:
		Controller.commandList();
		break;
}
