const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const { compareSync, hash } = require("bcrypt");

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return compareSync(loginPw, this.password);
    }
}

// set up fields and rules for User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len: [4],
            },
        },
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await hash(newUserData.password, 10);
                return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
);

// export the User model
module.exports = User;