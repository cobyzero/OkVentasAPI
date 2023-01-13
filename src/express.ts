import express = require("express");
import morgan = require('morgan');
import { routerHome } from "./Router/homeRouter";
const app = express();

app.use(express.text());

app.use(express.json());
app.use(morgan("dev"));

/* Rutas */
app.use(routerHome);


function expressStart(port: number) {
    app.listen(port, () => {
        console.log("Server Express Iniciado...");
    });
}

export { expressStart };