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

	static addPolitician(params) {
		if (params.length !== 4) {
			View.wrongParam();
		} else {
			let [name, party, location, grade_current] = params;
			Models.addPolitician(
				name,
				party,
				location,
				grade_current,
				(err, newPolitician) => {
					if (err) {
						View.errMessage(err);
					} else {
						View.successAddPolitician(newPolitician);
					}
				}
			);
		}
	}

	static deletePoliticianByParty(params) {
		if (params.length !== 1) {
			View.wrongParam();
		} else {
			let party = params[0];
			Models.deletePoliticianByParty(party, (err, result) => {
				if (err) {
					View.errMessage(err);
				} else {
					View.successDeletePoliticianByParty(result);
				}
			});
		}
	}
}

module.exports = Controller;
