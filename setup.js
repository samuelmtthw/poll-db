const pool = require('./config/connection');

let createPoliticians = `
  CREATE TABLE IF NOT EXISTS "Politicians"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR NOT NULL,
    "party" VARCHAR NOT NULL,
    "location" VARCHAR NOT NULL,
    "grade_current" FLOAT NOT NULL
  )
`;

pool.query(createPoliticians, (err, res) => {
	if (err) {
		console.log('error', err);
	} else {
		console.log(res);
	}
	pool.end();
});

let createVoters = `
  CREATE TABLE IF NOT EXISTS "Voters"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "gender" VARCHAR NOT NULL,
    "age" INTEGER NOT NULL
  )
`;

pool.query(createVoters, (err, res) => {
	if (err) {
		console.log('error', err);
	} else {
		console.log(res);
	}
});

let createVotes = `
  CREATE TABLE IF NOT EXISTS "Votes"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "VoterId" INTEGER NOT NULL,
    "PoliticianId" INTEGER NOT NULL,
    FOREIGN KEY ("VoterId") REFERENCES "Voters" ("id"),
    FOREIGN KEY ("PoliticianId") REFERENCES "Politicians" ("id")
  )
`;

pool.query(createVotes, (err, res) => {
	if (err) {
		console.log('error', err);
	} else {
		console.log(res);
	}
});
