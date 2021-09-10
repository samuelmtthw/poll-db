const pool = require('../config/connection');
const fs = require('fs');

let votes = fs.readFileSync('../data/vote.json', 'UTF-8');
votes = JSON.parse(votes);

let query = `
  INSERT INTO "Votes" ("VoterId", "PoliticianId")
  VALUES
`;

votes.forEach((element, index) => {
	if (index === votes.length - 1) {
		query += `(${element.voterId}, ${element.politicianId});`;
	} else {
		query += `(${element.voterId}, ${element.politicianId}),`;
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
