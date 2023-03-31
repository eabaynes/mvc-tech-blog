import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

// create our Post model
class Post extends Model {}

// set up fields and rules for Post model
Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
    },
    {
        sequelize,
    }
);

// export the Post model
export default Post;