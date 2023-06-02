require('dotenv').config()
const mysql = require('mysql')

const credentials = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'database',
    insecureAuth : true
}

const pool = mysql.createPool(credentials, (err) => {
    if (err) {
        console.log(`[DATABASE]: Error trying to connect to the database.`)
        console.log(err)
        connectDB();
    } else {
        var date = new Date();
        console.log(`[DATABASE]: Connected to the database. ` + date.toLocaleString());
    }
})

let connectDB = () => {
    setTimeout(() => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(`[DATABASE]: Error trying to connect to the database.`)
                console.log(err)
                connectDB();
            } else {
                var date = new Date();
                console.log(`[DATABASE]: Connected to the database. ` + date.toLocaleString());
            }
        })
    }, 2000)
}

module.exports = {
    pool,
    mysql
}