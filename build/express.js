"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressStart = void 0;
const express = require("express");
const morgan = require("morgan");
const usersRoutes_1 = require("./Routes/usersRoutes");
const app = express();
app.use(express.json());
app.use(express.text());
app.use(morgan("dev"));
/* Rutas */
app.use(usersRoutes_1.router);
function expressStart(port) {
    app.listen(port, () => {
        console.log("Server Express Iniciado...");
    });
}
exports.expressStart = expressStart;
