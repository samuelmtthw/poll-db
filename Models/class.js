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

class PoliticianVote {
	constructor(name, VoterId, PoliticianId, totalVote) {
		this.name = name;
		this.VoterId = Number(VoterId);
		this.PoliticianId = Number(PoliticianId);
		this.totalVote = Number(totalVote);
	}
}

module.exports = { Politician, Voter, PoliticianVote };
