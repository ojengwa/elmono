'use strict'

const config = require('./config');
const Waterline = require('waterline');
const xlsx = require('xlsx');

// Create the waterline instance.
const waterline = new Waterline();

// Create a specification for a model.
function loadCollection(attrs, next) {
	const connection = attrs.connection.toLowerCase();

	if (connection === 'sqlserver') {
		config.connections[connection].options.encrypt = attrs.encrypt.toLowerCase() === 'on' ? true : false;
	}

	let modelCollection = Waterline.Collection.extend({
		identity: 'model',
		connection: connection,
		tableName: attrs.table_name
	});

	var workbook = xlsx.readFile(attrs.file.path);
	var sheet_name_list = workbook.SheetNames;
	sheet_name_list.forEach(function (y) { /* iterate through sheets */
		var worksheet = workbook.Sheets[y];
		for (z in worksheet) {
			/* all keys that do not begin with "!" correspond to cell addresses */
			if (z[0] === '!') continue;
			console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
		}
	});

	waterline.loadCollection(modelCollection);

	// Initialise the waterline instance.
	waterline.initialize(config, function (err, ontology) {
		if (err) {
			return next(err, null);
		}

		// Tease out fully initialised models.
		const Model = ontology.collections.model;

		// First we  find record
		Model
			.find()
			.then(function (model) {})
			.catch(console.error);;
	});
	return next(waterline)
}

module.exports = {
	waterline: waterline,
	loadCollection: loadCollection
}