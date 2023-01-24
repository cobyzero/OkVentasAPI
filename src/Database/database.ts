import { Sequelize } from "sequelize";

const sequelize = new Sequelize("okventas","root","infierno",{
    host:"localhost",
    dialect:"mysql"
});

export { sequelize };