'use strict'

const sqlServer = require('sails-sqlserver');
const mysql = require('sails-mysql');
// Database Configuration options.

module.exports = {

	adapters: {
		sqlserver: sqlServer,
		mysql: mysql
	},

	connections: {
		sqlserver: {
			adapter: 'sqlserver',
			user: 'msusser',
			password: 'pass',
			host: 'abc123.database.windows.net', // azure database
			database: 'mydb',
			options: {
				encrypt: true // use this for Azure databases
			}
		},

		mysql: {
			adapter: 'mysql',
			host: 'localhost',
			port: 3306,
			user: 'username',
			password: 'password',
			database: 'MySQL Database Name',
			// Optional
			charset: 'utf8',
			collation: 'utf8_swedish_ci'
		},

		oracle: {
			port: 3306,
			host: 'localhost',
			tns: '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = sails_oracle)))',
			user: 'USER',
			password: '',

			// drop   => Drop schema and data, then recreate it
			// alter  => Drop/add columns as necessary, but try 
			// safe   => Don't change anything (good for production DBs)
			migrate: 'safe'
		}
	}
}