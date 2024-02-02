// Database connection
const mysql = require("mysql2/promise");

// Create a connection string
const client = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: '',
    database: 'atividade'
});

module.exports = client;