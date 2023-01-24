import express = require("express");
import morgan = require('morgan');
import { router } from "./Routes/usersRoutes";

const app = express();

app.use(express.json()); 
app.use(morgan("dev"));

/* Rutas */
app.use(router);


function expressStart(port: number) {
    app.listen(port, () => {
        console.log("Server Express Iniciado...");
    });
}

export { expressStart };