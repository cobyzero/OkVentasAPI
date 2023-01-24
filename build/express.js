"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressStart = void 0;
const express = require("express");
const morgan = require("morgan");
const usersRoutes_1 = require("./Routes/usersRoutes");
const homeRoutes_1 = require("./Routes/homeRoutes");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(express.text());
/* Rutas */
app.use(usersRoutes_1.router);
app.use(homeRoutes_1.routerHome);
function expressStart(port) {
    app.listen(port, () => {
        console.log("Server Express Iniciado...");
    });
}
exports.expressStart = expressStart;
