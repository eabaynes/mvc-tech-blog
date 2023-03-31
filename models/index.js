const Comment = require("./Comment.js");
const User = require("./User.js");
const Post = require("./Post.js");

// create associations
User.hasMany(Post, {
    foreignKey: "user_id",
    allowNull: true,
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    allowNull: true,
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    allowNull: true,
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    allowNull: true,
});

module.exports = { Comment, User, Post };