import { sequelize } from "../Database/database";
import { DataTypes } from "sequelize";

const Post = sequelize.define("Post",{
    postId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    postName:{
        type: DataTypes.STRING,
    },

    postDescription:{
        type: DataTypes.STRING
    },

    postImage:{
        type: DataTypes.STRING
    }

    
});

export { Post };