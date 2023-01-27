import { sequelize } from "../Database/database";
import { DataTypes } from "sequelize";
import { Post } from "./post";
const Users = sequelize.define(

    "users", {
    usersId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usersUsername: {
        type: DataTypes.STRING,
    },
    usersEmail: {
        type: DataTypes.STRING,
    },
    usersPassword: {
        type: DataTypes.STRING,
    },
    usersName: {
        type: DataTypes.STRING,
    },
    usersImage: {
        type: DataTypes.STRING
    }
}
);

Users.hasMany(Post, {
    foreignKey: "usersId",
    sourceKey: "usersId"
});

Post.belongsTo(Users, {
    foreignKey: "usersId",
    targetKey: "usersId"
});

export { Users };