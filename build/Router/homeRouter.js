"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerHome = void 0;
const express_1 = require("express");
const database_1 = require("../database");
const routerHome = (0, express_1.Router)();
exports.routerHome = routerHome;
routerHome.get("/api/users", (req, res) => {
    const sql = "SELECT * FROM users";
    database_1.database.query(sql, (error, result) => {
        if (error)
            throw error;
        res.json(result);
    });
});
routerHome.post("/api/users/crear", (req, res) => {
    const sql = "INSERT INTO users SET ?";
    const json = JSON.parse(req.body);
    database_1.database.query(sql, { nombre: json["nombre"], edad: json["edad"] }, (err) => {
        if (err)
            throw err;
        res.send("agregado");
    });
});
