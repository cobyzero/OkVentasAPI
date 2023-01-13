"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressStart = void 0;
const express = require("express");
const morgan = require("morgan");
const homeRouter_1 = require("./Router/homeRouter");
const app = express();
app.use(express.text());
app.use(express.json());
app.use(morgan("dev"));
/* Rutas */
app.use(homeRouter_1.routerHome);
function expressStart(port) {
    app.listen(port, () => {
        console.log("Server Express Iniciado...");
    });
}
exports.expressStart = expressStart;
