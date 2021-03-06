const pool = require('../config/connection');
const { Politician, Voter, PoliticianVote } = require('./class');

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

	static showVoteForAdam(cb) {
		let query = `
    SELECT p."name", COUNT(*) as "totalVote"
    FROM "Politicians" p
    JOIN "Votes" v ON v."PoliticianId" = p."id"
    WHERE p."name" LIKE '%Adam%'
    GROUP BY p."name"
    
    `;

		pool.query(query, (err, res) => {
			if (err) {
				cb(err);
			} else {
				let result = res.rows.map((el) => {
					let output = new PoliticianVote(
						el.name,
						null,
						null,
						el.totalVote
					);
					delete output.VoterId;
					delete output.PoliticianId;
					return output;
				});

				cb(null, result);
			}
		});
	}

	static addPolitician(name, party, location, grade_current, cb) {
		let query = `
    INSERT INTO "Politicians" ("name", "party", "location", "grade_current")
    VALUES ('${name}', '${party}', '${location}', ${grade_current} )
    RETURNING *
    `;

		pool.query(query, (err, res) => {
			if (err) {
				cb(err);
			} else {
				let result = res.rows.map((el) => {
					return new Politician(
						el.name,
						el.party,
						el.location,
						el.grade_current
					);
				});

				cb(null, result);
			}
		});
	}

	static deletePoliticianByParty(party, cb) {
		let query = `
      DELETE FROM "Politicians"
      WHERE "party" = '${party}';
    `;

		pool.query(query, (err, res) => {
			if (err) {
				cb(err, null);
			} else {
				cb(null, res.rowCount);
			}
		});
	}
}

module.exports = Models;
