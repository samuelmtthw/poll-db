const pool = require('../config/connection');
const fs = require('fs');

let voters = fs.readFileSync('../data/voter.json', 'UTF-8');
voters = JSON.parse(voters);

let query = `
  INSERT INTO "Voters" ("first_name", "last_name", "gender", "age")
  VALUES
`;

voters.forEach((element, index) => {
	if (index === voters.length - 1) {
		query += `('${element.first_name}', '${element.last_name}', '${element.gender}', ${element.age});`;
	} else {
		query += `('${element.first_name}', '${element.last_name}', '${element.gender}', ${element.age}),`;
	}
});

// console.log(query);

pool.query(query, (err, res) => {
	if (err) {
		console.log('error', err);
	} else {
		console.log(res);
	}
	pool.end();
});
