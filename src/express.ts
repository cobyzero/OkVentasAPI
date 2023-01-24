import express = require("express");
import morgan = require('morgan');
import { router } from "./Routes/usersRoutes";
import { routerHome } from "./Routes/homeRoutes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.text());
/* Rutas */
app.use(router);
app.use(routerHome);

function expressStart(port: number) {
    app.listen(port, () => {
        console.log("Server Express Iniciado...");
    });
}

export { expressStart };