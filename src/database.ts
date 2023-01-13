import mysql = require("mysql");

const database = mysql.createConnection({
    host: "localhost",
    database: "okventas",
    user: "root",
    password: "infierno"
});

function databaseConnect() {
    database.connect((error) => {
        if (error) {
            throw error;
        } else if (!error) {
            console.log("Database conectada...");
        }
    });
}

function databaseEnd() {
    database.end((error) => {
        if (error) throw error;
    });
}
export { database, databaseConnect, databaseEnd };
