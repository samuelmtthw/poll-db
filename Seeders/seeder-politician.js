const pool = require('../config/connection');
const fs = require('fs');

let politicians = fs.readFileSync('../data/politician.json', 'UTF-8');
politicians = JSON.parse(politicians);

let query = `
  INSERT INTO "Politicians" ("name", "party", "location", "grade_current")
  VALUES
`;

politicians.forEach((element, index) => {
	if (index === politicians.length - 1) {
		query += `('${element.name}', '${element.party}', '${element.location}', ${element.grade_current});`;
	} else {
		query += `('${element.name}', '${element.party}', '${element.location}', ${element.grade_current}), `;
	}
});

pool.query(query, (err, res) => {
	if (err) {
		console.log('error', err);
	} else {
		console.log(res);
	}
	pool.end();
});
