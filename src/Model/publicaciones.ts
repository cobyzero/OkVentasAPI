import { sequelize } from "../Database/database";
import { DataTypes } from "sequelize";

const Publicaciones = sequelize.define("publicaciones",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nombre:{
        type: DataTypes.STRING,
    },

    descripcion:{
        type: DataTypes.STRING
    },

    imagen:{
        type: DataTypes.STRING
    }
});

export { Publicaciones };