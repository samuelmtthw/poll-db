class View {
	static commandList() {
		console.log('node index.js query-1');
		console.log('node index.js');
	}

	static errMessage(err) {
		console.log(err.message);
	}

	static displayData(data) {
		console.table(data);
	}
}

module.exports = View;
