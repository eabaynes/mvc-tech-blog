import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

// create our Comment model
class Comment extends Model {}

// set up fields and rules for Comment model
Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

// export the Comment model
export default Comment;