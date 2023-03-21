const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

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
module.exports = Comment;