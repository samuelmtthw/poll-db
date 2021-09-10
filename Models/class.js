class Politician {
	constructor(name, party, location, grade_current) {
		this.name = name;
		this.party = party;
		this.location = location;
		this.grade_current = Number(grade_current);
	}
}

class Voter {
	constructor(first_name, last_name, gender, age) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
		this.age = Number(age);
	}
}

class Vote {
	constructor(VoterId, PoliticianId) {
		this.VoterId = Number(VoterId);
		this.PoliticianId = Number(PoliticianId);
	}
}

module.exports = { Politician, Voter, Vote };
