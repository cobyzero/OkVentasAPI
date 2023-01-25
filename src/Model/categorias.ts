import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../Database/database";

const category = sequelize.define("category", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    imagen:{
        type: DataTypes.STRING
    }
});


export { category };