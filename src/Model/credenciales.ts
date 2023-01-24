import { sequelize } from "../Database/database";
import { DataTypes } from "sequelize";
import { Publicaciones } from "./publicaciones";
const Crecenciales = sequelize.define(

    "credenciales", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    }

}
);

Crecenciales.hasMany(Publicaciones,{
    foreignKey: "CredencialesId",
    sourceKey: "id"
});

Publicaciones.belongsTo(Crecenciales,{
    foreignKey: "CredencialesId",
    targetKey: "id"
});

export { Crecenciales };