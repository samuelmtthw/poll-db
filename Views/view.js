class View {
	static commandList() {
		console.log('node index.js query-1');
		console.log('node index.js query-2');
		console.log(
			'node index.js add <politician_name> <politician_party> <location> <grade_current>'
		);
	}

	static errMessage(err) {
		console.log(err.message);
	}

	static displayData(data) {
		console.table(data);
	}

	static wrongParam() {
		console.log('Please input the correct parameter');
		View.commandList;
	}
}

module.exports = View;
