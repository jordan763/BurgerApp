
var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: '127.0.0.1',
        user: 'root',
        password: '1qaz2wsx!QAZ@WSX',
        database: 'cat_db'
    })
};

var mysql = require('mysql');

// Make connection.
connection.connect() 
// Export connection for our ORM to use.
module.exports = connection;
