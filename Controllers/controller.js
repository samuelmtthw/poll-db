const Models = require('../Models/model');
const View = require('../Views/view');

class Controller {
	static commandList() {
		View.commandList();
	}

	static showPoliticianPartyR() {
		Models.showPoliticianPartyR((err, res) => {
			if (err) {
				View.errMessage(err);
			} else {
				View.displayData(res);
			}
		});
	}
}

module.exports = Controller;
