require('dotenv').config()
var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session)

const sesionesConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

    clearExpired: true,
	checkExpirationInterval: 1500000,
	expiration: 3600000,
	createDatabaseTable: true,
	connectionLimit: 1,
	endConnectionOnClose: true,
	charset: 'utf8mb4_bin',
	schema: {
		tableName: 'SESSIONS',
		columnNames: {
			session_id: 'SESSION_ID',
			expires: 'EXP_DATE',
			data: 'DATA'
		}
	}
}

var sessionStore = new MySQLStore(sesionesConfig)

module.exports = session({
    key: 'PortfolioAPI',
    secret: 'q9eg0hBwEj9xT%^lMt2J^mUeS@Qn9N2H',
    saveUninitialized: false,
    resave: false,
    store: sessionStore
})