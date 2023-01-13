"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseEnd = exports.databaseConnect = exports.database = void 0;
const mysql = require("mysql");
const database = mysql.createConnection({
    host: "localhost",
    database: "okventas",
    user: "root",
    password: "infierno"
});
exports.database = database;
function databaseConnect() {
    database.connect((error) => {
        if (error) {
            throw error;
        }
        else if (!error) {
            console.log("Database conectada...");
        }
    });
}
exports.databaseConnect = databaseConnect;
function databaseEnd() {
    database.end((error) => {
        if (error)
            throw error;
    });
}
exports.databaseEnd = databaseEnd;
