import { expressStart } from "./express";
import { sequelize } from "./Database/database";
import "./Model/users";
import "./Model/post";
import "./Model/categories";

async function main() {

   await sequelize.sync({
      force: false,
      
   });
   expressStart(80);
}


main();