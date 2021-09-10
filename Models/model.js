const pool = require('../config/connection');
const { Politician, Voter, Vote } = require('./class');

class Models {
	static showPoliticianPartyR(cb) {
		let query = `
    SELECT p."id", p."name", p."party", p."grade_current"
    FROM "Politicians" p
    WHERE p."party" = 'R'
    AND
    p."grade_current" BETWEEN 9 AND 12;
    `;

		pool.query(query, (err, res) => {
			if (err) {
				cb(err, null);
			} else {
				let politicians = res.rows.map((el) => {
					let output = new Politician(
						el.name,
						el.party,
						null,
						el.grade_current
					);

					delete output.location;

					return output;
				});

				cb(null, politicians);
			}
		});
	}
}

module.exports = Models;
