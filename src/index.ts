import { expressStart } from "./express";
import { sequelize } from "./Database/database";
import "./Model/credenciales";
import "./Model/publicaciones";
import "./Model/categorias";

async function main() {

   await sequelize.sync({force:false});
   expressStart(80);
}


main();