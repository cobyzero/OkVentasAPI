import { expressStart } from "./express";
import { databaseConnect } from "./database";

async function main(){

    databaseConnect();

    expressStart(80);
}


main();