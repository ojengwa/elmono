'use strict'

const config = require('./config');
const Waterline = require('waterline');
// const xlsx = require('xlsx');
const xlsx = require('excel2json');

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

	xlsx(attrs.file.path, (err, data) => {
		console.log(err, data);
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