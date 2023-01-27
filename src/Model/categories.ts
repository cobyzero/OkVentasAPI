import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../Database/database";

const Categories = sequelize.define("Categories", {

    categoriesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoriesName:{
        type: DataTypes.STRING
    },
    categoriesImage:{
        type: DataTypes.STRING
    }
});


export { Categories };