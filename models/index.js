const Comment = require("./Comment.js");
const { belongsTo, hasMany } = require("./Post.js");
const User = require("./User.js");
const Post = require("./Post.js");

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    });

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
    });

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    });

module.exports = { Comment, User, Post };