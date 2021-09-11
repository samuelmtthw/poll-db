const Models = require('../Models/model');
const View = require('../Views/view');

class Controller {
	static commandList() {
		View.commandList();
	}

	static showPoliticianPartyR() {
		Models.showPoliticianPartyR((err, politicians) => {
			if (err) {
				View.errMessage(err);
			} else {
				View.displayData(politicians);
			}
		});
	}

	static showVoteForAdam() {
		Models.showVoteForAdam((err, votes) => {
			if (err) {
				View.errMessage(err);
			} else {
				View.displayData(votes);
			}
		});
	}
}

module.exports = Controller;
