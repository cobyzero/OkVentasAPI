import { Router } from "express";
import { database } from "../database";
const routerHome = Router();

routerHome.get("/api/users", (req, res) => {
    const sql = "SELECT * FROM users";

    database.query(sql, (error, result) => {
        if (error) throw error;

        res.json(result);
    });

});


routerHome.post("/api/users/crear", (req, res) => {
    const sql = "INSERT INTO users SET ?";
    const json = JSON.parse(req.body);

    database.query(sql, { nombre: json["nombre"], edad: json["edad"] }, (err) => {
        if (err) throw err;

        res.send("agregado");
    });


});

export { routerHome };