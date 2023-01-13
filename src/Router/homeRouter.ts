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


export { routerHome };